/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const js = "148", Sn = { LEFT: 0, MIDDLE: 1, RIGHT: 2, ROTATE: 0, DOLLY: 1, PAN: 2 }, wn = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 }, ho = 0, ir = 1, uo = 2, La = 1, fo = 2, ii = 3, en = 0, Et = 1, fi = 2, vi = 3, Qt = 0, kn = 1, sr = 2, rr = 3, ar = 4, po = 5, Bn = 100, mo = 101, go = 102, or = 103, lr = 104, _o = 200, xo = 201, vo = 202, Mo = 203, Pa = 204, Da = 205, yo = 206, bo = 207, So = 208, wo = 209, To = 210, Eo = 0, Ao = 1, Co = 2, zs = 3, Lo = 4, Po = 5, Do = 6, Ro = 7, Ys = 0, Io = 1, Fo = 2, Yt = 0, No = 1, Uo = 2, Oo = 3, zo = 4, Bo = 5, Ra = 300, Hn = 301, Wn = 302, Bs = 303, Gs = 304, Yi = 306, qi = 1e3, Dt = 1001, ks = 1002, ct = 1003, cr = 1004, ts = 1005, St = 1006, Go = 1007, ci = 1008, _n = 1009, ko = 1010, Vo = 1011, Ia = 1012, Ho = 1013, fn = 1014, pn = 1015, hi = 1016, Wo = 1017, Xo = 1018, Vn = 1020, qo = 1021, jo = 1022, Rt = 1023, Yo = 1024, Zo = 1025, mn = 1026, Xn = 1027, $o = 1028, Ko = 1029, Jo = 1030, Qo = 1031, el = 1033, ns = 33776, is = 33777, ss = 33778, rs = 33779, hr = 35840, ur = 35841, dr = 35842, fr = 35843, tl = 36196, pr = 37492, mr = 37496, gr = 37808, _r = 37809, xr = 37810, vr = 37811, Mr = 37812, yr = 37813, br = 37814, Sr = 37815, wr = 37816, Tr = 37817, Er = 37818, Ar = 37819, Cr = 37820, Lr = 37821, Pr = 36492, xn = 3e3, ze = 3001, nl = 3200, il = 3201, Zs = 0, sl = 1, It = "srgb", ui = "srgb-linear", as = 7680, rl = 519, Dr = 35044, Rr = "300 es", Vs = 1035;
class bn {
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
  }
  hasEventListener(e, t) {
    if (this._listeners === void 0)
      return !1;
    const n = this._listeners;
    return n[e] !== void 0 && n[e].indexOf(t) !== -1;
  }
  removeEventListener(e, t) {
    if (this._listeners === void 0)
      return;
    const i = this._listeners[e];
    if (i !== void 0) {
      const s = i.indexOf(t);
      s !== -1 && i.splice(s, 1);
    }
  }
  dispatchEvent(e) {
    if (this._listeners === void 0)
      return;
    const n = this._listeners[e.type];
    if (n !== void 0) {
      e.target = this;
      const i = n.slice(0);
      for (let s = 0, o = i.length; s < o; s++)
        i[s].call(this, e);
      e.target = null;
    }
  }
}
const st = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"], os = Math.PI / 180, Ir = 180 / Math.PI;
function pi() {
  const a = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (st[a & 255] + st[a >> 8 & 255] + st[a >> 16 & 255] + st[a >> 24 & 255] + "-" + st[e & 255] + st[e >> 8 & 255] + "-" + st[e >> 16 & 15 | 64] + st[e >> 24 & 255] + "-" + st[t & 63 | 128] + st[t >> 8 & 255] + "-" + st[t >> 16 & 255] + st[t >> 24 & 255] + st[n & 255] + st[n >> 8 & 255] + st[n >> 16 & 255] + st[n >> 24 & 255]).toLowerCase();
}
function ut(a, e, t) {
  return Math.max(e, Math.min(t, a));
}
function al(a, e) {
  return (a % e + e) % e;
}
function ls(a, e, t) {
  return (1 - t) * a + t * e;
}
function Fr(a) {
  return (a & a - 1) === 0 && a !== 0;
}
function Hs(a) {
  return Math.pow(2, Math.floor(Math.log(a) / Math.LN2));
}
function Mi(a, e) {
  switch (e.constructor) {
    case Float32Array:
      return a;
    case Uint16Array:
      return a / 65535;
    case Uint8Array:
      return a / 255;
    case Int16Array:
      return Math.max(a / 32767, -1);
    case Int8Array:
      return Math.max(a / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function mt(a, e) {
  switch (e.constructor) {
    case Float32Array:
      return a;
    case Uint16Array:
      return Math.round(a * 65535);
    case Uint8Array:
      return Math.round(a * 255);
    case Int16Array:
      return Math.round(a * 32767);
    case Int8Array:
      return Math.round(a * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
class ye {
  constructor(e = 0, t = 0) {
    ye.prototype.isVector2 = !0, this.x = e, this.y = t;
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    return this.x = e, this.y = t, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this;
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, i = e.elements;
    return this.x = i[0] * t + i[3] * n + i[6], this.y = i[1] * t + i[4] * n + i[7], this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  }
  roundToZero() {
    return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y;
    return t * t + n * n;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this;
  }
  rotateAround(e, t) {
    const n = Math.cos(t), i = Math.sin(t), s = this.x - e.x, o = this.y - e.y;
    return this.x = s * n - o * i + e.x, this.y = s * i + o * n + e.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class xt {
  constructor() {
    xt.prototype.isMatrix3 = !0, this.elements = [
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ];
  }
  set(e, t, n, i, s, o, r, c, l) {
    const h = this.elements;
    return h[0] = e, h[1] = i, h[2] = r, h[3] = t, h[4] = s, h[5] = c, h[6] = n, h[7] = o, h[8] = l, this;
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ), this;
  }
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this;
  }
  extractBasis(e, t, n) {
    return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
  }
  setFromMatrix4(e) {
    const t = e.elements;
    return this.set(
      t[0],
      t[4],
      t[8],
      t[1],
      t[5],
      t[9],
      t[2],
      t[6],
      t[10]
    ), this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, i = t.elements, s = this.elements, o = n[0], r = n[3], c = n[6], l = n[1], h = n[4], u = n[7], d = n[2], m = n[5], g = n[8], p = i[0], f = i[3], x = i[6], T = i[1], y = i[4], b = i[7], w = i[2], C = i[5], I = i[8];
    return s[0] = o * p + r * T + c * w, s[3] = o * f + r * y + c * C, s[6] = o * x + r * b + c * I, s[1] = l * p + h * T + u * w, s[4] = l * f + h * y + u * C, s[7] = l * x + h * b + u * I, s[2] = d * p + m * T + g * w, s[5] = d * f + m * y + g * C, s[8] = d * x + m * b + g * I, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], s = e[3], o = e[4], r = e[5], c = e[6], l = e[7], h = e[8];
    return t * o * h - t * r * l - n * s * h + n * r * c + i * s * l - i * o * c;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], s = e[3], o = e[4], r = e[5], c = e[6], l = e[7], h = e[8], u = h * o - r * l, d = r * c - h * s, m = l * s - o * c, g = t * u + n * d + i * m;
    if (g === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const p = 1 / g;
    return e[0] = u * p, e[1] = (i * l - h * n) * p, e[2] = (r * n - i * o) * p, e[3] = d * p, e[4] = (h * t - i * c) * p, e[5] = (i * s - r * t) * p, e[6] = m * p, e[7] = (n * c - l * t) * p, e[8] = (o * t - n * s) * p, this;
  }
  transpose() {
    let e;
    const t = this.elements;
    return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this;
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    const t = this.elements;
    return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this;
  }
  setUvTransform(e, t, n, i, s, o, r) {
    const c = Math.cos(s), l = Math.sin(s);
    return this.set(
      n * c,
      n * l,
      -n * (c * o + l * r) + o + e,
      -i * l,
      i * c,
      -i * (-l * o + c * r) + r + t,
      0,
      0,
      1
    ), this;
  }
  scale(e, t) {
    return this.premultiply(cs.makeScale(e, t)), this;
  }
  rotate(e) {
    return this.premultiply(cs.makeRotation(-e)), this;
  }
  translate(e, t) {
    return this.premultiply(cs.makeTranslation(e, t)), this;
  }
  makeTranslation(e, t) {
    return this.set(
      1,
      0,
      e,
      0,
      1,
      t,
      0,
      0,
      1
    ), this;
  }
  makeRotation(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      -n,
      0,
      n,
      t,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(e, t) {
    return this.set(
      e,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      1
    ), this;
  }
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let i = 0; i < 9; i++)
      if (t[i] !== n[i])
        return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 9; n++)
      this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const cs = /* @__PURE__ */ new xt();
function Fa(a) {
  for (let e = a.length - 1; e >= 0; --e)
    if (a[e] >= 65535)
      return !0;
  return !1;
}
function di(a) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", a);
}
function gn(a) {
  return a < 0.04045 ? a * 0.0773993808 : Math.pow(a * 0.9478672986 + 0.0521327014, 2.4);
}
function Hi(a) {
  return a < 31308e-7 ? a * 12.92 : 1.055 * Math.pow(a, 0.41666) - 0.055;
}
const hs = {
  [It]: { [ui]: gn },
  [ui]: { [It]: Hi }
}, ot = {
  legacyMode: !0,
  get workingColorSpace() {
    return ui;
  },
  set workingColorSpace(a) {
    console.warn("THREE.ColorManagement: .workingColorSpace is readonly.");
  },
  convert: function(a, e, t) {
    if (this.legacyMode || e === t || !e || !t)
      return a;
    if (hs[e] && hs[e][t] !== void 0) {
      const n = hs[e][t];
      return a.r = n(a.r), a.g = n(a.g), a.b = n(a.b), a;
    }
    throw new Error("Unsupported color space conversion.");
  },
  fromWorkingColorSpace: function(a, e) {
    return this.convert(a, this.workingColorSpace, e);
  },
  toWorkingColorSpace: function(a, e) {
    return this.convert(a, e, this.workingColorSpace);
  }
}, Na = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
}, je = { r: 0, g: 0, b: 0 }, Ct = { h: 0, s: 0, l: 0 }, yi = { h: 0, s: 0, l: 0 };
function us(a, e, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? a + (e - a) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? a + (e - a) * 6 * (2 / 3 - t) : a;
}
function bi(a, e) {
  return e.r = a.r, e.g = a.g, e.b = a.b, e;
}
class Ee {
  constructor(e, t, n) {
    return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, t === void 0 && n === void 0 ? this.set(e) : this.setRGB(e, t, n);
  }
  set(e) {
    return e && e.isColor ? this.copy(e) : typeof e == "number" ? this.setHex(e) : typeof e == "string" && this.setStyle(e), this;
  }
  setScalar(e) {
    return this.r = e, this.g = e, this.b = e, this;
  }
  setHex(e, t = It) {
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, ot.toWorkingColorSpace(this, t), this;
  }
  setRGB(e, t, n, i = ot.workingColorSpace) {
    return this.r = e, this.g = t, this.b = n, ot.toWorkingColorSpace(this, i), this;
  }
  setHSL(e, t, n, i = ot.workingColorSpace) {
    if (e = al(e, 1), t = ut(t, 0, 1), n = ut(n, 0, 1), t === 0)
      this.r = this.g = this.b = n;
    else {
      const s = n <= 0.5 ? n * (1 + t) : n + t - n * t, o = 2 * n - s;
      this.r = us(o, s, e + 1 / 3), this.g = us(o, s, e), this.b = us(o, s, e - 1 / 3);
    }
    return ot.toWorkingColorSpace(this, i), this;
  }
  setStyle(e, t = It) {
    function n(s) {
      s !== void 0 && parseFloat(s) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.");
    }
    let i;
    if (i = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)) {
      let s;
      const o = i[1], r = i[2];
      switch (o) {
        case "rgb":
        case "rgba":
          if (s = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))
            return this.r = Math.min(255, parseInt(s[1], 10)) / 255, this.g = Math.min(255, parseInt(s[2], 10)) / 255, this.b = Math.min(255, parseInt(s[3], 10)) / 255, ot.toWorkingColorSpace(this, t), n(s[4]), this;
          if (s = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))
            return this.r = Math.min(100, parseInt(s[1], 10)) / 100, this.g = Math.min(100, parseInt(s[2], 10)) / 100, this.b = Math.min(100, parseInt(s[3], 10)) / 100, ot.toWorkingColorSpace(this, t), n(s[4]), this;
          break;
        case "hsl":
        case "hsla":
          if (s = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r)) {
            const c = parseFloat(s[1]) / 360, l = parseFloat(s[2]) / 100, h = parseFloat(s[3]) / 100;
            return n(s[4]), this.setHSL(c, l, h, t);
          }
          break;
      }
    } else if (i = /^\#([A-Fa-f\d]+)$/.exec(e)) {
      const s = i[1], o = s.length;
      if (o === 3)
        return this.r = parseInt(s.charAt(0) + s.charAt(0), 16) / 255, this.g = parseInt(s.charAt(1) + s.charAt(1), 16) / 255, this.b = parseInt(s.charAt(2) + s.charAt(2), 16) / 255, ot.toWorkingColorSpace(this, t), this;
      if (o === 6)
        return this.r = parseInt(s.charAt(0) + s.charAt(1), 16) / 255, this.g = parseInt(s.charAt(2) + s.charAt(3), 16) / 255, this.b = parseInt(s.charAt(4) + s.charAt(5), 16) / 255, ot.toWorkingColorSpace(this, t), this;
    }
    return e && e.length > 0 ? this.setColorName(e, t) : this;
  }
  setColorName(e, t = It) {
    const n = Na[e.toLowerCase()];
    return n !== void 0 ? this.setHex(n, t) : console.warn("THREE.Color: Unknown color " + e), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return this.r = e.r, this.g = e.g, this.b = e.b, this;
  }
  copySRGBToLinear(e) {
    return this.r = gn(e.r), this.g = gn(e.g), this.b = gn(e.b), this;
  }
  copyLinearToSRGB(e) {
    return this.r = Hi(e.r), this.g = Hi(e.g), this.b = Hi(e.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = It) {
    return ot.fromWorkingColorSpace(bi(this, je), e), ut(je.r * 255, 0, 255) << 16 ^ ut(je.g * 255, 0, 255) << 8 ^ ut(je.b * 255, 0, 255) << 0;
  }
  getHexString(e = It) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = ot.workingColorSpace) {
    ot.fromWorkingColorSpace(bi(this, je), t);
    const n = je.r, i = je.g, s = je.b, o = Math.max(n, i, s), r = Math.min(n, i, s);
    let c, l;
    const h = (r + o) / 2;
    if (r === o)
      c = 0, l = 0;
    else {
      const u = o - r;
      switch (l = h <= 0.5 ? u / (o + r) : u / (2 - o - r), o) {
        case n:
          c = (i - s) / u + (i < s ? 6 : 0);
          break;
        case i:
          c = (s - n) / u + 2;
          break;
        case s:
          c = (n - i) / u + 4;
          break;
      }
      c /= 6;
    }
    return e.h = c, e.s = l, e.l = h, e;
  }
  getRGB(e, t = ot.workingColorSpace) {
    return ot.fromWorkingColorSpace(bi(this, je), t), e.r = je.r, e.g = je.g, e.b = je.b, e;
  }
  getStyle(e = It) {
    return ot.fromWorkingColorSpace(bi(this, je), e), e !== It ? `color(${e} ${je.r} ${je.g} ${je.b})` : `rgb(${je.r * 255 | 0},${je.g * 255 | 0},${je.b * 255 | 0})`;
  }
  offsetHSL(e, t, n) {
    return this.getHSL(Ct), Ct.h += e, Ct.s += t, Ct.l += n, this.setHSL(Ct.h, Ct.s, Ct.l), this;
  }
  add(e) {
    return this.r += e.r, this.g += e.g, this.b += e.b, this;
  }
  addColors(e, t) {
    return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this;
  }
  addScalar(e) {
    return this.r += e, this.g += e, this.b += e, this;
  }
  sub(e) {
    return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this;
  }
  multiply(e) {
    return this.r *= e.r, this.g *= e.g, this.b *= e.b, this;
  }
  multiplyScalar(e) {
    return this.r *= e, this.g *= e, this.b *= e, this;
  }
  lerp(e, t) {
    return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this;
  }
  lerpColors(e, t, n) {
    return this.r = e.r + (t.r - e.r) * n, this.g = e.g + (t.g - e.g) * n, this.b = e.b + (t.b - e.b) * n, this;
  }
  lerpHSL(e, t) {
    this.getHSL(Ct), e.getHSL(yi);
    const n = ls(Ct.h, yi.h, t), i = ls(Ct.s, yi.s, t), s = ls(Ct.l, yi.l, t);
    return this.setHSL(n, i, s), this;
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e;
  }
  fromBufferAttribute(e, t) {
    return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), this;
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
Ee.NAMES = Na;
let Tn;
class Ua {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u")
      return e.src;
    let t;
    if (e instanceof HTMLCanvasElement)
      t = e;
    else {
      Tn === void 0 && (Tn = di("canvas")), Tn.width = e.width, Tn.height = e.height;
      const n = Tn.getContext("2d");
      e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), t = Tn;
    }
    return t.width > 2048 || t.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", e), t.toDataURL("image/jpeg", 0.6)) : t.toDataURL("image/png");
  }
  static sRGBToLinear(e) {
    if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
      const t = di("canvas");
      t.width = e.width, t.height = e.height;
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const i = n.getImageData(0, 0, e.width, e.height), s = i.data;
      for (let o = 0; o < s.length; o++)
        s[o] = gn(s[o] / 255) * 255;
      return n.putImageData(i, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(gn(t[n] / 255) * 255) : t[n] = gn(t[n]);
      return {
        data: t,
        width: e.width,
        height: e.height
      };
    } else
      return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
  }
}
class Oa {
  constructor(e = null) {
    this.isSource = !0, this.uuid = pi(), this.data = e, this.version = 0;
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0)
      return e.images[this.uuid];
    const n = {
      uuid: this.uuid,
      url: ""
    }, i = this.data;
    if (i !== null) {
      let s;
      if (Array.isArray(i)) {
        s = [];
        for (let o = 0, r = i.length; o < r; o++)
          i[o].isDataTexture ? s.push(ds(i[o].image)) : s.push(ds(i[o]));
      } else
        s = ds(i);
      n.url = s;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function ds(a) {
  return typeof HTMLImageElement < "u" && a instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && a instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && a instanceof ImageBitmap ? Ua.getDataURL(a) : a.data ? {
    data: Array.from(a.data),
    width: a.width,
    height: a.height,
    type: a.data.constructor.name
  } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let ol = 0;
class dt extends bn {
  constructor(e = dt.DEFAULT_IMAGE, t = dt.DEFAULT_MAPPING, n = Dt, i = Dt, s = St, o = ci, r = Rt, c = _n, l = dt.DEFAULT_ANISOTROPY, h = xn) {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: ol++ }), this.uuid = pi(), this.name = "", this.source = new Oa(e), this.mipmaps = [], this.mapping = t, this.wrapS = n, this.wrapT = i, this.magFilter = s, this.minFilter = o, this.anisotropy = l, this.format = r, this.internalFormat = null, this.type = c, this.offset = new ye(0, 0), this.repeat = new ye(1, 1), this.center = new ye(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new xt(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.encoding = h, this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.needsPMREMUpdate = !1;
  }
  get image() {
    return this.source.data;
  }
  set image(e) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.name = e.name, this.source = e.source, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.encoding = e.encoding, this.userData = JSON.parse(JSON.stringify(e.userData)), this.needsUpdate = !0, this;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0)
      return e.textures[this.uuid];
    const n = {
      metadata: {
        version: 4.5,
        type: "Texture",
        generator: "Texture.toJSON"
      },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(e).uuid,
      mapping: this.mapping,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      type: this.type,
      encoding: this.encoding,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment
    };
    return Object.keys(this.userData).length > 0 && (n.userData = this.userData), t || (e.textures[this.uuid] = n), n;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(e) {
    if (this.mapping !== Ra)
      return e;
    if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1)
      switch (this.wrapS) {
        case qi:
          e.x = e.x - Math.floor(e.x);
          break;
        case Dt:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case ks:
          Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case qi:
          e.y = e.y - Math.floor(e.y);
          break;
        case Dt:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case ks:
          Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
          break;
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    e === !0 && (this.version++, this.source.needsUpdate = !0);
  }
}
dt.DEFAULT_IMAGE = null;
dt.DEFAULT_MAPPING = Ra;
dt.DEFAULT_ANISOTROPY = 1;
class et {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    et.prototype.isVector4 = !0, this.x = e, this.y = t, this.z = n, this.w = i;
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, t, n, i) {
    return this.x = e, this.y = t, this.z = n, this.w = i, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this.w = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setW(e) {
    return this.w = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w !== void 0 ? e.w : 1, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this.w += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this;
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, i = this.z, s = this.w, o = e.elements;
    return this.x = o[0] * t + o[4] * n + o[8] * i + o[12] * s, this.y = o[1] * t + o[5] * n + o[9] * i + o[13] * s, this.z = o[2] * t + o[6] * n + o[10] * i + o[14] * s, this.w = o[3] * t + o[7] * n + o[11] * i + o[15] * s, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this;
  }
  setAxisAngleFromRotationMatrix(e) {
    let t, n, i, s;
    const c = e.elements, l = c[0], h = c[4], u = c[8], d = c[1], m = c[5], g = c[9], p = c[2], f = c[6], x = c[10];
    if (Math.abs(h - d) < 0.01 && Math.abs(u - p) < 0.01 && Math.abs(g - f) < 0.01) {
      if (Math.abs(h + d) < 0.1 && Math.abs(u + p) < 0.1 && Math.abs(g + f) < 0.1 && Math.abs(l + m + x - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const y = (l + 1) / 2, b = (m + 1) / 2, w = (x + 1) / 2, C = (h + d) / 4, I = (u + p) / 4, _ = (g + f) / 4;
      return y > b && y > w ? y < 0.01 ? (n = 0, i = 0.707106781, s = 0.707106781) : (n = Math.sqrt(y), i = C / n, s = I / n) : b > w ? b < 0.01 ? (n = 0.707106781, i = 0, s = 0.707106781) : (i = Math.sqrt(b), n = C / i, s = _ / i) : w < 0.01 ? (n = 0.707106781, i = 0.707106781, s = 0) : (s = Math.sqrt(w), n = I / s, i = _ / s), this.set(n, i, s, t), this;
    }
    let T = Math.sqrt((f - g) * (f - g) + (u - p) * (u - p) + (d - h) * (d - h));
    return Math.abs(T) < 1e-3 && (T = 1), this.x = (f - g) / T, this.y = (u - p) / T, this.z = (d - h) / T, this.w = Math.acos((l + m + x - 1) / 2), this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this.w = Math.max(e.w, Math.min(t.w, this.w)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this.w = Math.max(e, Math.min(t, this.w)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
  }
  roundToZero() {
    return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this.w = e.w + (t.w - e.w) * n, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class vn extends bn {
  constructor(e = 1, t = 1, n = {}) {
    super(), this.isWebGLRenderTarget = !0, this.width = e, this.height = t, this.depth = 1, this.scissor = new et(0, 0, e, t), this.scissorTest = !1, this.viewport = new et(0, 0, e, t);
    const i = { width: e, height: t, depth: 1 };
    this.texture = new dt(i, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.encoding), this.texture.isRenderTargetTexture = !0, this.texture.flipY = !1, this.texture.generateMipmaps = n.generateMipmaps !== void 0 ? n.generateMipmaps : !1, this.texture.internalFormat = n.internalFormat !== void 0 ? n.internalFormat : null, this.texture.minFilter = n.minFilter !== void 0 ? n.minFilter : St, this.depthBuffer = n.depthBuffer !== void 0 ? n.depthBuffer : !0, this.stencilBuffer = n.stencilBuffer !== void 0 ? n.stencilBuffer : !1, this.depthTexture = n.depthTexture !== void 0 ? n.depthTexture : null, this.samples = n.samples !== void 0 ? n.samples : 0;
  }
  setSize(e, t, n = 1) {
    (this.width !== e || this.height !== t || this.depth !== n) && (this.width = e, this.height = t, this.depth = n, this.texture.image.width = e, this.texture.image.height = t, this.texture.image.depth = n, this.dispose()), this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.width = e.width, this.height = e.height, this.depth = e.depth, this.viewport.copy(e.viewport), this.texture = e.texture.clone(), this.texture.isRenderTargetTexture = !0;
    const t = Object.assign({}, e.texture.image);
    return this.texture.source = new Oa(t), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class za extends dt {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null), this.isDataArrayTexture = !0, this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = ct, this.minFilter = ct, this.wrapR = Dt, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class ll extends dt {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null), this.isData3DTexture = !0, this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = ct, this.minFilter = ct, this.wrapR = Dt, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class Mn {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    this.isQuaternion = !0, this._x = e, this._y = t, this._z = n, this._w = i;
  }
  static slerpFlat(e, t, n, i, s, o, r) {
    let c = n[i + 0], l = n[i + 1], h = n[i + 2], u = n[i + 3];
    const d = s[o + 0], m = s[o + 1], g = s[o + 2], p = s[o + 3];
    if (r === 0) {
      e[t + 0] = c, e[t + 1] = l, e[t + 2] = h, e[t + 3] = u;
      return;
    }
    if (r === 1) {
      e[t + 0] = d, e[t + 1] = m, e[t + 2] = g, e[t + 3] = p;
      return;
    }
    if (u !== p || c !== d || l !== m || h !== g) {
      let f = 1 - r;
      const x = c * d + l * m + h * g + u * p, T = x >= 0 ? 1 : -1, y = 1 - x * x;
      if (y > Number.EPSILON) {
        const w = Math.sqrt(y), C = Math.atan2(w, x * T);
        f = Math.sin(f * C) / w, r = Math.sin(r * C) / w;
      }
      const b = r * T;
      if (c = c * f + d * b, l = l * f + m * b, h = h * f + g * b, u = u * f + p * b, f === 1 - r) {
        const w = 1 / Math.sqrt(c * c + l * l + h * h + u * u);
        c *= w, l *= w, h *= w, u *= w;
      }
    }
    e[t] = c, e[t + 1] = l, e[t + 2] = h, e[t + 3] = u;
  }
  static multiplyQuaternionsFlat(e, t, n, i, s, o) {
    const r = n[i], c = n[i + 1], l = n[i + 2], h = n[i + 3], u = s[o], d = s[o + 1], m = s[o + 2], g = s[o + 3];
    return e[t] = r * g + h * u + c * m - l * d, e[t + 1] = c * g + h * d + l * u - r * m, e[t + 2] = l * g + h * m + r * d - c * u, e[t + 3] = h * g - r * u - c * d - l * m, e;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e) {
    this._w = e, this._onChangeCallback();
  }
  set(e, t, n, i) {
    return this._x = e, this._y = t, this._z = n, this._w = i, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this;
  }
  setFromEuler(e, t) {
    const n = e._x, i = e._y, s = e._z, o = e._order, r = Math.cos, c = Math.sin, l = r(n / 2), h = r(i / 2), u = r(s / 2), d = c(n / 2), m = c(i / 2), g = c(s / 2);
    switch (o) {
      case "XYZ":
        this._x = d * h * u + l * m * g, this._y = l * m * u - d * h * g, this._z = l * h * g + d * m * u, this._w = l * h * u - d * m * g;
        break;
      case "YXZ":
        this._x = d * h * u + l * m * g, this._y = l * m * u - d * h * g, this._z = l * h * g - d * m * u, this._w = l * h * u + d * m * g;
        break;
      case "ZXY":
        this._x = d * h * u - l * m * g, this._y = l * m * u + d * h * g, this._z = l * h * g + d * m * u, this._w = l * h * u - d * m * g;
        break;
      case "ZYX":
        this._x = d * h * u - l * m * g, this._y = l * m * u + d * h * g, this._z = l * h * g - d * m * u, this._w = l * h * u + d * m * g;
        break;
      case "YZX":
        this._x = d * h * u + l * m * g, this._y = l * m * u + d * h * g, this._z = l * h * g - d * m * u, this._w = l * h * u - d * m * g;
        break;
      case "XZY":
        this._x = d * h * u - l * m * g, this._y = l * m * u - d * h * g, this._z = l * h * g + d * m * u, this._w = l * h * u + d * m * g;
        break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + o);
    }
    return t !== !1 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const n = t / 2, i = Math.sin(n);
    return this._x = e.x * i, this._y = e.y * i, this._z = e.z * i, this._w = Math.cos(n), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e) {
    const t = e.elements, n = t[0], i = t[4], s = t[8], o = t[1], r = t[5], c = t[9], l = t[2], h = t[6], u = t[10], d = n + r + u;
    if (d > 0) {
      const m = 0.5 / Math.sqrt(d + 1);
      this._w = 0.25 / m, this._x = (h - c) * m, this._y = (s - l) * m, this._z = (o - i) * m;
    } else if (n > r && n > u) {
      const m = 2 * Math.sqrt(1 + n - r - u);
      this._w = (h - c) / m, this._x = 0.25 * m, this._y = (i + o) / m, this._z = (s + l) / m;
    } else if (r > u) {
      const m = 2 * Math.sqrt(1 + r - n - u);
      this._w = (s - l) / m, this._x = (i + o) / m, this._y = 0.25 * m, this._z = (c + h) / m;
    } else {
      const m = 2 * Math.sqrt(1 + u - n - r);
      this._w = (o - i) / m, this._x = (s + l) / m, this._y = (c + h) / m, this._z = 0.25 * m;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return n < Number.EPSILON ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize();
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(ut(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const n = this.angleTo(e);
    if (n === 0)
      return this;
    const i = Math.min(1, t / n);
    return this.slerp(e, i), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  normalize() {
    let e = this.length();
    return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this._onChangeCallback(), this;
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const n = e._x, i = e._y, s = e._z, o = e._w, r = t._x, c = t._y, l = t._z, h = t._w;
    return this._x = n * h + o * r + i * l - s * c, this._y = i * h + o * c + s * r - n * l, this._z = s * h + o * l + n * c - i * r, this._w = o * h - n * r - i * c - s * l, this._onChangeCallback(), this;
  }
  slerp(e, t) {
    if (t === 0)
      return this;
    if (t === 1)
      return this.copy(e);
    const n = this._x, i = this._y, s = this._z, o = this._w;
    let r = o * e._w + n * e._x + i * e._y + s * e._z;
    if (r < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, r = -r) : this.copy(e), r >= 1)
      return this._w = o, this._x = n, this._y = i, this._z = s, this;
    const c = 1 - r * r;
    if (c <= Number.EPSILON) {
      const m = 1 - t;
      return this._w = m * o + t * this._w, this._x = m * n + t * this._x, this._y = m * i + t * this._y, this._z = m * s + t * this._z, this.normalize(), this._onChangeCallback(), this;
    }
    const l = Math.sqrt(c), h = Math.atan2(l, r), u = Math.sin((1 - t) * h) / l, d = Math.sin(t * h) / l;
    return this._w = o * u + this._w * d, this._x = n * u + this._x * d, this._y = i * u + this._y * d, this._z = s * u + this._z * d, this._onChangeCallback(), this;
  }
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n);
  }
  random() {
    const e = Math.random(), t = Math.sqrt(1 - e), n = Math.sqrt(e), i = 2 * Math.PI * Math.random(), s = 2 * Math.PI * Math.random();
    return this.set(
      t * Math.cos(i),
      n * Math.sin(s),
      n * Math.cos(s),
      t * Math.sin(i)
    );
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w;
  }
  fromArray(e, t = 0) {
    return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e;
  }
  fromBufferAttribute(e, t) {
    return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this;
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class D {
  constructor(e = 0, t = 0, n = 0) {
    D.prototype.isVector3 = !0, this.x = e, this.y = t, this.z = n;
  }
  set(e, t, n) {
    return n === void 0 && (n = this.z), this.x = e, this.y = t, this.z = n, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this;
  }
  multiplyVectors(e, t) {
    return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this;
  }
  applyEuler(e) {
    return this.applyQuaternion(Nr.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(Nr.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, i = this.z, s = e.elements;
    return this.x = s[0] * t + s[3] * n + s[6] * i, this.y = s[1] * t + s[4] * n + s[7] * i, this.z = s[2] * t + s[5] * n + s[8] * i, this;
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, i = this.z, s = e.elements, o = 1 / (s[3] * t + s[7] * n + s[11] * i + s[15]);
    return this.x = (s[0] * t + s[4] * n + s[8] * i + s[12]) * o, this.y = (s[1] * t + s[5] * n + s[9] * i + s[13]) * o, this.z = (s[2] * t + s[6] * n + s[10] * i + s[14]) * o, this;
  }
  applyQuaternion(e) {
    const t = this.x, n = this.y, i = this.z, s = e.x, o = e.y, r = e.z, c = e.w, l = c * t + o * i - r * n, h = c * n + r * t - s * i, u = c * i + s * n - o * t, d = -s * t - o * n - r * i;
    return this.x = l * c + d * -s + h * -r - u * -o, this.y = h * c + d * -o + u * -s - l * -r, this.z = u * c + d * -r + l * -o - h * -s, this;
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
  }
  transformDirection(e) {
    const t = this.x, n = this.y, i = this.z, s = e.elements;
    return this.x = s[0] * t + s[4] * n + s[8] * i, this.y = s[1] * t + s[5] * n + s[9] * i, this.z = s[2] * t + s[6] * n + s[10] * i, this.normalize();
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this.z /= e.z, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
  }
  roundToZero() {
    return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this;
  }
  cross(e) {
    return this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    const n = e.x, i = e.y, s = e.z, o = t.x, r = t.y, c = t.z;
    return this.x = i * c - s * r, this.y = s * o - n * c, this.z = n * r - i * o, this;
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0)
      return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  projectOnPlane(e) {
    return fs.copy(this).projectOnVector(e), this.sub(fs);
  }
  reflect(e) {
    return this.sub(fs.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0)
      return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(ut(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y, i = this.z - e.z;
    return t * t + n * n + i * i;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, n) {
    const i = Math.sin(t) * e;
    return this.x = i * Math.sin(n), this.y = Math.cos(t) * e, this.z = i * Math.cos(n), this;
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, n) {
    return this.x = e * Math.sin(t), this.y = n, this.z = e * Math.cos(t), this;
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this;
  }
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(), n = this.setFromMatrixColumn(e, 1).length(), i = this.setFromMatrixColumn(e, 2).length();
    return this.x = t, this.y = n, this.z = i, this;
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  setFromEuler(e) {
    return this.x = e._x, this.y = e._y, this.z = e._z, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
  randomDirection() {
    const e = (Math.random() - 0.5) * 2, t = Math.random() * Math.PI * 2, n = Math.sqrt(1 - e ** 2);
    return this.x = n * Math.cos(t), this.y = n * Math.sin(t), this.z = e, this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const fs = /* @__PURE__ */ new D(), Nr = /* @__PURE__ */ new Mn();
class mi {
  constructor(e = new D(1 / 0, 1 / 0, 1 / 0), t = new D(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = !0, this.min = e, this.max = t;
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    let t = 1 / 0, n = 1 / 0, i = 1 / 0, s = -1 / 0, o = -1 / 0, r = -1 / 0;
    for (let c = 0, l = e.length; c < l; c += 3) {
      const h = e[c], u = e[c + 1], d = e[c + 2];
      h < t && (t = h), u < n && (n = u), d < i && (i = d), h > s && (s = h), u > o && (o = u), d > r && (r = d);
    }
    return this.min.set(t, n, i), this.max.set(s, o, r), this;
  }
  setFromBufferAttribute(e) {
    let t = 1 / 0, n = 1 / 0, i = 1 / 0, s = -1 / 0, o = -1 / 0, r = -1 / 0;
    for (let c = 0, l = e.count; c < l; c++) {
      const h = e.getX(c), u = e.getY(c), d = e.getZ(c);
      h < t && (t = h), u < n && (n = u), d < i && (i = d), h > s && (s = h), u > o && (o = u), d > r && (r = d);
    }
    return this.min.set(t, n, i), this.max.set(s, o, r), this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++)
      this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = an.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
  }
  setFromObject(e, t = !1) {
    return this.makeEmpty(), this.expandByObject(e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  getCenter(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  expandByObject(e, t = !1) {
    e.updateWorldMatrix(!1, !1);
    const n = e.geometry;
    if (n !== void 0)
      if (t && n.attributes != null && n.attributes.position !== void 0) {
        const s = n.attributes.position;
        for (let o = 0, r = s.count; o < r; o++)
          an.fromBufferAttribute(s, o).applyMatrix4(e.matrixWorld), this.expandByPoint(an);
      } else
        n.boundingBox === null && n.computeBoundingBox(), ps.copy(n.boundingBox), ps.applyMatrix4(e.matrixWorld), this.union(ps);
    const i = e.children;
    for (let s = 0, o = i.length; s < o; s++)
      this.expandByObject(i[s], t);
    return this;
  }
  containsPoint(e) {
    return !(e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y || e.z < this.min.z || e.z > this.max.z);
  }
  containsBox(e) {
    return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z;
  }
  getParameter(e, t) {
    return t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y),
      (e.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  intersectsBox(e) {
    return !(e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y || e.max.z < this.min.z || e.min.z > this.max.z);
  }
  intersectsSphere(e) {
    return this.clampPoint(e.center, an), an.distanceToSquared(e.center) <= e.radius * e.radius;
  }
  intersectsPlane(e) {
    let t, n;
    return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant;
  }
  intersectsTriangle(e) {
    if (this.isEmpty())
      return !1;
    this.getCenter($n), Si.subVectors(this.max, $n), En.subVectors(e.a, $n), An.subVectors(e.b, $n), Cn.subVectors(e.c, $n), Zt.subVectors(An, En), $t.subVectors(Cn, An), on.subVectors(En, Cn);
    let t = [
      0,
      -Zt.z,
      Zt.y,
      0,
      -$t.z,
      $t.y,
      0,
      -on.z,
      on.y,
      Zt.z,
      0,
      -Zt.x,
      $t.z,
      0,
      -$t.x,
      on.z,
      0,
      -on.x,
      -Zt.y,
      Zt.x,
      0,
      -$t.y,
      $t.x,
      0,
      -on.y,
      on.x,
      0
    ];
    return !ms(t, En, An, Cn, Si) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !ms(t, En, An, Cn, Si)) ? !1 : (wi.crossVectors(Zt, $t), t = [wi.x, wi.y, wi.z], ms(t, En, An, Cn, Si));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return an.copy(e).clamp(this.min, this.max).sub(e).length();
  }
  getBoundingSphere(e) {
    return this.getCenter(e.center), e.radius = this.getSize(an).length() * 0.5, e;
  }
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty() ? this : (Bt[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), Bt[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), Bt[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), Bt[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), Bt[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), Bt[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), Bt[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), Bt[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(Bt), this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const Bt = [
  /* @__PURE__ */ new D(),
  /* @__PURE__ */ new D(),
  /* @__PURE__ */ new D(),
  /* @__PURE__ */ new D(),
  /* @__PURE__ */ new D(),
  /* @__PURE__ */ new D(),
  /* @__PURE__ */ new D(),
  /* @__PURE__ */ new D()
], an = /* @__PURE__ */ new D(), ps = /* @__PURE__ */ new mi(), En = /* @__PURE__ */ new D(), An = /* @__PURE__ */ new D(), Cn = /* @__PURE__ */ new D(), Zt = /* @__PURE__ */ new D(), $t = /* @__PURE__ */ new D(), on = /* @__PURE__ */ new D(), $n = /* @__PURE__ */ new D(), Si = /* @__PURE__ */ new D(), wi = /* @__PURE__ */ new D(), ln = /* @__PURE__ */ new D();
function ms(a, e, t, n, i) {
  for (let s = 0, o = a.length - 3; s <= o; s += 3) {
    ln.fromArray(a, s);
    const r = i.x * Math.abs(ln.x) + i.y * Math.abs(ln.y) + i.z * Math.abs(ln.z), c = e.dot(ln), l = t.dot(ln), h = n.dot(ln);
    if (Math.max(-Math.max(c, l, h), Math.min(c, l, h)) > r)
      return !1;
  }
  return !0;
}
const cl = /* @__PURE__ */ new mi(), Kn = /* @__PURE__ */ new D(), gs = /* @__PURE__ */ new D();
class gi {
  constructor(e = new D(), t = -1) {
    this.center = e, this.radius = t;
  }
  set(e, t) {
    return this.center.copy(e), this.radius = t, this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : cl.setFromPoints(e).getCenter(n);
    let i = 0;
    for (let s = 0, o = e.length; s < o; s++)
      i = Math.max(i, n.distanceToSquared(e[s]));
    return this.radius = Math.sqrt(i), this;
  }
  copy(e) {
    return this.center.copy(e.center), this.radius = e.radius, this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), this.radius = -1, this;
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    const n = this.center.distanceToSquared(e);
    return t.copy(e), n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t;
  }
  getBoundingBox(e) {
    return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  applyMatrix4(e) {
    return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this;
  }
  translate(e) {
    return this.center.add(e), this;
  }
  expandByPoint(e) {
    if (this.isEmpty())
      return this.center.copy(e), this.radius = 0, this;
    Kn.subVectors(e, this.center);
    const t = Kn.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t), i = (n - this.radius) * 0.5;
      this.center.addScaledVector(Kn, i / n), this.radius += i;
    }
    return this;
  }
  union(e) {
    return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (gs.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(Kn.copy(e.center).add(gs)), this.expandByPoint(Kn.copy(e.center).sub(gs))), this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Gt = /* @__PURE__ */ new D(), _s = /* @__PURE__ */ new D(), Ti = /* @__PURE__ */ new D(), Kt = /* @__PURE__ */ new D(), xs = /* @__PURE__ */ new D(), Ei = /* @__PURE__ */ new D(), vs = /* @__PURE__ */ new D();
class $s {
  constructor(e = new D(), t = new D(0, 0, -1)) {
    this.origin = e, this.direction = t;
  }
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  at(e, t) {
    return t.copy(this.direction).multiplyScalar(e).add(this.origin);
  }
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  recast(e) {
    return this.origin.copy(this.at(e, Gt)), this;
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const n = t.dot(this.direction);
    return n < 0 ? t.copy(this.origin) : t.copy(this.direction).multiplyScalar(n).add(this.origin);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const t = Gt.subVectors(e, this.origin).dot(this.direction);
    return t < 0 ? this.origin.distanceToSquared(e) : (Gt.copy(this.direction).multiplyScalar(t).add(this.origin), Gt.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, i) {
    _s.copy(e).add(t).multiplyScalar(0.5), Ti.copy(t).sub(e).normalize(), Kt.copy(this.origin).sub(_s);
    const s = e.distanceTo(t) * 0.5, o = -this.direction.dot(Ti), r = Kt.dot(this.direction), c = -Kt.dot(Ti), l = Kt.lengthSq(), h = Math.abs(1 - o * o);
    let u, d, m, g;
    if (h > 0)
      if (u = o * c - r, d = o * r - c, g = s * h, u >= 0)
        if (d >= -g)
          if (d <= g) {
            const p = 1 / h;
            u *= p, d *= p, m = u * (u + o * d + 2 * r) + d * (o * u + d + 2 * c) + l;
          } else
            d = s, u = Math.max(0, -(o * d + r)), m = -u * u + d * (d + 2 * c) + l;
        else
          d = -s, u = Math.max(0, -(o * d + r)), m = -u * u + d * (d + 2 * c) + l;
      else
        d <= -g ? (u = Math.max(0, -(-o * s + r)), d = u > 0 ? -s : Math.min(Math.max(-s, -c), s), m = -u * u + d * (d + 2 * c) + l) : d <= g ? (u = 0, d = Math.min(Math.max(-s, -c), s), m = d * (d + 2 * c) + l) : (u = Math.max(0, -(o * s + r)), d = u > 0 ? s : Math.min(Math.max(-s, -c), s), m = -u * u + d * (d + 2 * c) + l);
    else
      d = o > 0 ? -s : s, u = Math.max(0, -(o * d + r)), m = -u * u + d * (d + 2 * c) + l;
    return n && n.copy(this.direction).multiplyScalar(u).add(this.origin), i && i.copy(Ti).multiplyScalar(d).add(_s), m;
  }
  intersectSphere(e, t) {
    Gt.subVectors(e.center, this.origin);
    const n = Gt.dot(this.direction), i = Gt.dot(Gt) - n * n, s = e.radius * e.radius;
    if (i > s)
      return null;
    const o = Math.sqrt(s - i), r = n - o, c = n + o;
    return r < 0 && c < 0 ? null : r < 0 ? this.at(c, t) : this.at(r, t);
  }
  intersectsSphere(e) {
    return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0)
      return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(e.normal) + e.constant) / t;
    return n >= 0 ? n : null;
  }
  intersectPlane(e, t) {
    const n = this.distanceToPlane(e);
    return n === null ? null : this.at(n, t);
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let n, i, s, o, r, c;
    const l = 1 / this.direction.x, h = 1 / this.direction.y, u = 1 / this.direction.z, d = this.origin;
    return l >= 0 ? (n = (e.min.x - d.x) * l, i = (e.max.x - d.x) * l) : (n = (e.max.x - d.x) * l, i = (e.min.x - d.x) * l), h >= 0 ? (s = (e.min.y - d.y) * h, o = (e.max.y - d.y) * h) : (s = (e.max.y - d.y) * h, o = (e.min.y - d.y) * h), n > o || s > i || ((s > n || isNaN(n)) && (n = s), (o < i || isNaN(i)) && (i = o), u >= 0 ? (r = (e.min.z - d.z) * u, c = (e.max.z - d.z) * u) : (r = (e.max.z - d.z) * u, c = (e.min.z - d.z) * u), n > c || r > i) || ((r > n || n !== n) && (n = r), (c < i || i !== i) && (i = c), i < 0) ? null : this.at(n >= 0 ? n : i, t);
  }
  intersectsBox(e) {
    return this.intersectBox(e, Gt) !== null;
  }
  intersectTriangle(e, t, n, i, s) {
    xs.subVectors(t, e), Ei.subVectors(n, e), vs.crossVectors(xs, Ei);
    let o = this.direction.dot(vs), r;
    if (o > 0) {
      if (i)
        return null;
      r = 1;
    } else if (o < 0)
      r = -1, o = -o;
    else
      return null;
    Kt.subVectors(this.origin, e);
    const c = r * this.direction.dot(Ei.crossVectors(Kt, Ei));
    if (c < 0)
      return null;
    const l = r * this.direction.dot(xs.cross(Kt));
    if (l < 0 || c + l > o)
      return null;
    const h = -r * Kt.dot(vs);
    return h < 0 ? null : this.at(h / o, s);
  }
  applyMatrix4(e) {
    return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this;
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class ke {
  constructor() {
    ke.prototype.isMatrix4 = !0, this.elements = [
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ];
  }
  set(e, t, n, i, s, o, r, c, l, h, u, d, m, g, p, f) {
    const x = this.elements;
    return x[0] = e, x[4] = t, x[8] = n, x[12] = i, x[1] = s, x[5] = o, x[9] = r, x[13] = c, x[2] = l, x[6] = h, x[10] = u, x[14] = d, x[3] = m, x[7] = g, x[11] = p, x[15] = f, this;
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  clone() {
    return new ke().fromArray(this.elements);
  }
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this;
  }
  copyPosition(e) {
    const t = this.elements, n = e.elements;
    return t[12] = n[12], t[13] = n[13], t[14] = n[14], this;
  }
  setFromMatrix3(e) {
    const t = e.elements;
    return this.set(
      t[0],
      t[3],
      t[6],
      0,
      t[1],
      t[4],
      t[7],
      0,
      t[2],
      t[5],
      t[8],
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractBasis(e, t, n) {
    return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this;
  }
  makeBasis(e, t, n) {
    return this.set(
      e.x,
      t.x,
      n.x,
      0,
      e.y,
      t.y,
      n.y,
      0,
      e.z,
      t.z,
      n.z,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractRotation(e) {
    const t = this.elements, n = e.elements, i = 1 / Ln.setFromMatrixColumn(e, 0).length(), s = 1 / Ln.setFromMatrixColumn(e, 1).length(), o = 1 / Ln.setFromMatrixColumn(e, 2).length();
    return t[0] = n[0] * i, t[1] = n[1] * i, t[2] = n[2] * i, t[3] = 0, t[4] = n[4] * s, t[5] = n[5] * s, t[6] = n[6] * s, t[7] = 0, t[8] = n[8] * o, t[9] = n[9] * o, t[10] = n[10] * o, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromEuler(e) {
    const t = this.elements, n = e.x, i = e.y, s = e.z, o = Math.cos(n), r = Math.sin(n), c = Math.cos(i), l = Math.sin(i), h = Math.cos(s), u = Math.sin(s);
    if (e.order === "XYZ") {
      const d = o * h, m = o * u, g = r * h, p = r * u;
      t[0] = c * h, t[4] = -c * u, t[8] = l, t[1] = m + g * l, t[5] = d - p * l, t[9] = -r * c, t[2] = p - d * l, t[6] = g + m * l, t[10] = o * c;
    } else if (e.order === "YXZ") {
      const d = c * h, m = c * u, g = l * h, p = l * u;
      t[0] = d + p * r, t[4] = g * r - m, t[8] = o * l, t[1] = o * u, t[5] = o * h, t[9] = -r, t[2] = m * r - g, t[6] = p + d * r, t[10] = o * c;
    } else if (e.order === "ZXY") {
      const d = c * h, m = c * u, g = l * h, p = l * u;
      t[0] = d - p * r, t[4] = -o * u, t[8] = g + m * r, t[1] = m + g * r, t[5] = o * h, t[9] = p - d * r, t[2] = -o * l, t[6] = r, t[10] = o * c;
    } else if (e.order === "ZYX") {
      const d = o * h, m = o * u, g = r * h, p = r * u;
      t[0] = c * h, t[4] = g * l - m, t[8] = d * l + p, t[1] = c * u, t[5] = p * l + d, t[9] = m * l - g, t[2] = -l, t[6] = r * c, t[10] = o * c;
    } else if (e.order === "YZX") {
      const d = o * c, m = o * l, g = r * c, p = r * l;
      t[0] = c * h, t[4] = p - d * u, t[8] = g * u + m, t[1] = u, t[5] = o * h, t[9] = -r * h, t[2] = -l * h, t[6] = m * u + g, t[10] = d - p * u;
    } else if (e.order === "XZY") {
      const d = o * c, m = o * l, g = r * c, p = r * l;
      t[0] = c * h, t[4] = -u, t[8] = l * h, t[1] = d * u + p, t[5] = o * h, t[9] = m * u - g, t[2] = g * u - m, t[6] = r * h, t[10] = p * u + d;
    }
    return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromQuaternion(e) {
    return this.compose(hl, e, ul);
  }
  lookAt(e, t, n) {
    const i = this.elements;
    return gt.subVectors(e, t), gt.lengthSq() === 0 && (gt.z = 1), gt.normalize(), Jt.crossVectors(n, gt), Jt.lengthSq() === 0 && (Math.abs(n.z) === 1 ? gt.x += 1e-4 : gt.z += 1e-4, gt.normalize(), Jt.crossVectors(n, gt)), Jt.normalize(), Ai.crossVectors(gt, Jt), i[0] = Jt.x, i[4] = Ai.x, i[8] = gt.x, i[1] = Jt.y, i[5] = Ai.y, i[9] = gt.y, i[2] = Jt.z, i[6] = Ai.z, i[10] = gt.z, this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, i = t.elements, s = this.elements, o = n[0], r = n[4], c = n[8], l = n[12], h = n[1], u = n[5], d = n[9], m = n[13], g = n[2], p = n[6], f = n[10], x = n[14], T = n[3], y = n[7], b = n[11], w = n[15], C = i[0], I = i[4], _ = i[8], A = i[12], F = i[1], j = i[5], J = i[9], O = i[13], N = i[2], X = i[6], Z = i[10], Q = i[14], q = i[3], ee = i[7], Y = i[11], V = i[15];
    return s[0] = o * C + r * F + c * N + l * q, s[4] = o * I + r * j + c * X + l * ee, s[8] = o * _ + r * J + c * Z + l * Y, s[12] = o * A + r * O + c * Q + l * V, s[1] = h * C + u * F + d * N + m * q, s[5] = h * I + u * j + d * X + m * ee, s[9] = h * _ + u * J + d * Z + m * Y, s[13] = h * A + u * O + d * Q + m * V, s[2] = g * C + p * F + f * N + x * q, s[6] = g * I + p * j + f * X + x * ee, s[10] = g * _ + p * J + f * Z + x * Y, s[14] = g * A + p * O + f * Q + x * V, s[3] = T * C + y * F + b * N + w * q, s[7] = T * I + y * j + b * X + w * ee, s[11] = T * _ + y * J + b * Z + w * Y, s[15] = T * A + y * O + b * Q + w * V, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[4], i = e[8], s = e[12], o = e[1], r = e[5], c = e[9], l = e[13], h = e[2], u = e[6], d = e[10], m = e[14], g = e[3], p = e[7], f = e[11], x = e[15];
    return g * (+s * c * u - i * l * u - s * r * d + n * l * d + i * r * m - n * c * m) + p * (+t * c * m - t * l * d + s * o * d - i * o * m + i * l * h - s * c * h) + f * (+t * l * u - t * r * m - s * o * u + n * o * m + s * r * h - n * l * h) + x * (-i * r * h - t * c * u + t * r * d + i * o * u - n * o * d + n * c * h);
  }
  transpose() {
    const e = this.elements;
    let t;
    return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this;
  }
  setPosition(e, t, n) {
    const i = this.elements;
    return e.isVector3 ? (i[12] = e.x, i[13] = e.y, i[14] = e.z) : (i[12] = e, i[13] = t, i[14] = n), this;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], s = e[3], o = e[4], r = e[5], c = e[6], l = e[7], h = e[8], u = e[9], d = e[10], m = e[11], g = e[12], p = e[13], f = e[14], x = e[15], T = u * f * l - p * d * l + p * c * m - r * f * m - u * c * x + r * d * x, y = g * d * l - h * f * l - g * c * m + o * f * m + h * c * x - o * d * x, b = h * p * l - g * u * l + g * r * m - o * p * m - h * r * x + o * u * x, w = g * u * c - h * p * c - g * r * d + o * p * d + h * r * f - o * u * f, C = t * T + n * y + i * b + s * w;
    if (C === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const I = 1 / C;
    return e[0] = T * I, e[1] = (p * d * s - u * f * s - p * i * m + n * f * m + u * i * x - n * d * x) * I, e[2] = (r * f * s - p * c * s + p * i * l - n * f * l - r * i * x + n * c * x) * I, e[3] = (u * c * s - r * d * s - u * i * l + n * d * l + r * i * m - n * c * m) * I, e[4] = y * I, e[5] = (h * f * s - g * d * s + g * i * m - t * f * m - h * i * x + t * d * x) * I, e[6] = (g * c * s - o * f * s - g * i * l + t * f * l + o * i * x - t * c * x) * I, e[7] = (o * d * s - h * c * s + h * i * l - t * d * l - o * i * m + t * c * m) * I, e[8] = b * I, e[9] = (g * u * s - h * p * s - g * n * m + t * p * m + h * n * x - t * u * x) * I, e[10] = (o * p * s - g * r * s + g * n * l - t * p * l - o * n * x + t * r * x) * I, e[11] = (h * r * s - o * u * s - h * n * l + t * u * l + o * n * m - t * r * m) * I, e[12] = w * I, e[13] = (h * p * i - g * u * i + g * n * d - t * p * d - h * n * f + t * u * f) * I, e[14] = (g * r * i - o * p * i - g * n * c + t * p * c + o * n * f - t * r * f) * I, e[15] = (o * u * i - h * r * i + h * n * c - t * u * c - o * n * d + t * r * d) * I, this;
  }
  scale(e) {
    const t = this.elements, n = e.x, i = e.y, s = e.z;
    return t[0] *= n, t[4] *= i, t[8] *= s, t[1] *= n, t[5] *= i, t[9] *= s, t[2] *= n, t[6] *= i, t[10] *= s, t[3] *= n, t[7] *= i, t[11] *= s, this;
  }
  getMaxScaleOnAxis() {
    const e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], i = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, i));
  }
  makeTranslation(e, t, n) {
    return this.set(
      1,
      0,
      0,
      e,
      0,
      1,
      0,
      t,
      0,
      0,
      1,
      n,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationX(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      1,
      0,
      0,
      0,
      0,
      t,
      -n,
      0,
      0,
      n,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationY(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      0,
      n,
      0,
      0,
      1,
      0,
      0,
      -n,
      0,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationZ(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      -n,
      0,
      0,
      n,
      t,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationAxis(e, t) {
    const n = Math.cos(t), i = Math.sin(t), s = 1 - n, o = e.x, r = e.y, c = e.z, l = s * o, h = s * r;
    return this.set(
      l * o + n,
      l * r - i * c,
      l * c + i * r,
      0,
      l * r + i * c,
      h * r + n,
      h * c - i * o,
      0,
      l * c - i * r,
      h * c + i * o,
      s * c * c + n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(e, t, n) {
    return this.set(
      e,
      0,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      0,
      n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeShear(e, t, n, i, s, o) {
    return this.set(
      1,
      n,
      s,
      0,
      e,
      1,
      o,
      0,
      t,
      i,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  compose(e, t, n) {
    const i = this.elements, s = t._x, o = t._y, r = t._z, c = t._w, l = s + s, h = o + o, u = r + r, d = s * l, m = s * h, g = s * u, p = o * h, f = o * u, x = r * u, T = c * l, y = c * h, b = c * u, w = n.x, C = n.y, I = n.z;
    return i[0] = (1 - (p + x)) * w, i[1] = (m + b) * w, i[2] = (g - y) * w, i[3] = 0, i[4] = (m - b) * C, i[5] = (1 - (d + x)) * C, i[6] = (f + T) * C, i[7] = 0, i[8] = (g + y) * I, i[9] = (f - T) * I, i[10] = (1 - (d + p)) * I, i[11] = 0, i[12] = e.x, i[13] = e.y, i[14] = e.z, i[15] = 1, this;
  }
  decompose(e, t, n) {
    const i = this.elements;
    let s = Ln.set(i[0], i[1], i[2]).length();
    const o = Ln.set(i[4], i[5], i[6]).length(), r = Ln.set(i[8], i[9], i[10]).length();
    this.determinant() < 0 && (s = -s), e.x = i[12], e.y = i[13], e.z = i[14], Lt.copy(this);
    const l = 1 / s, h = 1 / o, u = 1 / r;
    return Lt.elements[0] *= l, Lt.elements[1] *= l, Lt.elements[2] *= l, Lt.elements[4] *= h, Lt.elements[5] *= h, Lt.elements[6] *= h, Lt.elements[8] *= u, Lt.elements[9] *= u, Lt.elements[10] *= u, t.setFromRotationMatrix(Lt), n.x = s, n.y = o, n.z = r, this;
  }
  makePerspective(e, t, n, i, s, o) {
    const r = this.elements, c = 2 * s / (t - e), l = 2 * s / (n - i), h = (t + e) / (t - e), u = (n + i) / (n - i), d = -(o + s) / (o - s), m = -2 * o * s / (o - s);
    return r[0] = c, r[4] = 0, r[8] = h, r[12] = 0, r[1] = 0, r[5] = l, r[9] = u, r[13] = 0, r[2] = 0, r[6] = 0, r[10] = d, r[14] = m, r[3] = 0, r[7] = 0, r[11] = -1, r[15] = 0, this;
  }
  makeOrthographic(e, t, n, i, s, o) {
    const r = this.elements, c = 1 / (t - e), l = 1 / (n - i), h = 1 / (o - s), u = (t + e) * c, d = (n + i) * l, m = (o + s) * h;
    return r[0] = 2 * c, r[4] = 0, r[8] = 0, r[12] = -u, r[1] = 0, r[5] = 2 * l, r[9] = 0, r[13] = -d, r[2] = 0, r[6] = 0, r[10] = -2 * h, r[14] = -m, r[3] = 0, r[7] = 0, r[11] = 0, r[15] = 1, this;
  }
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let i = 0; i < 16; i++)
      if (t[i] !== n[i])
        return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 16; n++)
      this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e;
  }
}
const Ln = /* @__PURE__ */ new D(), Lt = /* @__PURE__ */ new ke(), hl = /* @__PURE__ */ new D(0, 0, 0), ul = /* @__PURE__ */ new D(1, 1, 1), Jt = /* @__PURE__ */ new D(), Ai = /* @__PURE__ */ new D(), gt = /* @__PURE__ */ new D(), Ur = /* @__PURE__ */ new ke(), Or = /* @__PURE__ */ new Mn();
class _i {
  constructor(e = 0, t = 0, n = 0, i = _i.DefaultOrder) {
    this.isEuler = !0, this._x = e, this._y = t, this._z = n, this._order = i;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(e) {
    this._order = e, this._onChangeCallback();
  }
  set(e, t, n, i = this._order) {
    return this._x = e, this._y = t, this._z = n, this._order = i, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e, t = this._order, n = !0) {
    const i = e.elements, s = i[0], o = i[4], r = i[8], c = i[1], l = i[5], h = i[9], u = i[2], d = i[6], m = i[10];
    switch (t) {
      case "XYZ":
        this._y = Math.asin(ut(r, -1, 1)), Math.abs(r) < 0.9999999 ? (this._x = Math.atan2(-h, m), this._z = Math.atan2(-o, s)) : (this._x = Math.atan2(d, l), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-ut(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._y = Math.atan2(r, m), this._z = Math.atan2(c, l)) : (this._y = Math.atan2(-u, s), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(ut(d, -1, 1)), Math.abs(d) < 0.9999999 ? (this._y = Math.atan2(-u, m), this._z = Math.atan2(-o, l)) : (this._y = 0, this._z = Math.atan2(c, s));
        break;
      case "ZYX":
        this._y = Math.asin(-ut(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._x = Math.atan2(d, m), this._z = Math.atan2(c, s)) : (this._x = 0, this._z = Math.atan2(-o, l));
        break;
      case "YZX":
        this._z = Math.asin(ut(c, -1, 1)), Math.abs(c) < 0.9999999 ? (this._x = Math.atan2(-h, l), this._y = Math.atan2(-u, s)) : (this._x = 0, this._y = Math.atan2(r, m));
        break;
      case "XZY":
        this._z = Math.asin(-ut(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(d, l), this._y = Math.atan2(r, s)) : (this._x = Math.atan2(-h, m), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
    }
    return this._order = t, n === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, n) {
    return Ur.makeRotationFromQuaternion(e), this.setFromRotationMatrix(Ur, t, n);
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return Or.setFromEuler(this), this.setFromQuaternion(Or, e);
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order;
  }
  fromArray(e) {
    return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e;
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
  toVector3() {
    console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead");
  }
}
_i.DefaultOrder = "XYZ";
_i.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"];
class Ba {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = (1 << e | 0) >>> 0;
  }
  enable(e) {
    this.mask |= 1 << e | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= 1 << e | 0;
  }
  disable(e) {
    this.mask &= ~(1 << e | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  isEnabled(e) {
    return (this.mask & (1 << e | 0)) !== 0;
  }
}
let dl = 0;
const zr = /* @__PURE__ */ new D(), Pn = /* @__PURE__ */ new Mn(), kt = /* @__PURE__ */ new ke(), Ci = /* @__PURE__ */ new D(), Jn = /* @__PURE__ */ new D(), fl = /* @__PURE__ */ new D(), pl = /* @__PURE__ */ new Mn(), Br = /* @__PURE__ */ new D(1, 0, 0), Gr = /* @__PURE__ */ new D(0, 1, 0), kr = /* @__PURE__ */ new D(0, 0, 1), ml = { type: "added" }, Vr = { type: "removed" };
class tt extends bn {
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: dl++ }), this.uuid = pi(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = tt.DefaultUp.clone();
    const e = new D(), t = new _i(), n = new Mn(), i = new D(1, 1, 1);
    function s() {
      n.setFromEuler(t, !1);
    }
    function o() {
      t.setFromQuaternion(n, void 0, !1);
    }
    t._onChange(s), n._onChange(o), Object.defineProperties(this, {
      position: {
        configurable: !0,
        enumerable: !0,
        value: e
      },
      rotation: {
        configurable: !0,
        enumerable: !0,
        value: t
      },
      quaternion: {
        configurable: !0,
        enumerable: !0,
        value: n
      },
      scale: {
        configurable: !0,
        enumerable: !0,
        value: i
      },
      modelViewMatrix: {
        value: new ke()
      },
      normalMatrix: {
        value: new xt()
      }
    }), this.matrix = new ke(), this.matrixWorld = new ke(), this.matrixAutoUpdate = tt.DefaultMatrixAutoUpdate, this.matrixWorldNeedsUpdate = !1, this.matrixWorldAutoUpdate = tt.DefaultMatrixWorldAutoUpdate, this.layers = new Ba(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {};
  }
  onBeforeRender() {
  }
  onAfterRender() {
  }
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, !0);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, t) {
    return Pn.setFromAxisAngle(e, t), this.quaternion.multiply(Pn), this;
  }
  rotateOnWorldAxis(e, t) {
    return Pn.setFromAxisAngle(e, t), this.quaternion.premultiply(Pn), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(Br, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(Gr, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(kr, e);
  }
  translateOnAxis(e, t) {
    return zr.copy(e).applyQuaternion(this.quaternion), this.position.add(zr.multiplyScalar(t)), this;
  }
  translateX(e) {
    return this.translateOnAxis(Br, e);
  }
  translateY(e) {
    return this.translateOnAxis(Gr, e);
  }
  translateZ(e) {
    return this.translateOnAxis(kr, e);
  }
  localToWorld(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(kt.copy(this.matrixWorld).invert());
  }
  lookAt(e, t, n) {
    e.isVector3 ? Ci.copy(e) : Ci.set(e, t, n);
    const i = this.parent;
    this.updateWorldMatrix(!0, !1), Jn.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? kt.lookAt(Jn, Ci, this.up) : kt.lookAt(Ci, Jn, this.up), this.quaternion.setFromRotationMatrix(kt), i && (kt.extractRotation(i.matrixWorld), Pn.setFromRotationMatrix(kt), this.quaternion.premultiply(Pn.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++)
        this.add(arguments[t]);
      return this;
    }
    return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.parent !== null && e.parent.remove(e), e.parent = this, this.children.push(e), e.dispatchEvent(ml)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++)
        this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(Vr)), this;
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    for (let e = 0; e < this.children.length; e++) {
      const t = this.children[e];
      t.parent = null, t.dispatchEvent(Vr);
    }
    return this.children.length = 0, this;
  }
  attach(e) {
    return this.updateWorldMatrix(!0, !1), kt.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), kt.multiply(e.parent.matrixWorld)), e.applyMatrix4(kt), this.add(e), e.updateWorldMatrix(!1, !0), this;
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t)
      return this;
    for (let n = 0, i = this.children.length; n < i; n++) {
      const o = this.children[n].getObjectByProperty(e, t);
      if (o !== void 0)
        return o;
    }
  }
  getObjectsByProperty(e, t) {
    let n = [];
    this[e] === t && n.push(this);
    for (let i = 0, s = this.children.length; i < s; i++) {
      const o = this.children[i].getObjectsByProperty(e, t);
      o.length > 0 && (n = n.concat(o));
    }
    return n;
  }
  getWorldPosition(e) {
    return this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Jn, e, fl), e;
  }
  getWorldScale(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Jn, pl, e), e;
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {
  }
  traverse(e) {
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++)
      t[n].traverse(e);
  }
  traverseVisible(e) {
    if (this.visible === !1)
      return;
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++)
      t[n].traverseVisible(e);
  }
  traverseAncestors(e) {
    const t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0;
  }
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, e = !0);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++) {
      const s = t[n];
      (s.matrixWorldAutoUpdate === !0 || e === !0) && s.updateMatrixWorld(e);
    }
  }
  updateWorldMatrix(e, t) {
    const n = this.parent;
    if (e === !0 && n !== null && n.matrixWorldAutoUpdate === !0 && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), t === !0) {
      const i = this.children;
      for (let s = 0, o = i.length; s < o; s++) {
        const r = i[s];
        r.matrixWorldAutoUpdate === !0 && r.updateWorldMatrix(!1, !0);
      }
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string", n = {};
    t && (e = {
      geometries: {},
      materials: {},
      textures: {},
      images: {},
      shapes: {},
      skeletons: {},
      animations: {},
      nodes: {}
    }, n.metadata = {
      version: 4.5,
      type: "Object",
      generator: "Object3D.toJSON"
    });
    const i = {};
    i.uuid = this.uuid, i.type = this.type, this.name !== "" && (i.name = this.name), this.castShadow === !0 && (i.castShadow = !0), this.receiveShadow === !0 && (i.receiveShadow = !0), this.visible === !1 && (i.visible = !1), this.frustumCulled === !1 && (i.frustumCulled = !1), this.renderOrder !== 0 && (i.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (i.userData = this.userData), i.layers = this.layers.mask, i.matrix = this.matrix.toArray(), this.matrixAutoUpdate === !1 && (i.matrixAutoUpdate = !1), this.isInstancedMesh && (i.type = "InstancedMesh", i.count = this.count, i.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (i.instanceColor = this.instanceColor.toJSON()));
    function s(r, c) {
      return r[c.uuid] === void 0 && (r[c.uuid] = c.toJSON(e)), c.uuid;
    }
    if (this.isScene)
      this.background && (this.background.isColor ? i.background = this.background.toJSON() : this.background.isTexture && (i.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (i.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      i.geometry = s(e.geometries, this.geometry);
      const r = this.geometry.parameters;
      if (r !== void 0 && r.shapes !== void 0) {
        const c = r.shapes;
        if (Array.isArray(c))
          for (let l = 0, h = c.length; l < h; l++) {
            const u = c[l];
            s(e.shapes, u);
          }
        else
          s(e.shapes, c);
      }
    }
    if (this.isSkinnedMesh && (i.bindMode = this.bindMode, i.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (s(e.skeletons, this.skeleton), i.skeleton = this.skeleton.uuid)), this.material !== void 0)
      if (Array.isArray(this.material)) {
        const r = [];
        for (let c = 0, l = this.material.length; c < l; c++)
          r.push(s(e.materials, this.material[c]));
        i.material = r;
      } else
        i.material = s(e.materials, this.material);
    if (this.children.length > 0) {
      i.children = [];
      for (let r = 0; r < this.children.length; r++)
        i.children.push(this.children[r].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      i.animations = [];
      for (let r = 0; r < this.animations.length; r++) {
        const c = this.animations[r];
        i.animations.push(s(e.animations, c));
      }
    }
    if (t) {
      const r = o(e.geometries), c = o(e.materials), l = o(e.textures), h = o(e.images), u = o(e.shapes), d = o(e.skeletons), m = o(e.animations), g = o(e.nodes);
      r.length > 0 && (n.geometries = r), c.length > 0 && (n.materials = c), l.length > 0 && (n.textures = l), h.length > 0 && (n.images = h), u.length > 0 && (n.shapes = u), d.length > 0 && (n.skeletons = d), m.length > 0 && (n.animations = m), g.length > 0 && (n.nodes = g);
    }
    return n.object = i, n;
    function o(r) {
      const c = [];
      for (const l in r) {
        const h = r[l];
        delete h.metadata, c.push(h);
      }
      return c;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = !0) {
    if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.userData = JSON.parse(JSON.stringify(e.userData)), t === !0)
      for (let n = 0; n < e.children.length; n++) {
        const i = e.children[n];
        this.add(i.clone());
      }
    return this;
  }
}
tt.DefaultUp = /* @__PURE__ */ new D(0, 1, 0);
tt.DefaultMatrixAutoUpdate = !0;
tt.DefaultMatrixWorldAutoUpdate = !0;
const Pt = /* @__PURE__ */ new D(), Vt = /* @__PURE__ */ new D(), Ms = /* @__PURE__ */ new D(), Ht = /* @__PURE__ */ new D(), Dn = /* @__PURE__ */ new D(), Rn = /* @__PURE__ */ new D(), Hr = /* @__PURE__ */ new D(), ys = /* @__PURE__ */ new D(), bs = /* @__PURE__ */ new D(), Ss = /* @__PURE__ */ new D();
class jt {
  constructor(e = new D(), t = new D(), n = new D()) {
    this.a = e, this.b = t, this.c = n;
  }
  static getNormal(e, t, n, i) {
    i.subVectors(n, t), Pt.subVectors(e, t), i.cross(Pt);
    const s = i.lengthSq();
    return s > 0 ? i.multiplyScalar(1 / Math.sqrt(s)) : i.set(0, 0, 0);
  }
  static getBarycoord(e, t, n, i, s) {
    Pt.subVectors(i, t), Vt.subVectors(n, t), Ms.subVectors(e, t);
    const o = Pt.dot(Pt), r = Pt.dot(Vt), c = Pt.dot(Ms), l = Vt.dot(Vt), h = Vt.dot(Ms), u = o * l - r * r;
    if (u === 0)
      return s.set(-2, -1, -1);
    const d = 1 / u, m = (l * c - r * h) * d, g = (o * h - r * c) * d;
    return s.set(1 - m - g, g, m);
  }
  static containsPoint(e, t, n, i) {
    return this.getBarycoord(e, t, n, i, Ht), Ht.x >= 0 && Ht.y >= 0 && Ht.x + Ht.y <= 1;
  }
  static getUV(e, t, n, i, s, o, r, c) {
    return this.getBarycoord(e, t, n, i, Ht), c.set(0, 0), c.addScaledVector(s, Ht.x), c.addScaledVector(o, Ht.y), c.addScaledVector(r, Ht.z), c;
  }
  static isFrontFacing(e, t, n, i) {
    return Pt.subVectors(n, t), Vt.subVectors(e, t), Pt.cross(Vt).dot(i) < 0;
  }
  set(e, t, n) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
  }
  setFromPointsAndIndices(e, t, n, i) {
    return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[i]), this;
  }
  setFromAttributeAndIndices(e, t, n, i) {
    return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, n), this.c.fromBufferAttribute(e, i), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  getArea() {
    return Pt.subVectors(this.c, this.b), Vt.subVectors(this.a, this.b), Pt.cross(Vt).length() * 0.5;
  }
  getMidpoint(e) {
    return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return jt.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return jt.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getUV(e, t, n, i, s) {
    return jt.getUV(e, this.a, this.b, this.c, t, n, i, s);
  }
  containsPoint(e) {
    return jt.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return jt.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const n = this.a, i = this.b, s = this.c;
    let o, r;
    Dn.subVectors(i, n), Rn.subVectors(s, n), ys.subVectors(e, n);
    const c = Dn.dot(ys), l = Rn.dot(ys);
    if (c <= 0 && l <= 0)
      return t.copy(n);
    bs.subVectors(e, i);
    const h = Dn.dot(bs), u = Rn.dot(bs);
    if (h >= 0 && u <= h)
      return t.copy(i);
    const d = c * u - h * l;
    if (d <= 0 && c >= 0 && h <= 0)
      return o = c / (c - h), t.copy(n).addScaledVector(Dn, o);
    Ss.subVectors(e, s);
    const m = Dn.dot(Ss), g = Rn.dot(Ss);
    if (g >= 0 && m <= g)
      return t.copy(s);
    const p = m * l - c * g;
    if (p <= 0 && l >= 0 && g <= 0)
      return r = l / (l - g), t.copy(n).addScaledVector(Rn, r);
    const f = h * g - m * u;
    if (f <= 0 && u - h >= 0 && m - g >= 0)
      return Hr.subVectors(s, i), r = (u - h) / (u - h + (m - g)), t.copy(i).addScaledVector(Hr, r);
    const x = 1 / (f + p + d);
    return o = p * x, r = d * x, t.copy(n).addScaledVector(Dn, o).addScaledVector(Rn, r);
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
let gl = 0;
class Ut extends bn {
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: gl++ }), this.uuid = pi(), this.name = "", this.type = "Material", this.blending = kn, this.side = en, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.blendSrc = Pa, this.blendDst = Da, this.blendEquation = Bn, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = zs, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = rl, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = as, this.stencilZFail = as, this.stencilZPass = as, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e;
  }
  onBuild() {
  }
  onBeforeRender() {
  }
  onBeforeCompile() {
  }
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (e !== void 0)
      for (const t in e) {
        const n = e[t];
        if (n === void 0) {
          console.warn("THREE.Material: '" + t + "' parameter is undefined.");
          continue;
        }
        const i = this[t];
        if (i === void 0) {
          console.warn("THREE." + this.type + ": '" + t + "' is not a property of this material.");
          continue;
        }
        i && i.isColor ? i.set(n) : i && i.isVector3 && n && n.isVector3 ? i.copy(n) : this[t] = n;
      }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t && (e = {
      textures: {},
      images: {}
    });
    const n = {
      metadata: {
        version: 4.5,
        type: "Material",
        generator: "Material.toJSON"
      }
    };
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== kn && (n.blending = this.blending), this.side !== en && (n.side = this.side), this.vertexColors && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = this.transparent), n.depthFunc = this.depthFunc, n.depthTest = this.depthTest, n.depthWrite = this.depthWrite, n.colorWrite = this.colorWrite, n.stencilWrite = this.stencilWrite, n.stencilWriteMask = this.stencilWriteMask, n.stencilFunc = this.stencilFunc, n.stencilRef = this.stencilRef, n.stencilFuncMask = this.stencilFuncMask, n.stencilFail = this.stencilFail, n.stencilZFail = this.stencilZFail, n.stencilZPass = this.stencilZPass, this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaToCoverage === !0 && (n.alphaToCoverage = this.alphaToCoverage), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = this.premultipliedAlpha), this.wireframe === !0 && (n.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (n.flatShading = this.flatShading), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), this.fog === !1 && (n.fog = !1), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
    function i(s) {
      const o = [];
      for (const r in s) {
        const c = s[r];
        delete c.metadata, o.push(c);
      }
      return o;
    }
    if (t) {
      const s = i(e.textures), o = i(e.images);
      s.length > 0 && (n.textures = s), o.length > 0 && (n.images = o);
    }
    return n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.name = e.name, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
    const t = e.clippingPlanes;
    let n = null;
    if (t !== null) {
      const i = t.length;
      n = new Array(i);
      for (let s = 0; s !== i; ++s)
        n[s] = t[s].clone();
    }
    return this.clippingPlanes = n, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
}
class Ga extends Ut {
  constructor(e) {
    super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new Ee(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = Ys, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
const We = /* @__PURE__ */ new D(), Li = /* @__PURE__ */ new ye();
class Nt {
  constructor(e, t, n = !1) {
    if (Array.isArray(e))
      throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = !0, this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n, this.usage = Dr, this.updateRange = { offset: 0, count: -1 }, this.version = 0;
  }
  onUploadCallback() {
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setUsage(e) {
    return this.usage = e, this;
  }
  copy(e) {
    return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this;
  }
  copyAt(e, t, n) {
    e *= this.itemSize, n *= t.itemSize;
    for (let i = 0, s = this.itemSize; i < s; i++)
      this.array[e + i] = t.array[n + i];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2)
      for (let t = 0, n = this.count; t < n; t++)
        Li.fromBufferAttribute(this, t), Li.applyMatrix3(e), this.setXY(t, Li.x, Li.y);
    else if (this.itemSize === 3)
      for (let t = 0, n = this.count; t < n; t++)
        We.fromBufferAttribute(this, t), We.applyMatrix3(e), this.setXYZ(t, We.x, We.y, We.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++)
      We.fromBufferAttribute(this, t), We.applyMatrix4(e), this.setXYZ(t, We.x, We.y, We.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      We.fromBufferAttribute(this, t), We.applyNormalMatrix(e), this.setXYZ(t, We.x, We.y, We.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      We.fromBufferAttribute(this, t), We.transformDirection(e), this.setXYZ(t, We.x, We.y, We.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = Mi(t, this.array)), t;
  }
  setX(e, t) {
    return this.normalized && (t = mt(t, this.array)), this.array[e * this.itemSize] = t, this;
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = Mi(t, this.array)), t;
  }
  setY(e, t) {
    return this.normalized && (t = mt(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = Mi(t, this.array)), t;
  }
  setZ(e, t) {
    return this.normalized && (t = mt(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = Mi(t, this.array)), t;
  }
  setW(e, t) {
    return this.normalized && (t = mt(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
  }
  setXY(e, t, n) {
    return e *= this.itemSize, this.normalized && (t = mt(t, this.array), n = mt(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, i) {
    return e *= this.itemSize, this.normalized && (t = mt(t, this.array), n = mt(n, this.array), i = mt(i, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this;
  }
  setXYZW(e, t, n, i, s) {
    return e *= this.itemSize, this.normalized && (t = mt(t, this.array), n = mt(n, this.array), i = mt(i, this.array), s = mt(s, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this.array[e + 3] = s, this;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized
    };
    return this.name !== "" && (e.name = this.name), this.usage !== Dr && (e.usage = this.usage), (this.updateRange.offset !== 0 || this.updateRange.count !== -1) && (e.updateRange = this.updateRange), e;
  }
  copyColorsArray() {
    console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.");
  }
  copyVector2sArray() {
    console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.");
  }
  copyVector3sArray() {
    console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.");
  }
  copyVector4sArray() {
    console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.");
  }
}
class ka extends Nt {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class Va extends Nt {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class nt extends Nt {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let _l = 0;
const yt = /* @__PURE__ */ new ke(), ws = /* @__PURE__ */ new tt(), In = /* @__PURE__ */ new D(), _t = /* @__PURE__ */ new mi(), Qn = /* @__PURE__ */ new mi(), Qe = /* @__PURE__ */ new D();
class At extends bn {
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: _l++ }), this.uuid = pi(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return Array.isArray(e) ? this.index = new (Fa(e) ? Va : ka)(e, 1) : this.index = e, this;
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, t) {
    return this.attributes[e] = t, this;
  }
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  addGroup(e, t, n = 0) {
    this.groups.push({
      start: e,
      count: t,
      materialIndex: n
    });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, t) {
    this.drawRange.start = e, this.drawRange.count = t;
  }
  applyMatrix4(e) {
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), t.needsUpdate = !0);
    const n = this.attributes.normal;
    if (n !== void 0) {
      const s = new xt().getNormalMatrix(e);
      n.applyNormalMatrix(s), n.needsUpdate = !0;
    }
    const i = this.attributes.tangent;
    return i !== void 0 && (i.transformDirection(e), i.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  applyQuaternion(e) {
    return yt.makeRotationFromQuaternion(e), this.applyMatrix4(yt), this;
  }
  rotateX(e) {
    return yt.makeRotationX(e), this.applyMatrix4(yt), this;
  }
  rotateY(e) {
    return yt.makeRotationY(e), this.applyMatrix4(yt), this;
  }
  rotateZ(e) {
    return yt.makeRotationZ(e), this.applyMatrix4(yt), this;
  }
  translate(e, t, n) {
    return yt.makeTranslation(e, t, n), this.applyMatrix4(yt), this;
  }
  scale(e, t, n) {
    return yt.makeScale(e, t, n), this.applyMatrix4(yt), this;
  }
  lookAt(e) {
    return ws.lookAt(e), ws.updateMatrix(), this.applyMatrix4(ws.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(In).negate(), this.translate(In.x, In.y, In.z), this;
  }
  setFromPoints(e) {
    const t = [];
    for (let n = 0, i = e.length; n < i; n++) {
      const s = e[n];
      t.push(s.x, s.y, s.z || 0);
    }
    return this.setAttribute("position", new nt(t, 3)), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new mi());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingBox.set(
        new D(-1 / 0, -1 / 0, -1 / 0),
        new D(1 / 0, 1 / 0, 1 / 0)
      );
      return;
    }
    if (e !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(e), t)
        for (let n = 0, i = t.length; n < i; n++) {
          const s = t[n];
          _t.setFromBufferAttribute(s), this.morphTargetsRelative ? (Qe.addVectors(this.boundingBox.min, _t.min), this.boundingBox.expandByPoint(Qe), Qe.addVectors(this.boundingBox.max, _t.max), this.boundingBox.expandByPoint(Qe)) : (this.boundingBox.expandByPoint(_t.min), this.boundingBox.expandByPoint(_t.max));
        }
    } else
      this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new gi());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingSphere.set(new D(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if (_t.setFromBufferAttribute(e), t)
        for (let s = 0, o = t.length; s < o; s++) {
          const r = t[s];
          Qn.setFromBufferAttribute(r), this.morphTargetsRelative ? (Qe.addVectors(_t.min, Qn.min), _t.expandByPoint(Qe), Qe.addVectors(_t.max, Qn.max), _t.expandByPoint(Qe)) : (_t.expandByPoint(Qn.min), _t.expandByPoint(Qn.max));
        }
      _t.getCenter(n);
      let i = 0;
      for (let s = 0, o = e.count; s < o; s++)
        Qe.fromBufferAttribute(e, s), i = Math.max(i, n.distanceToSquared(Qe));
      if (t)
        for (let s = 0, o = t.length; s < o; s++) {
          const r = t[s], c = this.morphTargetsRelative;
          for (let l = 0, h = r.count; l < h; l++)
            Qe.fromBufferAttribute(r, l), c && (In.fromBufferAttribute(e, l), Qe.add(In)), i = Math.max(i, n.distanceToSquared(Qe));
        }
      this.boundingSphere.radius = Math.sqrt(i), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  computeTangents() {
    const e = this.index, t = this.attributes;
    if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) {
      console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const n = e.array, i = t.position.array, s = t.normal.array, o = t.uv.array, r = i.length / 3;
    this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new Nt(new Float32Array(4 * r), 4));
    const c = this.getAttribute("tangent").array, l = [], h = [];
    for (let F = 0; F < r; F++)
      l[F] = new D(), h[F] = new D();
    const u = new D(), d = new D(), m = new D(), g = new ye(), p = new ye(), f = new ye(), x = new D(), T = new D();
    function y(F, j, J) {
      u.fromArray(i, F * 3), d.fromArray(i, j * 3), m.fromArray(i, J * 3), g.fromArray(o, F * 2), p.fromArray(o, j * 2), f.fromArray(o, J * 2), d.sub(u), m.sub(u), p.sub(g), f.sub(g);
      const O = 1 / (p.x * f.y - f.x * p.y);
      isFinite(O) && (x.copy(d).multiplyScalar(f.y).addScaledVector(m, -p.y).multiplyScalar(O), T.copy(m).multiplyScalar(p.x).addScaledVector(d, -f.x).multiplyScalar(O), l[F].add(x), l[j].add(x), l[J].add(x), h[F].add(T), h[j].add(T), h[J].add(T));
    }
    let b = this.groups;
    b.length === 0 && (b = [{
      start: 0,
      count: n.length
    }]);
    for (let F = 0, j = b.length; F < j; ++F) {
      const J = b[F], O = J.start, N = J.count;
      for (let X = O, Z = O + N; X < Z; X += 3)
        y(
          n[X + 0],
          n[X + 1],
          n[X + 2]
        );
    }
    const w = new D(), C = new D(), I = new D(), _ = new D();
    function A(F) {
      I.fromArray(s, F * 3), _.copy(I);
      const j = l[F];
      w.copy(j), w.sub(I.multiplyScalar(I.dot(j))).normalize(), C.crossVectors(_, j);
      const O = C.dot(h[F]) < 0 ? -1 : 1;
      c[F * 4] = w.x, c[F * 4 + 1] = w.y, c[F * 4 + 2] = w.z, c[F * 4 + 3] = O;
    }
    for (let F = 0, j = b.length; F < j; ++F) {
      const J = b[F], O = J.start, N = J.count;
      for (let X = O, Z = O + N; X < Z; X += 3)
        A(n[X + 0]), A(n[X + 1]), A(n[X + 2]);
    }
  }
  computeVertexNormals() {
    const e = this.index, t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0)
        n = new Nt(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
      else
        for (let d = 0, m = n.count; d < m; d++)
          n.setXYZ(d, 0, 0, 0);
      const i = new D(), s = new D(), o = new D(), r = new D(), c = new D(), l = new D(), h = new D(), u = new D();
      if (e)
        for (let d = 0, m = e.count; d < m; d += 3) {
          const g = e.getX(d + 0), p = e.getX(d + 1), f = e.getX(d + 2);
          i.fromBufferAttribute(t, g), s.fromBufferAttribute(t, p), o.fromBufferAttribute(t, f), h.subVectors(o, s), u.subVectors(i, s), h.cross(u), r.fromBufferAttribute(n, g), c.fromBufferAttribute(n, p), l.fromBufferAttribute(n, f), r.add(h), c.add(h), l.add(h), n.setXYZ(g, r.x, r.y, r.z), n.setXYZ(p, c.x, c.y, c.z), n.setXYZ(f, l.x, l.y, l.z);
        }
      else
        for (let d = 0, m = t.count; d < m; d += 3)
          i.fromBufferAttribute(t, d + 0), s.fromBufferAttribute(t, d + 1), o.fromBufferAttribute(t, d + 2), h.subVectors(o, s), u.subVectors(i, s), h.cross(u), n.setXYZ(d + 0, h.x, h.y, h.z), n.setXYZ(d + 1, h.x, h.y, h.z), n.setXYZ(d + 2, h.x, h.y, h.z);
      this.normalizeNormals(), n.needsUpdate = !0;
    }
  }
  merge() {
    return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."), this;
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++)
      Qe.fromBufferAttribute(e, t), Qe.normalize(), e.setXYZ(t, Qe.x, Qe.y, Qe.z);
  }
  toNonIndexed() {
    function e(r, c) {
      const l = r.array, h = r.itemSize, u = r.normalized, d = new l.constructor(c.length * h);
      let m = 0, g = 0;
      for (let p = 0, f = c.length; p < f; p++) {
        r.isInterleavedBufferAttribute ? m = c[p] * r.data.stride + r.offset : m = c[p] * h;
        for (let x = 0; x < h; x++)
          d[g++] = l[m++];
      }
      return new Nt(d, h, u);
    }
    if (this.index === null)
      return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const t = new At(), n = this.index.array, i = this.attributes;
    for (const r in i) {
      const c = i[r], l = e(c, n);
      t.setAttribute(r, l);
    }
    const s = this.morphAttributes;
    for (const r in s) {
      const c = [], l = s[r];
      for (let h = 0, u = l.length; h < u; h++) {
        const d = l[h], m = e(d, n);
        c.push(m);
      }
      t.morphAttributes[r] = c;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const o = this.groups;
    for (let r = 0, c = o.length; r < c; r++) {
      const l = o[r];
      t.addGroup(l.start, l.count, l.materialIndex);
    }
    return t;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.5,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON"
      }
    };
    if (e.uuid = this.uuid, e.type = this.type, this.name !== "" && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0) {
      const c = this.parameters;
      for (const l in c)
        c[l] !== void 0 && (e[l] = c[l]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null && (e.data.index = {
      type: t.array.constructor.name,
      array: Array.prototype.slice.call(t.array)
    });
    const n = this.attributes;
    for (const c in n) {
      const l = n[c];
      e.data.attributes[c] = l.toJSON(e.data);
    }
    const i = {};
    let s = !1;
    for (const c in this.morphAttributes) {
      const l = this.morphAttributes[c], h = [];
      for (let u = 0, d = l.length; u < d; u++) {
        const m = l[u];
        h.push(m.toJSON(e.data));
      }
      h.length > 0 && (i[c] = h, s = !0);
    }
    s && (e.data.morphAttributes = i, e.data.morphTargetsRelative = this.morphTargetsRelative);
    const o = this.groups;
    o.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(o)));
    const r = this.boundingSphere;
    return r !== null && (e.data.boundingSphere = {
      center: r.center.toArray(),
      radius: r.radius
    }), e;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    const t = {};
    this.name = e.name;
    const n = e.index;
    n !== null && this.setIndex(n.clone(t));
    const i = e.attributes;
    for (const l in i) {
      const h = i[l];
      this.setAttribute(l, h.clone(t));
    }
    const s = e.morphAttributes;
    for (const l in s) {
      const h = [], u = s[l];
      for (let d = 0, m = u.length; d < m; d++)
        h.push(u[d].clone(t));
      this.morphAttributes[l] = h;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const o = e.groups;
    for (let l = 0, h = o.length; l < h; l++) {
      const u = o[l];
      this.addGroup(u.start, u.count, u.materialIndex);
    }
    const r = e.boundingBox;
    r !== null && (this.boundingBox = r.clone());
    const c = e.boundingSphere;
    return c !== null && (this.boundingSphere = c.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, e.parameters !== void 0 && (this.parameters = Object.assign({}, e.parameters)), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const Wr = /* @__PURE__ */ new ke(), Fn = /* @__PURE__ */ new $s(), Ts = /* @__PURE__ */ new gi(), ei = /* @__PURE__ */ new D(), ti = /* @__PURE__ */ new D(), ni = /* @__PURE__ */ new D(), Es = /* @__PURE__ */ new D(), Pi = /* @__PURE__ */ new D(), Di = /* @__PURE__ */ new ye(), Ri = /* @__PURE__ */ new ye(), Ii = /* @__PURE__ */ new ye(), As = /* @__PURE__ */ new D(), Fi = /* @__PURE__ */ new D();
class Tt extends tt {
  constructor(e = new At(), t = new Ga()) {
    super(), this.isMesh = !0, this.type = "Mesh", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = e.material, this.geometry = e.geometry, this;
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, o = i.length; s < o; s++) {
          const r = i[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[r] = s;
        }
      }
    }
  }
  getVertexPosition(e, t) {
    const n = this.geometry, i = n.attributes.position, s = n.morphAttributes.position, o = n.morphTargetsRelative;
    t.fromBufferAttribute(i, e);
    const r = this.morphTargetInfluences;
    if (s && r) {
      Pi.set(0, 0, 0);
      for (let c = 0, l = s.length; c < l; c++) {
        const h = r[c], u = s[c];
        h !== 0 && (Es.fromBufferAttribute(u, e), o ? Pi.addScaledVector(Es, h) : Pi.addScaledVector(Es.sub(t), h));
      }
      t.add(Pi);
    }
    return this.isSkinnedMesh && this.boneTransform(e, t), t;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.material, s = this.matrixWorld;
    if (i === void 0 || (n.boundingSphere === null && n.computeBoundingSphere(), Ts.copy(n.boundingSphere), Ts.applyMatrix4(s), e.ray.intersectsSphere(Ts) === !1) || (Wr.copy(s).invert(), Fn.copy(e.ray).applyMatrix4(Wr), n.boundingBox !== null && Fn.intersectsBox(n.boundingBox) === !1))
      return;
    let o;
    const r = n.index, c = n.attributes.position, l = n.attributes.uv, h = n.attributes.uv2, u = n.groups, d = n.drawRange;
    if (r !== null)
      if (Array.isArray(i))
        for (let m = 0, g = u.length; m < g; m++) {
          const p = u[m], f = i[p.materialIndex], x = Math.max(p.start, d.start), T = Math.min(r.count, Math.min(p.start + p.count, d.start + d.count));
          for (let y = x, b = T; y < b; y += 3) {
            const w = r.getX(y), C = r.getX(y + 1), I = r.getX(y + 2);
            o = Ni(this, f, e, Fn, l, h, w, C, I), o && (o.faceIndex = Math.floor(y / 3), o.face.materialIndex = p.materialIndex, t.push(o));
          }
        }
      else {
        const m = Math.max(0, d.start), g = Math.min(r.count, d.start + d.count);
        for (let p = m, f = g; p < f; p += 3) {
          const x = r.getX(p), T = r.getX(p + 1), y = r.getX(p + 2);
          o = Ni(this, i, e, Fn, l, h, x, T, y), o && (o.faceIndex = Math.floor(p / 3), t.push(o));
        }
      }
    else if (c !== void 0)
      if (Array.isArray(i))
        for (let m = 0, g = u.length; m < g; m++) {
          const p = u[m], f = i[p.materialIndex], x = Math.max(p.start, d.start), T = Math.min(c.count, Math.min(p.start + p.count, d.start + d.count));
          for (let y = x, b = T; y < b; y += 3) {
            const w = y, C = y + 1, I = y + 2;
            o = Ni(this, f, e, Fn, l, h, w, C, I), o && (o.faceIndex = Math.floor(y / 3), o.face.materialIndex = p.materialIndex, t.push(o));
          }
        }
      else {
        const m = Math.max(0, d.start), g = Math.min(c.count, d.start + d.count);
        for (let p = m, f = g; p < f; p += 3) {
          const x = p, T = p + 1, y = p + 2;
          o = Ni(this, i, e, Fn, l, h, x, T, y), o && (o.faceIndex = Math.floor(p / 3), t.push(o));
        }
      }
  }
}
function xl(a, e, t, n, i, s, o, r) {
  let c;
  if (e.side === Et ? c = n.intersectTriangle(o, s, i, !0, r) : c = n.intersectTriangle(i, s, o, e.side === en, r), c === null)
    return null;
  Fi.copy(r), Fi.applyMatrix4(a.matrixWorld);
  const l = t.ray.origin.distanceTo(Fi);
  return l < t.near || l > t.far ? null : {
    distance: l,
    point: Fi.clone(),
    object: a
  };
}
function Ni(a, e, t, n, i, s, o, r, c) {
  a.getVertexPosition(o, ei), a.getVertexPosition(r, ti), a.getVertexPosition(c, ni);
  const l = xl(a, e, t, n, ei, ti, ni, As);
  if (l) {
    i && (Di.fromBufferAttribute(i, o), Ri.fromBufferAttribute(i, r), Ii.fromBufferAttribute(i, c), l.uv = jt.getUV(As, ei, ti, ni, Di, Ri, Ii, new ye())), s && (Di.fromBufferAttribute(s, o), Ri.fromBufferAttribute(s, r), Ii.fromBufferAttribute(s, c), l.uv2 = jt.getUV(As, ei, ti, ni, Di, Ri, Ii, new ye()));
    const h = {
      a: o,
      b: r,
      c,
      normal: new D(),
      materialIndex: 0
    };
    jt.getNormal(ei, ti, ni, h.normal), l.face = h;
  }
  return l;
}
class jn extends At {
  constructor(e = 1, t = 1, n = 1, i = 1, s = 1, o = 1) {
    super(), this.type = "BoxGeometry", this.parameters = {
      width: e,
      height: t,
      depth: n,
      widthSegments: i,
      heightSegments: s,
      depthSegments: o
    };
    const r = this;
    i = Math.floor(i), s = Math.floor(s), o = Math.floor(o);
    const c = [], l = [], h = [], u = [];
    let d = 0, m = 0;
    g("z", "y", "x", -1, -1, n, t, e, o, s, 0), g("z", "y", "x", 1, -1, n, t, -e, o, s, 1), g("x", "z", "y", 1, 1, e, n, t, i, o, 2), g("x", "z", "y", 1, -1, e, n, -t, i, o, 3), g("x", "y", "z", 1, -1, e, t, n, i, s, 4), g("x", "y", "z", -1, -1, e, t, -n, i, s, 5), this.setIndex(c), this.setAttribute("position", new nt(l, 3)), this.setAttribute("normal", new nt(h, 3)), this.setAttribute("uv", new nt(u, 2));
    function g(p, f, x, T, y, b, w, C, I, _, A) {
      const F = b / I, j = w / _, J = b / 2, O = w / 2, N = C / 2, X = I + 1, Z = _ + 1;
      let Q = 0, q = 0;
      const ee = new D();
      for (let Y = 0; Y < Z; Y++) {
        const V = Y * j - O;
        for (let z = 0; z < X; z++) {
          const se = z * F - J;
          ee[p] = se * T, ee[f] = V * y, ee[x] = N, l.push(ee.x, ee.y, ee.z), ee[p] = 0, ee[f] = 0, ee[x] = C > 0 ? 1 : -1, h.push(ee.x, ee.y, ee.z), u.push(z / I), u.push(1 - Y / _), Q += 1;
        }
      }
      for (let Y = 0; Y < _; Y++)
        for (let V = 0; V < I; V++) {
          const z = d + V + X * Y, se = d + V + X * (Y + 1), te = d + (V + 1) + X * (Y + 1), re = d + (V + 1) + X * Y;
          c.push(z, se, re), c.push(se, te, re), q += 6;
        }
      r.addGroup(m, q, A), m += q, d += Q;
    }
  }
  static fromJSON(e) {
    return new jn(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
  }
}
function qn(a) {
  const e = {};
  for (const t in a) {
    e[t] = {};
    for (const n in a[t]) {
      const i = a[t][n];
      i && (i.isColor || i.isMatrix3 || i.isMatrix4 || i.isVector2 || i.isVector3 || i.isVector4 || i.isTexture || i.isQuaternion) ? e[t][n] = i.clone() : Array.isArray(i) ? e[t][n] = i.slice() : e[t][n] = i;
    }
  }
  return e;
}
function lt(a) {
  const e = {};
  for (let t = 0; t < a.length; t++) {
    const n = qn(a[t]);
    for (const i in n)
      e[i] = n[i];
  }
  return e;
}
function vl(a) {
  const e = [];
  for (let t = 0; t < a.length; t++)
    e.push(a[t].clone());
  return e;
}
function Ha(a) {
  return a.getRenderTarget() === null && a.outputEncoding === ze ? It : ui;
}
const Ml = { clone: qn, merge: lt };
var yl = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, bl = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class yn extends Ut {
  constructor(e) {
    super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = yl, this.fragmentShader = bl, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.extensions = {
      derivatives: !1,
      fragDepth: !1,
      drawBuffers: !1,
      shaderTextureLOD: !1
    }, this.defaultAttributeValues = {
      color: [1, 1, 1],
      uv: [0, 0],
      uv2: [0, 0]
    }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = qn(e.uniforms), this.uniformsGroups = vl(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    t.glslVersion = this.glslVersion, t.uniforms = {};
    for (const i in this.uniforms) {
      const o = this.uniforms[i].value;
      o && o.isTexture ? t.uniforms[i] = {
        type: "t",
        value: o.toJSON(e).uuid
      } : o && o.isColor ? t.uniforms[i] = {
        type: "c",
        value: o.getHex()
      } : o && o.isVector2 ? t.uniforms[i] = {
        type: "v2",
        value: o.toArray()
      } : o && o.isVector3 ? t.uniforms[i] = {
        type: "v3",
        value: o.toArray()
      } : o && o.isVector4 ? t.uniforms[i] = {
        type: "v4",
        value: o.toArray()
      } : o && o.isMatrix3 ? t.uniforms[i] = {
        type: "m3",
        value: o.toArray()
      } : o && o.isMatrix4 ? t.uniforms[i] = {
        type: "m4",
        value: o.toArray()
      } : t.uniforms[i] = {
        value: o
      };
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader;
    const n = {};
    for (const i in this.extensions)
      this.extensions[i] === !0 && (n[i] = !0);
    return Object.keys(n).length > 0 && (t.extensions = n), t;
  }
}
class Wa extends tt {
  constructor() {
    super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new ke(), this.projectionMatrix = new ke(), this.projectionMatrixInverse = new ke();
  }
  copy(e, t) {
    return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this;
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(-t[8], -t[9], -t[10]).normalize();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class wt extends Wa {
  constructor(e = 50, t = 1, n = 0.1, i = 2e3) {
    super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = i, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
  }
  setFocalLength(e) {
    const t = 0.5 * this.getFilmHeight() / e;
    this.fov = Ir * 2 * Math.atan(t), this.updateProjectionMatrix();
  }
  getFocalLength() {
    const e = Math.tan(os * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / e;
  }
  getEffectiveFOV() {
    return Ir * 2 * Math.atan(
      Math.tan(os * 0.5 * this.fov) / this.zoom
    );
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  setViewOffset(e, t, n, i, s, o) {
    this.aspect = e / t, this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = s, this.view.height = o, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = e * Math.tan(os * 0.5 * this.fov) / this.zoom, n = 2 * t, i = this.aspect * n, s = -0.5 * i;
    const o = this.view;
    if (this.view !== null && this.view.enabled) {
      const c = o.fullWidth, l = o.fullHeight;
      s += o.offsetX * i / c, t -= o.offsetY * n / l, i *= o.width / c, n *= o.height / l;
    }
    const r = this.filmOffset;
    r !== 0 && (s += e * r / this.getFilmWidth()), this.projectionMatrix.makePerspective(s, s + i, t, t - n, e, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
  }
}
const Nn = -90, Un = 1;
class Sl extends tt {
  constructor(e, t, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n;
    const i = new wt(Nn, Un, e, t);
    i.layers = this.layers, i.up.set(0, 1, 0), i.lookAt(1, 0, 0), this.add(i);
    const s = new wt(Nn, Un, e, t);
    s.layers = this.layers, s.up.set(0, 1, 0), s.lookAt(-1, 0, 0), this.add(s);
    const o = new wt(Nn, Un, e, t);
    o.layers = this.layers, o.up.set(0, 0, -1), o.lookAt(0, 1, 0), this.add(o);
    const r = new wt(Nn, Un, e, t);
    r.layers = this.layers, r.up.set(0, 0, 1), r.lookAt(0, -1, 0), this.add(r);
    const c = new wt(Nn, Un, e, t);
    c.layers = this.layers, c.up.set(0, 1, 0), c.lookAt(0, 0, 1), this.add(c);
    const l = new wt(Nn, Un, e, t);
    l.layers = this.layers, l.up.set(0, 1, 0), l.lookAt(0, 0, -1), this.add(l);
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const n = this.renderTarget, [i, s, o, r, c, l] = this.children, h = e.getRenderTarget(), u = e.toneMapping, d = e.xr.enabled;
    e.toneMapping = Yt, e.xr.enabled = !1;
    const m = n.texture.generateMipmaps;
    n.texture.generateMipmaps = !1, e.setRenderTarget(n, 0), e.render(t, i), e.setRenderTarget(n, 1), e.render(t, s), e.setRenderTarget(n, 2), e.render(t, o), e.setRenderTarget(n, 3), e.render(t, r), e.setRenderTarget(n, 4), e.render(t, c), n.texture.generateMipmaps = m, e.setRenderTarget(n, 5), e.render(t, l), e.setRenderTarget(h), e.toneMapping = u, e.xr.enabled = d, n.texture.needsPMREMUpdate = !0;
  }
}
class Xa extends dt {
  constructor(e, t, n, i, s, o, r, c, l, h) {
    e = e !== void 0 ? e : [], t = t !== void 0 ? t : Hn, super(e, t, n, i, s, o, r, c, l, h), this.isCubeTexture = !0, this.flipY = !1;
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class wl extends vn {
  constructor(e = 1, t = {}) {
    super(e, e, t), this.isWebGLCubeRenderTarget = !0;
    const n = { width: e, height: e, depth: 1 }, i = [n, n, n, n, n, n];
    this.texture = new Xa(i, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.encoding), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = t.generateMipmaps !== void 0 ? t.generateMipmaps : !1, this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : St;
  }
  fromEquirectangularTexture(e, t) {
    this.texture.type = t.type, this.texture.encoding = t.encoding, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter;
    const n = {
      uniforms: {
        tEquirect: { value: null }
      },
      vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,
      fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`
    }, i = new jn(5, 5, 5), s = new yn({
      name: "CubemapFromEquirect",
      uniforms: qn(n.uniforms),
      vertexShader: n.vertexShader,
      fragmentShader: n.fragmentShader,
      side: Et,
      blending: Qt
    });
    s.uniforms.tEquirect.value = t;
    const o = new Tt(i, s), r = t.minFilter;
    return t.minFilter === ci && (t.minFilter = St), new Sl(1, 10, this).update(e, o), t.minFilter = r, o.geometry.dispose(), o.material.dispose(), this;
  }
  clear(e, t, n, i) {
    const s = e.getRenderTarget();
    for (let o = 0; o < 6; o++)
      e.setRenderTarget(this, o), e.clear(t, n, i);
    e.setRenderTarget(s);
  }
}
const Cs = /* @__PURE__ */ new D(), Tl = /* @__PURE__ */ new D(), El = /* @__PURE__ */ new xt();
class hn {
  constructor(e = new D(1, 0, 0), t = 0) {
    this.isPlane = !0, this.normal = e, this.constant = t;
  }
  set(e, t) {
    return this.normal.copy(e), this.constant = t, this;
  }
  setComponents(e, t, n, i) {
    return this.normal.set(e, t, n), this.constant = i, this;
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), this.constant = -t.dot(this.normal), this;
  }
  setFromCoplanarPoints(e, t, n) {
    const i = Cs.subVectors(n, t).cross(Tl.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(i, e), this;
  }
  copy(e) {
    return this.normal.copy(e.normal), this.constant = e.constant, this;
  }
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), this.constant *= e, this;
  }
  negate() {
    return this.constant *= -1, this.normal.negate(), this;
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e);
  }
  intersectLine(e, t) {
    const n = e.delta(Cs), i = this.normal.dot(n);
    if (i === 0)
      return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const s = -(e.start.dot(this.normal) + this.constant) / i;
    return s < 0 || s > 1 ? null : t.copy(n).multiplyScalar(s).add(e.start);
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start), n = this.distanceToPoint(e.end);
    return t < 0 && n > 0 || n < 0 && t > 0;
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, t) {
    const n = t || El.getNormalMatrix(e), i = this.coplanarPoint(Cs).applyMatrix4(e), s = this.normal.applyMatrix3(n).normalize();
    return this.constant = -i.dot(s), this;
  }
  translate(e) {
    return this.constant -= e.dot(this.normal), this;
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const On = /* @__PURE__ */ new gi(), Ui = /* @__PURE__ */ new D();
class Ks {
  constructor(e = new hn(), t = new hn(), n = new hn(), i = new hn(), s = new hn(), o = new hn()) {
    this.planes = [e, t, n, i, s, o];
  }
  set(e, t, n, i, s, o) {
    const r = this.planes;
    return r[0].copy(e), r[1].copy(t), r[2].copy(n), r[3].copy(i), r[4].copy(s), r[5].copy(o), this;
  }
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++)
      t[n].copy(e.planes[n]);
    return this;
  }
  setFromProjectionMatrix(e) {
    const t = this.planes, n = e.elements, i = n[0], s = n[1], o = n[2], r = n[3], c = n[4], l = n[5], h = n[6], u = n[7], d = n[8], m = n[9], g = n[10], p = n[11], f = n[12], x = n[13], T = n[14], y = n[15];
    return t[0].setComponents(r - i, u - c, p - d, y - f).normalize(), t[1].setComponents(r + i, u + c, p + d, y + f).normalize(), t[2].setComponents(r + s, u + l, p + m, y + x).normalize(), t[3].setComponents(r - s, u - l, p - m, y - x).normalize(), t[4].setComponents(r - o, u - h, p - g, y - T).normalize(), t[5].setComponents(r + o, u + h, p + g, y + T).normalize(), this;
  }
  intersectsObject(e) {
    const t = e.geometry;
    return t.boundingSphere === null && t.computeBoundingSphere(), On.copy(t.boundingSphere).applyMatrix4(e.matrixWorld), this.intersectsSphere(On);
  }
  intersectsSprite(e) {
    return On.center.set(0, 0, 0), On.radius = 0.7071067811865476, On.applyMatrix4(e.matrixWorld), this.intersectsSphere(On);
  }
  intersectsSphere(e) {
    const t = this.planes, n = e.center, i = -e.radius;
    for (let s = 0; s < 6; s++)
      if (t[s].distanceToPoint(n) < i)
        return !1;
    return !0;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      const i = t[n];
      if (Ui.x = i.normal.x > 0 ? e.max.x : e.min.x, Ui.y = i.normal.y > 0 ? e.max.y : e.min.y, Ui.z = i.normal.z > 0 ? e.max.z : e.min.z, i.distanceToPoint(Ui) < 0)
        return !1;
    }
    return !0;
  }
  containsPoint(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++)
      if (t[n].distanceToPoint(e) < 0)
        return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
function qa() {
  let a = null, e = !1, t = null, n = null;
  function i(s, o) {
    t(s, o), n = a.requestAnimationFrame(i);
  }
  return {
    start: function() {
      e !== !0 && t !== null && (n = a.requestAnimationFrame(i), e = !0);
    },
    stop: function() {
      a.cancelAnimationFrame(n), e = !1;
    },
    setAnimationLoop: function(s) {
      t = s;
    },
    setContext: function(s) {
      a = s;
    }
  };
}
function Al(a, e) {
  const t = e.isWebGL2, n = /* @__PURE__ */ new WeakMap();
  function i(l, h) {
    const u = l.array, d = l.usage, m = a.createBuffer();
    a.bindBuffer(h, m), a.bufferData(h, u, d), l.onUploadCallback();
    let g;
    if (u instanceof Float32Array)
      g = 5126;
    else if (u instanceof Uint16Array)
      if (l.isFloat16BufferAttribute)
        if (t)
          g = 5131;
        else
          throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");
      else
        g = 5123;
    else if (u instanceof Int16Array)
      g = 5122;
    else if (u instanceof Uint32Array)
      g = 5125;
    else if (u instanceof Int32Array)
      g = 5124;
    else if (u instanceof Int8Array)
      g = 5120;
    else if (u instanceof Uint8Array)
      g = 5121;
    else if (u instanceof Uint8ClampedArray)
      g = 5121;
    else
      throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + u);
    return {
      buffer: m,
      type: g,
      bytesPerElement: u.BYTES_PER_ELEMENT,
      version: l.version
    };
  }
  function s(l, h, u) {
    const d = h.array, m = h.updateRange;
    a.bindBuffer(u, l), m.count === -1 ? a.bufferSubData(u, 0, d) : (t ? a.bufferSubData(
      u,
      m.offset * d.BYTES_PER_ELEMENT,
      d,
      m.offset,
      m.count
    ) : a.bufferSubData(
      u,
      m.offset * d.BYTES_PER_ELEMENT,
      d.subarray(m.offset, m.offset + m.count)
    ), m.count = -1), h.onUploadCallback();
  }
  function o(l) {
    return l.isInterleavedBufferAttribute && (l = l.data), n.get(l);
  }
  function r(l) {
    l.isInterleavedBufferAttribute && (l = l.data);
    const h = n.get(l);
    h && (a.deleteBuffer(h.buffer), n.delete(l));
  }
  function c(l, h) {
    if (l.isGLBufferAttribute) {
      const d = n.get(l);
      (!d || d.version < l.version) && n.set(l, {
        buffer: l.buffer,
        type: l.type,
        bytesPerElement: l.elementSize,
        version: l.version
      });
      return;
    }
    l.isInterleavedBufferAttribute && (l = l.data);
    const u = n.get(l);
    u === void 0 ? n.set(l, i(l, h)) : u.version < l.version && (s(u.buffer, l, h), u.version = l.version);
  }
  return {
    get: o,
    remove: r,
    update: c
  };
}
class Zi extends At {
  constructor(e = 1, t = 1, n = 1, i = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = {
      width: e,
      height: t,
      widthSegments: n,
      heightSegments: i
    };
    const s = e / 2, o = t / 2, r = Math.floor(n), c = Math.floor(i), l = r + 1, h = c + 1, u = e / r, d = t / c, m = [], g = [], p = [], f = [];
    for (let x = 0; x < h; x++) {
      const T = x * d - o;
      for (let y = 0; y < l; y++) {
        const b = y * u - s;
        g.push(b, -T, 0), p.push(0, 0, 1), f.push(y / r), f.push(1 - x / c);
      }
    }
    for (let x = 0; x < c; x++)
      for (let T = 0; T < r; T++) {
        const y = T + l * x, b = T + l * (x + 1), w = T + 1 + l * (x + 1), C = T + 1 + l * x;
        m.push(y, b, C), m.push(b, w, C);
      }
    this.setIndex(m), this.setAttribute("position", new nt(g, 3)), this.setAttribute("normal", new nt(p, 3)), this.setAttribute("uv", new nt(f, 2));
  }
  static fromJSON(e) {
    return new Zi(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
var Cl = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`, Ll = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, Pl = `#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`, Dl = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, Rl = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, Il = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, Fl = "vec3 transformed = vec3( position );", Nl = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, Ul = `vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`, Ol = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`, zl = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`, Bl = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`, Gl = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, kl = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, Vl = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, Hl = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, Wl = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, Xl = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`, ql = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`, jl = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`, Yl = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`, Zl = `vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`, $l = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, Kl = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`, Jl = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, Ql = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, ec = "gl_FragColor = linearToOutputTexel( gl_FragColor );", tc = `vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, nc = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`, ic = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, sc = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`, rc = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, ac = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`, oc = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, lc = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, cc = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, hc = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, uc = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`, dc = `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`, fc = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, pc = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, mc = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, gc = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`, _c = `#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`, xc = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, vc = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, Mc = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, yc = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, bc = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`, Sc = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`, wc = `
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`, Tc = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`, Ec = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`, Ac = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, Cc = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, Lc = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`, Pc = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`, Dc = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, Rc = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, Ic = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, Fc = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, Nc = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`, Uc = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, Oc = `#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, zc = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`, Bc = `#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`, Gc = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`, kc = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`, Vc = `#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`, Hc = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Wc = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Xc = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, qc = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`, jc = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`, Yc = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`, Zc = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`, $c = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, Kc = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, Jc = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`, Qc = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, eh = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, th = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, nh = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, ih = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`, sh = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, rh = `#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`, ah = `#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`, oh = `#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`, lh = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`, ch = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, hh = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`, uh = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, dh = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`, fh = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, ph = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, mh = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, gh = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`, _h = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`, xh = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`, vh = `#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`, Mh = `#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`, yh = `#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`, bh = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`, Sh = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`, wh = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`, Th = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const Eh = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, Ah = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, Ch = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Lh = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, Ph = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Dh = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, Rh = `#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`, Ih = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`, Fh = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`, Nh = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`, Uh = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, Oh = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, zh = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, Bh = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, Gh = `#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`, kh = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Vh = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Hh = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Wh = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`, Xh = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, qh = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`, jh = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`, Yh = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Zh = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, $h = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`, Kh = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Jh = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Qh = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, eu = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`, tu = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, nu = `#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, iu = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`, su = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, ru = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`, Se = {
  alphamap_fragment: Cl,
  alphamap_pars_fragment: Ll,
  alphatest_fragment: Pl,
  alphatest_pars_fragment: Dl,
  aomap_fragment: Rl,
  aomap_pars_fragment: Il,
  begin_vertex: Fl,
  beginnormal_vertex: Nl,
  bsdfs: Ul,
  iridescence_fragment: Ol,
  bumpmap_pars_fragment: zl,
  clipping_planes_fragment: Bl,
  clipping_planes_pars_fragment: Gl,
  clipping_planes_pars_vertex: kl,
  clipping_planes_vertex: Vl,
  color_fragment: Hl,
  color_pars_fragment: Wl,
  color_pars_vertex: Xl,
  color_vertex: ql,
  common: jl,
  cube_uv_reflection_fragment: Yl,
  defaultnormal_vertex: Zl,
  displacementmap_pars_vertex: $l,
  displacementmap_vertex: Kl,
  emissivemap_fragment: Jl,
  emissivemap_pars_fragment: Ql,
  encodings_fragment: ec,
  encodings_pars_fragment: tc,
  envmap_fragment: nc,
  envmap_common_pars_fragment: ic,
  envmap_pars_fragment: sc,
  envmap_pars_vertex: rc,
  envmap_physical_pars_fragment: _c,
  envmap_vertex: ac,
  fog_vertex: oc,
  fog_pars_vertex: lc,
  fog_fragment: cc,
  fog_pars_fragment: hc,
  gradientmap_pars_fragment: uc,
  lightmap_fragment: dc,
  lightmap_pars_fragment: fc,
  lights_lambert_fragment: pc,
  lights_lambert_pars_fragment: mc,
  lights_pars_begin: gc,
  lights_toon_fragment: xc,
  lights_toon_pars_fragment: vc,
  lights_phong_fragment: Mc,
  lights_phong_pars_fragment: yc,
  lights_physical_fragment: bc,
  lights_physical_pars_fragment: Sc,
  lights_fragment_begin: wc,
  lights_fragment_maps: Tc,
  lights_fragment_end: Ec,
  logdepthbuf_fragment: Ac,
  logdepthbuf_pars_fragment: Cc,
  logdepthbuf_pars_vertex: Lc,
  logdepthbuf_vertex: Pc,
  map_fragment: Dc,
  map_pars_fragment: Rc,
  map_particle_fragment: Ic,
  map_particle_pars_fragment: Fc,
  metalnessmap_fragment: Nc,
  metalnessmap_pars_fragment: Uc,
  morphcolor_vertex: Oc,
  morphnormal_vertex: zc,
  morphtarget_pars_vertex: Bc,
  morphtarget_vertex: Gc,
  normal_fragment_begin: kc,
  normal_fragment_maps: Vc,
  normal_pars_fragment: Hc,
  normal_pars_vertex: Wc,
  normal_vertex: Xc,
  normalmap_pars_fragment: qc,
  clearcoat_normal_fragment_begin: jc,
  clearcoat_normal_fragment_maps: Yc,
  clearcoat_pars_fragment: Zc,
  iridescence_pars_fragment: $c,
  output_fragment: Kc,
  packing: Jc,
  premultiplied_alpha_fragment: Qc,
  project_vertex: eh,
  dithering_fragment: th,
  dithering_pars_fragment: nh,
  roughnessmap_fragment: ih,
  roughnessmap_pars_fragment: sh,
  shadowmap_pars_fragment: rh,
  shadowmap_pars_vertex: ah,
  shadowmap_vertex: oh,
  shadowmask_pars_fragment: lh,
  skinbase_vertex: ch,
  skinning_pars_vertex: hh,
  skinning_vertex: uh,
  skinnormal_vertex: dh,
  specularmap_fragment: fh,
  specularmap_pars_fragment: ph,
  tonemapping_fragment: mh,
  tonemapping_pars_fragment: gh,
  transmission_fragment: _h,
  transmission_pars_fragment: xh,
  uv_pars_fragment: vh,
  uv_pars_vertex: Mh,
  uv_vertex: yh,
  uv2_pars_fragment: bh,
  uv2_pars_vertex: Sh,
  uv2_vertex: wh,
  worldpos_vertex: Th,
  background_vert: Eh,
  background_frag: Ah,
  backgroundCube_vert: Ch,
  backgroundCube_frag: Lh,
  cube_vert: Ph,
  cube_frag: Dh,
  depth_vert: Rh,
  depth_frag: Ih,
  distanceRGBA_vert: Fh,
  distanceRGBA_frag: Nh,
  equirect_vert: Uh,
  equirect_frag: Oh,
  linedashed_vert: zh,
  linedashed_frag: Bh,
  meshbasic_vert: Gh,
  meshbasic_frag: kh,
  meshlambert_vert: Vh,
  meshlambert_frag: Hh,
  meshmatcap_vert: Wh,
  meshmatcap_frag: Xh,
  meshnormal_vert: qh,
  meshnormal_frag: jh,
  meshphong_vert: Yh,
  meshphong_frag: Zh,
  meshphysical_vert: $h,
  meshphysical_frag: Kh,
  meshtoon_vert: Jh,
  meshtoon_frag: Qh,
  points_vert: eu,
  points_frag: tu,
  shadow_vert: nu,
  shadow_frag: iu,
  sprite_vert: su,
  sprite_frag: ru
}, ie = {
  common: {
    diffuse: { value: /* @__PURE__ */ new Ee(16777215) },
    opacity: { value: 1 },
    map: { value: null },
    uvTransform: { value: /* @__PURE__ */ new xt() },
    uv2Transform: { value: /* @__PURE__ */ new xt() },
    alphaMap: { value: null },
    alphaTest: { value: 0 }
  },
  specularmap: {
    specularMap: { value: null }
  },
  envmap: {
    envMap: { value: null },
    flipEnvMap: { value: -1 },
    reflectivity: { value: 1 },
    ior: { value: 1.5 },
    refractionRatio: { value: 0.98 }
  },
  aomap: {
    aoMap: { value: null },
    aoMapIntensity: { value: 1 }
  },
  lightmap: {
    lightMap: { value: null },
    lightMapIntensity: { value: 1 }
  },
  emissivemap: {
    emissiveMap: { value: null }
  },
  bumpmap: {
    bumpMap: { value: null },
    bumpScale: { value: 1 }
  },
  normalmap: {
    normalMap: { value: null },
    normalScale: { value: /* @__PURE__ */ new ye(1, 1) }
  },
  displacementmap: {
    displacementMap: { value: null },
    displacementScale: { value: 1 },
    displacementBias: { value: 0 }
  },
  roughnessmap: {
    roughnessMap: { value: null }
  },
  metalnessmap: {
    metalnessMap: { value: null }
  },
  gradientmap: {
    gradientMap: { value: null }
  },
  fog: {
    fogDensity: { value: 25e-5 },
    fogNear: { value: 1 },
    fogFar: { value: 2e3 },
    fogColor: { value: /* @__PURE__ */ new Ee(16777215) }
  },
  lights: {
    ambientLightColor: { value: [] },
    lightProbe: { value: [] },
    directionalLights: { value: [], properties: {
      direction: {},
      color: {}
    } },
    directionalLightShadows: { value: [], properties: {
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    directionalShadowMap: { value: [] },
    directionalShadowMatrix: { value: [] },
    spotLights: { value: [], properties: {
      color: {},
      position: {},
      direction: {},
      distance: {},
      coneCos: {},
      penumbraCos: {},
      decay: {}
    } },
    spotLightShadows: { value: [], properties: {
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    spotLightMap: { value: [] },
    spotShadowMap: { value: [] },
    spotLightMatrix: { value: [] },
    pointLights: { value: [], properties: {
      color: {},
      position: {},
      decay: {},
      distance: {}
    } },
    pointLightShadows: { value: [], properties: {
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {},
      shadowCameraNear: {},
      shadowCameraFar: {}
    } },
    pointShadowMap: { value: [] },
    pointShadowMatrix: { value: [] },
    hemisphereLights: { value: [], properties: {
      direction: {},
      skyColor: {},
      groundColor: {}
    } },
    rectAreaLights: { value: [], properties: {
      color: {},
      position: {},
      width: {},
      height: {}
    } },
    ltc_1: { value: null },
    ltc_2: { value: null }
  },
  points: {
    diffuse: { value: /* @__PURE__ */ new Ee(16777215) },
    opacity: { value: 1 },
    size: { value: 1 },
    scale: { value: 1 },
    map: { value: null },
    alphaMap: { value: null },
    alphaTest: { value: 0 },
    uvTransform: { value: /* @__PURE__ */ new xt() }
  },
  sprite: {
    diffuse: { value: /* @__PURE__ */ new Ee(16777215) },
    opacity: { value: 1 },
    center: { value: /* @__PURE__ */ new ye(0.5, 0.5) },
    rotation: { value: 0 },
    map: { value: null },
    alphaMap: { value: null },
    alphaTest: { value: 0 },
    uvTransform: { value: /* @__PURE__ */ new xt() }
  }
}, Ft = {
  basic: {
    uniforms: /* @__PURE__ */ lt([
      ie.common,
      ie.specularmap,
      ie.envmap,
      ie.aomap,
      ie.lightmap,
      ie.fog
    ]),
    vertexShader: Se.meshbasic_vert,
    fragmentShader: Se.meshbasic_frag
  },
  lambert: {
    uniforms: /* @__PURE__ */ lt([
      ie.common,
      ie.specularmap,
      ie.envmap,
      ie.aomap,
      ie.lightmap,
      ie.emissivemap,
      ie.bumpmap,
      ie.normalmap,
      ie.displacementmap,
      ie.fog,
      ie.lights,
      {
        emissive: { value: /* @__PURE__ */ new Ee(0) }
      }
    ]),
    vertexShader: Se.meshlambert_vert,
    fragmentShader: Se.meshlambert_frag
  },
  phong: {
    uniforms: /* @__PURE__ */ lt([
      ie.common,
      ie.specularmap,
      ie.envmap,
      ie.aomap,
      ie.lightmap,
      ie.emissivemap,
      ie.bumpmap,
      ie.normalmap,
      ie.displacementmap,
      ie.fog,
      ie.lights,
      {
        emissive: { value: /* @__PURE__ */ new Ee(0) },
        specular: { value: /* @__PURE__ */ new Ee(1118481) },
        shininess: { value: 30 }
      }
    ]),
    vertexShader: Se.meshphong_vert,
    fragmentShader: Se.meshphong_frag
  },
  standard: {
    uniforms: /* @__PURE__ */ lt([
      ie.common,
      ie.envmap,
      ie.aomap,
      ie.lightmap,
      ie.emissivemap,
      ie.bumpmap,
      ie.normalmap,
      ie.displacementmap,
      ie.roughnessmap,
      ie.metalnessmap,
      ie.fog,
      ie.lights,
      {
        emissive: { value: /* @__PURE__ */ new Ee(0) },
        roughness: { value: 1 },
        metalness: { value: 0 },
        envMapIntensity: { value: 1 }
      }
    ]),
    vertexShader: Se.meshphysical_vert,
    fragmentShader: Se.meshphysical_frag
  },
  toon: {
    uniforms: /* @__PURE__ */ lt([
      ie.common,
      ie.aomap,
      ie.lightmap,
      ie.emissivemap,
      ie.bumpmap,
      ie.normalmap,
      ie.displacementmap,
      ie.gradientmap,
      ie.fog,
      ie.lights,
      {
        emissive: { value: /* @__PURE__ */ new Ee(0) }
      }
    ]),
    vertexShader: Se.meshtoon_vert,
    fragmentShader: Se.meshtoon_frag
  },
  matcap: {
    uniforms: /* @__PURE__ */ lt([
      ie.common,
      ie.bumpmap,
      ie.normalmap,
      ie.displacementmap,
      ie.fog,
      {
        matcap: { value: null }
      }
    ]),
    vertexShader: Se.meshmatcap_vert,
    fragmentShader: Se.meshmatcap_frag
  },
  points: {
    uniforms: /* @__PURE__ */ lt([
      ie.points,
      ie.fog
    ]),
    vertexShader: Se.points_vert,
    fragmentShader: Se.points_frag
  },
  dashed: {
    uniforms: /* @__PURE__ */ lt([
      ie.common,
      ie.fog,
      {
        scale: { value: 1 },
        dashSize: { value: 1 },
        totalSize: { value: 2 }
      }
    ]),
    vertexShader: Se.linedashed_vert,
    fragmentShader: Se.linedashed_frag
  },
  depth: {
    uniforms: /* @__PURE__ */ lt([
      ie.common,
      ie.displacementmap
    ]),
    vertexShader: Se.depth_vert,
    fragmentShader: Se.depth_frag
  },
  normal: {
    uniforms: /* @__PURE__ */ lt([
      ie.common,
      ie.bumpmap,
      ie.normalmap,
      ie.displacementmap,
      {
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Se.meshnormal_vert,
    fragmentShader: Se.meshnormal_frag
  },
  sprite: {
    uniforms: /* @__PURE__ */ lt([
      ie.sprite,
      ie.fog
    ]),
    vertexShader: Se.sprite_vert,
    fragmentShader: Se.sprite_frag
  },
  background: {
    uniforms: {
      uvTransform: { value: /* @__PURE__ */ new xt() },
      t2D: { value: null },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: Se.background_vert,
    fragmentShader: Se.background_frag
  },
  backgroundCube: {
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 },
      backgroundBlurriness: { value: 0 },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: Se.backgroundCube_vert,
    fragmentShader: Se.backgroundCube_frag
  },
  cube: {
    uniforms: {
      tCube: { value: null },
      tFlip: { value: -1 },
      opacity: { value: 1 }
    },
    vertexShader: Se.cube_vert,
    fragmentShader: Se.cube_frag
  },
  equirect: {
    uniforms: {
      tEquirect: { value: null }
    },
    vertexShader: Se.equirect_vert,
    fragmentShader: Se.equirect_frag
  },
  distanceRGBA: {
    uniforms: /* @__PURE__ */ lt([
      ie.common,
      ie.displacementmap,
      {
        referencePosition: { value: /* @__PURE__ */ new D() },
        nearDistance: { value: 1 },
        farDistance: { value: 1e3 }
      }
    ]),
    vertexShader: Se.distanceRGBA_vert,
    fragmentShader: Se.distanceRGBA_frag
  },
  shadow: {
    uniforms: /* @__PURE__ */ lt([
      ie.lights,
      ie.fog,
      {
        color: { value: /* @__PURE__ */ new Ee(0) },
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Se.shadow_vert,
    fragmentShader: Se.shadow_frag
  }
};
Ft.physical = {
  uniforms: /* @__PURE__ */ lt([
    Ft.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatNormalScale: { value: /* @__PURE__ */ new ye(1, 1) },
      clearcoatNormalMap: { value: null },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      sheen: { value: 0 },
      sheenColor: { value: /* @__PURE__ */ new Ee(0) },
      sheenColorMap: { value: null },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionSamplerSize: { value: /* @__PURE__ */ new ye() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: /* @__PURE__ */ new Ee(0) },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularColor: { value: /* @__PURE__ */ new Ee(1, 1, 1) },
      specularColorMap: { value: null }
    }
  ]),
  vertexShader: Se.meshphysical_vert,
  fragmentShader: Se.meshphysical_frag
};
const Oi = { r: 0, b: 0, g: 0 };
function au(a, e, t, n, i, s, o) {
  const r = new Ee(0);
  let c = s === !0 ? 0 : 1, l, h, u = null, d = 0, m = null;
  function g(f, x) {
    let T = !1, y = x.isScene === !0 ? x.background : null;
    y && y.isTexture && (y = (x.backgroundBlurriness > 0 ? t : e).get(y));
    const b = a.xr, w = b.getSession && b.getSession();
    w && w.environmentBlendMode === "additive" && (y = null), y === null ? p(r, c) : y && y.isColor && (p(y, 1), T = !0), (a.autoClear || T) && a.clear(a.autoClearColor, a.autoClearDepth, a.autoClearStencil), y && (y.isCubeTexture || y.mapping === Yi) ? (h === void 0 && (h = new Tt(
      new jn(1, 1, 1),
      new yn({
        name: "BackgroundCubeMaterial",
        uniforms: qn(Ft.backgroundCube.uniforms),
        vertexShader: Ft.backgroundCube.vertexShader,
        fragmentShader: Ft.backgroundCube.fragmentShader,
        side: Et,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), h.geometry.deleteAttribute("normal"), h.geometry.deleteAttribute("uv"), h.onBeforeRender = function(C, I, _) {
      this.matrixWorld.copyPosition(_.matrixWorld);
    }, Object.defineProperty(h.material, "envMap", {
      get: function() {
        return this.uniforms.envMap.value;
      }
    }), i.update(h)), h.material.uniforms.envMap.value = y, h.material.uniforms.flipEnvMap.value = y.isCubeTexture && y.isRenderTargetTexture === !1 ? -1 : 1, h.material.uniforms.backgroundBlurriness.value = x.backgroundBlurriness, h.material.uniforms.backgroundIntensity.value = x.backgroundIntensity, h.material.toneMapped = y.encoding !== ze, (u !== y || d !== y.version || m !== a.toneMapping) && (h.material.needsUpdate = !0, u = y, d = y.version, m = a.toneMapping), h.layers.enableAll(), f.unshift(h, h.geometry, h.material, 0, 0, null)) : y && y.isTexture && (l === void 0 && (l = new Tt(
      new Zi(2, 2),
      new yn({
        name: "BackgroundMaterial",
        uniforms: qn(Ft.background.uniforms),
        vertexShader: Ft.background.vertexShader,
        fragmentShader: Ft.background.fragmentShader,
        side: en,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), l.geometry.deleteAttribute("normal"), Object.defineProperty(l.material, "map", {
      get: function() {
        return this.uniforms.t2D.value;
      }
    }), i.update(l)), l.material.uniforms.t2D.value = y, l.material.uniforms.backgroundIntensity.value = x.backgroundIntensity, l.material.toneMapped = y.encoding !== ze, y.matrixAutoUpdate === !0 && y.updateMatrix(), l.material.uniforms.uvTransform.value.copy(y.matrix), (u !== y || d !== y.version || m !== a.toneMapping) && (l.material.needsUpdate = !0, u = y, d = y.version, m = a.toneMapping), l.layers.enableAll(), f.unshift(l, l.geometry, l.material, 0, 0, null));
  }
  function p(f, x) {
    f.getRGB(Oi, Ha(a)), n.buffers.color.setClear(Oi.r, Oi.g, Oi.b, x, o);
  }
  return {
    getClearColor: function() {
      return r;
    },
    setClearColor: function(f, x = 1) {
      r.set(f), c = x, p(r, c);
    },
    getClearAlpha: function() {
      return c;
    },
    setClearAlpha: function(f) {
      c = f, p(r, c);
    },
    render: g
  };
}
function ou(a, e, t, n) {
  const i = a.getParameter(34921), s = n.isWebGL2 ? null : e.get("OES_vertex_array_object"), o = n.isWebGL2 || s !== null, r = {}, c = f(null);
  let l = c, h = !1;
  function u(N, X, Z, Q, q) {
    let ee = !1;
    if (o) {
      const Y = p(Q, Z, X);
      l !== Y && (l = Y, m(l.object)), ee = x(N, Q, Z, q), ee && T(N, Q, Z, q);
    } else {
      const Y = X.wireframe === !0;
      (l.geometry !== Q.id || l.program !== Z.id || l.wireframe !== Y) && (l.geometry = Q.id, l.program = Z.id, l.wireframe = Y, ee = !0);
    }
    q !== null && t.update(q, 34963), (ee || h) && (h = !1, _(N, X, Z, Q), q !== null && a.bindBuffer(34963, t.get(q).buffer));
  }
  function d() {
    return n.isWebGL2 ? a.createVertexArray() : s.createVertexArrayOES();
  }
  function m(N) {
    return n.isWebGL2 ? a.bindVertexArray(N) : s.bindVertexArrayOES(N);
  }
  function g(N) {
    return n.isWebGL2 ? a.deleteVertexArray(N) : s.deleteVertexArrayOES(N);
  }
  function p(N, X, Z) {
    const Q = Z.wireframe === !0;
    let q = r[N.id];
    q === void 0 && (q = {}, r[N.id] = q);
    let ee = q[X.id];
    ee === void 0 && (ee = {}, q[X.id] = ee);
    let Y = ee[Q];
    return Y === void 0 && (Y = f(d()), ee[Q] = Y), Y;
  }
  function f(N) {
    const X = [], Z = [], Q = [];
    for (let q = 0; q < i; q++)
      X[q] = 0, Z[q] = 0, Q[q] = 0;
    return {
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: X,
      enabledAttributes: Z,
      attributeDivisors: Q,
      object: N,
      attributes: {},
      index: null
    };
  }
  function x(N, X, Z, Q) {
    const q = l.attributes, ee = X.attributes;
    let Y = 0;
    const V = Z.getAttributes();
    for (const z in V)
      if (V[z].location >= 0) {
        const te = q[z];
        let re = ee[z];
        if (re === void 0 && (z === "instanceMatrix" && N.instanceMatrix && (re = N.instanceMatrix), z === "instanceColor" && N.instanceColor && (re = N.instanceColor)), te === void 0 || te.attribute !== re || re && te.data !== re.data)
          return !0;
        Y++;
      }
    return l.attributesNum !== Y || l.index !== Q;
  }
  function T(N, X, Z, Q) {
    const q = {}, ee = X.attributes;
    let Y = 0;
    const V = Z.getAttributes();
    for (const z in V)
      if (V[z].location >= 0) {
        let te = ee[z];
        te === void 0 && (z === "instanceMatrix" && N.instanceMatrix && (te = N.instanceMatrix), z === "instanceColor" && N.instanceColor && (te = N.instanceColor));
        const re = {};
        re.attribute = te, te && te.data && (re.data = te.data), q[z] = re, Y++;
      }
    l.attributes = q, l.attributesNum = Y, l.index = Q;
  }
  function y() {
    const N = l.newAttributes;
    for (let X = 0, Z = N.length; X < Z; X++)
      N[X] = 0;
  }
  function b(N) {
    w(N, 0);
  }
  function w(N, X) {
    const Z = l.newAttributes, Q = l.enabledAttributes, q = l.attributeDivisors;
    Z[N] = 1, Q[N] === 0 && (a.enableVertexAttribArray(N), Q[N] = 1), q[N] !== X && ((n.isWebGL2 ? a : e.get("ANGLE_instanced_arrays"))[n.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](N, X), q[N] = X);
  }
  function C() {
    const N = l.newAttributes, X = l.enabledAttributes;
    for (let Z = 0, Q = X.length; Z < Q; Z++)
      X[Z] !== N[Z] && (a.disableVertexAttribArray(Z), X[Z] = 0);
  }
  function I(N, X, Z, Q, q, ee) {
    n.isWebGL2 === !0 && (Z === 5124 || Z === 5125) ? a.vertexAttribIPointer(N, X, Z, q, ee) : a.vertexAttribPointer(N, X, Z, Q, q, ee);
  }
  function _(N, X, Z, Q) {
    if (n.isWebGL2 === !1 && (N.isInstancedMesh || Q.isInstancedBufferGeometry) && e.get("ANGLE_instanced_arrays") === null)
      return;
    y();
    const q = Q.attributes, ee = Z.getAttributes(), Y = X.defaultAttributeValues;
    for (const V in ee) {
      const z = ee[V];
      if (z.location >= 0) {
        let se = q[V];
        if (se === void 0 && (V === "instanceMatrix" && N.instanceMatrix && (se = N.instanceMatrix), V === "instanceColor" && N.instanceColor && (se = N.instanceColor)), se !== void 0) {
          const te = se.normalized, re = se.itemSize, H = t.get(se);
          if (H === void 0)
            continue;
          const Ae = H.buffer, de = H.type, _e = H.bytesPerElement;
          if (se.isInterleavedBufferAttribute) {
            const ue = se.data, Fe = ue.stride, be = se.offset;
            if (ue.isInstancedInterleavedBuffer) {
              for (let xe = 0; xe < z.locationSize; xe++)
                w(z.location + xe, ue.meshPerAttribute);
              N.isInstancedMesh !== !0 && Q._maxInstanceCount === void 0 && (Q._maxInstanceCount = ue.meshPerAttribute * ue.count);
            } else
              for (let xe = 0; xe < z.locationSize; xe++)
                b(z.location + xe);
            a.bindBuffer(34962, Ae);
            for (let xe = 0; xe < z.locationSize; xe++)
              I(
                z.location + xe,
                re / z.locationSize,
                de,
                te,
                Fe * _e,
                (be + re / z.locationSize * xe) * _e
              );
          } else {
            if (se.isInstancedBufferAttribute) {
              for (let ue = 0; ue < z.locationSize; ue++)
                w(z.location + ue, se.meshPerAttribute);
              N.isInstancedMesh !== !0 && Q._maxInstanceCount === void 0 && (Q._maxInstanceCount = se.meshPerAttribute * se.count);
            } else
              for (let ue = 0; ue < z.locationSize; ue++)
                b(z.location + ue);
            a.bindBuffer(34962, Ae);
            for (let ue = 0; ue < z.locationSize; ue++)
              I(
                z.location + ue,
                re / z.locationSize,
                de,
                te,
                re * _e,
                re / z.locationSize * ue * _e
              );
          }
        } else if (Y !== void 0) {
          const te = Y[V];
          if (te !== void 0)
            switch (te.length) {
              case 2:
                a.vertexAttrib2fv(z.location, te);
                break;
              case 3:
                a.vertexAttrib3fv(z.location, te);
                break;
              case 4:
                a.vertexAttrib4fv(z.location, te);
                break;
              default:
                a.vertexAttrib1fv(z.location, te);
            }
        }
      }
    }
    C();
  }
  function A() {
    J();
    for (const N in r) {
      const X = r[N];
      for (const Z in X) {
        const Q = X[Z];
        for (const q in Q)
          g(Q[q].object), delete Q[q];
        delete X[Z];
      }
      delete r[N];
    }
  }
  function F(N) {
    if (r[N.id] === void 0)
      return;
    const X = r[N.id];
    for (const Z in X) {
      const Q = X[Z];
      for (const q in Q)
        g(Q[q].object), delete Q[q];
      delete X[Z];
    }
    delete r[N.id];
  }
  function j(N) {
    for (const X in r) {
      const Z = r[X];
      if (Z[N.id] === void 0)
        continue;
      const Q = Z[N.id];
      for (const q in Q)
        g(Q[q].object), delete Q[q];
      delete Z[N.id];
    }
  }
  function J() {
    O(), h = !0, l !== c && (l = c, m(l.object));
  }
  function O() {
    c.geometry = null, c.program = null, c.wireframe = !1;
  }
  return {
    setup: u,
    reset: J,
    resetDefaultState: O,
    dispose: A,
    releaseStatesOfGeometry: F,
    releaseStatesOfProgram: j,
    initAttributes: y,
    enableAttribute: b,
    disableUnusedAttributes: C
  };
}
function lu(a, e, t, n) {
  const i = n.isWebGL2;
  let s;
  function o(l) {
    s = l;
  }
  function r(l, h) {
    a.drawArrays(s, l, h), t.update(h, s, 1);
  }
  function c(l, h, u) {
    if (u === 0)
      return;
    let d, m;
    if (i)
      d = a, m = "drawArraysInstanced";
    else if (d = e.get("ANGLE_instanced_arrays"), m = "drawArraysInstancedANGLE", d === null) {
      console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      return;
    }
    d[m](s, l, h, u), t.update(h, s, u);
  }
  this.setMode = o, this.render = r, this.renderInstances = c;
}
function cu(a, e, t) {
  let n;
  function i() {
    if (n !== void 0)
      return n;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const I = e.get("EXT_texture_filter_anisotropic");
      n = a.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else
      n = 0;
    return n;
  }
  function s(I) {
    if (I === "highp") {
      if (a.getShaderPrecisionFormat(35633, 36338).precision > 0 && a.getShaderPrecisionFormat(35632, 36338).precision > 0)
        return "highp";
      I = "mediump";
    }
    return I === "mediump" && a.getShaderPrecisionFormat(35633, 36337).precision > 0 && a.getShaderPrecisionFormat(35632, 36337).precision > 0 ? "mediump" : "lowp";
  }
  const o = typeof WebGL2RenderingContext < "u" && a instanceof WebGL2RenderingContext || typeof WebGL2ComputeRenderingContext < "u" && a instanceof WebGL2ComputeRenderingContext;
  let r = t.precision !== void 0 ? t.precision : "highp";
  const c = s(r);
  c !== r && (console.warn("THREE.WebGLRenderer:", r, "not supported, using", c, "instead."), r = c);
  const l = o || e.has("WEBGL_draw_buffers"), h = t.logarithmicDepthBuffer === !0, u = a.getParameter(34930), d = a.getParameter(35660), m = a.getParameter(3379), g = a.getParameter(34076), p = a.getParameter(34921), f = a.getParameter(36347), x = a.getParameter(36348), T = a.getParameter(36349), y = d > 0, b = o || e.has("OES_texture_float"), w = y && b, C = o ? a.getParameter(36183) : 0;
  return {
    isWebGL2: o,
    drawBuffers: l,
    getMaxAnisotropy: i,
    getMaxPrecision: s,
    precision: r,
    logarithmicDepthBuffer: h,
    maxTextures: u,
    maxVertexTextures: d,
    maxTextureSize: m,
    maxCubemapSize: g,
    maxAttributes: p,
    maxVertexUniforms: f,
    maxVaryings: x,
    maxFragmentUniforms: T,
    vertexTextures: y,
    floatFragmentTextures: b,
    floatVertexTextures: w,
    maxSamples: C
  };
}
function hu(a) {
  const e = this;
  let t = null, n = 0, i = !1, s = !1;
  const o = new hn(), r = new xt(), c = { value: null, needsUpdate: !1 };
  this.uniform = c, this.numPlanes = 0, this.numIntersection = 0, this.init = function(u, d, m) {
    const g = u.length !== 0 || d || n !== 0 || i;
    return i = d, t = h(u, m, 0), n = u.length, g;
  }, this.beginShadows = function() {
    s = !0, h(null);
  }, this.endShadows = function() {
    s = !1, l();
  }, this.setState = function(u, d, m) {
    const g = u.clippingPlanes, p = u.clipIntersection, f = u.clipShadows, x = a.get(u);
    if (!i || g === null || g.length === 0 || s && !f)
      s ? h(null) : l();
    else {
      const T = s ? 0 : n, y = T * 4;
      let b = x.clippingState || null;
      c.value = b, b = h(g, d, y, m);
      for (let w = 0; w !== y; ++w)
        b[w] = t[w];
      x.clippingState = b, this.numIntersection = p ? this.numPlanes : 0, this.numPlanes += T;
    }
  };
  function l() {
    c.value !== t && (c.value = t, c.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0;
  }
  function h(u, d, m, g) {
    const p = u !== null ? u.length : 0;
    let f = null;
    if (p !== 0) {
      if (f = c.value, g !== !0 || f === null) {
        const x = m + p * 4, T = d.matrixWorldInverse;
        r.getNormalMatrix(T), (f === null || f.length < x) && (f = new Float32Array(x));
        for (let y = 0, b = m; y !== p; ++y, b += 4)
          o.copy(u[y]).applyMatrix4(T, r), o.normal.toArray(f, b), f[b + 3] = o.constant;
      }
      c.value = f, c.needsUpdate = !0;
    }
    return e.numPlanes = p, e.numIntersection = 0, f;
  }
}
function uu(a) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(o, r) {
    return r === Bs ? o.mapping = Hn : r === Gs && (o.mapping = Wn), o;
  }
  function n(o) {
    if (o && o.isTexture && o.isRenderTargetTexture === !1) {
      const r = o.mapping;
      if (r === Bs || r === Gs)
        if (e.has(o)) {
          const c = e.get(o).texture;
          return t(c, o.mapping);
        } else {
          const c = o.image;
          if (c && c.height > 0) {
            const l = new wl(c.height / 2);
            return l.fromEquirectangularTexture(a, o), e.set(o, l), o.addEventListener("dispose", i), t(l.texture, o.mapping);
          } else
            return null;
        }
    }
    return o;
  }
  function i(o) {
    const r = o.target;
    r.removeEventListener("dispose", i);
    const c = e.get(r);
    c !== void 0 && (e.delete(r), c.dispose());
  }
  function s() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: s
  };
}
class ja extends Wa {
  constructor(e = -1, t = 1, n = 1, i = -1, s = 0.1, o = 2e3) {
    super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = i, this.near = s, this.far = o, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this;
  }
  setViewOffset(e, t, n, i, s, o) {
    this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = s, this.view.height = o, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, i = (this.top + this.bottom) / 2;
    let s = n - e, o = n + e, r = i + t, c = i - t;
    if (this.view !== null && this.view.enabled) {
      const l = (this.right - this.left) / this.view.fullWidth / this.zoom, h = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      s += l * this.view.offsetX, o = s + l * this.view.width, r -= h * this.view.offsetY, c = r - h * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(s, o, r, c, this.near, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
  }
}
const Gn = 4, Xr = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], dn = 20, Ls = /* @__PURE__ */ new ja(), qr = /* @__PURE__ */ new Ee();
let Ps = null;
const un = (1 + Math.sqrt(5)) / 2, zn = 1 / un, jr = [
  /* @__PURE__ */ new D(1, 1, 1),
  /* @__PURE__ */ new D(-1, 1, 1),
  /* @__PURE__ */ new D(1, 1, -1),
  /* @__PURE__ */ new D(-1, 1, -1),
  /* @__PURE__ */ new D(0, un, zn),
  /* @__PURE__ */ new D(0, un, -zn),
  /* @__PURE__ */ new D(zn, 0, un),
  /* @__PURE__ */ new D(-zn, 0, un),
  /* @__PURE__ */ new D(un, zn, 0),
  /* @__PURE__ */ new D(-un, zn, 0)
];
class Yr {
  constructor(e) {
    this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
  }
  fromScene(e, t = 0, n = 0.1, i = 100) {
    Ps = this._renderer.getRenderTarget(), this._setSize(256);
    const s = this._allocateTargets();
    return s.depthBuffer = !0, this._sceneToCubeUV(e, n, i, s), t > 0 && this._blur(s, 0, 0, t), this._applyPMREM(s), this._cleanup(s), s;
  }
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  compileCubemapShader() {
    this._cubemapMaterial === null && (this._cubemapMaterial = Kr(), this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = $r(), this._compileMaterial(this._equirectMaterial));
  }
  dispose() {
    this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose();
  }
  _setSize(e) {
    this._lodMax = Math.floor(Math.log2(e)), this._cubeSize = Math.pow(2, this._lodMax);
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodPlanes.length; e++)
      this._lodPlanes[e].dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(Ps), e.scissorTest = !1, zi(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === Hn || e.mapping === Wn ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), Ps = this._renderer.getRenderTarget();
    const n = t || this._allocateTargets();
    return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n;
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, n = {
      magFilter: St,
      minFilter: St,
      generateMipmaps: !1,
      type: hi,
      format: Rt,
      encoding: xn,
      depthBuffer: !1
    }, i = Zr(e, t, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = Zr(e, t, n);
      const { _lodMax: s } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = du(s)), this._blurMaterial = fu(s, e, t);
    }
    return i;
  }
  _compileMaterial(e) {
    const t = new Tt(this._lodPlanes[0], e);
    this._renderer.compile(t, Ls);
  }
  _sceneToCubeUV(e, t, n, i) {
    const r = new wt(90, 1, t, n), c = [1, -1, 1, 1, 1, 1], l = [1, 1, 1, -1, -1, -1], h = this._renderer, u = h.autoClear, d = h.toneMapping;
    h.getClearColor(qr), h.toneMapping = Yt, h.autoClear = !1;
    const m = new Ga({
      name: "PMREM.Background",
      side: Et,
      depthWrite: !1,
      depthTest: !1
    }), g = new Tt(new jn(), m);
    let p = !1;
    const f = e.background;
    f ? f.isColor && (m.color.copy(f), e.background = null, p = !0) : (m.color.copy(qr), p = !0);
    for (let x = 0; x < 6; x++) {
      const T = x % 3;
      T === 0 ? (r.up.set(0, c[x], 0), r.lookAt(l[x], 0, 0)) : T === 1 ? (r.up.set(0, 0, c[x]), r.lookAt(0, l[x], 0)) : (r.up.set(0, c[x], 0), r.lookAt(0, 0, l[x]));
      const y = this._cubeSize;
      zi(i, T * y, x > 2 ? y : 0, y, y), h.setRenderTarget(i), p && h.render(g, r), h.render(e, r);
    }
    g.geometry.dispose(), g.material.dispose(), h.toneMapping = d, h.autoClear = u, e.background = f;
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer, i = e.mapping === Hn || e.mapping === Wn;
    i ? (this._cubemapMaterial === null && (this._cubemapMaterial = Kr()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = $r());
    const s = i ? this._cubemapMaterial : this._equirectMaterial, o = new Tt(this._lodPlanes[0], s), r = s.uniforms;
    r.envMap.value = e;
    const c = this._cubeSize;
    zi(t, 0, 0, 3 * c, 2 * c), n.setRenderTarget(t), n.render(o, Ls);
  }
  _applyPMREM(e) {
    const t = this._renderer, n = t.autoClear;
    t.autoClear = !1;
    for (let i = 1; i < this._lodPlanes.length; i++) {
      const s = Math.sqrt(this._sigmas[i] * this._sigmas[i] - this._sigmas[i - 1] * this._sigmas[i - 1]), o = jr[(i - 1) % jr.length];
      this._blur(e, i - 1, i, s, o);
    }
    t.autoClear = n;
  }
  _blur(e, t, n, i, s) {
    const o = this._pingPongRenderTarget;
    this._halfBlur(
      e,
      o,
      t,
      n,
      i,
      "latitudinal",
      s
    ), this._halfBlur(
      o,
      e,
      n,
      n,
      i,
      "longitudinal",
      s
    );
  }
  _halfBlur(e, t, n, i, s, o, r) {
    const c = this._renderer, l = this._blurMaterial;
    o !== "latitudinal" && o !== "longitudinal" && console.error(
      "blur direction must be either latitudinal or longitudinal!"
    );
    const h = 3, u = new Tt(this._lodPlanes[i], l), d = l.uniforms, m = this._sizeLods[n] - 1, g = isFinite(s) ? Math.PI / (2 * m) : 2 * Math.PI / (2 * dn - 1), p = s / g, f = isFinite(s) ? 1 + Math.floor(h * p) : dn;
    f > dn && console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${dn}`);
    const x = [];
    let T = 0;
    for (let I = 0; I < dn; ++I) {
      const _ = I / p, A = Math.exp(-_ * _ / 2);
      x.push(A), I === 0 ? T += A : I < f && (T += 2 * A);
    }
    for (let I = 0; I < x.length; I++)
      x[I] = x[I] / T;
    d.envMap.value = e.texture, d.samples.value = f, d.weights.value = x, d.latitudinal.value = o === "latitudinal", r && (d.poleAxis.value = r);
    const { _lodMax: y } = this;
    d.dTheta.value = g, d.mipInt.value = y - n;
    const b = this._sizeLods[i], w = 3 * b * (i > y - Gn ? i - y + Gn : 0), C = 4 * (this._cubeSize - b);
    zi(t, w, C, 3 * b, 2 * b), c.setRenderTarget(t), c.render(u, Ls);
  }
}
function du(a) {
  const e = [], t = [], n = [];
  let i = a;
  const s = a - Gn + 1 + Xr.length;
  for (let o = 0; o < s; o++) {
    const r = Math.pow(2, i);
    t.push(r);
    let c = 1 / r;
    o > a - Gn ? c = Xr[o - a + Gn - 1] : o === 0 && (c = 0), n.push(c);
    const l = 1 / (r - 2), h = -l, u = 1 + l, d = [h, h, u, h, u, u, h, h, u, u, h, u], m = 6, g = 6, p = 3, f = 2, x = 1, T = new Float32Array(p * g * m), y = new Float32Array(f * g * m), b = new Float32Array(x * g * m);
    for (let C = 0; C < m; C++) {
      const I = C % 3 * 2 / 3 - 1, _ = C > 2 ? 0 : -1, A = [
        I,
        _,
        0,
        I + 2 / 3,
        _,
        0,
        I + 2 / 3,
        _ + 1,
        0,
        I,
        _,
        0,
        I + 2 / 3,
        _ + 1,
        0,
        I,
        _ + 1,
        0
      ];
      T.set(A, p * g * C), y.set(d, f * g * C);
      const F = [C, C, C, C, C, C];
      b.set(F, x * g * C);
    }
    const w = new At();
    w.setAttribute("position", new Nt(T, p)), w.setAttribute("uv", new Nt(y, f)), w.setAttribute("faceIndex", new Nt(b, x)), e.push(w), i > Gn && i--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: n };
}
function Zr(a, e, t) {
  const n = new vn(a, e, t);
  return n.texture.mapping = Yi, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n;
}
function zi(a, e, t, n, i) {
  a.viewport.set(e, t, n, i), a.scissor.set(e, t, n, i);
}
function fu(a, e, t) {
  const n = new Float32Array(dn), i = new D(0, 1, 0);
  return new yn({
    name: "SphericalGaussianBlur",
    defines: {
      n: dn,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${a}.0`
    },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: n },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: i }
    },
    vertexShader: Js(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,
    blending: Qt,
    depthTest: !1,
    depthWrite: !1
  });
}
function $r() {
  return new yn({
    name: "EquirectangularToCubeUV",
    uniforms: {
      envMap: { value: null }
    },
    vertexShader: Js(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,
    blending: Qt,
    depthTest: !1,
    depthWrite: !1
  });
}
function Kr() {
  return new yn({
    name: "CubemapToCubeUV",
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 }
    },
    vertexShader: Js(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,
    blending: Qt,
    depthTest: !1,
    depthWrite: !1
  });
}
function Js() {
  return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`;
}
function pu(a) {
  let e = /* @__PURE__ */ new WeakMap(), t = null;
  function n(r) {
    if (r && r.isTexture) {
      const c = r.mapping, l = c === Bs || c === Gs, h = c === Hn || c === Wn;
      if (l || h)
        if (r.isRenderTargetTexture && r.needsPMREMUpdate === !0) {
          r.needsPMREMUpdate = !1;
          let u = e.get(r);
          return t === null && (t = new Yr(a)), u = l ? t.fromEquirectangular(r, u) : t.fromCubemap(r, u), e.set(r, u), u.texture;
        } else {
          if (e.has(r))
            return e.get(r).texture;
          {
            const u = r.image;
            if (l && u && u.height > 0 || h && u && i(u)) {
              t === null && (t = new Yr(a));
              const d = l ? t.fromEquirectangular(r) : t.fromCubemap(r);
              return e.set(r, d), r.addEventListener("dispose", s), d.texture;
            } else
              return null;
          }
        }
    }
    return r;
  }
  function i(r) {
    let c = 0;
    const l = 6;
    for (let h = 0; h < l; h++)
      r[h] !== void 0 && c++;
    return c === l;
  }
  function s(r) {
    const c = r.target;
    c.removeEventListener("dispose", s);
    const l = e.get(c);
    l !== void 0 && (e.delete(c), l.dispose());
  }
  function o() {
    e = /* @__PURE__ */ new WeakMap(), t !== null && (t.dispose(), t = null);
  }
  return {
    get: n,
    dispose: o
  };
}
function mu(a) {
  const e = {};
  function t(n) {
    if (e[n] !== void 0)
      return e[n];
    let i;
    switch (n) {
      case "WEBGL_depth_texture":
        i = a.getExtension("WEBGL_depth_texture") || a.getExtension("MOZ_WEBGL_depth_texture") || a.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        i = a.getExtension("EXT_texture_filter_anisotropic") || a.getExtension("MOZ_EXT_texture_filter_anisotropic") || a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        i = a.getExtension("WEBGL_compressed_texture_s3tc") || a.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        i = a.getExtension("WEBGL_compressed_texture_pvrtc") || a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        i = a.getExtension(n);
    }
    return e[n] = i, i;
  }
  return {
    has: function(n) {
      return t(n) !== null;
    },
    init: function(n) {
      n.isWebGL2 ? t("EXT_color_buffer_float") : (t("WEBGL_depth_texture"), t("OES_texture_float"), t("OES_texture_half_float"), t("OES_texture_half_float_linear"), t("OES_standard_derivatives"), t("OES_element_index_uint"), t("OES_vertex_array_object"), t("ANGLE_instanced_arrays")), t("OES_texture_float_linear"), t("EXT_color_buffer_half_float"), t("WEBGL_multisampled_render_to_texture");
    },
    get: function(n) {
      const i = t(n);
      return i === null && console.warn("THREE.WebGLRenderer: " + n + " extension not supported."), i;
    }
  };
}
function gu(a, e, t, n) {
  const i = {}, s = /* @__PURE__ */ new WeakMap();
  function o(u) {
    const d = u.target;
    d.index !== null && e.remove(d.index);
    for (const g in d.attributes)
      e.remove(d.attributes[g]);
    d.removeEventListener("dispose", o), delete i[d.id];
    const m = s.get(d);
    m && (e.remove(m), s.delete(d)), n.releaseStatesOfGeometry(d), d.isInstancedBufferGeometry === !0 && delete d._maxInstanceCount, t.memory.geometries--;
  }
  function r(u, d) {
    return i[d.id] === !0 || (d.addEventListener("dispose", o), i[d.id] = !0, t.memory.geometries++), d;
  }
  function c(u) {
    const d = u.attributes;
    for (const g in d)
      e.update(d[g], 34962);
    const m = u.morphAttributes;
    for (const g in m) {
      const p = m[g];
      for (let f = 0, x = p.length; f < x; f++)
        e.update(p[f], 34962);
    }
  }
  function l(u) {
    const d = [], m = u.index, g = u.attributes.position;
    let p = 0;
    if (m !== null) {
      const T = m.array;
      p = m.version;
      for (let y = 0, b = T.length; y < b; y += 3) {
        const w = T[y + 0], C = T[y + 1], I = T[y + 2];
        d.push(w, C, C, I, I, w);
      }
    } else {
      const T = g.array;
      p = g.version;
      for (let y = 0, b = T.length / 3 - 1; y < b; y += 3) {
        const w = y + 0, C = y + 1, I = y + 2;
        d.push(w, C, C, I, I, w);
      }
    }
    const f = new (Fa(d) ? Va : ka)(d, 1);
    f.version = p;
    const x = s.get(u);
    x && e.remove(x), s.set(u, f);
  }
  function h(u) {
    const d = s.get(u);
    if (d) {
      const m = u.index;
      m !== null && d.version < m.version && l(u);
    } else
      l(u);
    return s.get(u);
  }
  return {
    get: r,
    update: c,
    getWireframeAttribute: h
  };
}
function _u(a, e, t, n) {
  const i = n.isWebGL2;
  let s;
  function o(d) {
    s = d;
  }
  let r, c;
  function l(d) {
    r = d.type, c = d.bytesPerElement;
  }
  function h(d, m) {
    a.drawElements(s, m, r, d * c), t.update(m, s, 1);
  }
  function u(d, m, g) {
    if (g === 0)
      return;
    let p, f;
    if (i)
      p = a, f = "drawElementsInstanced";
    else if (p = e.get("ANGLE_instanced_arrays"), f = "drawElementsInstancedANGLE", p === null) {
      console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      return;
    }
    p[f](s, m, r, d * c, g), t.update(m, s, g);
  }
  this.setMode = o, this.setIndex = l, this.render = h, this.renderInstances = u;
}
function xu(a) {
  const e = {
    geometries: 0,
    textures: 0
  }, t = {
    frame: 0,
    calls: 0,
    triangles: 0,
    points: 0,
    lines: 0
  };
  function n(s, o, r) {
    switch (t.calls++, o) {
      case 4:
        t.triangles += r * (s / 3);
        break;
      case 1:
        t.lines += r * (s / 2);
        break;
      case 3:
        t.lines += r * (s - 1);
        break;
      case 2:
        t.lines += r * s;
        break;
      case 0:
        t.points += r * s;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", o);
        break;
    }
  }
  function i() {
    t.frame++, t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0;
  }
  return {
    memory: e,
    render: t,
    programs: null,
    autoReset: !0,
    reset: i,
    update: n
  };
}
function vu(a, e) {
  return a[0] - e[0];
}
function Mu(a, e) {
  return Math.abs(e[1]) - Math.abs(a[1]);
}
function yu(a, e, t) {
  const n = {}, i = new Float32Array(8), s = /* @__PURE__ */ new WeakMap(), o = new et(), r = [];
  for (let l = 0; l < 8; l++)
    r[l] = [l, 0];
  function c(l, h, u, d) {
    const m = l.morphTargetInfluences;
    if (e.isWebGL2 === !0) {
      const g = h.morphAttributes.position || h.morphAttributes.normal || h.morphAttributes.color, p = g !== void 0 ? g.length : 0;
      let f = s.get(h);
      if (f === void 0 || f.count !== p) {
        let X = function() {
          O.dispose(), s.delete(h), h.removeEventListener("dispose", X);
        };
        f !== void 0 && f.texture.dispose();
        const y = h.morphAttributes.position !== void 0, b = h.morphAttributes.normal !== void 0, w = h.morphAttributes.color !== void 0, C = h.morphAttributes.position || [], I = h.morphAttributes.normal || [], _ = h.morphAttributes.color || [];
        let A = 0;
        y === !0 && (A = 1), b === !0 && (A = 2), w === !0 && (A = 3);
        let F = h.attributes.position.count * A, j = 1;
        F > e.maxTextureSize && (j = Math.ceil(F / e.maxTextureSize), F = e.maxTextureSize);
        const J = new Float32Array(F * j * 4 * p), O = new za(J, F, j, p);
        O.type = pn, O.needsUpdate = !0;
        const N = A * 4;
        for (let Z = 0; Z < p; Z++) {
          const Q = C[Z], q = I[Z], ee = _[Z], Y = F * j * 4 * Z;
          for (let V = 0; V < Q.count; V++) {
            const z = V * N;
            y === !0 && (o.fromBufferAttribute(Q, V), J[Y + z + 0] = o.x, J[Y + z + 1] = o.y, J[Y + z + 2] = o.z, J[Y + z + 3] = 0), b === !0 && (o.fromBufferAttribute(q, V), J[Y + z + 4] = o.x, J[Y + z + 5] = o.y, J[Y + z + 6] = o.z, J[Y + z + 7] = 0), w === !0 && (o.fromBufferAttribute(ee, V), J[Y + z + 8] = o.x, J[Y + z + 9] = o.y, J[Y + z + 10] = o.z, J[Y + z + 11] = ee.itemSize === 4 ? o.w : 1);
          }
        }
        f = {
          count: p,
          texture: O,
          size: new ye(F, j)
        }, s.set(h, f), h.addEventListener("dispose", X);
      }
      let x = 0;
      for (let y = 0; y < m.length; y++)
        x += m[y];
      const T = h.morphTargetsRelative ? 1 : 1 - x;
      d.getUniforms().setValue(a, "morphTargetBaseInfluence", T), d.getUniforms().setValue(a, "morphTargetInfluences", m), d.getUniforms().setValue(a, "morphTargetsTexture", f.texture, t), d.getUniforms().setValue(a, "morphTargetsTextureSize", f.size);
    } else {
      const g = m === void 0 ? 0 : m.length;
      let p = n[h.id];
      if (p === void 0 || p.length !== g) {
        p = [];
        for (let b = 0; b < g; b++)
          p[b] = [b, 0];
        n[h.id] = p;
      }
      for (let b = 0; b < g; b++) {
        const w = p[b];
        w[0] = b, w[1] = m[b];
      }
      p.sort(Mu);
      for (let b = 0; b < 8; b++)
        b < g && p[b][1] ? (r[b][0] = p[b][0], r[b][1] = p[b][1]) : (r[b][0] = Number.MAX_SAFE_INTEGER, r[b][1] = 0);
      r.sort(vu);
      const f = h.morphAttributes.position, x = h.morphAttributes.normal;
      let T = 0;
      for (let b = 0; b < 8; b++) {
        const w = r[b], C = w[0], I = w[1];
        C !== Number.MAX_SAFE_INTEGER && I ? (f && h.getAttribute("morphTarget" + b) !== f[C] && h.setAttribute("morphTarget" + b, f[C]), x && h.getAttribute("morphNormal" + b) !== x[C] && h.setAttribute("morphNormal" + b, x[C]), i[b] = I, T += I) : (f && h.hasAttribute("morphTarget" + b) === !0 && h.deleteAttribute("morphTarget" + b), x && h.hasAttribute("morphNormal" + b) === !0 && h.deleteAttribute("morphNormal" + b), i[b] = 0);
      }
      const y = h.morphTargetsRelative ? 1 : 1 - T;
      d.getUniforms().setValue(a, "morphTargetBaseInfluence", y), d.getUniforms().setValue(a, "morphTargetInfluences", i);
    }
  }
  return {
    update: c
  };
}
function bu(a, e, t, n) {
  let i = /* @__PURE__ */ new WeakMap();
  function s(c) {
    const l = n.render.frame, h = c.geometry, u = e.get(c, h);
    return i.get(u) !== l && (e.update(u), i.set(u, l)), c.isInstancedMesh && (c.hasEventListener("dispose", r) === !1 && c.addEventListener("dispose", r), t.update(c.instanceMatrix, 34962), c.instanceColor !== null && t.update(c.instanceColor, 34962)), u;
  }
  function o() {
    i = /* @__PURE__ */ new WeakMap();
  }
  function r(c) {
    const l = c.target;
    l.removeEventListener("dispose", r), t.remove(l.instanceMatrix), l.instanceColor !== null && t.remove(l.instanceColor);
  }
  return {
    update: s,
    dispose: o
  };
}
const Ya = /* @__PURE__ */ new dt(), Za = /* @__PURE__ */ new za(), $a = /* @__PURE__ */ new ll(), Ka = /* @__PURE__ */ new Xa(), Jr = [], Qr = [], ea = new Float32Array(16), ta = new Float32Array(9), na = new Float32Array(4);
function Yn(a, e, t) {
  const n = a[0];
  if (n <= 0 || n > 0)
    return a;
  const i = e * t;
  let s = Jr[i];
  if (s === void 0 && (s = new Float32Array(i), Jr[i] = s), e !== 0) {
    n.toArray(s, 0);
    for (let o = 1, r = 0; o !== e; ++o)
      r += t, a[o].toArray(s, r);
  }
  return s;
}
function Ye(a, e) {
  if (a.length !== e.length)
    return !1;
  for (let t = 0, n = a.length; t < n; t++)
    if (a[t] !== e[t])
      return !1;
  return !0;
}
function Ze(a, e) {
  for (let t = 0, n = e.length; t < n; t++)
    a[t] = e[t];
}
function $i(a, e) {
  let t = Qr[e];
  t === void 0 && (t = new Int32Array(e), Qr[e] = t);
  for (let n = 0; n !== e; ++n)
    t[n] = a.allocateTextureUnit();
  return t;
}
function Su(a, e) {
  const t = this.cache;
  t[0] !== e && (a.uniform1f(this.addr, e), t[0] = e);
}
function wu(a, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (a.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (Ye(t, e))
      return;
    a.uniform2fv(this.addr, e), Ze(t, e);
  }
}
function Tu(a, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (a.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (a.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
  else {
    if (Ye(t, e))
      return;
    a.uniform3fv(this.addr, e), Ze(t, e);
  }
}
function Eu(a, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (a.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (Ye(t, e))
      return;
    a.uniform4fv(this.addr, e), Ze(t, e);
  }
}
function Au(a, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (Ye(t, e))
      return;
    a.uniformMatrix2fv(this.addr, !1, e), Ze(t, e);
  } else {
    if (Ye(t, n))
      return;
    na.set(n), a.uniformMatrix2fv(this.addr, !1, na), Ze(t, n);
  }
}
function Cu(a, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (Ye(t, e))
      return;
    a.uniformMatrix3fv(this.addr, !1, e), Ze(t, e);
  } else {
    if (Ye(t, n))
      return;
    ta.set(n), a.uniformMatrix3fv(this.addr, !1, ta), Ze(t, n);
  }
}
function Lu(a, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (Ye(t, e))
      return;
    a.uniformMatrix4fv(this.addr, !1, e), Ze(t, e);
  } else {
    if (Ye(t, n))
      return;
    ea.set(n), a.uniformMatrix4fv(this.addr, !1, ea), Ze(t, n);
  }
}
function Pu(a, e) {
  const t = this.cache;
  t[0] !== e && (a.uniform1i(this.addr, e), t[0] = e);
}
function Du(a, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (a.uniform2i(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (Ye(t, e))
      return;
    a.uniform2iv(this.addr, e), Ze(t, e);
  }
}
function Ru(a, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (a.uniform3i(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (Ye(t, e))
      return;
    a.uniform3iv(this.addr, e), Ze(t, e);
  }
}
function Iu(a, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (a.uniform4i(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (Ye(t, e))
      return;
    a.uniform4iv(this.addr, e), Ze(t, e);
  }
}
function Fu(a, e) {
  const t = this.cache;
  t[0] !== e && (a.uniform1ui(this.addr, e), t[0] = e);
}
function Nu(a, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (a.uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (Ye(t, e))
      return;
    a.uniform2uiv(this.addr, e), Ze(t, e);
  }
}
function Uu(a, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (a.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (Ye(t, e))
      return;
    a.uniform3uiv(this.addr, e), Ze(t, e);
  }
}
function Ou(a, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (a.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (Ye(t, e))
      return;
    a.uniform4uiv(this.addr, e), Ze(t, e);
  }
}
function zu(a, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (a.uniform1i(this.addr, i), n[0] = i), t.setTexture2D(e || Ya, i);
}
function Bu(a, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (a.uniform1i(this.addr, i), n[0] = i), t.setTexture3D(e || $a, i);
}
function Gu(a, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (a.uniform1i(this.addr, i), n[0] = i), t.setTextureCube(e || Ka, i);
}
function ku(a, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (a.uniform1i(this.addr, i), n[0] = i), t.setTexture2DArray(e || Za, i);
}
function Vu(a) {
  switch (a) {
    case 5126:
      return Su;
    case 35664:
      return wu;
    case 35665:
      return Tu;
    case 35666:
      return Eu;
    case 35674:
      return Au;
    case 35675:
      return Cu;
    case 35676:
      return Lu;
    case 5124:
    case 35670:
      return Pu;
    case 35667:
    case 35671:
      return Du;
    case 35668:
    case 35672:
      return Ru;
    case 35669:
    case 35673:
      return Iu;
    case 5125:
      return Fu;
    case 36294:
      return Nu;
    case 36295:
      return Uu;
    case 36296:
      return Ou;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return zu;
    case 35679:
    case 36299:
    case 36307:
      return Bu;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Gu;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return ku;
  }
}
function Hu(a, e) {
  a.uniform1fv(this.addr, e);
}
function Wu(a, e) {
  const t = Yn(e, this.size, 2);
  a.uniform2fv(this.addr, t);
}
function Xu(a, e) {
  const t = Yn(e, this.size, 3);
  a.uniform3fv(this.addr, t);
}
function qu(a, e) {
  const t = Yn(e, this.size, 4);
  a.uniform4fv(this.addr, t);
}
function ju(a, e) {
  const t = Yn(e, this.size, 4);
  a.uniformMatrix2fv(this.addr, !1, t);
}
function Yu(a, e) {
  const t = Yn(e, this.size, 9);
  a.uniformMatrix3fv(this.addr, !1, t);
}
function Zu(a, e) {
  const t = Yn(e, this.size, 16);
  a.uniformMatrix4fv(this.addr, !1, t);
}
function $u(a, e) {
  a.uniform1iv(this.addr, e);
}
function Ku(a, e) {
  a.uniform2iv(this.addr, e);
}
function Ju(a, e) {
  a.uniform3iv(this.addr, e);
}
function Qu(a, e) {
  a.uniform4iv(this.addr, e);
}
function ed(a, e) {
  a.uniform1uiv(this.addr, e);
}
function td(a, e) {
  a.uniform2uiv(this.addr, e);
}
function nd(a, e) {
  a.uniform3uiv(this.addr, e);
}
function id(a, e) {
  a.uniform4uiv(this.addr, e);
}
function sd(a, e, t) {
  const n = this.cache, i = e.length, s = $i(t, i);
  Ye(n, s) || (a.uniform1iv(this.addr, s), Ze(n, s));
  for (let o = 0; o !== i; ++o)
    t.setTexture2D(e[o] || Ya, s[o]);
}
function rd(a, e, t) {
  const n = this.cache, i = e.length, s = $i(t, i);
  Ye(n, s) || (a.uniform1iv(this.addr, s), Ze(n, s));
  for (let o = 0; o !== i; ++o)
    t.setTexture3D(e[o] || $a, s[o]);
}
function ad(a, e, t) {
  const n = this.cache, i = e.length, s = $i(t, i);
  Ye(n, s) || (a.uniform1iv(this.addr, s), Ze(n, s));
  for (let o = 0; o !== i; ++o)
    t.setTextureCube(e[o] || Ka, s[o]);
}
function od(a, e, t) {
  const n = this.cache, i = e.length, s = $i(t, i);
  Ye(n, s) || (a.uniform1iv(this.addr, s), Ze(n, s));
  for (let o = 0; o !== i; ++o)
    t.setTexture2DArray(e[o] || Za, s[o]);
}
function ld(a) {
  switch (a) {
    case 5126:
      return Hu;
    case 35664:
      return Wu;
    case 35665:
      return Xu;
    case 35666:
      return qu;
    case 35674:
      return ju;
    case 35675:
      return Yu;
    case 35676:
      return Zu;
    case 5124:
    case 35670:
      return $u;
    case 35667:
    case 35671:
      return Ku;
    case 35668:
    case 35672:
      return Ju;
    case 35669:
    case 35673:
      return Qu;
    case 5125:
      return ed;
    case 36294:
      return td;
    case 36295:
      return nd;
    case 36296:
      return id;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return sd;
    case 35679:
    case 36299:
    case 36307:
      return rd;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return ad;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return od;
  }
}
class cd {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.setValue = Vu(t.type);
  }
}
class hd {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.size = t.size, this.setValue = ld(t.type);
  }
}
class ud {
  constructor(e) {
    this.id = e, this.seq = [], this.map = {};
  }
  setValue(e, t, n) {
    const i = this.seq;
    for (let s = 0, o = i.length; s !== o; ++s) {
      const r = i[s];
      r.setValue(e, t[r.id], n);
    }
  }
}
const Ds = /(\w+)(\])?(\[|\.)?/g;
function ia(a, e) {
  a.seq.push(e), a.map[e.id] = e;
}
function dd(a, e, t) {
  const n = a.name, i = n.length;
  for (Ds.lastIndex = 0; ; ) {
    const s = Ds.exec(n), o = Ds.lastIndex;
    let r = s[1];
    const c = s[2] === "]", l = s[3];
    if (c && (r = r | 0), l === void 0 || l === "[" && o + 2 === i) {
      ia(t, l === void 0 ? new cd(r, a, e) : new hd(r, a, e));
      break;
    } else {
      let u = t.map[r];
      u === void 0 && (u = new ud(r), ia(t, u)), t = u;
    }
  }
}
class Wi {
  constructor(e, t) {
    this.seq = [], this.map = {};
    const n = e.getProgramParameter(t, 35718);
    for (let i = 0; i < n; ++i) {
      const s = e.getActiveUniform(t, i), o = e.getUniformLocation(t, s.name);
      dd(s, o, this);
    }
  }
  setValue(e, t, n, i) {
    const s = this.map[t];
    s !== void 0 && s.setValue(e, n, i);
  }
  setOptional(e, t, n) {
    const i = t[n];
    i !== void 0 && this.setValue(e, n, i);
  }
  static upload(e, t, n, i) {
    for (let s = 0, o = t.length; s !== o; ++s) {
      const r = t[s], c = n[r.id];
      c.needsUpdate !== !1 && r.setValue(e, c.value, i);
    }
  }
  static seqWithValue(e, t) {
    const n = [];
    for (let i = 0, s = e.length; i !== s; ++i) {
      const o = e[i];
      o.id in t && n.push(o);
    }
    return n;
  }
}
function sa(a, e, t) {
  const n = a.createShader(e);
  return a.shaderSource(n, t), a.compileShader(n), n;
}
let fd = 0;
function pd(a, e) {
  const t = a.split(`
`), n = [], i = Math.max(e - 6, 0), s = Math.min(e + 6, t.length);
  for (let o = i; o < s; o++) {
    const r = o + 1;
    n.push(`${r === e ? ">" : " "} ${r}: ${t[o]}`);
  }
  return n.join(`
`);
}
function md(a) {
  switch (a) {
    case xn:
      return ["Linear", "( value )"];
    case ze:
      return ["sRGB", "( value )"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported encoding:", a), ["Linear", "( value )"];
  }
}
function ra(a, e, t) {
  const n = a.getShaderParameter(e, 35713), i = a.getShaderInfoLog(e).trim();
  if (n && i === "")
    return "";
  const s = /ERROR: 0:(\d+)/.exec(i);
  if (s) {
    const o = parseInt(s[1]);
    return t.toUpperCase() + `

` + i + `

` + pd(a.getShaderSource(e), o);
  } else
    return i;
}
function gd(a, e) {
  const t = md(e);
  return "vec4 " + a + "( vec4 value ) { return LinearTo" + t[0] + t[1] + "; }";
}
function _d(a, e) {
  let t;
  switch (e) {
    case No:
      t = "Linear";
      break;
    case Uo:
      t = "Reinhard";
      break;
    case Oo:
      t = "OptimizedCineon";
      break;
    case zo:
      t = "ACESFilmic";
      break;
    case Bo:
      t = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), t = "Linear";
  }
  return "vec3 " + a + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
}
function xd(a) {
  return [
    a.extensionDerivatives || a.envMapCubeUVHeight || a.bumpMap || a.tangentSpaceNormalMap || a.clearcoatNormalMap || a.flatShading || a.shaderID === "physical" ? "#extension GL_OES_standard_derivatives : enable" : "",
    (a.extensionFragDepth || a.logarithmicDepthBuffer) && a.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "",
    a.extensionDrawBuffers && a.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "",
    (a.extensionShaderTextureLOD || a.envMap || a.transmission) && a.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""
  ].filter(si).join(`
`);
}
function vd(a) {
  const e = [];
  for (const t in a) {
    const n = a[t];
    n !== !1 && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function Md(a, e) {
  const t = {}, n = a.getProgramParameter(e, 35721);
  for (let i = 0; i < n; i++) {
    const s = a.getActiveAttrib(e, i), o = s.name;
    let r = 1;
    s.type === 35674 && (r = 2), s.type === 35675 && (r = 3), s.type === 35676 && (r = 4), t[o] = {
      type: s.type,
      location: a.getAttribLocation(e, o),
      locationSize: r
    };
  }
  return t;
}
function si(a) {
  return a !== "";
}
function aa(a, e) {
  const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return a.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function oa(a, e) {
  return a.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
const yd = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Ws(a) {
  return a.replace(yd, bd);
}
function bd(a, e) {
  const t = Se[e];
  if (t === void 0)
    throw new Error("Can not resolve #include <" + e + ">");
  return Ws(t);
}
const Sd = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function la(a) {
  return a.replace(Sd, wd);
}
function wd(a, e, t, n) {
  let i = "";
  for (let s = parseInt(e); s < parseInt(t); s++)
    i += n.replace(/\[\s*i\s*\]/g, "[ " + s + " ]").replace(/UNROLLED_LOOP_INDEX/g, s);
  return i;
}
function ca(a) {
  let e = "precision " + a.precision + ` float;
precision ` + a.precision + " int;";
  return a.precision === "highp" ? e += `
#define HIGH_PRECISION` : a.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : a.precision === "lowp" && (e += `
#define LOW_PRECISION`), e;
}
function Td(a) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return a.shadowMapType === La ? e = "SHADOWMAP_TYPE_PCF" : a.shadowMapType === fo ? e = "SHADOWMAP_TYPE_PCF_SOFT" : a.shadowMapType === ii && (e = "SHADOWMAP_TYPE_VSM"), e;
}
function Ed(a) {
  let e = "ENVMAP_TYPE_CUBE";
  if (a.envMap)
    switch (a.envMapMode) {
      case Hn:
      case Wn:
        e = "ENVMAP_TYPE_CUBE";
        break;
      case Yi:
        e = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return e;
}
function Ad(a) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (a.envMap)
    switch (a.envMapMode) {
      case Wn:
        e = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return e;
}
function Cd(a) {
  let e = "ENVMAP_BLENDING_NONE";
  if (a.envMap)
    switch (a.combine) {
      case Ys:
        e = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case Io:
        e = "ENVMAP_BLENDING_MIX";
        break;
      case Fo:
        e = "ENVMAP_BLENDING_ADD";
        break;
    }
  return e;
}
function Ld(a) {
  const e = a.envMapCubeUVHeight;
  if (e === null)
    return null;
  const t = Math.log2(e) - 2, n = 1 / e;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)), texelHeight: n, maxMip: t };
}
function Pd(a, e, t, n) {
  const i = a.getContext(), s = t.defines;
  let o = t.vertexShader, r = t.fragmentShader;
  const c = Td(t), l = Ed(t), h = Ad(t), u = Cd(t), d = Ld(t), m = t.isWebGL2 ? "" : xd(t), g = vd(s), p = i.createProgram();
  let f, x, T = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
  t.isRawShaderMaterial ? (f = [
    g
  ].filter(si).join(`
`), f.length > 0 && (f += `
`), x = [
    m,
    g
  ].filter(si).join(`
`), x.length > 0 && (x += `
`)) : (f = [
    ca(t),
    "#define SHADER_NAME " + t.shaderName,
    g,
    t.instancing ? "#define USE_INSTANCING" : "",
    t.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
    t.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "",
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.map ? "#define USE_MAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + h : "",
    t.lightMap ? "#define USE_LIGHTMAP" : "",
    t.aoMap ? "#define USE_AOMAP" : "",
    t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    t.bumpMap ? "#define USE_BUMPMAP" : "",
    t.normalMap ? "#define USE_NORMALMAP" : "",
    t.normalMap && t.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "",
    t.normalMap && t.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "",
    t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    t.displacementMap && t.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "",
    t.specularMap ? "#define USE_SPECULARMAP" : "",
    t.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "",
    t.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "",
    t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    t.metalnessMap ? "#define USE_METALNESSMAP" : "",
    t.alphaMap ? "#define USE_ALPHAMAP" : "",
    t.transmission ? "#define USE_TRANSMISSION" : "",
    t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    t.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "",
    t.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "",
    t.vertexTangents ? "#define USE_TANGENT" : "",
    t.vertexColors ? "#define USE_COLOR" : "",
    t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    t.vertexUvs ? "#define USE_UV" : "",
    t.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
    t.flatShading ? "#define FLAT_SHADED" : "",
    t.skinning ? "#define USE_SKINNING" : "",
    t.morphTargets ? "#define USE_MORPHTARGETS" : "",
    t.morphNormals && t.flatShading === !1 ? "#define USE_MORPHNORMALS" : "",
    t.morphColors && t.isWebGL2 ? "#define USE_MORPHCOLORS" : "",
    t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_TEXTURE" : "",
    t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride : "",
    t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount : "",
    t.doubleSided ? "#define DOUBLE_SIDED" : "",
    t.flipSided ? "#define FLIP_SIDED" : "",
    t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    t.shadowMapEnabled ? "#define " + c : "",
    t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
    "uniform mat4 modelMatrix;",
    "uniform mat4 modelViewMatrix;",
    "uniform mat4 projectionMatrix;",
    "uniform mat4 viewMatrix;",
    "uniform mat3 normalMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    "#ifdef USE_INSTANCING",
    "	attribute mat4 instanceMatrix;",
    "#endif",
    "#ifdef USE_INSTANCING_COLOR",
    "	attribute vec3 instanceColor;",
    "#endif",
    "attribute vec3 position;",
    "attribute vec3 normal;",
    "attribute vec2 uv;",
    "#ifdef USE_TANGENT",
    "	attribute vec4 tangent;",
    "#endif",
    "#if defined( USE_COLOR_ALPHA )",
    "	attribute vec4 color;",
    "#elif defined( USE_COLOR )",
    "	attribute vec3 color;",
    "#endif",
    "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )",
    "	attribute vec3 morphTarget0;",
    "	attribute vec3 morphTarget1;",
    "	attribute vec3 morphTarget2;",
    "	attribute vec3 morphTarget3;",
    "	#ifdef USE_MORPHNORMALS",
    "		attribute vec3 morphNormal0;",
    "		attribute vec3 morphNormal1;",
    "		attribute vec3 morphNormal2;",
    "		attribute vec3 morphNormal3;",
    "	#else",
    "		attribute vec3 morphTarget4;",
    "		attribute vec3 morphTarget5;",
    "		attribute vec3 morphTarget6;",
    "		attribute vec3 morphTarget7;",
    "	#endif",
    "#endif",
    "#ifdef USE_SKINNING",
    "	attribute vec4 skinIndex;",
    "	attribute vec4 skinWeight;",
    "#endif",
    `
`
  ].filter(si).join(`
`), x = [
    m,
    ca(t),
    "#define SHADER_NAME " + t.shaderName,
    g,
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.map ? "#define USE_MAP" : "",
    t.matcap ? "#define USE_MATCAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + l : "",
    t.envMap ? "#define " + h : "",
    t.envMap ? "#define " + u : "",
    d ? "#define CUBEUV_TEXEL_WIDTH " + d.texelWidth : "",
    d ? "#define CUBEUV_TEXEL_HEIGHT " + d.texelHeight : "",
    d ? "#define CUBEUV_MAX_MIP " + d.maxMip + ".0" : "",
    t.lightMap ? "#define USE_LIGHTMAP" : "",
    t.aoMap ? "#define USE_AOMAP" : "",
    t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    t.bumpMap ? "#define USE_BUMPMAP" : "",
    t.normalMap ? "#define USE_NORMALMAP" : "",
    t.normalMap && t.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "",
    t.normalMap && t.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "",
    t.clearcoat ? "#define USE_CLEARCOAT" : "",
    t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    t.iridescence ? "#define USE_IRIDESCENCE" : "",
    t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    t.specularMap ? "#define USE_SPECULARMAP" : "",
    t.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "",
    t.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "",
    t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    t.metalnessMap ? "#define USE_METALNESSMAP" : "",
    t.alphaMap ? "#define USE_ALPHAMAP" : "",
    t.alphaTest ? "#define USE_ALPHATEST" : "",
    t.sheen ? "#define USE_SHEEN" : "",
    t.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "",
    t.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "",
    t.transmission ? "#define USE_TRANSMISSION" : "",
    t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
    t.vertexTangents ? "#define USE_TANGENT" : "",
    t.vertexColors || t.instancingColor ? "#define USE_COLOR" : "",
    t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    t.vertexUvs ? "#define USE_UV" : "",
    t.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
    t.gradientMap ? "#define USE_GRADIENTMAP" : "",
    t.flatShading ? "#define FLAT_SHADED" : "",
    t.doubleSided ? "#define DOUBLE_SIDED" : "",
    t.flipSided ? "#define FLIP_SIDED" : "",
    t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    t.shadowMapEnabled ? "#define " + c : "",
    t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
    t.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
    "uniform mat4 viewMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    t.toneMapping !== Yt ? "#define TONE_MAPPING" : "",
    t.toneMapping !== Yt ? Se.tonemapping_pars_fragment : "",
    t.toneMapping !== Yt ? _d("toneMapping", t.toneMapping) : "",
    t.dithering ? "#define DITHERING" : "",
    t.opaque ? "#define OPAQUE" : "",
    Se.encodings_pars_fragment,
    gd("linearToOutputTexel", t.outputEncoding),
    t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
    `
`
  ].filter(si).join(`
`)), o = Ws(o), o = aa(o, t), o = oa(o, t), r = Ws(r), r = aa(r, t), r = oa(r, t), o = la(o), r = la(r), t.isWebGL2 && t.isRawShaderMaterial !== !0 && (T = `#version 300 es
`, f = [
    "precision mediump sampler2DArray;",
    "#define attribute in",
    "#define varying out",
    "#define texture2D texture"
  ].join(`
`) + `
` + f, x = [
    "#define varying in",
    t.glslVersion === Rr ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
    t.glslVersion === Rr ? "" : "#define gl_FragColor pc_fragColor",
    "#define gl_FragDepthEXT gl_FragDepth",
    "#define texture2D texture",
    "#define textureCube texture",
    "#define texture2DProj textureProj",
    "#define texture2DLodEXT textureLod",
    "#define texture2DProjLodEXT textureProjLod",
    "#define textureCubeLodEXT textureLod",
    "#define texture2DGradEXT textureGrad",
    "#define texture2DProjGradEXT textureProjGrad",
    "#define textureCubeGradEXT textureGrad"
  ].join(`
`) + `
` + x);
  const y = T + f + o, b = T + x + r, w = sa(i, 35633, y), C = sa(i, 35632, b);
  if (i.attachShader(p, w), i.attachShader(p, C), t.index0AttributeName !== void 0 ? i.bindAttribLocation(p, 0, t.index0AttributeName) : t.morphTargets === !0 && i.bindAttribLocation(p, 0, "position"), i.linkProgram(p), a.debug.checkShaderErrors) {
    const A = i.getProgramInfoLog(p).trim(), F = i.getShaderInfoLog(w).trim(), j = i.getShaderInfoLog(C).trim();
    let J = !0, O = !0;
    if (i.getProgramParameter(p, 35714) === !1) {
      J = !1;
      const N = ra(i, w, "vertex"), X = ra(i, C, "fragment");
      console.error(
        "THREE.WebGLProgram: Shader Error " + i.getError() + " - VALIDATE_STATUS " + i.getProgramParameter(p, 35715) + `

Program Info Log: ` + A + `
` + N + `
` + X
      );
    } else
      A !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", A) : (F === "" || j === "") && (O = !1);
    O && (this.diagnostics = {
      runnable: J,
      programLog: A,
      vertexShader: {
        log: F,
        prefix: f
      },
      fragmentShader: {
        log: j,
        prefix: x
      }
    });
  }
  i.deleteShader(w), i.deleteShader(C);
  let I;
  this.getUniforms = function() {
    return I === void 0 && (I = new Wi(i, p)), I;
  };
  let _;
  return this.getAttributes = function() {
    return _ === void 0 && (_ = Md(i, p)), _;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), i.deleteProgram(p), this.program = void 0;
  }, this.name = t.shaderName, this.id = fd++, this.cacheKey = e, this.usedTimes = 1, this.program = p, this.vertexShader = w, this.fragmentShader = C, this;
}
let Dd = 0;
class Rd {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
  }
  update(e) {
    const t = e.vertexShader, n = e.fragmentShader, i = this._getShaderStage(t), s = this._getShaderStage(n), o = this._getShaderCacheForMaterial(e);
    return o.has(i) === !1 && (o.add(i), i.usedTimes++), o.has(s) === !1 && (o.add(s), s.usedTimes++), this;
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const n of t)
      n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    let n = t.get(e);
    return n === void 0 && (n = /* @__PURE__ */ new Set(), t.set(e, n)), n;
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let n = t.get(e);
    return n === void 0 && (n = new Id(e), t.set(e, n)), n;
  }
}
class Id {
  constructor(e) {
    this.id = Dd++, this.code = e, this.usedTimes = 0;
  }
}
function Fd(a, e, t, n, i, s, o) {
  const r = new Ba(), c = new Rd(), l = [], h = i.isWebGL2, u = i.logarithmicDepthBuffer, d = i.vertexTextures;
  let m = i.precision;
  const g = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distanceRGBA",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite"
  };
  function p(_, A, F, j, J) {
    const O = j.fog, N = J.geometry, X = _.isMeshStandardMaterial ? j.environment : null, Z = (_.isMeshStandardMaterial ? t : e).get(_.envMap || X), Q = Z && Z.mapping === Yi ? Z.image.height : null, q = g[_.type];
    _.precision !== null && (m = i.getMaxPrecision(_.precision), m !== _.precision && console.warn("THREE.WebGLProgram.getParameters:", _.precision, "not supported, using", m, "instead."));
    const ee = N.morphAttributes.position || N.morphAttributes.normal || N.morphAttributes.color, Y = ee !== void 0 ? ee.length : 0;
    let V = 0;
    N.morphAttributes.position !== void 0 && (V = 1), N.morphAttributes.normal !== void 0 && (V = 2), N.morphAttributes.color !== void 0 && (V = 3);
    let z, se, te, re;
    if (q) {
      const Fe = Ft[q];
      z = Fe.vertexShader, se = Fe.fragmentShader;
    } else
      z = _.vertexShader, se = _.fragmentShader, c.update(_), te = c.getVertexShaderID(_), re = c.getFragmentShaderID(_);
    const H = a.getRenderTarget(), Ae = _.alphaTest > 0, de = _.clearcoat > 0, _e = _.iridescence > 0;
    return {
      isWebGL2: h,
      shaderID: q,
      shaderName: _.type,
      vertexShader: z,
      fragmentShader: se,
      defines: _.defines,
      customVertexShaderID: te,
      customFragmentShaderID: re,
      isRawShaderMaterial: _.isRawShaderMaterial === !0,
      glslVersion: _.glslVersion,
      precision: m,
      instancing: J.isInstancedMesh === !0,
      instancingColor: J.isInstancedMesh === !0 && J.instanceColor !== null,
      supportsVertexTextures: d,
      outputEncoding: H === null ? a.outputEncoding : H.isXRRenderTarget === !0 ? H.texture.encoding : xn,
      map: !!_.map,
      matcap: !!_.matcap,
      envMap: !!Z,
      envMapMode: Z && Z.mapping,
      envMapCubeUVHeight: Q,
      lightMap: !!_.lightMap,
      aoMap: !!_.aoMap,
      emissiveMap: !!_.emissiveMap,
      bumpMap: !!_.bumpMap,
      normalMap: !!_.normalMap,
      objectSpaceNormalMap: _.normalMapType === sl,
      tangentSpaceNormalMap: _.normalMapType === Zs,
      decodeVideoTexture: !!_.map && _.map.isVideoTexture === !0 && _.map.encoding === ze,
      clearcoat: de,
      clearcoatMap: de && !!_.clearcoatMap,
      clearcoatRoughnessMap: de && !!_.clearcoatRoughnessMap,
      clearcoatNormalMap: de && !!_.clearcoatNormalMap,
      iridescence: _e,
      iridescenceMap: _e && !!_.iridescenceMap,
      iridescenceThicknessMap: _e && !!_.iridescenceThicknessMap,
      displacementMap: !!_.displacementMap,
      roughnessMap: !!_.roughnessMap,
      metalnessMap: !!_.metalnessMap,
      specularMap: !!_.specularMap,
      specularIntensityMap: !!_.specularIntensityMap,
      specularColorMap: !!_.specularColorMap,
      opaque: _.transparent === !1 && _.blending === kn,
      alphaMap: !!_.alphaMap,
      alphaTest: Ae,
      gradientMap: !!_.gradientMap,
      sheen: _.sheen > 0,
      sheenColorMap: !!_.sheenColorMap,
      sheenRoughnessMap: !!_.sheenRoughnessMap,
      transmission: _.transmission > 0,
      transmissionMap: !!_.transmissionMap,
      thicknessMap: !!_.thicknessMap,
      combine: _.combine,
      vertexTangents: !!_.normalMap && !!N.attributes.tangent,
      vertexColors: _.vertexColors,
      vertexAlphas: _.vertexColors === !0 && !!N.attributes.color && N.attributes.color.itemSize === 4,
      vertexUvs: !!_.map || !!_.bumpMap || !!_.normalMap || !!_.specularMap || !!_.alphaMap || !!_.emissiveMap || !!_.roughnessMap || !!_.metalnessMap || !!_.clearcoatMap || !!_.clearcoatRoughnessMap || !!_.clearcoatNormalMap || !!_.iridescenceMap || !!_.iridescenceThicknessMap || !!_.displacementMap || !!_.transmissionMap || !!_.thicknessMap || !!_.specularIntensityMap || !!_.specularColorMap || !!_.sheenColorMap || !!_.sheenRoughnessMap,
      uvsVertexOnly: !(_.map || _.bumpMap || _.normalMap || _.specularMap || _.alphaMap || _.emissiveMap || _.roughnessMap || _.metalnessMap || _.clearcoatNormalMap || _.iridescenceMap || _.iridescenceThicknessMap || _.transmission > 0 || _.transmissionMap || _.thicknessMap || _.specularIntensityMap || _.specularColorMap || _.sheen > 0 || _.sheenColorMap || _.sheenRoughnessMap) && !!_.displacementMap,
      fog: !!O,
      useFog: _.fog === !0,
      fogExp2: O && O.isFogExp2,
      flatShading: !!_.flatShading,
      sizeAttenuation: _.sizeAttenuation,
      logarithmicDepthBuffer: u,
      skinning: J.isSkinnedMesh === !0,
      morphTargets: N.morphAttributes.position !== void 0,
      morphNormals: N.morphAttributes.normal !== void 0,
      morphColors: N.morphAttributes.color !== void 0,
      morphTargetsCount: Y,
      morphTextureStride: V,
      numDirLights: A.directional.length,
      numPointLights: A.point.length,
      numSpotLights: A.spot.length,
      numSpotLightMaps: A.spotLightMap.length,
      numRectAreaLights: A.rectArea.length,
      numHemiLights: A.hemi.length,
      numDirLightShadows: A.directionalShadowMap.length,
      numPointLightShadows: A.pointShadowMap.length,
      numSpotLightShadows: A.spotShadowMap.length,
      numSpotLightShadowsWithMaps: A.numSpotLightShadowsWithMaps,
      numClippingPlanes: o.numPlanes,
      numClipIntersection: o.numIntersection,
      dithering: _.dithering,
      shadowMapEnabled: a.shadowMap.enabled && F.length > 0,
      shadowMapType: a.shadowMap.type,
      toneMapping: _.toneMapped ? a.toneMapping : Yt,
      physicallyCorrectLights: a.physicallyCorrectLights,
      premultipliedAlpha: _.premultipliedAlpha,
      doubleSided: _.side === fi,
      flipSided: _.side === Et,
      useDepthPacking: !!_.depthPacking,
      depthPacking: _.depthPacking || 0,
      index0AttributeName: _.index0AttributeName,
      extensionDerivatives: _.extensions && _.extensions.derivatives,
      extensionFragDepth: _.extensions && _.extensions.fragDepth,
      extensionDrawBuffers: _.extensions && _.extensions.drawBuffers,
      extensionShaderTextureLOD: _.extensions && _.extensions.shaderTextureLOD,
      rendererExtensionFragDepth: h || n.has("EXT_frag_depth"),
      rendererExtensionDrawBuffers: h || n.has("WEBGL_draw_buffers"),
      rendererExtensionShaderTextureLod: h || n.has("EXT_shader_texture_lod"),
      customProgramCacheKey: _.customProgramCacheKey()
    };
  }
  function f(_) {
    const A = [];
    if (_.shaderID ? A.push(_.shaderID) : (A.push(_.customVertexShaderID), A.push(_.customFragmentShaderID)), _.defines !== void 0)
      for (const F in _.defines)
        A.push(F), A.push(_.defines[F]);
    return _.isRawShaderMaterial === !1 && (x(A, _), T(A, _), A.push(a.outputEncoding)), A.push(_.customProgramCacheKey), A.join();
  }
  function x(_, A) {
    _.push(A.precision), _.push(A.outputEncoding), _.push(A.envMapMode), _.push(A.envMapCubeUVHeight), _.push(A.combine), _.push(A.vertexUvs), _.push(A.fogExp2), _.push(A.sizeAttenuation), _.push(A.morphTargetsCount), _.push(A.morphAttributeCount), _.push(A.numDirLights), _.push(A.numPointLights), _.push(A.numSpotLights), _.push(A.numSpotLightMaps), _.push(A.numHemiLights), _.push(A.numRectAreaLights), _.push(A.numDirLightShadows), _.push(A.numPointLightShadows), _.push(A.numSpotLightShadows), _.push(A.numSpotLightShadowsWithMaps), _.push(A.shadowMapType), _.push(A.toneMapping), _.push(A.numClippingPlanes), _.push(A.numClipIntersection), _.push(A.depthPacking);
  }
  function T(_, A) {
    r.disableAll(), A.isWebGL2 && r.enable(0), A.supportsVertexTextures && r.enable(1), A.instancing && r.enable(2), A.instancingColor && r.enable(3), A.map && r.enable(4), A.matcap && r.enable(5), A.envMap && r.enable(6), A.lightMap && r.enable(7), A.aoMap && r.enable(8), A.emissiveMap && r.enable(9), A.bumpMap && r.enable(10), A.normalMap && r.enable(11), A.objectSpaceNormalMap && r.enable(12), A.tangentSpaceNormalMap && r.enable(13), A.clearcoat && r.enable(14), A.clearcoatMap && r.enable(15), A.clearcoatRoughnessMap && r.enable(16), A.clearcoatNormalMap && r.enable(17), A.iridescence && r.enable(18), A.iridescenceMap && r.enable(19), A.iridescenceThicknessMap && r.enable(20), A.displacementMap && r.enable(21), A.specularMap && r.enable(22), A.roughnessMap && r.enable(23), A.metalnessMap && r.enable(24), A.gradientMap && r.enable(25), A.alphaMap && r.enable(26), A.alphaTest && r.enable(27), A.vertexColors && r.enable(28), A.vertexAlphas && r.enable(29), A.vertexUvs && r.enable(30), A.vertexTangents && r.enable(31), A.uvsVertexOnly && r.enable(32), _.push(r.mask), r.disableAll(), A.fog && r.enable(0), A.useFog && r.enable(1), A.flatShading && r.enable(2), A.logarithmicDepthBuffer && r.enable(3), A.skinning && r.enable(4), A.morphTargets && r.enable(5), A.morphNormals && r.enable(6), A.morphColors && r.enable(7), A.premultipliedAlpha && r.enable(8), A.shadowMapEnabled && r.enable(9), A.physicallyCorrectLights && r.enable(10), A.doubleSided && r.enable(11), A.flipSided && r.enable(12), A.useDepthPacking && r.enable(13), A.dithering && r.enable(14), A.specularIntensityMap && r.enable(15), A.specularColorMap && r.enable(16), A.transmission && r.enable(17), A.transmissionMap && r.enable(18), A.thicknessMap && r.enable(19), A.sheen && r.enable(20), A.sheenColorMap && r.enable(21), A.sheenRoughnessMap && r.enable(22), A.decodeVideoTexture && r.enable(23), A.opaque && r.enable(24), _.push(r.mask);
  }
  function y(_) {
    const A = g[_.type];
    let F;
    if (A) {
      const j = Ft[A];
      F = Ml.clone(j.uniforms);
    } else
      F = _.uniforms;
    return F;
  }
  function b(_, A) {
    let F;
    for (let j = 0, J = l.length; j < J; j++) {
      const O = l[j];
      if (O.cacheKey === A) {
        F = O, ++F.usedTimes;
        break;
      }
    }
    return F === void 0 && (F = new Pd(a, A, _, s), l.push(F)), F;
  }
  function w(_) {
    if (--_.usedTimes === 0) {
      const A = l.indexOf(_);
      l[A] = l[l.length - 1], l.pop(), _.destroy();
    }
  }
  function C(_) {
    c.remove(_);
  }
  function I() {
    c.dispose();
  }
  return {
    getParameters: p,
    getProgramCacheKey: f,
    getUniforms: y,
    acquireProgram: b,
    releaseProgram: w,
    releaseShaderCache: C,
    programs: l,
    dispose: I
  };
}
function Nd() {
  let a = /* @__PURE__ */ new WeakMap();
  function e(s) {
    let o = a.get(s);
    return o === void 0 && (o = {}, a.set(s, o)), o;
  }
  function t(s) {
    a.delete(s);
  }
  function n(s, o, r) {
    a.get(s)[o] = r;
  }
  function i() {
    a = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    remove: t,
    update: n,
    dispose: i
  };
}
function Ud(a, e) {
  return a.groupOrder !== e.groupOrder ? a.groupOrder - e.groupOrder : a.renderOrder !== e.renderOrder ? a.renderOrder - e.renderOrder : a.material.id !== e.material.id ? a.material.id - e.material.id : a.z !== e.z ? a.z - e.z : a.id - e.id;
}
function ha(a, e) {
  return a.groupOrder !== e.groupOrder ? a.groupOrder - e.groupOrder : a.renderOrder !== e.renderOrder ? a.renderOrder - e.renderOrder : a.z !== e.z ? e.z - a.z : a.id - e.id;
}
function ua() {
  const a = [];
  let e = 0;
  const t = [], n = [], i = [];
  function s() {
    e = 0, t.length = 0, n.length = 0, i.length = 0;
  }
  function o(u, d, m, g, p, f) {
    let x = a[e];
    return x === void 0 ? (x = {
      id: u.id,
      object: u,
      geometry: d,
      material: m,
      groupOrder: g,
      renderOrder: u.renderOrder,
      z: p,
      group: f
    }, a[e] = x) : (x.id = u.id, x.object = u, x.geometry = d, x.material = m, x.groupOrder = g, x.renderOrder = u.renderOrder, x.z = p, x.group = f), e++, x;
  }
  function r(u, d, m, g, p, f) {
    const x = o(u, d, m, g, p, f);
    m.transmission > 0 ? n.push(x) : m.transparent === !0 ? i.push(x) : t.push(x);
  }
  function c(u, d, m, g, p, f) {
    const x = o(u, d, m, g, p, f);
    m.transmission > 0 ? n.unshift(x) : m.transparent === !0 ? i.unshift(x) : t.unshift(x);
  }
  function l(u, d) {
    t.length > 1 && t.sort(u || Ud), n.length > 1 && n.sort(d || ha), i.length > 1 && i.sort(d || ha);
  }
  function h() {
    for (let u = e, d = a.length; u < d; u++) {
      const m = a[u];
      if (m.id === null)
        break;
      m.id = null, m.object = null, m.geometry = null, m.material = null, m.group = null;
    }
  }
  return {
    opaque: t,
    transmissive: n,
    transparent: i,
    init: s,
    push: r,
    unshift: c,
    finish: h,
    sort: l
  };
}
function Od() {
  let a = /* @__PURE__ */ new WeakMap();
  function e(n, i) {
    const s = a.get(n);
    let o;
    return s === void 0 ? (o = new ua(), a.set(n, [o])) : i >= s.length ? (o = new ua(), s.push(o)) : o = s[i], o;
  }
  function t() {
    a = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    dispose: t
  };
}
function zd() {
  const a = {};
  return {
    get: function(e) {
      if (a[e.id] !== void 0)
        return a[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            direction: new D(),
            color: new Ee()
          };
          break;
        case "SpotLight":
          t = {
            position: new D(),
            direction: new D(),
            color: new Ee(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0
          };
          break;
        case "PointLight":
          t = {
            position: new D(),
            color: new Ee(),
            distance: 0,
            decay: 0
          };
          break;
        case "HemisphereLight":
          t = {
            direction: new D(),
            skyColor: new Ee(),
            groundColor: new Ee()
          };
          break;
        case "RectAreaLight":
          t = {
            color: new Ee(),
            position: new D(),
            halfWidth: new D(),
            halfHeight: new D()
          };
          break;
      }
      return a[e.id] = t, t;
    }
  };
}
function Bd() {
  const a = {};
  return {
    get: function(e) {
      if (a[e.id] !== void 0)
        return a[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new ye()
          };
          break;
        case "SpotLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new ye()
          };
          break;
        case "PointLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new ye(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3
          };
          break;
      }
      return a[e.id] = t, t;
    }
  };
}
let Gd = 0;
function kd(a, e) {
  return (e.castShadow ? 2 : 0) - (a.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (a.map ? 1 : 0);
}
function Vd(a, e) {
  const t = new zd(), n = Bd(), i = {
    version: 0,
    hash: {
      directionalLength: -1,
      pointLength: -1,
      spotLength: -1,
      rectAreaLength: -1,
      hemiLength: -1,
      numDirectionalShadows: -1,
      numPointShadows: -1,
      numSpotShadows: -1,
      numSpotMaps: -1
    },
    ambient: [0, 0, 0],
    probe: [],
    directional: [],
    directionalShadow: [],
    directionalShadowMap: [],
    directionalShadowMatrix: [],
    spot: [],
    spotLightMap: [],
    spotShadow: [],
    spotShadowMap: [],
    spotLightMatrix: [],
    rectArea: [],
    rectAreaLTC1: null,
    rectAreaLTC2: null,
    point: [],
    pointShadow: [],
    pointShadowMap: [],
    pointShadowMatrix: [],
    hemi: [],
    numSpotLightShadowsWithMaps: 0
  };
  for (let h = 0; h < 9; h++)
    i.probe.push(new D());
  const s = new D(), o = new ke(), r = new ke();
  function c(h, u) {
    let d = 0, m = 0, g = 0;
    for (let j = 0; j < 9; j++)
      i.probe[j].set(0, 0, 0);
    let p = 0, f = 0, x = 0, T = 0, y = 0, b = 0, w = 0, C = 0, I = 0, _ = 0;
    h.sort(kd);
    const A = u !== !0 ? Math.PI : 1;
    for (let j = 0, J = h.length; j < J; j++) {
      const O = h[j], N = O.color, X = O.intensity, Z = O.distance, Q = O.shadow && O.shadow.map ? O.shadow.map.texture : null;
      if (O.isAmbientLight)
        d += N.r * X * A, m += N.g * X * A, g += N.b * X * A;
      else if (O.isLightProbe)
        for (let q = 0; q < 9; q++)
          i.probe[q].addScaledVector(O.sh.coefficients[q], X);
      else if (O.isDirectionalLight) {
        const q = t.get(O);
        if (q.color.copy(O.color).multiplyScalar(O.intensity * A), O.castShadow) {
          const ee = O.shadow, Y = n.get(O);
          Y.shadowBias = ee.bias, Y.shadowNormalBias = ee.normalBias, Y.shadowRadius = ee.radius, Y.shadowMapSize = ee.mapSize, i.directionalShadow[p] = Y, i.directionalShadowMap[p] = Q, i.directionalShadowMatrix[p] = O.shadow.matrix, b++;
        }
        i.directional[p] = q, p++;
      } else if (O.isSpotLight) {
        const q = t.get(O);
        q.position.setFromMatrixPosition(O.matrixWorld), q.color.copy(N).multiplyScalar(X * A), q.distance = Z, q.coneCos = Math.cos(O.angle), q.penumbraCos = Math.cos(O.angle * (1 - O.penumbra)), q.decay = O.decay, i.spot[x] = q;
        const ee = O.shadow;
        if (O.map && (i.spotLightMap[I] = O.map, I++, ee.updateMatrices(O), O.castShadow && _++), i.spotLightMatrix[x] = ee.matrix, O.castShadow) {
          const Y = n.get(O);
          Y.shadowBias = ee.bias, Y.shadowNormalBias = ee.normalBias, Y.shadowRadius = ee.radius, Y.shadowMapSize = ee.mapSize, i.spotShadow[x] = Y, i.spotShadowMap[x] = Q, C++;
        }
        x++;
      } else if (O.isRectAreaLight) {
        const q = t.get(O);
        q.color.copy(N).multiplyScalar(X), q.halfWidth.set(O.width * 0.5, 0, 0), q.halfHeight.set(0, O.height * 0.5, 0), i.rectArea[T] = q, T++;
      } else if (O.isPointLight) {
        const q = t.get(O);
        if (q.color.copy(O.color).multiplyScalar(O.intensity * A), q.distance = O.distance, q.decay = O.decay, O.castShadow) {
          const ee = O.shadow, Y = n.get(O);
          Y.shadowBias = ee.bias, Y.shadowNormalBias = ee.normalBias, Y.shadowRadius = ee.radius, Y.shadowMapSize = ee.mapSize, Y.shadowCameraNear = ee.camera.near, Y.shadowCameraFar = ee.camera.far, i.pointShadow[f] = Y, i.pointShadowMap[f] = Q, i.pointShadowMatrix[f] = O.shadow.matrix, w++;
        }
        i.point[f] = q, f++;
      } else if (O.isHemisphereLight) {
        const q = t.get(O);
        q.skyColor.copy(O.color).multiplyScalar(X * A), q.groundColor.copy(O.groundColor).multiplyScalar(X * A), i.hemi[y] = q, y++;
      }
    }
    T > 0 && (e.isWebGL2 || a.has("OES_texture_float_linear") === !0 ? (i.rectAreaLTC1 = ie.LTC_FLOAT_1, i.rectAreaLTC2 = ie.LTC_FLOAT_2) : a.has("OES_texture_half_float_linear") === !0 ? (i.rectAreaLTC1 = ie.LTC_HALF_1, i.rectAreaLTC2 = ie.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")), i.ambient[0] = d, i.ambient[1] = m, i.ambient[2] = g;
    const F = i.hash;
    (F.directionalLength !== p || F.pointLength !== f || F.spotLength !== x || F.rectAreaLength !== T || F.hemiLength !== y || F.numDirectionalShadows !== b || F.numPointShadows !== w || F.numSpotShadows !== C || F.numSpotMaps !== I) && (i.directional.length = p, i.spot.length = x, i.rectArea.length = T, i.point.length = f, i.hemi.length = y, i.directionalShadow.length = b, i.directionalShadowMap.length = b, i.pointShadow.length = w, i.pointShadowMap.length = w, i.spotShadow.length = C, i.spotShadowMap.length = C, i.directionalShadowMatrix.length = b, i.pointShadowMatrix.length = w, i.spotLightMatrix.length = C + I - _, i.spotLightMap.length = I, i.numSpotLightShadowsWithMaps = _, F.directionalLength = p, F.pointLength = f, F.spotLength = x, F.rectAreaLength = T, F.hemiLength = y, F.numDirectionalShadows = b, F.numPointShadows = w, F.numSpotShadows = C, F.numSpotMaps = I, i.version = Gd++);
  }
  function l(h, u) {
    let d = 0, m = 0, g = 0, p = 0, f = 0;
    const x = u.matrixWorldInverse;
    for (let T = 0, y = h.length; T < y; T++) {
      const b = h[T];
      if (b.isDirectionalLight) {
        const w = i.directional[d];
        w.direction.setFromMatrixPosition(b.matrixWorld), s.setFromMatrixPosition(b.target.matrixWorld), w.direction.sub(s), w.direction.transformDirection(x), d++;
      } else if (b.isSpotLight) {
        const w = i.spot[g];
        w.position.setFromMatrixPosition(b.matrixWorld), w.position.applyMatrix4(x), w.direction.setFromMatrixPosition(b.matrixWorld), s.setFromMatrixPosition(b.target.matrixWorld), w.direction.sub(s), w.direction.transformDirection(x), g++;
      } else if (b.isRectAreaLight) {
        const w = i.rectArea[p];
        w.position.setFromMatrixPosition(b.matrixWorld), w.position.applyMatrix4(x), r.identity(), o.copy(b.matrixWorld), o.premultiply(x), r.extractRotation(o), w.halfWidth.set(b.width * 0.5, 0, 0), w.halfHeight.set(0, b.height * 0.5, 0), w.halfWidth.applyMatrix4(r), w.halfHeight.applyMatrix4(r), p++;
      } else if (b.isPointLight) {
        const w = i.point[m];
        w.position.setFromMatrixPosition(b.matrixWorld), w.position.applyMatrix4(x), m++;
      } else if (b.isHemisphereLight) {
        const w = i.hemi[f];
        w.direction.setFromMatrixPosition(b.matrixWorld), w.direction.transformDirection(x), f++;
      }
    }
  }
  return {
    setup: c,
    setupView: l,
    state: i
  };
}
function da(a, e) {
  const t = new Vd(a, e), n = [], i = [];
  function s() {
    n.length = 0, i.length = 0;
  }
  function o(u) {
    n.push(u);
  }
  function r(u) {
    i.push(u);
  }
  function c(u) {
    t.setup(n, u);
  }
  function l(u) {
    t.setupView(n, u);
  }
  return {
    init: s,
    state: {
      lightsArray: n,
      shadowsArray: i,
      lights: t
    },
    setupLights: c,
    setupLightsView: l,
    pushLight: o,
    pushShadow: r
  };
}
function Hd(a, e) {
  let t = /* @__PURE__ */ new WeakMap();
  function n(s, o = 0) {
    const r = t.get(s);
    let c;
    return r === void 0 ? (c = new da(a, e), t.set(s, [c])) : o >= r.length ? (c = new da(a, e), r.push(c)) : c = r[o], c;
  }
  function i() {
    t = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: i
  };
}
class Wd extends Ut {
  constructor(e) {
    super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = nl, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
  }
}
class Xd extends Ut {
  constructor(e) {
    super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.referencePosition = new D(), this.nearDistance = 1, this.farDistance = 1e3, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.referencePosition.copy(e.referencePosition), this.nearDistance = e.nearDistance, this.farDistance = e.farDistance, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
  }
}
const qd = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, jd = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function Yd(a, e, t) {
  let n = new Ks();
  const i = new ye(), s = new ye(), o = new et(), r = new Wd({ depthPacking: il }), c = new Xd(), l = {}, h = t.maxTextureSize, u = { 0: Et, 1: en, 2: fi }, d = new yn({
    defines: {
      VSM_SAMPLES: 8
    },
    uniforms: {
      shadow_pass: { value: null },
      resolution: { value: new ye() },
      radius: { value: 4 }
    },
    vertexShader: qd,
    fragmentShader: jd
  }), m = d.clone();
  m.defines.HORIZONTAL_PASS = 1;
  const g = new At();
  g.setAttribute(
    "position",
    new Nt(
      new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]),
      3
    )
  );
  const p = new Tt(g, d), f = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = La, this.render = function(b, w, C) {
    if (f.enabled === !1 || f.autoUpdate === !1 && f.needsUpdate === !1 || b.length === 0)
      return;
    const I = a.getRenderTarget(), _ = a.getActiveCubeFace(), A = a.getActiveMipmapLevel(), F = a.state;
    F.setBlending(Qt), F.buffers.color.setClear(1, 1, 1, 1), F.buffers.depth.setTest(!0), F.setScissorTest(!1);
    for (let j = 0, J = b.length; j < J; j++) {
      const O = b[j], N = O.shadow;
      if (N === void 0) {
        console.warn("THREE.WebGLShadowMap:", O, "has no shadow.");
        continue;
      }
      if (N.autoUpdate === !1 && N.needsUpdate === !1)
        continue;
      i.copy(N.mapSize);
      const X = N.getFrameExtents();
      if (i.multiply(X), s.copy(N.mapSize), (i.x > h || i.y > h) && (i.x > h && (s.x = Math.floor(h / X.x), i.x = s.x * X.x, N.mapSize.x = s.x), i.y > h && (s.y = Math.floor(h / X.y), i.y = s.y * X.y, N.mapSize.y = s.y)), N.map === null) {
        const Q = this.type !== ii ? { minFilter: ct, magFilter: ct } : {};
        N.map = new vn(i.x, i.y, Q), N.map.texture.name = O.name + ".shadowMap", N.camera.updateProjectionMatrix();
      }
      a.setRenderTarget(N.map), a.clear();
      const Z = N.getViewportCount();
      for (let Q = 0; Q < Z; Q++) {
        const q = N.getViewport(Q);
        o.set(
          s.x * q.x,
          s.y * q.y,
          s.x * q.z,
          s.y * q.w
        ), F.viewport(o), N.updateMatrices(O, Q), n = N.getFrustum(), y(w, C, N.camera, O, this.type);
      }
      N.isPointLightShadow !== !0 && this.type === ii && x(N, C), N.needsUpdate = !1;
    }
    f.needsUpdate = !1, a.setRenderTarget(I, _, A);
  };
  function x(b, w) {
    const C = e.update(p);
    d.defines.VSM_SAMPLES !== b.blurSamples && (d.defines.VSM_SAMPLES = b.blurSamples, m.defines.VSM_SAMPLES = b.blurSamples, d.needsUpdate = !0, m.needsUpdate = !0), b.mapPass === null && (b.mapPass = new vn(i.x, i.y)), d.uniforms.shadow_pass.value = b.map.texture, d.uniforms.resolution.value = b.mapSize, d.uniforms.radius.value = b.radius, a.setRenderTarget(b.mapPass), a.clear(), a.renderBufferDirect(w, null, C, d, p, null), m.uniforms.shadow_pass.value = b.mapPass.texture, m.uniforms.resolution.value = b.mapSize, m.uniforms.radius.value = b.radius, a.setRenderTarget(b.map), a.clear(), a.renderBufferDirect(w, null, C, m, p, null);
  }
  function T(b, w, C, I, _, A) {
    let F = null;
    const j = C.isPointLight === !0 ? b.customDistanceMaterial : b.customDepthMaterial;
    if (j !== void 0)
      F = j;
    else if (F = C.isPointLight === !0 ? c : r, a.localClippingEnabled && w.clipShadows === !0 && Array.isArray(w.clippingPlanes) && w.clippingPlanes.length !== 0 || w.displacementMap && w.displacementScale !== 0 || w.alphaMap && w.alphaTest > 0 || w.map && w.alphaTest > 0) {
      const J = F.uuid, O = w.uuid;
      let N = l[J];
      N === void 0 && (N = {}, l[J] = N);
      let X = N[O];
      X === void 0 && (X = F.clone(), N[O] = X), F = X;
    }
    return F.visible = w.visible, F.wireframe = w.wireframe, A === ii ? F.side = w.shadowSide !== null ? w.shadowSide : w.side : F.side = w.shadowSide !== null ? w.shadowSide : u[w.side], F.alphaMap = w.alphaMap, F.alphaTest = w.alphaTest, F.map = w.map, F.clipShadows = w.clipShadows, F.clippingPlanes = w.clippingPlanes, F.clipIntersection = w.clipIntersection, F.displacementMap = w.displacementMap, F.displacementScale = w.displacementScale, F.displacementBias = w.displacementBias, F.wireframeLinewidth = w.wireframeLinewidth, F.linewidth = w.linewidth, C.isPointLight === !0 && F.isMeshDistanceMaterial === !0 && (F.referencePosition.setFromMatrixPosition(C.matrixWorld), F.nearDistance = I, F.farDistance = _), F;
  }
  function y(b, w, C, I, _) {
    if (b.visible === !1)
      return;
    if (b.layers.test(w.layers) && (b.isMesh || b.isLine || b.isPoints) && (b.castShadow || b.receiveShadow && _ === ii) && (!b.frustumCulled || n.intersectsObject(b))) {
      b.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse, b.matrixWorld);
      const j = e.update(b), J = b.material;
      if (Array.isArray(J)) {
        const O = j.groups;
        for (let N = 0, X = O.length; N < X; N++) {
          const Z = O[N], Q = J[Z.materialIndex];
          if (Q && Q.visible) {
            const q = T(b, Q, I, C.near, C.far, _);
            a.renderBufferDirect(C, null, j, q, b, Z);
          }
        }
      } else if (J.visible) {
        const O = T(b, J, I, C.near, C.far, _);
        a.renderBufferDirect(C, null, j, O, b, null);
      }
    }
    const F = b.children;
    for (let j = 0, J = F.length; j < J; j++)
      y(F[j], w, C, I, _);
  }
}
function Zd(a, e, t) {
  const n = t.isWebGL2;
  function i() {
    let L = !1;
    const G = new et();
    let $ = null;
    const ce = new et(0, 0, 0, 0);
    return {
      setMask: function(me) {
        $ !== me && !L && (a.colorMask(me, me, me, me), $ = me);
      },
      setLocked: function(me) {
        L = me;
      },
      setClear: function(me, Ne, Ke, it, tn) {
        tn === !0 && (me *= it, Ne *= it, Ke *= it), G.set(me, Ne, Ke, it), ce.equals(G) === !1 && (a.clearColor(me, Ne, Ke, it), ce.copy(G));
      },
      reset: function() {
        L = !1, $ = null, ce.set(-1, 0, 0, 0);
      }
    };
  }
  function s() {
    let L = !1, G = null, $ = null, ce = null;
    return {
      setTest: function(me) {
        me ? Ae(2929) : de(2929);
      },
      setMask: function(me) {
        G !== me && !L && (a.depthMask(me), G = me);
      },
      setFunc: function(me) {
        if ($ !== me) {
          switch (me) {
            case Eo:
              a.depthFunc(512);
              break;
            case Ao:
              a.depthFunc(519);
              break;
            case Co:
              a.depthFunc(513);
              break;
            case zs:
              a.depthFunc(515);
              break;
            case Lo:
              a.depthFunc(514);
              break;
            case Po:
              a.depthFunc(518);
              break;
            case Do:
              a.depthFunc(516);
              break;
            case Ro:
              a.depthFunc(517);
              break;
            default:
              a.depthFunc(515);
          }
          $ = me;
        }
      },
      setLocked: function(me) {
        L = me;
      },
      setClear: function(me) {
        ce !== me && (a.clearDepth(me), ce = me);
      },
      reset: function() {
        L = !1, G = null, $ = null, ce = null;
      }
    };
  }
  function o() {
    let L = !1, G = null, $ = null, ce = null, me = null, Ne = null, Ke = null, it = null, tn = null;
    return {
      setTest: function(Be) {
        L || (Be ? Ae(2960) : de(2960));
      },
      setMask: function(Be) {
        G !== Be && !L && (a.stencilMask(Be), G = Be);
      },
      setFunc: function(Be, Ot, Mt) {
        ($ !== Be || ce !== Ot || me !== Mt) && (a.stencilFunc(Be, Ot, Mt), $ = Be, ce = Ot, me = Mt);
      },
      setOp: function(Be, Ot, Mt) {
        (Ne !== Be || Ke !== Ot || it !== Mt) && (a.stencilOp(Be, Ot, Mt), Ne = Be, Ke = Ot, it = Mt);
      },
      setLocked: function(Be) {
        L = Be;
      },
      setClear: function(Be) {
        tn !== Be && (a.clearStencil(Be), tn = Be);
      },
      reset: function() {
        L = !1, G = null, $ = null, ce = null, me = null, Ne = null, Ke = null, it = null, tn = null;
      }
    };
  }
  const r = new i(), c = new s(), l = new o(), h = /* @__PURE__ */ new WeakMap(), u = /* @__PURE__ */ new WeakMap();
  let d = {}, m = {}, g = /* @__PURE__ */ new WeakMap(), p = [], f = null, x = !1, T = null, y = null, b = null, w = null, C = null, I = null, _ = null, A = !1, F = null, j = null, J = null, O = null, N = null;
  const X = a.getParameter(35661);
  let Z = !1, Q = 0;
  const q = a.getParameter(7938);
  q.indexOf("WebGL") !== -1 ? (Q = parseFloat(/^WebGL (\d)/.exec(q)[1]), Z = Q >= 1) : q.indexOf("OpenGL ES") !== -1 && (Q = parseFloat(/^OpenGL ES (\d)/.exec(q)[1]), Z = Q >= 2);
  let ee = null, Y = {};
  const V = a.getParameter(3088), z = a.getParameter(2978), se = new et().fromArray(V), te = new et().fromArray(z);
  function re(L, G, $) {
    const ce = new Uint8Array(4), me = a.createTexture();
    a.bindTexture(L, me), a.texParameteri(L, 10241, 9728), a.texParameteri(L, 10240, 9728);
    for (let Ne = 0; Ne < $; Ne++)
      a.texImage2D(G + Ne, 0, 6408, 1, 1, 0, 6408, 5121, ce);
    return me;
  }
  const H = {};
  H[3553] = re(3553, 3553, 1), H[34067] = re(34067, 34069, 6), r.setClear(0, 0, 0, 1), c.setClear(1), l.setClear(0), Ae(2929), c.setFunc(zs), qe(!1), rt(ir), Ae(2884), $e(Qt);
  function Ae(L) {
    d[L] !== !0 && (a.enable(L), d[L] = !0);
  }
  function de(L) {
    d[L] !== !1 && (a.disable(L), d[L] = !1);
  }
  function _e(L, G) {
    return m[L] !== G ? (a.bindFramebuffer(L, G), m[L] = G, n && (L === 36009 && (m[36160] = G), L === 36160 && (m[36009] = G)), !0) : !1;
  }
  function ue(L, G) {
    let $ = p, ce = !1;
    if (L)
      if ($ = g.get(G), $ === void 0 && ($ = [], g.set(G, $)), L.isWebGLMultipleRenderTargets) {
        const me = L.texture;
        if ($.length !== me.length || $[0] !== 36064) {
          for (let Ne = 0, Ke = me.length; Ne < Ke; Ne++)
            $[Ne] = 36064 + Ne;
          $.length = me.length, ce = !0;
        }
      } else
        $[0] !== 36064 && ($[0] = 36064, ce = !0);
    else
      $[0] !== 1029 && ($[0] = 1029, ce = !0);
    ce && (t.isWebGL2 ? a.drawBuffers($) : e.get("WEBGL_draw_buffers").drawBuffersWEBGL($));
  }
  function Fe(L) {
    return f !== L ? (a.useProgram(L), f = L, !0) : !1;
  }
  const be = {
    [Bn]: 32774,
    [mo]: 32778,
    [go]: 32779
  };
  if (n)
    be[or] = 32775, be[lr] = 32776;
  else {
    const L = e.get("EXT_blend_minmax");
    L !== null && (be[or] = L.MIN_EXT, be[lr] = L.MAX_EXT);
  }
  const xe = {
    [_o]: 0,
    [xo]: 1,
    [vo]: 768,
    [Pa]: 770,
    [To]: 776,
    [So]: 774,
    [yo]: 772,
    [Mo]: 769,
    [Da]: 771,
    [wo]: 775,
    [bo]: 773
  };
  function $e(L, G, $, ce, me, Ne, Ke, it) {
    if (L === Qt) {
      x === !0 && (de(3042), x = !1);
      return;
    }
    if (x === !1 && (Ae(3042), x = !0), L !== po) {
      if (L !== T || it !== A) {
        if ((y !== Bn || C !== Bn) && (a.blendEquation(32774), y = Bn, C = Bn), it)
          switch (L) {
            case kn:
              a.blendFuncSeparate(1, 771, 1, 771);
              break;
            case sr:
              a.blendFunc(1, 1);
              break;
            case rr:
              a.blendFuncSeparate(0, 769, 0, 1);
              break;
            case ar:
              a.blendFuncSeparate(0, 768, 0, 770);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", L);
              break;
          }
        else
          switch (L) {
            case kn:
              a.blendFuncSeparate(770, 771, 1, 771);
              break;
            case sr:
              a.blendFunc(770, 1);
              break;
            case rr:
              a.blendFuncSeparate(0, 769, 0, 1);
              break;
            case ar:
              a.blendFunc(0, 768);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", L);
              break;
          }
        b = null, w = null, I = null, _ = null, T = L, A = it;
      }
      return;
    }
    me = me || G, Ne = Ne || $, Ke = Ke || ce, (G !== y || me !== C) && (a.blendEquationSeparate(be[G], be[me]), y = G, C = me), ($ !== b || ce !== w || Ne !== I || Ke !== _) && (a.blendFuncSeparate(xe[$], xe[ce], xe[Ne], xe[Ke]), b = $, w = ce, I = Ne, _ = Ke), T = L, A = !1;
  }
  function Xe(L, G) {
    L.side === fi ? de(2884) : Ae(2884);
    let $ = L.side === Et;
    G && ($ = !$), qe($), L.blending === kn && L.transparent === !1 ? $e(Qt) : $e(L.blending, L.blendEquation, L.blendSrc, L.blendDst, L.blendEquationAlpha, L.blendSrcAlpha, L.blendDstAlpha, L.premultipliedAlpha), c.setFunc(L.depthFunc), c.setTest(L.depthTest), c.setMask(L.depthWrite), r.setMask(L.colorWrite);
    const ce = L.stencilWrite;
    l.setTest(ce), ce && (l.setMask(L.stencilWriteMask), l.setFunc(L.stencilFunc, L.stencilRef, L.stencilFuncMask), l.setOp(L.stencilFail, L.stencilZFail, L.stencilZPass)), Ue(L.polygonOffset, L.polygonOffsetFactor, L.polygonOffsetUnits), L.alphaToCoverage === !0 ? Ae(32926) : de(32926);
  }
  function qe(L) {
    F !== L && (L ? a.frontFace(2304) : a.frontFace(2305), F = L);
  }
  function rt(L) {
    L !== ho ? (Ae(2884), L !== j && (L === ir ? a.cullFace(1029) : L === uo ? a.cullFace(1028) : a.cullFace(1032))) : de(2884), j = L;
  }
  function Ge(L) {
    L !== J && (Z && a.lineWidth(L), J = L);
  }
  function Ue(L, G, $) {
    L ? (Ae(32823), (O !== G || N !== $) && (a.polygonOffset(G, $), O = G, N = $)) : de(32823);
  }
  function vt(L) {
    L ? Ae(3089) : de(3089);
  }
  function ht(L) {
    L === void 0 && (L = 33984 + X - 1), ee !== L && (a.activeTexture(L), ee = L);
  }
  function S(L, G, $) {
    $ === void 0 && (ee === null ? $ = 33984 + X - 1 : $ = ee);
    let ce = Y[$];
    ce === void 0 && (ce = { type: void 0, texture: void 0 }, Y[$] = ce), (ce.type !== L || ce.texture !== G) && (ee !== $ && (a.activeTexture($), ee = $), a.bindTexture(L, G || H[L]), ce.type = L, ce.texture = G);
  }
  function v() {
    const L = Y[ee];
    L !== void 0 && L.type !== void 0 && (a.bindTexture(L.type, null), L.type = void 0, L.texture = void 0);
  }
  function B() {
    try {
      a.compressedTexImage2D.apply(a, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function K() {
    try {
      a.compressedTexImage3D.apply(a, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function ne() {
    try {
      a.texSubImage2D.apply(a, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function ae() {
    try {
      a.texSubImage3D.apply(a, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function ve() {
    try {
      a.compressedTexSubImage2D.apply(a, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function E() {
    try {
      a.compressedTexSubImage3D.apply(a, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function P() {
    try {
      a.texStorage2D.apply(a, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function le() {
    try {
      a.texStorage3D.apply(a, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function he() {
    try {
      a.texImage2D.apply(a, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function oe() {
    try {
      a.texImage3D.apply(a, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function pe(L) {
    se.equals(L) === !1 && (a.scissor(L.x, L.y, L.z, L.w), se.copy(L));
  }
  function fe(L) {
    te.equals(L) === !1 && (a.viewport(L.x, L.y, L.z, L.w), te.copy(L));
  }
  function Ce(L, G) {
    let $ = u.get(G);
    $ === void 0 && ($ = /* @__PURE__ */ new WeakMap(), u.set(G, $));
    let ce = $.get(L);
    ce === void 0 && (ce = a.getUniformBlockIndex(G, L.name), $.set(L, ce));
  }
  function Le(L, G) {
    const ce = u.get(G).get(L);
    h.get(G) !== ce && (a.uniformBlockBinding(G, ce, L.__bindingPointIndex), h.set(G, ce));
  }
  function Oe() {
    a.disable(3042), a.disable(2884), a.disable(2929), a.disable(32823), a.disable(3089), a.disable(2960), a.disable(32926), a.blendEquation(32774), a.blendFunc(1, 0), a.blendFuncSeparate(1, 0, 1, 0), a.colorMask(!0, !0, !0, !0), a.clearColor(0, 0, 0, 0), a.depthMask(!0), a.depthFunc(513), a.clearDepth(1), a.stencilMask(4294967295), a.stencilFunc(519, 0, 4294967295), a.stencilOp(7680, 7680, 7680), a.clearStencil(0), a.cullFace(1029), a.frontFace(2305), a.polygonOffset(0, 0), a.activeTexture(33984), a.bindFramebuffer(36160, null), n === !0 && (a.bindFramebuffer(36009, null), a.bindFramebuffer(36008, null)), a.useProgram(null), a.lineWidth(1), a.scissor(0, 0, a.canvas.width, a.canvas.height), a.viewport(0, 0, a.canvas.width, a.canvas.height), d = {}, ee = null, Y = {}, m = {}, g = /* @__PURE__ */ new WeakMap(), p = [], f = null, x = !1, T = null, y = null, b = null, w = null, C = null, I = null, _ = null, A = !1, F = null, j = null, J = null, O = null, N = null, se.set(0, 0, a.canvas.width, a.canvas.height), te.set(0, 0, a.canvas.width, a.canvas.height), r.reset(), c.reset(), l.reset();
  }
  return {
    buffers: {
      color: r,
      depth: c,
      stencil: l
    },
    enable: Ae,
    disable: de,
    bindFramebuffer: _e,
    drawBuffers: ue,
    useProgram: Fe,
    setBlending: $e,
    setMaterial: Xe,
    setFlipSided: qe,
    setCullFace: rt,
    setLineWidth: Ge,
    setPolygonOffset: Ue,
    setScissorTest: vt,
    activeTexture: ht,
    bindTexture: S,
    unbindTexture: v,
    compressedTexImage2D: B,
    compressedTexImage3D: K,
    texImage2D: he,
    texImage3D: oe,
    updateUBOMapping: Ce,
    uniformBlockBinding: Le,
    texStorage2D: P,
    texStorage3D: le,
    texSubImage2D: ne,
    texSubImage3D: ae,
    compressedTexSubImage2D: ve,
    compressedTexSubImage3D: E,
    scissor: pe,
    viewport: fe,
    reset: Oe
  };
}
function $d(a, e, t, n, i, s, o) {
  const r = i.isWebGL2, c = i.maxTextures, l = i.maxCubemapSize, h = i.maxTextureSize, u = i.maxSamples, d = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, m = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), g = /* @__PURE__ */ new WeakMap();
  let p;
  const f = /* @__PURE__ */ new WeakMap();
  let x = !1;
  try {
    x = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function T(S, v) {
    return x ? new OffscreenCanvas(S, v) : di("canvas");
  }
  function y(S, v, B, K) {
    let ne = 1;
    if ((S.width > K || S.height > K) && (ne = K / Math.max(S.width, S.height)), ne < 1 || v === !0)
      if (typeof HTMLImageElement < "u" && S instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && S instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && S instanceof ImageBitmap) {
        const ae = v ? Hs : Math.floor, ve = ae(ne * S.width), E = ae(ne * S.height);
        p === void 0 && (p = T(ve, E));
        const P = B ? T(ve, E) : p;
        return P.width = ve, P.height = E, P.getContext("2d").drawImage(S, 0, 0, ve, E), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + S.width + "x" + S.height + ") to (" + ve + "x" + E + ")."), P;
      } else
        return "data" in S && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + S.width + "x" + S.height + ")."), S;
    return S;
  }
  function b(S) {
    return Fr(S.width) && Fr(S.height);
  }
  function w(S) {
    return r ? !1 : S.wrapS !== Dt || S.wrapT !== Dt || S.minFilter !== ct && S.minFilter !== St;
  }
  function C(S, v) {
    return S.generateMipmaps && v && S.minFilter !== ct && S.minFilter !== St;
  }
  function I(S) {
    a.generateMipmap(S);
  }
  function _(S, v, B, K, ne = !1) {
    if (r === !1)
      return v;
    if (S !== null) {
      if (a[S] !== void 0)
        return a[S];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + S + "'");
    }
    let ae = v;
    return v === 6403 && (B === 5126 && (ae = 33326), B === 5131 && (ae = 33325), B === 5121 && (ae = 33321)), v === 33319 && (B === 5126 && (ae = 33328), B === 5131 && (ae = 33327), B === 5121 && (ae = 33323)), v === 6408 && (B === 5126 && (ae = 34836), B === 5131 && (ae = 34842), B === 5121 && (ae = K === ze && ne === !1 ? 35907 : 32856), B === 32819 && (ae = 32854), B === 32820 && (ae = 32855)), (ae === 33325 || ae === 33326 || ae === 33327 || ae === 33328 || ae === 34842 || ae === 34836) && e.get("EXT_color_buffer_float"), ae;
  }
  function A(S, v, B) {
    return C(S, B) === !0 || S.isFramebufferTexture && S.minFilter !== ct && S.minFilter !== St ? Math.log2(Math.max(v.width, v.height)) + 1 : S.mipmaps !== void 0 && S.mipmaps.length > 0 ? S.mipmaps.length : S.isCompressedTexture && Array.isArray(S.image) ? v.mipmaps.length : 1;
  }
  function F(S) {
    return S === ct || S === cr || S === ts ? 9728 : 9729;
  }
  function j(S) {
    const v = S.target;
    v.removeEventListener("dispose", j), O(v), v.isVideoTexture && g.delete(v);
  }
  function J(S) {
    const v = S.target;
    v.removeEventListener("dispose", J), X(v);
  }
  function O(S) {
    const v = n.get(S);
    if (v.__webglInit === void 0)
      return;
    const B = S.source, K = f.get(B);
    if (K) {
      const ne = K[v.__cacheKey];
      ne.usedTimes--, ne.usedTimes === 0 && N(S), Object.keys(K).length === 0 && f.delete(B);
    }
    n.remove(S);
  }
  function N(S) {
    const v = n.get(S);
    a.deleteTexture(v.__webglTexture);
    const B = S.source, K = f.get(B);
    delete K[v.__cacheKey], o.memory.textures--;
  }
  function X(S) {
    const v = S.texture, B = n.get(S), K = n.get(v);
    if (K.__webglTexture !== void 0 && (a.deleteTexture(K.__webglTexture), o.memory.textures--), S.depthTexture && S.depthTexture.dispose(), S.isWebGLCubeRenderTarget)
      for (let ne = 0; ne < 6; ne++)
        a.deleteFramebuffer(B.__webglFramebuffer[ne]), B.__webglDepthbuffer && a.deleteRenderbuffer(B.__webglDepthbuffer[ne]);
    else {
      if (a.deleteFramebuffer(B.__webglFramebuffer), B.__webglDepthbuffer && a.deleteRenderbuffer(B.__webglDepthbuffer), B.__webglMultisampledFramebuffer && a.deleteFramebuffer(B.__webglMultisampledFramebuffer), B.__webglColorRenderbuffer)
        for (let ne = 0; ne < B.__webglColorRenderbuffer.length; ne++)
          B.__webglColorRenderbuffer[ne] && a.deleteRenderbuffer(B.__webglColorRenderbuffer[ne]);
      B.__webglDepthRenderbuffer && a.deleteRenderbuffer(B.__webglDepthRenderbuffer);
    }
    if (S.isWebGLMultipleRenderTargets)
      for (let ne = 0, ae = v.length; ne < ae; ne++) {
        const ve = n.get(v[ne]);
        ve.__webglTexture && (a.deleteTexture(ve.__webglTexture), o.memory.textures--), n.remove(v[ne]);
      }
    n.remove(v), n.remove(S);
  }
  let Z = 0;
  function Q() {
    Z = 0;
  }
  function q() {
    const S = Z;
    return S >= c && console.warn("THREE.WebGLTextures: Trying to use " + S + " texture units while this GPU supports only " + c), Z += 1, S;
  }
  function ee(S) {
    const v = [];
    return v.push(S.wrapS), v.push(S.wrapT), v.push(S.wrapR || 0), v.push(S.magFilter), v.push(S.minFilter), v.push(S.anisotropy), v.push(S.internalFormat), v.push(S.format), v.push(S.type), v.push(S.generateMipmaps), v.push(S.premultiplyAlpha), v.push(S.flipY), v.push(S.unpackAlignment), v.push(S.encoding), v.join();
  }
  function Y(S, v) {
    const B = n.get(S);
    if (S.isVideoTexture && vt(S), S.isRenderTargetTexture === !1 && S.version > 0 && B.__version !== S.version) {
      const K = S.image;
      if (K === null)
        console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else if (K.complete === !1)
        console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        de(B, S, v);
        return;
      }
    }
    t.bindTexture(3553, B.__webglTexture, 33984 + v);
  }
  function V(S, v) {
    const B = n.get(S);
    if (S.version > 0 && B.__version !== S.version) {
      de(B, S, v);
      return;
    }
    t.bindTexture(35866, B.__webglTexture, 33984 + v);
  }
  function z(S, v) {
    const B = n.get(S);
    if (S.version > 0 && B.__version !== S.version) {
      de(B, S, v);
      return;
    }
    t.bindTexture(32879, B.__webglTexture, 33984 + v);
  }
  function se(S, v) {
    const B = n.get(S);
    if (S.version > 0 && B.__version !== S.version) {
      _e(B, S, v);
      return;
    }
    t.bindTexture(34067, B.__webglTexture, 33984 + v);
  }
  const te = {
    [qi]: 10497,
    [Dt]: 33071,
    [ks]: 33648
  }, re = {
    [ct]: 9728,
    [cr]: 9984,
    [ts]: 9986,
    [St]: 9729,
    [Go]: 9985,
    [ci]: 9987
  };
  function H(S, v, B) {
    if (B ? (a.texParameteri(S, 10242, te[v.wrapS]), a.texParameteri(S, 10243, te[v.wrapT]), (S === 32879 || S === 35866) && a.texParameteri(S, 32882, te[v.wrapR]), a.texParameteri(S, 10240, re[v.magFilter]), a.texParameteri(S, 10241, re[v.minFilter])) : (a.texParameteri(S, 10242, 33071), a.texParameteri(S, 10243, 33071), (S === 32879 || S === 35866) && a.texParameteri(S, 32882, 33071), (v.wrapS !== Dt || v.wrapT !== Dt) && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), a.texParameteri(S, 10240, F(v.magFilter)), a.texParameteri(S, 10241, F(v.minFilter)), v.minFilter !== ct && v.minFilter !== St && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), e.has("EXT_texture_filter_anisotropic") === !0) {
      const K = e.get("EXT_texture_filter_anisotropic");
      if (v.magFilter === ct || v.minFilter !== ts && v.minFilter !== ci || v.type === pn && e.has("OES_texture_float_linear") === !1 || r === !1 && v.type === hi && e.has("OES_texture_half_float_linear") === !1)
        return;
      (v.anisotropy > 1 || n.get(v).__currentAnisotropy) && (a.texParameterf(S, K.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(v.anisotropy, i.getMaxAnisotropy())), n.get(v).__currentAnisotropy = v.anisotropy);
    }
  }
  function Ae(S, v) {
    let B = !1;
    S.__webglInit === void 0 && (S.__webglInit = !0, v.addEventListener("dispose", j));
    const K = v.source;
    let ne = f.get(K);
    ne === void 0 && (ne = {}, f.set(K, ne));
    const ae = ee(v);
    if (ae !== S.__cacheKey) {
      ne[ae] === void 0 && (ne[ae] = {
        texture: a.createTexture(),
        usedTimes: 0
      }, o.memory.textures++, B = !0), ne[ae].usedTimes++;
      const ve = ne[S.__cacheKey];
      ve !== void 0 && (ne[S.__cacheKey].usedTimes--, ve.usedTimes === 0 && N(v)), S.__cacheKey = ae, S.__webglTexture = ne[ae].texture;
    }
    return B;
  }
  function de(S, v, B) {
    let K = 3553;
    (v.isDataArrayTexture || v.isCompressedArrayTexture) && (K = 35866), v.isData3DTexture && (K = 32879);
    const ne = Ae(S, v), ae = v.source;
    t.bindTexture(K, S.__webglTexture, 33984 + B);
    const ve = n.get(ae);
    if (ae.version !== ve.__version || ne === !0) {
      t.activeTexture(33984 + B), a.pixelStorei(37440, v.flipY), a.pixelStorei(37441, v.premultiplyAlpha), a.pixelStorei(3317, v.unpackAlignment), a.pixelStorei(37443, 0);
      const E = w(v) && b(v.image) === !1;
      let P = y(v.image, E, !1, h);
      P = ht(v, P);
      const le = b(P) || r, he = s.convert(v.format, v.encoding);
      let oe = s.convert(v.type), pe = _(v.internalFormat, he, oe, v.encoding, v.isVideoTexture);
      H(K, v, le);
      let fe;
      const Ce = v.mipmaps, Le = r && v.isVideoTexture !== !0, Oe = ve.__version === void 0 || ne === !0, L = A(v, P, le);
      if (v.isDepthTexture)
        pe = 6402, r ? v.type === pn ? pe = 36012 : v.type === fn ? pe = 33190 : v.type === Vn ? pe = 35056 : pe = 33189 : v.type === pn && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), v.format === mn && pe === 6402 && v.type !== Ia && v.type !== fn && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), v.type = fn, oe = s.convert(v.type)), v.format === Xn && pe === 6402 && (pe = 34041, v.type !== Vn && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), v.type = Vn, oe = s.convert(v.type))), Oe && (Le ? t.texStorage2D(3553, 1, pe, P.width, P.height) : t.texImage2D(3553, 0, pe, P.width, P.height, 0, he, oe, null));
      else if (v.isDataTexture)
        if (Ce.length > 0 && le) {
          Le && Oe && t.texStorage2D(3553, L, pe, Ce[0].width, Ce[0].height);
          for (let G = 0, $ = Ce.length; G < $; G++)
            fe = Ce[G], Le ? t.texSubImage2D(3553, G, 0, 0, fe.width, fe.height, he, oe, fe.data) : t.texImage2D(3553, G, pe, fe.width, fe.height, 0, he, oe, fe.data);
          v.generateMipmaps = !1;
        } else
          Le ? (Oe && t.texStorage2D(3553, L, pe, P.width, P.height), t.texSubImage2D(3553, 0, 0, 0, P.width, P.height, he, oe, P.data)) : t.texImage2D(3553, 0, pe, P.width, P.height, 0, he, oe, P.data);
      else if (v.isCompressedTexture)
        if (v.isCompressedArrayTexture) {
          Le && Oe && t.texStorage3D(35866, L, pe, Ce[0].width, Ce[0].height, P.depth);
          for (let G = 0, $ = Ce.length; G < $; G++)
            fe = Ce[G], v.format !== Rt ? he !== null ? Le ? t.compressedTexSubImage3D(35866, G, 0, 0, 0, fe.width, fe.height, P.depth, he, fe.data, 0, 0) : t.compressedTexImage3D(35866, G, pe, fe.width, fe.height, P.depth, 0, fe.data, 0, 0) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Le ? t.texSubImage3D(35866, G, 0, 0, 0, fe.width, fe.height, P.depth, he, oe, fe.data) : t.texImage3D(35866, G, pe, fe.width, fe.height, P.depth, 0, he, oe, fe.data);
        } else {
          Le && Oe && t.texStorage2D(3553, L, pe, Ce[0].width, Ce[0].height);
          for (let G = 0, $ = Ce.length; G < $; G++)
            fe = Ce[G], v.format !== Rt ? he !== null ? Le ? t.compressedTexSubImage2D(3553, G, 0, 0, fe.width, fe.height, he, fe.data) : t.compressedTexImage2D(3553, G, pe, fe.width, fe.height, 0, fe.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Le ? t.texSubImage2D(3553, G, 0, 0, fe.width, fe.height, he, oe, fe.data) : t.texImage2D(3553, G, pe, fe.width, fe.height, 0, he, oe, fe.data);
        }
      else if (v.isDataArrayTexture)
        Le ? (Oe && t.texStorage3D(35866, L, pe, P.width, P.height, P.depth), t.texSubImage3D(35866, 0, 0, 0, 0, P.width, P.height, P.depth, he, oe, P.data)) : t.texImage3D(35866, 0, pe, P.width, P.height, P.depth, 0, he, oe, P.data);
      else if (v.isData3DTexture)
        Le ? (Oe && t.texStorage3D(32879, L, pe, P.width, P.height, P.depth), t.texSubImage3D(32879, 0, 0, 0, 0, P.width, P.height, P.depth, he, oe, P.data)) : t.texImage3D(32879, 0, pe, P.width, P.height, P.depth, 0, he, oe, P.data);
      else if (v.isFramebufferTexture) {
        if (Oe)
          if (Le)
            t.texStorage2D(3553, L, pe, P.width, P.height);
          else {
            let G = P.width, $ = P.height;
            for (let ce = 0; ce < L; ce++)
              t.texImage2D(3553, ce, pe, G, $, 0, he, oe, null), G >>= 1, $ >>= 1;
          }
      } else if (Ce.length > 0 && le) {
        Le && Oe && t.texStorage2D(3553, L, pe, Ce[0].width, Ce[0].height);
        for (let G = 0, $ = Ce.length; G < $; G++)
          fe = Ce[G], Le ? t.texSubImage2D(3553, G, 0, 0, he, oe, fe) : t.texImage2D(3553, G, pe, he, oe, fe);
        v.generateMipmaps = !1;
      } else
        Le ? (Oe && t.texStorage2D(3553, L, pe, P.width, P.height), t.texSubImage2D(3553, 0, 0, 0, he, oe, P)) : t.texImage2D(3553, 0, pe, he, oe, P);
      C(v, le) && I(K), ve.__version = ae.version, v.onUpdate && v.onUpdate(v);
    }
    S.__version = v.version;
  }
  function _e(S, v, B) {
    if (v.image.length !== 6)
      return;
    const K = Ae(S, v), ne = v.source;
    t.bindTexture(34067, S.__webglTexture, 33984 + B);
    const ae = n.get(ne);
    if (ne.version !== ae.__version || K === !0) {
      t.activeTexture(33984 + B), a.pixelStorei(37440, v.flipY), a.pixelStorei(37441, v.premultiplyAlpha), a.pixelStorei(3317, v.unpackAlignment), a.pixelStorei(37443, 0);
      const ve = v.isCompressedTexture || v.image[0].isCompressedTexture, E = v.image[0] && v.image[0].isDataTexture, P = [];
      for (let G = 0; G < 6; G++)
        !ve && !E ? P[G] = y(v.image[G], !1, !0, l) : P[G] = E ? v.image[G].image : v.image[G], P[G] = ht(v, P[G]);
      const le = P[0], he = b(le) || r, oe = s.convert(v.format, v.encoding), pe = s.convert(v.type), fe = _(v.internalFormat, oe, pe, v.encoding), Ce = r && v.isVideoTexture !== !0, Le = ae.__version === void 0 || K === !0;
      let Oe = A(v, le, he);
      H(34067, v, he);
      let L;
      if (ve) {
        Ce && Le && t.texStorage2D(34067, Oe, fe, le.width, le.height);
        for (let G = 0; G < 6; G++) {
          L = P[G].mipmaps;
          for (let $ = 0; $ < L.length; $++) {
            const ce = L[$];
            v.format !== Rt ? oe !== null ? Ce ? t.compressedTexSubImage2D(34069 + G, $, 0, 0, ce.width, ce.height, oe, ce.data) : t.compressedTexImage2D(34069 + G, $, fe, ce.width, ce.height, 0, ce.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : Ce ? t.texSubImage2D(34069 + G, $, 0, 0, ce.width, ce.height, oe, pe, ce.data) : t.texImage2D(34069 + G, $, fe, ce.width, ce.height, 0, oe, pe, ce.data);
          }
        }
      } else {
        L = v.mipmaps, Ce && Le && (L.length > 0 && Oe++, t.texStorage2D(34067, Oe, fe, P[0].width, P[0].height));
        for (let G = 0; G < 6; G++)
          if (E) {
            Ce ? t.texSubImage2D(34069 + G, 0, 0, 0, P[G].width, P[G].height, oe, pe, P[G].data) : t.texImage2D(34069 + G, 0, fe, P[G].width, P[G].height, 0, oe, pe, P[G].data);
            for (let $ = 0; $ < L.length; $++) {
              const me = L[$].image[G].image;
              Ce ? t.texSubImage2D(34069 + G, $ + 1, 0, 0, me.width, me.height, oe, pe, me.data) : t.texImage2D(34069 + G, $ + 1, fe, me.width, me.height, 0, oe, pe, me.data);
            }
          } else {
            Ce ? t.texSubImage2D(34069 + G, 0, 0, 0, oe, pe, P[G]) : t.texImage2D(34069 + G, 0, fe, oe, pe, P[G]);
            for (let $ = 0; $ < L.length; $++) {
              const ce = L[$];
              Ce ? t.texSubImage2D(34069 + G, $ + 1, 0, 0, oe, pe, ce.image[G]) : t.texImage2D(34069 + G, $ + 1, fe, oe, pe, ce.image[G]);
            }
          }
      }
      C(v, he) && I(34067), ae.__version = ne.version, v.onUpdate && v.onUpdate(v);
    }
    S.__version = v.version;
  }
  function ue(S, v, B, K, ne) {
    const ae = s.convert(B.format, B.encoding), ve = s.convert(B.type), E = _(B.internalFormat, ae, ve, B.encoding);
    n.get(v).__hasExternalTextures || (ne === 32879 || ne === 35866 ? t.texImage3D(ne, 0, E, v.width, v.height, v.depth, 0, ae, ve, null) : t.texImage2D(ne, 0, E, v.width, v.height, 0, ae, ve, null)), t.bindFramebuffer(36160, S), Ue(v) ? d.framebufferTexture2DMultisampleEXT(36160, K, ne, n.get(B).__webglTexture, 0, Ge(v)) : (ne === 3553 || ne >= 34069 && ne <= 34074) && a.framebufferTexture2D(36160, K, ne, n.get(B).__webglTexture, 0), t.bindFramebuffer(36160, null);
  }
  function Fe(S, v, B) {
    if (a.bindRenderbuffer(36161, S), v.depthBuffer && !v.stencilBuffer) {
      let K = 33189;
      if (B || Ue(v)) {
        const ne = v.depthTexture;
        ne && ne.isDepthTexture && (ne.type === pn ? K = 36012 : ne.type === fn && (K = 33190));
        const ae = Ge(v);
        Ue(v) ? d.renderbufferStorageMultisampleEXT(36161, ae, K, v.width, v.height) : a.renderbufferStorageMultisample(36161, ae, K, v.width, v.height);
      } else
        a.renderbufferStorage(36161, K, v.width, v.height);
      a.framebufferRenderbuffer(36160, 36096, 36161, S);
    } else if (v.depthBuffer && v.stencilBuffer) {
      const K = Ge(v);
      B && Ue(v) === !1 ? a.renderbufferStorageMultisample(36161, K, 35056, v.width, v.height) : Ue(v) ? d.renderbufferStorageMultisampleEXT(36161, K, 35056, v.width, v.height) : a.renderbufferStorage(36161, 34041, v.width, v.height), a.framebufferRenderbuffer(36160, 33306, 36161, S);
    } else {
      const K = v.isWebGLMultipleRenderTargets === !0 ? v.texture : [v.texture];
      for (let ne = 0; ne < K.length; ne++) {
        const ae = K[ne], ve = s.convert(ae.format, ae.encoding), E = s.convert(ae.type), P = _(ae.internalFormat, ve, E, ae.encoding), le = Ge(v);
        B && Ue(v) === !1 ? a.renderbufferStorageMultisample(36161, le, P, v.width, v.height) : Ue(v) ? d.renderbufferStorageMultisampleEXT(36161, le, P, v.width, v.height) : a.renderbufferStorage(36161, P, v.width, v.height);
      }
    }
    a.bindRenderbuffer(36161, null);
  }
  function be(S, v) {
    if (v && v.isWebGLCubeRenderTarget)
      throw new Error("Depth Texture with cube render targets is not supported");
    if (t.bindFramebuffer(36160, S), !(v.depthTexture && v.depthTexture.isDepthTexture))
      throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    (!n.get(v.depthTexture).__webglTexture || v.depthTexture.image.width !== v.width || v.depthTexture.image.height !== v.height) && (v.depthTexture.image.width = v.width, v.depthTexture.image.height = v.height, v.depthTexture.needsUpdate = !0), Y(v.depthTexture, 0);
    const K = n.get(v.depthTexture).__webglTexture, ne = Ge(v);
    if (v.depthTexture.format === mn)
      Ue(v) ? d.framebufferTexture2DMultisampleEXT(36160, 36096, 3553, K, 0, ne) : a.framebufferTexture2D(36160, 36096, 3553, K, 0);
    else if (v.depthTexture.format === Xn)
      Ue(v) ? d.framebufferTexture2DMultisampleEXT(36160, 33306, 3553, K, 0, ne) : a.framebufferTexture2D(36160, 33306, 3553, K, 0);
    else
      throw new Error("Unknown depthTexture format");
  }
  function xe(S) {
    const v = n.get(S), B = S.isWebGLCubeRenderTarget === !0;
    if (S.depthTexture && !v.__autoAllocateDepthBuffer) {
      if (B)
        throw new Error("target.depthTexture not supported in Cube render targets");
      be(v.__webglFramebuffer, S);
    } else if (B) {
      v.__webglDepthbuffer = [];
      for (let K = 0; K < 6; K++)
        t.bindFramebuffer(36160, v.__webglFramebuffer[K]), v.__webglDepthbuffer[K] = a.createRenderbuffer(), Fe(v.__webglDepthbuffer[K], S, !1);
    } else
      t.bindFramebuffer(36160, v.__webglFramebuffer), v.__webglDepthbuffer = a.createRenderbuffer(), Fe(v.__webglDepthbuffer, S, !1);
    t.bindFramebuffer(36160, null);
  }
  function $e(S, v, B) {
    const K = n.get(S);
    v !== void 0 && ue(K.__webglFramebuffer, S, S.texture, 36064, 3553), B !== void 0 && xe(S);
  }
  function Xe(S) {
    const v = S.texture, B = n.get(S), K = n.get(v);
    S.addEventListener("dispose", J), S.isWebGLMultipleRenderTargets !== !0 && (K.__webglTexture === void 0 && (K.__webglTexture = a.createTexture()), K.__version = v.version, o.memory.textures++);
    const ne = S.isWebGLCubeRenderTarget === !0, ae = S.isWebGLMultipleRenderTargets === !0, ve = b(S) || r;
    if (ne) {
      B.__webglFramebuffer = [];
      for (let E = 0; E < 6; E++)
        B.__webglFramebuffer[E] = a.createFramebuffer();
    } else {
      if (B.__webglFramebuffer = a.createFramebuffer(), ae)
        if (i.drawBuffers) {
          const E = S.texture;
          for (let P = 0, le = E.length; P < le; P++) {
            const he = n.get(E[P]);
            he.__webglTexture === void 0 && (he.__webglTexture = a.createTexture(), o.memory.textures++);
          }
        } else
          console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");
      if (r && S.samples > 0 && Ue(S) === !1) {
        const E = ae ? v : [v];
        B.__webglMultisampledFramebuffer = a.createFramebuffer(), B.__webglColorRenderbuffer = [], t.bindFramebuffer(36160, B.__webglMultisampledFramebuffer);
        for (let P = 0; P < E.length; P++) {
          const le = E[P];
          B.__webglColorRenderbuffer[P] = a.createRenderbuffer(), a.bindRenderbuffer(36161, B.__webglColorRenderbuffer[P]);
          const he = s.convert(le.format, le.encoding), oe = s.convert(le.type), pe = _(le.internalFormat, he, oe, le.encoding, S.isXRRenderTarget === !0), fe = Ge(S);
          a.renderbufferStorageMultisample(36161, fe, pe, S.width, S.height), a.framebufferRenderbuffer(36160, 36064 + P, 36161, B.__webglColorRenderbuffer[P]);
        }
        a.bindRenderbuffer(36161, null), S.depthBuffer && (B.__webglDepthRenderbuffer = a.createRenderbuffer(), Fe(B.__webglDepthRenderbuffer, S, !0)), t.bindFramebuffer(36160, null);
      }
    }
    if (ne) {
      t.bindTexture(34067, K.__webglTexture), H(34067, v, ve);
      for (let E = 0; E < 6; E++)
        ue(B.__webglFramebuffer[E], S, v, 36064, 34069 + E);
      C(v, ve) && I(34067), t.unbindTexture();
    } else if (ae) {
      const E = S.texture;
      for (let P = 0, le = E.length; P < le; P++) {
        const he = E[P], oe = n.get(he);
        t.bindTexture(3553, oe.__webglTexture), H(3553, he, ve), ue(B.__webglFramebuffer, S, he, 36064 + P, 3553), C(he, ve) && I(3553);
      }
      t.unbindTexture();
    } else {
      let E = 3553;
      (S.isWebGL3DRenderTarget || S.isWebGLArrayRenderTarget) && (r ? E = S.isWebGL3DRenderTarget ? 32879 : 35866 : console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")), t.bindTexture(E, K.__webglTexture), H(E, v, ve), ue(B.__webglFramebuffer, S, v, 36064, E), C(v, ve) && I(E), t.unbindTexture();
    }
    S.depthBuffer && xe(S);
  }
  function qe(S) {
    const v = b(S) || r, B = S.isWebGLMultipleRenderTargets === !0 ? S.texture : [S.texture];
    for (let K = 0, ne = B.length; K < ne; K++) {
      const ae = B[K];
      if (C(ae, v)) {
        const ve = S.isWebGLCubeRenderTarget ? 34067 : 3553, E = n.get(ae).__webglTexture;
        t.bindTexture(ve, E), I(ve), t.unbindTexture();
      }
    }
  }
  function rt(S) {
    if (r && S.samples > 0 && Ue(S) === !1) {
      const v = S.isWebGLMultipleRenderTargets ? S.texture : [S.texture], B = S.width, K = S.height;
      let ne = 16384;
      const ae = [], ve = S.stencilBuffer ? 33306 : 36096, E = n.get(S), P = S.isWebGLMultipleRenderTargets === !0;
      if (P)
        for (let le = 0; le < v.length; le++)
          t.bindFramebuffer(36160, E.__webglMultisampledFramebuffer), a.framebufferRenderbuffer(36160, 36064 + le, 36161, null), t.bindFramebuffer(36160, E.__webglFramebuffer), a.framebufferTexture2D(36009, 36064 + le, 3553, null, 0);
      t.bindFramebuffer(36008, E.__webglMultisampledFramebuffer), t.bindFramebuffer(36009, E.__webglFramebuffer);
      for (let le = 0; le < v.length; le++) {
        ae.push(36064 + le), S.depthBuffer && ae.push(ve);
        const he = E.__ignoreDepthValues !== void 0 ? E.__ignoreDepthValues : !1;
        if (he === !1 && (S.depthBuffer && (ne |= 256), S.stencilBuffer && (ne |= 1024)), P && a.framebufferRenderbuffer(36008, 36064, 36161, E.__webglColorRenderbuffer[le]), he === !0 && (a.invalidateFramebuffer(36008, [ve]), a.invalidateFramebuffer(36009, [ve])), P) {
          const oe = n.get(v[le]).__webglTexture;
          a.framebufferTexture2D(36009, 36064, 3553, oe, 0);
        }
        a.blitFramebuffer(0, 0, B, K, 0, 0, B, K, ne, 9728), m && a.invalidateFramebuffer(36008, ae);
      }
      if (t.bindFramebuffer(36008, null), t.bindFramebuffer(36009, null), P)
        for (let le = 0; le < v.length; le++) {
          t.bindFramebuffer(36160, E.__webglMultisampledFramebuffer), a.framebufferRenderbuffer(36160, 36064 + le, 36161, E.__webglColorRenderbuffer[le]);
          const he = n.get(v[le]).__webglTexture;
          t.bindFramebuffer(36160, E.__webglFramebuffer), a.framebufferTexture2D(36009, 36064 + le, 3553, he, 0);
        }
      t.bindFramebuffer(36009, E.__webglMultisampledFramebuffer);
    }
  }
  function Ge(S) {
    return Math.min(u, S.samples);
  }
  function Ue(S) {
    const v = n.get(S);
    return r && S.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === !0 && v.__useRenderToTexture !== !1;
  }
  function vt(S) {
    const v = o.render.frame;
    g.get(S) !== v && (g.set(S, v), S.update());
  }
  function ht(S, v) {
    const B = S.encoding, K = S.format, ne = S.type;
    return S.isCompressedTexture === !0 || S.isVideoTexture === !0 || S.format === Vs || B !== xn && (B === ze ? r === !1 ? e.has("EXT_sRGB") === !0 && K === Rt ? (S.format = Vs, S.minFilter = St, S.generateMipmaps = !1) : v = Ua.sRGBToLinear(v) : (K !== Rt || ne !== _n) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture encoding:", B)), v;
  }
  this.allocateTextureUnit = q, this.resetTextureUnits = Q, this.setTexture2D = Y, this.setTexture2DArray = V, this.setTexture3D = z, this.setTextureCube = se, this.rebindTextures = $e, this.setupRenderTarget = Xe, this.updateRenderTargetMipmap = qe, this.updateMultisampleRenderTarget = rt, this.setupDepthRenderbuffer = xe, this.setupFrameBufferTexture = ue, this.useMultisampledRTT = Ue;
}
function Kd(a, e, t) {
  const n = t.isWebGL2;
  function i(s, o = null) {
    let r;
    if (s === _n)
      return 5121;
    if (s === Wo)
      return 32819;
    if (s === Xo)
      return 32820;
    if (s === ko)
      return 5120;
    if (s === Vo)
      return 5122;
    if (s === Ia)
      return 5123;
    if (s === Ho)
      return 5124;
    if (s === fn)
      return 5125;
    if (s === pn)
      return 5126;
    if (s === hi)
      return n ? 5131 : (r = e.get("OES_texture_half_float"), r !== null ? r.HALF_FLOAT_OES : null);
    if (s === qo)
      return 6406;
    if (s === Rt)
      return 6408;
    if (s === Yo)
      return 6409;
    if (s === Zo)
      return 6410;
    if (s === mn)
      return 6402;
    if (s === Xn)
      return 34041;
    if (s === jo)
      return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"), 6408;
    if (s === Vs)
      return r = e.get("EXT_sRGB"), r !== null ? r.SRGB_ALPHA_EXT : null;
    if (s === $o)
      return 6403;
    if (s === Ko)
      return 36244;
    if (s === Jo)
      return 33319;
    if (s === Qo)
      return 33320;
    if (s === el)
      return 36249;
    if (s === ns || s === is || s === ss || s === rs)
      if (o === ze)
        if (r = e.get("WEBGL_compressed_texture_s3tc_srgb"), r !== null) {
          if (s === ns)
            return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (s === is)
            return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (s === ss)
            return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (s === rs)
            return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else
          return null;
      else if (r = e.get("WEBGL_compressed_texture_s3tc"), r !== null) {
        if (s === ns)
          return r.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (s === is)
          return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (s === ss)
          return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (s === rs)
          return r.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else
        return null;
    if (s === hr || s === ur || s === dr || s === fr)
      if (r = e.get("WEBGL_compressed_texture_pvrtc"), r !== null) {
        if (s === hr)
          return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (s === ur)
          return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (s === dr)
          return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (s === fr)
          return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else
        return null;
    if (s === tl)
      return r = e.get("WEBGL_compressed_texture_etc1"), r !== null ? r.COMPRESSED_RGB_ETC1_WEBGL : null;
    if (s === pr || s === mr)
      if (r = e.get("WEBGL_compressed_texture_etc"), r !== null) {
        if (s === pr)
          return o === ze ? r.COMPRESSED_SRGB8_ETC2 : r.COMPRESSED_RGB8_ETC2;
        if (s === mr)
          return o === ze ? r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : r.COMPRESSED_RGBA8_ETC2_EAC;
      } else
        return null;
    if (s === gr || s === _r || s === xr || s === vr || s === Mr || s === yr || s === br || s === Sr || s === wr || s === Tr || s === Er || s === Ar || s === Cr || s === Lr)
      if (r = e.get("WEBGL_compressed_texture_astc"), r !== null) {
        if (s === gr)
          return o === ze ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : r.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (s === _r)
          return o === ze ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : r.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (s === xr)
          return o === ze ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : r.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (s === vr)
          return o === ze ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : r.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (s === Mr)
          return o === ze ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : r.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (s === yr)
          return o === ze ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : r.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (s === br)
          return o === ze ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : r.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (s === Sr)
          return o === ze ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : r.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (s === wr)
          return o === ze ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : r.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (s === Tr)
          return o === ze ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : r.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (s === Er)
          return o === ze ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : r.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (s === Ar)
          return o === ze ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : r.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (s === Cr)
          return o === ze ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : r.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (s === Lr)
          return o === ze ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : r.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else
        return null;
    if (s === Pr)
      if (r = e.get("EXT_texture_compression_bptc"), r !== null) {
        if (s === Pr)
          return o === ze ? r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : r.COMPRESSED_RGBA_BPTC_UNORM_EXT;
      } else
        return null;
    return s === Vn ? n ? 34042 : (r = e.get("WEBGL_depth_texture"), r !== null ? r.UNSIGNED_INT_24_8_WEBGL : null) : a[s] !== void 0 ? a[s] : null;
  }
  return { convert: i };
}
class Jd extends wt {
  constructor(e = []) {
    super(), this.isArrayCamera = !0, this.cameras = e;
  }
}
class ri extends tt {
  constructor() {
    super(), this.isGroup = !0, this.type = "Group";
  }
}
const Qd = { type: "move" };
class Rs {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new ri(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new ri(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new D(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new D()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new ri(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new D(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new D()), this._grip;
  }
  dispatchEvent(e) {
    return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this;
  }
  connect(e) {
    if (e && e.hand) {
      const t = this._hand;
      if (t)
        for (const n of e.hand.values())
          this._getHandJoint(t, n);
    }
    return this.dispatchEvent({ type: "connected", data: e }), this;
  }
  disconnect(e) {
    return this.dispatchEvent({ type: "disconnected", data: e }), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this;
  }
  update(e, t, n) {
    let i = null, s = null, o = null;
    const r = this._targetRay, c = this._grip, l = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (l && e.hand) {
        o = !0;
        for (const p of e.hand.values()) {
          const f = t.getJointPose(p, n), x = this._getHandJoint(l, p);
          f !== null && (x.matrix.fromArray(f.transform.matrix), x.matrix.decompose(x.position, x.rotation, x.scale), x.jointRadius = f.radius), x.visible = f !== null;
        }
        const h = l.joints["index-finger-tip"], u = l.joints["thumb-tip"], d = h.position.distanceTo(u.position), m = 0.02, g = 5e-3;
        l.inputState.pinching && d > m + g ? (l.inputState.pinching = !1, this.dispatchEvent({
          type: "pinchend",
          handedness: e.handedness,
          target: this
        })) : !l.inputState.pinching && d <= m - g && (l.inputState.pinching = !0, this.dispatchEvent({
          type: "pinchstart",
          handedness: e.handedness,
          target: this
        }));
      } else
        c !== null && e.gripSpace && (s = t.getPose(e.gripSpace, n), s !== null && (c.matrix.fromArray(s.transform.matrix), c.matrix.decompose(c.position, c.rotation, c.scale), s.linearVelocity ? (c.hasLinearVelocity = !0, c.linearVelocity.copy(s.linearVelocity)) : c.hasLinearVelocity = !1, s.angularVelocity ? (c.hasAngularVelocity = !0, c.angularVelocity.copy(s.angularVelocity)) : c.hasAngularVelocity = !1));
      r !== null && (i = t.getPose(e.targetRaySpace, n), i === null && s !== null && (i = s), i !== null && (r.matrix.fromArray(i.transform.matrix), r.matrix.decompose(r.position, r.rotation, r.scale), i.linearVelocity ? (r.hasLinearVelocity = !0, r.linearVelocity.copy(i.linearVelocity)) : r.hasLinearVelocity = !1, i.angularVelocity ? (r.hasAngularVelocity = !0, r.angularVelocity.copy(i.angularVelocity)) : r.hasAngularVelocity = !1, this.dispatchEvent(Qd)));
    }
    return r !== null && (r.visible = i !== null), c !== null && (c.visible = s !== null), l !== null && (l.visible = o !== null), this;
  }
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const n = new ri();
      n.matrixAutoUpdate = !1, n.visible = !1, e.joints[t.jointName] = n, e.add(n);
    }
    return e.joints[t.jointName];
  }
}
class ef extends dt {
  constructor(e, t, n, i, s, o, r, c, l, h) {
    if (h = h !== void 0 ? h : mn, h !== mn && h !== Xn)
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    n === void 0 && h === mn && (n = fn), n === void 0 && h === Xn && (n = Vn), super(null, i, s, o, r, c, h, n, l), this.isDepthTexture = !0, this.image = { width: e, height: t }, this.magFilter = r !== void 0 ? r : ct, this.minFilter = c !== void 0 ? c : ct, this.flipY = !1, this.generateMipmaps = !1;
  }
}
class tf extends bn {
  constructor(e, t) {
    super();
    const n = this;
    let i = null, s = 1, o = null, r = "local-floor", c = null, l = null, h = null, u = null, d = null, m = null;
    const g = t.getContextAttributes();
    let p = null, f = null;
    const x = [], T = [], y = /* @__PURE__ */ new Set(), b = /* @__PURE__ */ new Map(), w = new wt();
    w.layers.enable(1), w.viewport = new et();
    const C = new wt();
    C.layers.enable(2), C.viewport = new et();
    const I = [w, C], _ = new Jd();
    _.layers.enable(1), _.layers.enable(2);
    let A = null, F = null;
    this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(V) {
      let z = x[V];
      return z === void 0 && (z = new Rs(), x[V] = z), z.getTargetRaySpace();
    }, this.getControllerGrip = function(V) {
      let z = x[V];
      return z === void 0 && (z = new Rs(), x[V] = z), z.getGripSpace();
    }, this.getHand = function(V) {
      let z = x[V];
      return z === void 0 && (z = new Rs(), x[V] = z), z.getHandSpace();
    };
    function j(V) {
      const z = T.indexOf(V.inputSource);
      if (z === -1)
        return;
      const se = x[z];
      se !== void 0 && se.dispatchEvent({ type: V.type, data: V.inputSource });
    }
    function J() {
      i.removeEventListener("select", j), i.removeEventListener("selectstart", j), i.removeEventListener("selectend", j), i.removeEventListener("squeeze", j), i.removeEventListener("squeezestart", j), i.removeEventListener("squeezeend", j), i.removeEventListener("end", J), i.removeEventListener("inputsourceschange", O);
      for (let V = 0; V < x.length; V++) {
        const z = T[V];
        z !== null && (T[V] = null, x[V].disconnect(z));
      }
      A = null, F = null, e.setRenderTarget(p), d = null, u = null, h = null, i = null, f = null, Y.stop(), n.isPresenting = !1, n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(V) {
      s = V, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(V) {
      r = V, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return c || o;
    }, this.setReferenceSpace = function(V) {
      c = V;
    }, this.getBaseLayer = function() {
      return u !== null ? u : d;
    }, this.getBinding = function() {
      return h;
    }, this.getFrame = function() {
      return m;
    }, this.getSession = function() {
      return i;
    }, this.setSession = async function(V) {
      if (i = V, i !== null) {
        if (p = e.getRenderTarget(), i.addEventListener("select", j), i.addEventListener("selectstart", j), i.addEventListener("selectend", j), i.addEventListener("squeeze", j), i.addEventListener("squeezestart", j), i.addEventListener("squeezeend", j), i.addEventListener("end", J), i.addEventListener("inputsourceschange", O), g.xrCompatible !== !0 && await t.makeXRCompatible(), i.renderState.layers === void 0 || e.capabilities.isWebGL2 === !1) {
          const z = {
            antialias: i.renderState.layers === void 0 ? g.antialias : !0,
            alpha: g.alpha,
            depth: g.depth,
            stencil: g.stencil,
            framebufferScaleFactor: s
          };
          d = new XRWebGLLayer(i, t, z), i.updateRenderState({ baseLayer: d }), f = new vn(
            d.framebufferWidth,
            d.framebufferHeight,
            {
              format: Rt,
              type: _n,
              encoding: e.outputEncoding,
              stencilBuffer: g.stencil
            }
          );
        } else {
          let z = null, se = null, te = null;
          g.depth && (te = g.stencil ? 35056 : 33190, z = g.stencil ? Xn : mn, se = g.stencil ? Vn : fn);
          const re = {
            colorFormat: 32856,
            depthFormat: te,
            scaleFactor: s
          };
          h = new XRWebGLBinding(i, t), u = h.createProjectionLayer(re), i.updateRenderState({ layers: [u] }), f = new vn(
            u.textureWidth,
            u.textureHeight,
            {
              format: Rt,
              type: _n,
              depthTexture: new ef(u.textureWidth, u.textureHeight, se, void 0, void 0, void 0, void 0, void 0, void 0, z),
              stencilBuffer: g.stencil,
              encoding: e.outputEncoding,
              samples: g.antialias ? 4 : 0
            }
          );
          const H = e.properties.get(f);
          H.__ignoreDepthValues = u.ignoreDepthValues;
        }
        f.isXRRenderTarget = !0, this.setFoveation(1), c = null, o = await i.requestReferenceSpace(r), Y.setContext(i), Y.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" });
      }
    };
    function O(V) {
      for (let z = 0; z < V.removed.length; z++) {
        const se = V.removed[z], te = T.indexOf(se);
        te >= 0 && (T[te] = null, x[te].disconnect(se));
      }
      for (let z = 0; z < V.added.length; z++) {
        const se = V.added[z];
        let te = T.indexOf(se);
        if (te === -1) {
          for (let H = 0; H < x.length; H++)
            if (H >= T.length) {
              T.push(se), te = H;
              break;
            } else if (T[H] === null) {
              T[H] = se, te = H;
              break;
            }
          if (te === -1)
            break;
        }
        const re = x[te];
        re && re.connect(se);
      }
    }
    const N = new D(), X = new D();
    function Z(V, z, se) {
      N.setFromMatrixPosition(z.matrixWorld), X.setFromMatrixPosition(se.matrixWorld);
      const te = N.distanceTo(X), re = z.projectionMatrix.elements, H = se.projectionMatrix.elements, Ae = re[14] / (re[10] - 1), de = re[14] / (re[10] + 1), _e = (re[9] + 1) / re[5], ue = (re[9] - 1) / re[5], Fe = (re[8] - 1) / re[0], be = (H[8] + 1) / H[0], xe = Ae * Fe, $e = Ae * be, Xe = te / (-Fe + be), qe = Xe * -Fe;
      z.matrixWorld.decompose(V.position, V.quaternion, V.scale), V.translateX(qe), V.translateZ(Xe), V.matrixWorld.compose(V.position, V.quaternion, V.scale), V.matrixWorldInverse.copy(V.matrixWorld).invert();
      const rt = Ae + Xe, Ge = de + Xe, Ue = xe - qe, vt = $e + (te - qe), ht = _e * de / Ge * rt, S = ue * de / Ge * rt;
      V.projectionMatrix.makePerspective(Ue, vt, ht, S, rt, Ge);
    }
    function Q(V, z) {
      z === null ? V.matrixWorld.copy(V.matrix) : V.matrixWorld.multiplyMatrices(z.matrixWorld, V.matrix), V.matrixWorldInverse.copy(V.matrixWorld).invert();
    }
    this.updateCamera = function(V) {
      if (i === null)
        return;
      _.near = C.near = w.near = V.near, _.far = C.far = w.far = V.far, (A !== _.near || F !== _.far) && (i.updateRenderState({
        depthNear: _.near,
        depthFar: _.far
      }), A = _.near, F = _.far);
      const z = V.parent, se = _.cameras;
      Q(_, z);
      for (let re = 0; re < se.length; re++)
        Q(se[re], z);
      _.matrixWorld.decompose(_.position, _.quaternion, _.scale), V.matrix.copy(_.matrix), V.matrix.decompose(V.position, V.quaternion, V.scale);
      const te = V.children;
      for (let re = 0, H = te.length; re < H; re++)
        te[re].updateMatrixWorld(!0);
      se.length === 2 ? Z(_, w, C) : _.projectionMatrix.copy(w.projectionMatrix);
    }, this.getCamera = function() {
      return _;
    }, this.getFoveation = function() {
      if (u !== null)
        return u.fixedFoveation;
      if (d !== null)
        return d.fixedFoveation;
    }, this.setFoveation = function(V) {
      u !== null && (u.fixedFoveation = V), d !== null && d.fixedFoveation !== void 0 && (d.fixedFoveation = V);
    }, this.getPlanes = function() {
      return y;
    };
    let q = null;
    function ee(V, z) {
      if (l = z.getViewerPose(c || o), m = z, l !== null) {
        const se = l.views;
        d !== null && (e.setRenderTargetFramebuffer(f, d.framebuffer), e.setRenderTarget(f));
        let te = !1;
        se.length !== _.cameras.length && (_.cameras.length = 0, te = !0);
        for (let re = 0; re < se.length; re++) {
          const H = se[re];
          let Ae = null;
          if (d !== null)
            Ae = d.getViewport(H);
          else {
            const _e = h.getViewSubImage(u, H);
            Ae = _e.viewport, re === 0 && (e.setRenderTargetTextures(
              f,
              _e.colorTexture,
              u.ignoreDepthValues ? void 0 : _e.depthStencilTexture
            ), e.setRenderTarget(f));
          }
          let de = I[re];
          de === void 0 && (de = new wt(), de.layers.enable(re), de.viewport = new et(), I[re] = de), de.matrix.fromArray(H.transform.matrix), de.projectionMatrix.fromArray(H.projectionMatrix), de.viewport.set(Ae.x, Ae.y, Ae.width, Ae.height), re === 0 && _.matrix.copy(de.matrix), te === !0 && _.cameras.push(de);
        }
      }
      for (let se = 0; se < x.length; se++) {
        const te = T[se], re = x[se];
        te !== null && re !== void 0 && re.update(te, z, c || o);
      }
      if (q && q(V, z), z.detectedPlanes) {
        n.dispatchEvent({ type: "planesdetected", data: z.detectedPlanes });
        let se = null;
        for (const te of y)
          z.detectedPlanes.has(te) || (se === null && (se = []), se.push(te));
        if (se !== null)
          for (const te of se)
            y.delete(te), b.delete(te), n.dispatchEvent({ type: "planeremoved", data: te });
        for (const te of z.detectedPlanes)
          if (!y.has(te))
            y.add(te), b.set(te, z.lastChangedTime), n.dispatchEvent({ type: "planeadded", data: te });
          else {
            const re = b.get(te);
            te.lastChangedTime > re && (b.set(te, te.lastChangedTime), n.dispatchEvent({ type: "planechanged", data: te }));
          }
      }
      m = null;
    }
    const Y = new qa();
    Y.setAnimationLoop(ee), this.setAnimationLoop = function(V) {
      q = V;
    }, this.dispose = function() {
    };
  }
}
function nf(a, e) {
  function t(p, f) {
    f.color.getRGB(p.fogColor.value, Ha(a)), f.isFog ? (p.fogNear.value = f.near, p.fogFar.value = f.far) : f.isFogExp2 && (p.fogDensity.value = f.density);
  }
  function n(p, f, x, T, y) {
    f.isMeshBasicMaterial || f.isMeshLambertMaterial ? i(p, f) : f.isMeshToonMaterial ? (i(p, f), h(p, f)) : f.isMeshPhongMaterial ? (i(p, f), l(p, f)) : f.isMeshStandardMaterial ? (i(p, f), u(p, f), f.isMeshPhysicalMaterial && d(p, f, y)) : f.isMeshMatcapMaterial ? (i(p, f), m(p, f)) : f.isMeshDepthMaterial ? i(p, f) : f.isMeshDistanceMaterial ? (i(p, f), g(p, f)) : f.isMeshNormalMaterial ? i(p, f) : f.isLineBasicMaterial ? (s(p, f), f.isLineDashedMaterial && o(p, f)) : f.isPointsMaterial ? r(p, f, x, T) : f.isSpriteMaterial ? c(p, f) : f.isShadowMaterial ? (p.color.value.copy(f.color), p.opacity.value = f.opacity) : f.isShaderMaterial && (f.uniformsNeedUpdate = !1);
  }
  function i(p, f) {
    p.opacity.value = f.opacity, f.color && p.diffuse.value.copy(f.color), f.emissive && p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity), f.map && (p.map.value = f.map), f.alphaMap && (p.alphaMap.value = f.alphaMap), f.bumpMap && (p.bumpMap.value = f.bumpMap, p.bumpScale.value = f.bumpScale, f.side === Et && (p.bumpScale.value *= -1)), f.displacementMap && (p.displacementMap.value = f.displacementMap, p.displacementScale.value = f.displacementScale, p.displacementBias.value = f.displacementBias), f.emissiveMap && (p.emissiveMap.value = f.emissiveMap), f.normalMap && (p.normalMap.value = f.normalMap, p.normalScale.value.copy(f.normalScale), f.side === Et && p.normalScale.value.negate()), f.specularMap && (p.specularMap.value = f.specularMap), f.alphaTest > 0 && (p.alphaTest.value = f.alphaTest);
    const x = e.get(f).envMap;
    if (x && (p.envMap.value = x, p.flipEnvMap.value = x.isCubeTexture && x.isRenderTargetTexture === !1 ? -1 : 1, p.reflectivity.value = f.reflectivity, p.ior.value = f.ior, p.refractionRatio.value = f.refractionRatio), f.lightMap) {
      p.lightMap.value = f.lightMap;
      const b = a.physicallyCorrectLights !== !0 ? Math.PI : 1;
      p.lightMapIntensity.value = f.lightMapIntensity * b;
    }
    f.aoMap && (p.aoMap.value = f.aoMap, p.aoMapIntensity.value = f.aoMapIntensity);
    let T;
    f.map ? T = f.map : f.specularMap ? T = f.specularMap : f.displacementMap ? T = f.displacementMap : f.normalMap ? T = f.normalMap : f.bumpMap ? T = f.bumpMap : f.roughnessMap ? T = f.roughnessMap : f.metalnessMap ? T = f.metalnessMap : f.alphaMap ? T = f.alphaMap : f.emissiveMap ? T = f.emissiveMap : f.clearcoatMap ? T = f.clearcoatMap : f.clearcoatNormalMap ? T = f.clearcoatNormalMap : f.clearcoatRoughnessMap ? T = f.clearcoatRoughnessMap : f.iridescenceMap ? T = f.iridescenceMap : f.iridescenceThicknessMap ? T = f.iridescenceThicknessMap : f.specularIntensityMap ? T = f.specularIntensityMap : f.specularColorMap ? T = f.specularColorMap : f.transmissionMap ? T = f.transmissionMap : f.thicknessMap ? T = f.thicknessMap : f.sheenColorMap ? T = f.sheenColorMap : f.sheenRoughnessMap && (T = f.sheenRoughnessMap), T !== void 0 && (T.isWebGLRenderTarget && (T = T.texture), T.matrixAutoUpdate === !0 && T.updateMatrix(), p.uvTransform.value.copy(T.matrix));
    let y;
    f.aoMap ? y = f.aoMap : f.lightMap && (y = f.lightMap), y !== void 0 && (y.isWebGLRenderTarget && (y = y.texture), y.matrixAutoUpdate === !0 && y.updateMatrix(), p.uv2Transform.value.copy(y.matrix));
  }
  function s(p, f) {
    p.diffuse.value.copy(f.color), p.opacity.value = f.opacity;
  }
  function o(p, f) {
    p.dashSize.value = f.dashSize, p.totalSize.value = f.dashSize + f.gapSize, p.scale.value = f.scale;
  }
  function r(p, f, x, T) {
    p.diffuse.value.copy(f.color), p.opacity.value = f.opacity, p.size.value = f.size * x, p.scale.value = T * 0.5, f.map && (p.map.value = f.map), f.alphaMap && (p.alphaMap.value = f.alphaMap), f.alphaTest > 0 && (p.alphaTest.value = f.alphaTest);
    let y;
    f.map ? y = f.map : f.alphaMap && (y = f.alphaMap), y !== void 0 && (y.matrixAutoUpdate === !0 && y.updateMatrix(), p.uvTransform.value.copy(y.matrix));
  }
  function c(p, f) {
    p.diffuse.value.copy(f.color), p.opacity.value = f.opacity, p.rotation.value = f.rotation, f.map && (p.map.value = f.map), f.alphaMap && (p.alphaMap.value = f.alphaMap), f.alphaTest > 0 && (p.alphaTest.value = f.alphaTest);
    let x;
    f.map ? x = f.map : f.alphaMap && (x = f.alphaMap), x !== void 0 && (x.matrixAutoUpdate === !0 && x.updateMatrix(), p.uvTransform.value.copy(x.matrix));
  }
  function l(p, f) {
    p.specular.value.copy(f.specular), p.shininess.value = Math.max(f.shininess, 1e-4);
  }
  function h(p, f) {
    f.gradientMap && (p.gradientMap.value = f.gradientMap);
  }
  function u(p, f) {
    p.roughness.value = f.roughness, p.metalness.value = f.metalness, f.roughnessMap && (p.roughnessMap.value = f.roughnessMap), f.metalnessMap && (p.metalnessMap.value = f.metalnessMap), e.get(f).envMap && (p.envMapIntensity.value = f.envMapIntensity);
  }
  function d(p, f, x) {
    p.ior.value = f.ior, f.sheen > 0 && (p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen), p.sheenRoughness.value = f.sheenRoughness, f.sheenColorMap && (p.sheenColorMap.value = f.sheenColorMap), f.sheenRoughnessMap && (p.sheenRoughnessMap.value = f.sheenRoughnessMap)), f.clearcoat > 0 && (p.clearcoat.value = f.clearcoat, p.clearcoatRoughness.value = f.clearcoatRoughness, f.clearcoatMap && (p.clearcoatMap.value = f.clearcoatMap), f.clearcoatRoughnessMap && (p.clearcoatRoughnessMap.value = f.clearcoatRoughnessMap), f.clearcoatNormalMap && (p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale), p.clearcoatNormalMap.value = f.clearcoatNormalMap, f.side === Et && p.clearcoatNormalScale.value.negate())), f.iridescence > 0 && (p.iridescence.value = f.iridescence, p.iridescenceIOR.value = f.iridescenceIOR, p.iridescenceThicknessMinimum.value = f.iridescenceThicknessRange[0], p.iridescenceThicknessMaximum.value = f.iridescenceThicknessRange[1], f.iridescenceMap && (p.iridescenceMap.value = f.iridescenceMap), f.iridescenceThicknessMap && (p.iridescenceThicknessMap.value = f.iridescenceThicknessMap)), f.transmission > 0 && (p.transmission.value = f.transmission, p.transmissionSamplerMap.value = x.texture, p.transmissionSamplerSize.value.set(x.width, x.height), f.transmissionMap && (p.transmissionMap.value = f.transmissionMap), p.thickness.value = f.thickness, f.thicknessMap && (p.thicknessMap.value = f.thicknessMap), p.attenuationDistance.value = f.attenuationDistance, p.attenuationColor.value.copy(f.attenuationColor)), p.specularIntensity.value = f.specularIntensity, p.specularColor.value.copy(f.specularColor), f.specularIntensityMap && (p.specularIntensityMap.value = f.specularIntensityMap), f.specularColorMap && (p.specularColorMap.value = f.specularColorMap);
  }
  function m(p, f) {
    f.matcap && (p.matcap.value = f.matcap);
  }
  function g(p, f) {
    p.referencePosition.value.copy(f.referencePosition), p.nearDistance.value = f.nearDistance, p.farDistance.value = f.farDistance;
  }
  return {
    refreshFogUniforms: t,
    refreshMaterialUniforms: n
  };
}
function sf(a, e, t, n) {
  let i = {}, s = {}, o = [];
  const r = t.isWebGL2 ? a.getParameter(35375) : 0;
  function c(T, y) {
    const b = y.program;
    n.uniformBlockBinding(T, b);
  }
  function l(T, y) {
    let b = i[T.id];
    b === void 0 && (g(T), b = h(T), i[T.id] = b, T.addEventListener("dispose", f));
    const w = y.program;
    n.updateUBOMapping(T, w);
    const C = e.render.frame;
    s[T.id] !== C && (d(T), s[T.id] = C);
  }
  function h(T) {
    const y = u();
    T.__bindingPointIndex = y;
    const b = a.createBuffer(), w = T.__size, C = T.usage;
    return a.bindBuffer(35345, b), a.bufferData(35345, w, C), a.bindBuffer(35345, null), a.bindBufferBase(35345, y, b), b;
  }
  function u() {
    for (let T = 0; T < r; T++)
      if (o.indexOf(T) === -1)
        return o.push(T), T;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function d(T) {
    const y = i[T.id], b = T.uniforms, w = T.__cache;
    a.bindBuffer(35345, y);
    for (let C = 0, I = b.length; C < I; C++) {
      const _ = b[C];
      if (m(_, C, w) === !0) {
        const A = _.__offset, F = Array.isArray(_.value) ? _.value : [_.value];
        let j = 0;
        for (let J = 0; J < F.length; J++) {
          const O = F[J], N = p(O);
          typeof O == "number" ? (_.__data[0] = O, a.bufferSubData(35345, A + j, _.__data)) : O.isMatrix3 ? (_.__data[0] = O.elements[0], _.__data[1] = O.elements[1], _.__data[2] = O.elements[2], _.__data[3] = O.elements[0], _.__data[4] = O.elements[3], _.__data[5] = O.elements[4], _.__data[6] = O.elements[5], _.__data[7] = O.elements[0], _.__data[8] = O.elements[6], _.__data[9] = O.elements[7], _.__data[10] = O.elements[8], _.__data[11] = O.elements[0]) : (O.toArray(_.__data, j), j += N.storage / Float32Array.BYTES_PER_ELEMENT);
        }
        a.bufferSubData(35345, A, _.__data);
      }
    }
    a.bindBuffer(35345, null);
  }
  function m(T, y, b) {
    const w = T.value;
    if (b[y] === void 0) {
      if (typeof w == "number")
        b[y] = w;
      else {
        const C = Array.isArray(w) ? w : [w], I = [];
        for (let _ = 0; _ < C.length; _++)
          I.push(C[_].clone());
        b[y] = I;
      }
      return !0;
    } else if (typeof w == "number") {
      if (b[y] !== w)
        return b[y] = w, !0;
    } else {
      const C = Array.isArray(b[y]) ? b[y] : [b[y]], I = Array.isArray(w) ? w : [w];
      for (let _ = 0; _ < C.length; _++) {
        const A = C[_];
        if (A.equals(I[_]) === !1)
          return A.copy(I[_]), !0;
      }
    }
    return !1;
  }
  function g(T) {
    const y = T.uniforms;
    let b = 0;
    const w = 16;
    let C = 0;
    for (let I = 0, _ = y.length; I < _; I++) {
      const A = y[I], F = {
        boundary: 0,
        storage: 0
      }, j = Array.isArray(A.value) ? A.value : [A.value];
      for (let J = 0, O = j.length; J < O; J++) {
        const N = j[J], X = p(N);
        F.boundary += X.boundary, F.storage += X.storage;
      }
      if (A.__data = new Float32Array(F.storage / Float32Array.BYTES_PER_ELEMENT), A.__offset = b, I > 0) {
        C = b % w;
        const J = w - C;
        C !== 0 && J - F.boundary < 0 && (b += w - C, A.__offset = b);
      }
      b += F.storage;
    }
    return C = b % w, C > 0 && (b += w - C), T.__size = b, T.__cache = {}, this;
  }
  function p(T) {
    const y = {
      boundary: 0,
      storage: 0
    };
    return typeof T == "number" ? (y.boundary = 4, y.storage = 4) : T.isVector2 ? (y.boundary = 8, y.storage = 8) : T.isVector3 || T.isColor ? (y.boundary = 16, y.storage = 12) : T.isVector4 ? (y.boundary = 16, y.storage = 16) : T.isMatrix3 ? (y.boundary = 48, y.storage = 48) : T.isMatrix4 ? (y.boundary = 64, y.storage = 64) : T.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", T), y;
  }
  function f(T) {
    const y = T.target;
    y.removeEventListener("dispose", f);
    const b = o.indexOf(y.__bindingPointIndex);
    o.splice(b, 1), a.deleteBuffer(i[y.id]), delete i[y.id], delete s[y.id];
  }
  function x() {
    for (const T in i)
      a.deleteBuffer(i[T]);
    o = [], i = {}, s = {};
  }
  return {
    bind: c,
    update: l,
    dispose: x
  };
}
function rf() {
  const a = di("canvas");
  return a.style.display = "block", a;
}
function Ja(a = {}) {
  this.isWebGLRenderer = !0;
  const e = a.canvas !== void 0 ? a.canvas : rf(), t = a.context !== void 0 ? a.context : null, n = a.depth !== void 0 ? a.depth : !0, i = a.stencil !== void 0 ? a.stencil : !0, s = a.antialias !== void 0 ? a.antialias : !1, o = a.premultipliedAlpha !== void 0 ? a.premultipliedAlpha : !0, r = a.preserveDrawingBuffer !== void 0 ? a.preserveDrawingBuffer : !1, c = a.powerPreference !== void 0 ? a.powerPreference : "default", l = a.failIfMajorPerformanceCaveat !== void 0 ? a.failIfMajorPerformanceCaveat : !1;
  let h;
  t !== null ? h = t.getContextAttributes().alpha : h = a.alpha !== void 0 ? a.alpha : !1;
  let u = null, d = null;
  const m = [], g = [];
  this.domElement = e, this.debug = {
    checkShaderErrors: !0
  }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.outputEncoding = xn, this.physicallyCorrectLights = !1, this.toneMapping = Yt, this.toneMappingExposure = 1;
  const p = this;
  let f = !1, x = 0, T = 0, y = null, b = -1, w = null;
  const C = new et(), I = new et();
  let _ = null, A = e.width, F = e.height, j = 1, J = null, O = null;
  const N = new et(0, 0, A, F), X = new et(0, 0, A, F);
  let Z = !1;
  const Q = new Ks();
  let q = !1, ee = !1, Y = null;
  const V = new ke(), z = new ye(), se = new D(), te = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };
  function re() {
    return y === null ? j : 1;
  }
  let H = t;
  function Ae(M, U) {
    for (let k = 0; k < M.length; k++) {
      const R = M[k], W = e.getContext(R, U);
      if (W !== null)
        return W;
    }
    return null;
  }
  try {
    const M = {
      alpha: !0,
      depth: n,
      stencil: i,
      antialias: s,
      premultipliedAlpha: o,
      preserveDrawingBuffer: r,
      powerPreference: c,
      failIfMajorPerformanceCaveat: l
    };
    if ("setAttribute" in e && e.setAttribute("data-engine", `three.js r${js}`), e.addEventListener("webglcontextlost", pe, !1), e.addEventListener("webglcontextrestored", fe, !1), e.addEventListener("webglcontextcreationerror", Ce, !1), H === null) {
      const U = ["webgl2", "webgl", "experimental-webgl"];
      if (p.isWebGL1Renderer === !0 && U.shift(), H = Ae(U, M), H === null)
        throw Ae(U) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
    }
    H.getShaderPrecisionFormat === void 0 && (H.getShaderPrecisionFormat = function() {
      return { rangeMin: 1, rangeMax: 1, precision: 1 };
    });
  } catch (M) {
    throw console.error("THREE.WebGLRenderer: " + M.message), M;
  }
  let de, _e, ue, Fe, be, xe, $e, Xe, qe, rt, Ge, Ue, vt, ht, S, v, B, K, ne, ae, ve, E, P, le;
  function he() {
    de = new mu(H), _e = new cu(H, de, a), de.init(_e), E = new Kd(H, de, _e), ue = new Zd(H, de, _e), Fe = new xu(), be = new Nd(), xe = new $d(H, de, ue, be, _e, E, Fe), $e = new uu(p), Xe = new pu(p), qe = new Al(H, _e), P = new ou(H, de, qe, _e), rt = new gu(H, qe, Fe, P), Ge = new bu(H, rt, qe, Fe), ne = new yu(H, _e, xe), v = new hu(be), Ue = new Fd(p, $e, Xe, de, _e, P, v), vt = new nf(p, be), ht = new Od(), S = new Hd(de, _e), K = new au(p, $e, Xe, ue, Ge, h, o), B = new Yd(p, Ge, _e), le = new sf(H, Fe, _e, ue), ae = new lu(H, de, Fe, _e), ve = new _u(H, de, Fe, _e), Fe.programs = Ue.programs, p.capabilities = _e, p.extensions = de, p.properties = be, p.renderLists = ht, p.shadowMap = B, p.state = ue, p.info = Fe;
  }
  he();
  const oe = new tf(p, H);
  this.xr = oe, this.getContext = function() {
    return H;
  }, this.getContextAttributes = function() {
    return H.getContextAttributes();
  }, this.forceContextLoss = function() {
    const M = de.get("WEBGL_lose_context");
    M && M.loseContext();
  }, this.forceContextRestore = function() {
    const M = de.get("WEBGL_lose_context");
    M && M.restoreContext();
  }, this.getPixelRatio = function() {
    return j;
  }, this.setPixelRatio = function(M) {
    M !== void 0 && (j = M, this.setSize(A, F, !1));
  }, this.getSize = function(M) {
    return M.set(A, F);
  }, this.setSize = function(M, U, k) {
    if (oe.isPresenting) {
      console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
      return;
    }
    A = M, F = U, e.width = Math.floor(M * j), e.height = Math.floor(U * j), k !== !1 && (e.style.width = M + "px", e.style.height = U + "px"), this.setViewport(0, 0, M, U);
  }, this.getDrawingBufferSize = function(M) {
    return M.set(A * j, F * j).floor();
  }, this.setDrawingBufferSize = function(M, U, k) {
    A = M, F = U, j = k, e.width = Math.floor(M * k), e.height = Math.floor(U * k), this.setViewport(0, 0, M, U);
  }, this.getCurrentViewport = function(M) {
    return M.copy(C);
  }, this.getViewport = function(M) {
    return M.copy(N);
  }, this.setViewport = function(M, U, k, R) {
    M.isVector4 ? N.set(M.x, M.y, M.z, M.w) : N.set(M, U, k, R), ue.viewport(C.copy(N).multiplyScalar(j).floor());
  }, this.getScissor = function(M) {
    return M.copy(X);
  }, this.setScissor = function(M, U, k, R) {
    M.isVector4 ? X.set(M.x, M.y, M.z, M.w) : X.set(M, U, k, R), ue.scissor(I.copy(X).multiplyScalar(j).floor());
  }, this.getScissorTest = function() {
    return Z;
  }, this.setScissorTest = function(M) {
    ue.setScissorTest(Z = M);
  }, this.setOpaqueSort = function(M) {
    J = M;
  }, this.setTransparentSort = function(M) {
    O = M;
  }, this.getClearColor = function(M) {
    return M.copy(K.getClearColor());
  }, this.setClearColor = function() {
    K.setClearColor.apply(K, arguments);
  }, this.getClearAlpha = function() {
    return K.getClearAlpha();
  }, this.setClearAlpha = function() {
    K.setClearAlpha.apply(K, arguments);
  }, this.clear = function(M = !0, U = !0, k = !0) {
    let R = 0;
    M && (R |= 16384), U && (R |= 256), k && (R |= 1024), H.clear(R);
  }, this.clearColor = function() {
    this.clear(!0, !1, !1);
  }, this.clearDepth = function() {
    this.clear(!1, !0, !1);
  }, this.clearStencil = function() {
    this.clear(!1, !1, !0);
  }, this.dispose = function() {
    e.removeEventListener("webglcontextlost", pe, !1), e.removeEventListener("webglcontextrestored", fe, !1), e.removeEventListener("webglcontextcreationerror", Ce, !1), ht.dispose(), S.dispose(), be.dispose(), $e.dispose(), Xe.dispose(), Ge.dispose(), P.dispose(), le.dispose(), Ue.dispose(), oe.dispose(), oe.removeEventListener("sessionstart", ce), oe.removeEventListener("sessionend", me), Y && (Y.dispose(), Y = null), Ne.stop();
  };
  function pe(M) {
    M.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), f = !0;
  }
  function fe() {
    console.log("THREE.WebGLRenderer: Context Restored."), f = !1;
    const M = Fe.autoReset, U = B.enabled, k = B.autoUpdate, R = B.needsUpdate, W = B.type;
    he(), Fe.autoReset = M, B.enabled = U, B.autoUpdate = k, B.needsUpdate = R, B.type = W;
  }
  function Ce(M) {
    console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", M.statusMessage);
  }
  function Le(M) {
    const U = M.target;
    U.removeEventListener("dispose", Le), Oe(U);
  }
  function Oe(M) {
    L(M), be.remove(M);
  }
  function L(M) {
    const U = be.get(M).programs;
    U !== void 0 && (U.forEach(function(k) {
      Ue.releaseProgram(k);
    }), M.isShaderMaterial && Ue.releaseShaderCache(M));
  }
  this.renderBufferDirect = function(M, U, k, R, W, ge) {
    U === null && (U = te);
    const Me = W.isMesh && W.matrixWorld.determinant() < 0, we = ao(M, U, k, R, W);
    ue.setMaterial(R, Me);
    let Te = k.index, Ie = 1;
    R.wireframe === !0 && (Te = rt.getWireframeAttribute(k), Ie = 2);
    const Pe = k.drawRange, De = k.attributes.position;
    let Ve = Pe.start * Ie, ft = (Pe.start + Pe.count) * Ie;
    ge !== null && (Ve = Math.max(Ve, ge.start * Ie), ft = Math.min(ft, (ge.start + ge.count) * Ie)), Te !== null ? (Ve = Math.max(Ve, 0), ft = Math.min(ft, Te.count)) : De != null && (Ve = Math.max(Ve, 0), ft = Math.min(ft, De.count));
    const zt = ft - Ve;
    if (zt < 0 || zt === 1 / 0)
      return;
    P.setup(W, R, we, k, Te);
    let nn, He = ae;
    if (Te !== null && (nn = qe.get(Te), He = ve, He.setIndex(nn)), W.isMesh)
      R.wireframe === !0 ? (ue.setLineWidth(R.wireframeLinewidth * re()), He.setMode(1)) : He.setMode(4);
    else if (W.isLine) {
      let Re = R.linewidth;
      Re === void 0 && (Re = 1), ue.setLineWidth(Re * re()), W.isLineSegments ? He.setMode(1) : W.isLineLoop ? He.setMode(2) : He.setMode(3);
    } else
      W.isPoints ? He.setMode(0) : W.isSprite && He.setMode(4);
    if (W.isInstancedMesh)
      He.renderInstances(Ve, zt, W.count);
    else if (k.isInstancedBufferGeometry) {
      const Re = k._maxInstanceCount !== void 0 ? k._maxInstanceCount : 1 / 0, Ki = Math.min(k.instanceCount, Re);
      He.renderInstances(Ve, zt, Ki);
    } else
      He.render(Ve, zt);
  }, this.compile = function(M, U) {
    function k(R, W, ge) {
      R.transparent === !0 && R.side === vi ? (R.side = Et, R.needsUpdate = !0, Mt(R, W, ge), R.side = en, R.needsUpdate = !0, Mt(R, W, ge), R.side = vi) : Mt(R, W, ge);
    }
    d = S.get(M), d.init(), g.push(d), M.traverseVisible(function(R) {
      R.isLight && R.layers.test(U.layers) && (d.pushLight(R), R.castShadow && d.pushShadow(R));
    }), d.setupLights(p.physicallyCorrectLights), M.traverse(function(R) {
      const W = R.material;
      if (W)
        if (Array.isArray(W))
          for (let ge = 0; ge < W.length; ge++) {
            const Me = W[ge];
            k(Me, M, R);
          }
        else
          k(W, M, R);
    }), g.pop(), d = null;
  };
  let G = null;
  function $(M) {
    G && G(M);
  }
  function ce() {
    Ne.stop();
  }
  function me() {
    Ne.start();
  }
  const Ne = new qa();
  Ne.setAnimationLoop($), typeof self < "u" && Ne.setContext(self), this.setAnimationLoop = function(M) {
    G = M, oe.setAnimationLoop(M), M === null ? Ne.stop() : Ne.start();
  }, oe.addEventListener("sessionstart", ce), oe.addEventListener("sessionend", me), this.render = function(M, U) {
    if (U !== void 0 && U.isCamera !== !0) {
      console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
      return;
    }
    if (f === !0)
      return;
    M.matrixWorldAutoUpdate === !0 && M.updateMatrixWorld(), U.parent === null && U.matrixWorldAutoUpdate === !0 && U.updateMatrixWorld(), oe.enabled === !0 && oe.isPresenting === !0 && (oe.cameraAutoUpdate === !0 && oe.updateCamera(U), U = oe.getCamera()), M.isScene === !0 && M.onBeforeRender(p, M, U, y), d = S.get(M, g.length), d.init(), g.push(d), V.multiplyMatrices(U.projectionMatrix, U.matrixWorldInverse), Q.setFromProjectionMatrix(V), ee = this.localClippingEnabled, q = v.init(this.clippingPlanes, ee, U), u = ht.get(M, m.length), u.init(), m.push(u), Ke(M, U, 0, p.sortObjects), u.finish(), p.sortObjects === !0 && u.sort(J, O), q === !0 && v.beginShadows();
    const k = d.state.shadowsArray;
    if (B.render(k, M, U), q === !0 && v.endShadows(), this.info.autoReset === !0 && this.info.reset(), K.render(u, M), d.setupLights(p.physicallyCorrectLights), U.isArrayCamera) {
      const R = U.cameras;
      for (let W = 0, ge = R.length; W < ge; W++) {
        const Me = R[W];
        it(u, M, Me, Me.viewport);
      }
    } else
      it(u, M, U);
    y !== null && (xe.updateMultisampleRenderTarget(y), xe.updateRenderTargetMipmap(y)), M.isScene === !0 && M.onAfterRender(p, M, U), P.resetDefaultState(), b = -1, w = null, g.pop(), g.length > 0 ? d = g[g.length - 1] : d = null, m.pop(), m.length > 0 ? u = m[m.length - 1] : u = null;
  };
  function Ke(M, U, k, R) {
    if (M.visible === !1)
      return;
    if (M.layers.test(U.layers)) {
      if (M.isGroup)
        k = M.renderOrder;
      else if (M.isLOD)
        M.autoUpdate === !0 && M.update(U);
      else if (M.isLight)
        d.pushLight(M), M.castShadow && d.pushShadow(M);
      else if (M.isSprite) {
        if (!M.frustumCulled || Q.intersectsSprite(M)) {
          R && se.setFromMatrixPosition(M.matrixWorld).applyMatrix4(V);
          const Me = Ge.update(M), we = M.material;
          we.visible && u.push(M, Me, we, k, se.z, null);
        }
      } else if ((M.isMesh || M.isLine || M.isPoints) && (M.isSkinnedMesh && M.skeleton.frame !== Fe.render.frame && (M.skeleton.update(), M.skeleton.frame = Fe.render.frame), !M.frustumCulled || Q.intersectsObject(M))) {
        R && se.setFromMatrixPosition(M.matrixWorld).applyMatrix4(V);
        const Me = Ge.update(M), we = M.material;
        if (Array.isArray(we)) {
          const Te = Me.groups;
          for (let Ie = 0, Pe = Te.length; Ie < Pe; Ie++) {
            const De = Te[Ie], Ve = we[De.materialIndex];
            Ve && Ve.visible && u.push(M, Me, Ve, k, se.z, De);
          }
        } else
          we.visible && u.push(M, Me, we, k, se.z, null);
      }
    }
    const ge = M.children;
    for (let Me = 0, we = ge.length; Me < we; Me++)
      Ke(ge[Me], U, k, R);
  }
  function it(M, U, k, R) {
    const W = M.opaque, ge = M.transmissive, Me = M.transparent;
    d.setupLightsView(k), ge.length > 0 && tn(W, U, k), R && ue.viewport(C.copy(R)), W.length > 0 && Be(W, U, k), ge.length > 0 && Be(ge, U, k), Me.length > 0 && Be(Me, U, k), ue.buffers.depth.setTest(!0), ue.buffers.depth.setMask(!0), ue.buffers.color.setMask(!0), ue.setPolygonOffset(!1);
  }
  function tn(M, U, k) {
    const R = _e.isWebGL2;
    Y === null && (Y = new vn(1, 1, {
      generateMipmaps: !0,
      type: de.has("EXT_color_buffer_half_float") ? hi : _n,
      minFilter: ci,
      samples: R && s === !0 ? 4 : 0
    })), p.getDrawingBufferSize(z), R ? Y.setSize(z.x, z.y) : Y.setSize(Hs(z.x), Hs(z.y));
    const W = p.getRenderTarget();
    p.setRenderTarget(Y), p.clear();
    const ge = p.toneMapping;
    p.toneMapping = Yt, Be(M, U, k), p.toneMapping = ge, xe.updateMultisampleRenderTarget(Y), xe.updateRenderTargetMipmap(Y), p.setRenderTarget(W);
  }
  function Be(M, U, k) {
    const R = U.isScene === !0 ? U.overrideMaterial : null;
    for (let W = 0, ge = M.length; W < ge; W++) {
      const Me = M[W], we = Me.object, Te = Me.geometry, Ie = R === null ? Me.material : R, Pe = Me.group;
      we.layers.test(k.layers) && Ot(we, U, k, Te, Ie, Pe);
    }
  }
  function Ot(M, U, k, R, W, ge) {
    M.onBeforeRender(p, U, k, R, W, ge), M.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse, M.matrixWorld), M.normalMatrix.getNormalMatrix(M.modelViewMatrix), W.onBeforeRender(p, U, k, R, M, ge), W.transparent === !0 && W.side === vi ? (W.side = Et, W.needsUpdate = !0, p.renderBufferDirect(k, U, R, W, M, ge), W.side = en, W.needsUpdate = !0, p.renderBufferDirect(k, U, R, W, M, ge), W.side = vi) : p.renderBufferDirect(k, U, R, W, M, ge), M.onAfterRender(p, U, k, R, W, ge);
  }
  function Mt(M, U, k) {
    U.isScene !== !0 && (U = te);
    const R = be.get(M), W = d.state.lights, ge = d.state.shadowsArray, Me = W.state.version, we = Ue.getParameters(M, W.state, ge, U, k), Te = Ue.getProgramCacheKey(we);
    let Ie = R.programs;
    R.environment = M.isMeshStandardMaterial ? U.environment : null, R.fog = U.fog, R.envMap = (M.isMeshStandardMaterial ? Xe : $e).get(M.envMap || R.environment), Ie === void 0 && (M.addEventListener("dispose", Le), Ie = /* @__PURE__ */ new Map(), R.programs = Ie);
    let Pe = Ie.get(Te);
    if (Pe !== void 0) {
      if (R.currentProgram === Pe && R.lightsStateVersion === Me)
        return er(M, we), Pe;
    } else
      we.uniforms = Ue.getUniforms(M), M.onBuild(k, we, p), M.onBeforeCompile(we, p), Pe = Ue.acquireProgram(we, Te), Ie.set(Te, Pe), R.uniforms = we.uniforms;
    const De = R.uniforms;
    (!M.isShaderMaterial && !M.isRawShaderMaterial || M.clipping === !0) && (De.clippingPlanes = v.uniform), er(M, we), R.needsLights = lo(M), R.lightsStateVersion = Me, R.needsLights && (De.ambientLightColor.value = W.state.ambient, De.lightProbe.value = W.state.probe, De.directionalLights.value = W.state.directional, De.directionalLightShadows.value = W.state.directionalShadow, De.spotLights.value = W.state.spot, De.spotLightShadows.value = W.state.spotShadow, De.rectAreaLights.value = W.state.rectArea, De.ltc_1.value = W.state.rectAreaLTC1, De.ltc_2.value = W.state.rectAreaLTC2, De.pointLights.value = W.state.point, De.pointLightShadows.value = W.state.pointShadow, De.hemisphereLights.value = W.state.hemi, De.directionalShadowMap.value = W.state.directionalShadowMap, De.directionalShadowMatrix.value = W.state.directionalShadowMatrix, De.spotShadowMap.value = W.state.spotShadowMap, De.spotLightMatrix.value = W.state.spotLightMatrix, De.spotLightMap.value = W.state.spotLightMap, De.pointShadowMap.value = W.state.pointShadowMap, De.pointShadowMatrix.value = W.state.pointShadowMatrix);
    const Ve = Pe.getUniforms(), ft = Wi.seqWithValue(Ve.seq, De);
    return R.currentProgram = Pe, R.uniformsList = ft, Pe;
  }
  function er(M, U) {
    const k = be.get(M);
    k.outputEncoding = U.outputEncoding, k.instancing = U.instancing, k.skinning = U.skinning, k.morphTargets = U.morphTargets, k.morphNormals = U.morphNormals, k.morphColors = U.morphColors, k.morphTargetsCount = U.morphTargetsCount, k.numClippingPlanes = U.numClippingPlanes, k.numIntersection = U.numClipIntersection, k.vertexAlphas = U.vertexAlphas, k.vertexTangents = U.vertexTangents, k.toneMapping = U.toneMapping;
  }
  function ao(M, U, k, R, W) {
    U.isScene !== !0 && (U = te), xe.resetTextureUnits();
    const ge = U.fog, Me = R.isMeshStandardMaterial ? U.environment : null, we = y === null ? p.outputEncoding : y.isXRRenderTarget === !0 ? y.texture.encoding : xn, Te = (R.isMeshStandardMaterial ? Xe : $e).get(R.envMap || Me), Ie = R.vertexColors === !0 && !!k.attributes.color && k.attributes.color.itemSize === 4, Pe = !!R.normalMap && !!k.attributes.tangent, De = !!k.morphAttributes.position, Ve = !!k.morphAttributes.normal, ft = !!k.morphAttributes.color, zt = R.toneMapped ? p.toneMapping : Yt, nn = k.morphAttributes.position || k.morphAttributes.normal || k.morphAttributes.color, He = nn !== void 0 ? nn.length : 0, Re = be.get(R), Ki = d.state.lights;
    if (q === !0 && (ee === !0 || M !== w)) {
      const pt = M === w && R.id === b;
      v.setState(R, M, pt);
    }
    let Je = !1;
    R.version === Re.__version ? (Re.needsLights && Re.lightsStateVersion !== Ki.state.version || Re.outputEncoding !== we || W.isInstancedMesh && Re.instancing === !1 || !W.isInstancedMesh && Re.instancing === !0 || W.isSkinnedMesh && Re.skinning === !1 || !W.isSkinnedMesh && Re.skinning === !0 || Re.envMap !== Te || R.fog === !0 && Re.fog !== ge || Re.numClippingPlanes !== void 0 && (Re.numClippingPlanes !== v.numPlanes || Re.numIntersection !== v.numIntersection) || Re.vertexAlphas !== Ie || Re.vertexTangents !== Pe || Re.morphTargets !== De || Re.morphNormals !== Ve || Re.morphColors !== ft || Re.toneMapping !== zt || _e.isWebGL2 === !0 && Re.morphTargetsCount !== He) && (Je = !0) : (Je = !0, Re.__version = R.version);
    let sn = Re.currentProgram;
    Je === !0 && (sn = Mt(R, U, W));
    let tr = !1, Zn = !1, Ji = !1;
    const at = sn.getUniforms(), rn = Re.uniforms;
    if (ue.useProgram(sn.program) && (tr = !0, Zn = !0, Ji = !0), R.id !== b && (b = R.id, Zn = !0), tr || w !== M) {
      if (at.setValue(H, "projectionMatrix", M.projectionMatrix), _e.logarithmicDepthBuffer && at.setValue(
        H,
        "logDepthBufFC",
        2 / (Math.log(M.far + 1) / Math.LN2)
      ), w !== M && (w = M, Zn = !0, Ji = !0), R.isShaderMaterial || R.isMeshPhongMaterial || R.isMeshToonMaterial || R.isMeshStandardMaterial || R.envMap) {
        const pt = at.map.cameraPosition;
        pt !== void 0 && pt.setValue(
          H,
          se.setFromMatrixPosition(M.matrixWorld)
        );
      }
      (R.isMeshPhongMaterial || R.isMeshToonMaterial || R.isMeshLambertMaterial || R.isMeshBasicMaterial || R.isMeshStandardMaterial || R.isShaderMaterial) && at.setValue(H, "isOrthographic", M.isOrthographicCamera === !0), (R.isMeshPhongMaterial || R.isMeshToonMaterial || R.isMeshLambertMaterial || R.isMeshBasicMaterial || R.isMeshStandardMaterial || R.isShaderMaterial || R.isShadowMaterial || W.isSkinnedMesh) && at.setValue(H, "viewMatrix", M.matrixWorldInverse);
    }
    if (W.isSkinnedMesh) {
      at.setOptional(H, W, "bindMatrix"), at.setOptional(H, W, "bindMatrixInverse");
      const pt = W.skeleton;
      pt && (_e.floatVertexTextures ? (pt.boneTexture === null && pt.computeBoneTexture(), at.setValue(H, "boneTexture", pt.boneTexture, xe), at.setValue(H, "boneTextureSize", pt.boneTextureSize)) : console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."));
    }
    const Qi = k.morphAttributes;
    if ((Qi.position !== void 0 || Qi.normal !== void 0 || Qi.color !== void 0 && _e.isWebGL2 === !0) && ne.update(W, k, R, sn), (Zn || Re.receiveShadow !== W.receiveShadow) && (Re.receiveShadow = W.receiveShadow, at.setValue(H, "receiveShadow", W.receiveShadow)), R.isMeshGouraudMaterial && R.envMap !== null && (rn.envMap.value = Te, rn.flipEnvMap.value = Te.isCubeTexture && Te.isRenderTargetTexture === !1 ? -1 : 1), Zn && (at.setValue(H, "toneMappingExposure", p.toneMappingExposure), Re.needsLights && oo(rn, Ji), ge && R.fog === !0 && vt.refreshFogUniforms(rn, ge), vt.refreshMaterialUniforms(rn, R, j, F, Y), Wi.upload(H, Re.uniformsList, rn, xe)), R.isShaderMaterial && R.uniformsNeedUpdate === !0 && (Wi.upload(H, Re.uniformsList, rn, xe), R.uniformsNeedUpdate = !1), R.isSpriteMaterial && at.setValue(H, "center", W.center), at.setValue(H, "modelViewMatrix", W.modelViewMatrix), at.setValue(H, "normalMatrix", W.normalMatrix), at.setValue(H, "modelMatrix", W.matrixWorld), R.isShaderMaterial || R.isRawShaderMaterial) {
      const pt = R.uniformsGroups;
      for (let es = 0, co = pt.length; es < co; es++)
        if (_e.isWebGL2) {
          const nr = pt[es];
          le.update(nr, sn), le.bind(nr, sn);
        } else
          console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.");
    }
    return sn;
  }
  function oo(M, U) {
    M.ambientLightColor.needsUpdate = U, M.lightProbe.needsUpdate = U, M.directionalLights.needsUpdate = U, M.directionalLightShadows.needsUpdate = U, M.pointLights.needsUpdate = U, M.pointLightShadows.needsUpdate = U, M.spotLights.needsUpdate = U, M.spotLightShadows.needsUpdate = U, M.rectAreaLights.needsUpdate = U, M.hemisphereLights.needsUpdate = U;
  }
  function lo(M) {
    return M.isMeshLambertMaterial || M.isMeshToonMaterial || M.isMeshPhongMaterial || M.isMeshStandardMaterial || M.isShadowMaterial || M.isShaderMaterial && M.lights === !0;
  }
  this.getActiveCubeFace = function() {
    return x;
  }, this.getActiveMipmapLevel = function() {
    return T;
  }, this.getRenderTarget = function() {
    return y;
  }, this.setRenderTargetTextures = function(M, U, k) {
    be.get(M.texture).__webglTexture = U, be.get(M.depthTexture).__webglTexture = k;
    const R = be.get(M);
    R.__hasExternalTextures = !0, R.__hasExternalTextures && (R.__autoAllocateDepthBuffer = k === void 0, R.__autoAllocateDepthBuffer || de.has("WEBGL_multisampled_render_to_texture") === !0 && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), R.__useRenderToTexture = !1));
  }, this.setRenderTargetFramebuffer = function(M, U) {
    const k = be.get(M);
    k.__webglFramebuffer = U, k.__useDefaultFramebuffer = U === void 0;
  }, this.setRenderTarget = function(M, U = 0, k = 0) {
    y = M, x = U, T = k;
    let R = !0, W = null, ge = !1, Me = !1;
    if (M) {
      const Te = be.get(M);
      Te.__useDefaultFramebuffer !== void 0 ? (ue.bindFramebuffer(36160, null), R = !1) : Te.__webglFramebuffer === void 0 ? xe.setupRenderTarget(M) : Te.__hasExternalTextures && xe.rebindTextures(M, be.get(M.texture).__webglTexture, be.get(M.depthTexture).__webglTexture);
      const Ie = M.texture;
      (Ie.isData3DTexture || Ie.isDataArrayTexture || Ie.isCompressedArrayTexture) && (Me = !0);
      const Pe = be.get(M).__webglFramebuffer;
      M.isWebGLCubeRenderTarget ? (W = Pe[U], ge = !0) : _e.isWebGL2 && M.samples > 0 && xe.useMultisampledRTT(M) === !1 ? W = be.get(M).__webglMultisampledFramebuffer : W = Pe, C.copy(M.viewport), I.copy(M.scissor), _ = M.scissorTest;
    } else
      C.copy(N).multiplyScalar(j).floor(), I.copy(X).multiplyScalar(j).floor(), _ = Z;
    if (ue.bindFramebuffer(36160, W) && _e.drawBuffers && R && ue.drawBuffers(M, W), ue.viewport(C), ue.scissor(I), ue.setScissorTest(_), ge) {
      const Te = be.get(M.texture);
      H.framebufferTexture2D(36160, 36064, 34069 + U, Te.__webglTexture, k);
    } else if (Me) {
      const Te = be.get(M.texture), Ie = U || 0;
      H.framebufferTextureLayer(36160, 36064, Te.__webglTexture, k || 0, Ie);
    }
    b = -1;
  }, this.readRenderTargetPixels = function(M, U, k, R, W, ge, Me) {
    if (!(M && M.isWebGLRenderTarget)) {
      console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      return;
    }
    let we = be.get(M).__webglFramebuffer;
    if (M.isWebGLCubeRenderTarget && Me !== void 0 && (we = we[Me]), we) {
      ue.bindFramebuffer(36160, we);
      try {
        const Te = M.texture, Ie = Te.format, Pe = Te.type;
        if (Ie !== Rt && E.convert(Ie) !== H.getParameter(35739)) {
          console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
          return;
        }
        const De = Pe === hi && (de.has("EXT_color_buffer_half_float") || _e.isWebGL2 && de.has("EXT_color_buffer_float"));
        if (Pe !== _n && E.convert(Pe) !== H.getParameter(35738) && !(Pe === pn && (_e.isWebGL2 || de.has("OES_texture_float") || de.has("WEBGL_color_buffer_float"))) && !De) {
          console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
          return;
        }
        U >= 0 && U <= M.width - R && k >= 0 && k <= M.height - W && H.readPixels(U, k, R, W, E.convert(Ie), E.convert(Pe), ge);
      } finally {
        const Te = y !== null ? be.get(y).__webglFramebuffer : null;
        ue.bindFramebuffer(36160, Te);
      }
    }
  }, this.copyFramebufferToTexture = function(M, U, k = 0) {
    const R = Math.pow(2, -k), W = Math.floor(U.image.width * R), ge = Math.floor(U.image.height * R);
    xe.setTexture2D(U, 0), H.copyTexSubImage2D(3553, k, 0, 0, M.x, M.y, W, ge), ue.unbindTexture();
  }, this.copyTextureToTexture = function(M, U, k, R = 0) {
    const W = U.image.width, ge = U.image.height, Me = E.convert(k.format), we = E.convert(k.type);
    xe.setTexture2D(k, 0), H.pixelStorei(37440, k.flipY), H.pixelStorei(37441, k.premultiplyAlpha), H.pixelStorei(3317, k.unpackAlignment), U.isDataTexture ? H.texSubImage2D(3553, R, M.x, M.y, W, ge, Me, we, U.image.data) : U.isCompressedTexture ? H.compressedTexSubImage2D(3553, R, M.x, M.y, U.mipmaps[0].width, U.mipmaps[0].height, Me, U.mipmaps[0].data) : H.texSubImage2D(3553, R, M.x, M.y, Me, we, U.image), R === 0 && k.generateMipmaps && H.generateMipmap(3553), ue.unbindTexture();
  }, this.copyTextureToTexture3D = function(M, U, k, R, W = 0) {
    if (p.isWebGL1Renderer) {
      console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
      return;
    }
    const ge = M.max.x - M.min.x + 1, Me = M.max.y - M.min.y + 1, we = M.max.z - M.min.z + 1, Te = E.convert(R.format), Ie = E.convert(R.type);
    let Pe;
    if (R.isData3DTexture)
      xe.setTexture3D(R, 0), Pe = 32879;
    else if (R.isDataArrayTexture)
      xe.setTexture2DArray(R, 0), Pe = 35866;
    else {
      console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
      return;
    }
    H.pixelStorei(37440, R.flipY), H.pixelStorei(37441, R.premultiplyAlpha), H.pixelStorei(3317, R.unpackAlignment);
    const De = H.getParameter(3314), Ve = H.getParameter(32878), ft = H.getParameter(3316), zt = H.getParameter(3315), nn = H.getParameter(32877), He = k.isCompressedTexture ? k.mipmaps[0] : k.image;
    H.pixelStorei(3314, He.width), H.pixelStorei(32878, He.height), H.pixelStorei(3316, M.min.x), H.pixelStorei(3315, M.min.y), H.pixelStorei(32877, M.min.z), k.isDataTexture || k.isData3DTexture ? H.texSubImage3D(Pe, W, U.x, U.y, U.z, ge, Me, we, Te, Ie, He.data) : k.isCompressedArrayTexture ? (console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."), H.compressedTexSubImage3D(Pe, W, U.x, U.y, U.z, ge, Me, we, Te, He.data)) : H.texSubImage3D(Pe, W, U.x, U.y, U.z, ge, Me, we, Te, Ie, He), H.pixelStorei(3314, De), H.pixelStorei(32878, Ve), H.pixelStorei(3316, ft), H.pixelStorei(3315, zt), H.pixelStorei(32877, nn), W === 0 && R.generateMipmaps && H.generateMipmap(Pe), ue.unbindTexture();
  }, this.initTexture = function(M) {
    M.isCubeTexture ? xe.setTextureCube(M, 0) : M.isData3DTexture ? xe.setTexture3D(M, 0) : M.isDataArrayTexture || M.isCompressedArrayTexture ? xe.setTexture2DArray(M, 0) : xe.setTexture2D(M, 0), ue.unbindTexture();
  }, this.resetState = function() {
    x = 0, T = 0, y = null, ue.reset(), P.reset();
  }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
}
class af extends Ja {
}
af.prototype.isWebGL1Renderer = !0;
class of extends tt {
  constructor() {
    super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(e, t) {
    return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.fog !== null && (t.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (t.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (t.backgroundIntensity = this.backgroundIntensity), t;
  }
  get autoUpdate() {
    return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."), this.matrixWorldAutoUpdate;
  }
  set autoUpdate(e) {
    console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."), this.matrixWorldAutoUpdate = e;
  }
}
class oi extends Ut {
  constructor(e) {
    super(), this.isLineBasicMaterial = !0, this.type = "LineBasicMaterial", this.color = new Ee(16777215), this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this.fog = e.fog, this;
  }
}
const fa = /* @__PURE__ */ new D(), pa = /* @__PURE__ */ new D(), ma = /* @__PURE__ */ new ke(), Is = /* @__PURE__ */ new $s(), Bi = /* @__PURE__ */ new gi();
class lf extends tt {
  constructor(e = new At(), t = new oi()) {
    super(), this.isLine = !0, this.type = "Line", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = e.material, this.geometry = e.geometry, this;
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [0];
      for (let i = 1, s = t.count; i < s; i++)
        fa.fromBufferAttribute(t, i - 1), pa.fromBufferAttribute(t, i), n[i] = n[i - 1], n[i] += fa.distanceTo(pa);
      e.setAttribute("lineDistance", new nt(n, 1));
    } else
      console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.matrixWorld, s = e.params.Line.threshold, o = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), Bi.copy(n.boundingSphere), Bi.applyMatrix4(i), Bi.radius += s, e.ray.intersectsSphere(Bi) === !1)
      return;
    ma.copy(i).invert(), Is.copy(e.ray).applyMatrix4(ma);
    const r = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), c = r * r, l = new D(), h = new D(), u = new D(), d = new D(), m = this.isLineSegments ? 2 : 1, g = n.index, f = n.attributes.position;
    if (g !== null) {
      const x = Math.max(0, o.start), T = Math.min(g.count, o.start + o.count);
      for (let y = x, b = T - 1; y < b; y += m) {
        const w = g.getX(y), C = g.getX(y + 1);
        if (l.fromBufferAttribute(f, w), h.fromBufferAttribute(f, C), Is.distanceSqToSegment(l, h, d, u) > c)
          continue;
        d.applyMatrix4(this.matrixWorld);
        const _ = e.ray.origin.distanceTo(d);
        _ < e.near || _ > e.far || t.push({
          distance: _,
          point: u.clone().applyMatrix4(this.matrixWorld),
          index: y,
          face: null,
          faceIndex: null,
          object: this
        });
      }
    } else {
      const x = Math.max(0, o.start), T = Math.min(f.count, o.start + o.count);
      for (let y = x, b = T - 1; y < b; y += m) {
        if (l.fromBufferAttribute(f, y), h.fromBufferAttribute(f, y + 1), Is.distanceSqToSegment(l, h, d, u) > c)
          continue;
        d.applyMatrix4(this.matrixWorld);
        const C = e.ray.origin.distanceTo(d);
        C < e.near || C > e.far || t.push({
          distance: C,
          point: u.clone().applyMatrix4(this.matrixWorld),
          index: y,
          face: null,
          faceIndex: null,
          object: this
        });
      }
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, o = i.length; s < o; s++) {
          const r = i[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[r] = s;
        }
      }
    }
  }
}
const ga = /* @__PURE__ */ new D(), _a = /* @__PURE__ */ new D();
class Xs extends lf {
  constructor(e, t) {
    super(e, t), this.isLineSegments = !0, this.type = "LineSegments";
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [];
      for (let i = 0, s = t.count; i < s; i += 2)
        ga.fromBufferAttribute(t, i), _a.fromBufferAttribute(t, i + 1), n[i] = i === 0 ? 0 : n[i - 1], n[i + 1] = n[i] + ga.distanceTo(_a);
      e.setAttribute("lineDistance", new nt(n, 1));
    } else
      console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
}
class ai extends Ut {
  constructor(e) {
    super(), this.isPointsMaterial = !0, this.type = "PointsMaterial", this.color = new Ee(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
  }
}
const xa = /* @__PURE__ */ new ke(), qs = /* @__PURE__ */ new $s(), Gi = /* @__PURE__ */ new gi(), ki = /* @__PURE__ */ new D();
class Fs extends tt {
  constructor(e = new At(), t = new ai()) {
    super(), this.isPoints = !0, this.type = "Points", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = e.material, this.geometry = e.geometry, this;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.matrixWorld, s = e.params.Points.threshold, o = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), Gi.copy(n.boundingSphere), Gi.applyMatrix4(i), Gi.radius += s, e.ray.intersectsSphere(Gi) === !1)
      return;
    xa.copy(i).invert(), qs.copy(e.ray).applyMatrix4(xa);
    const r = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), c = r * r, l = n.index, u = n.attributes.position;
    if (l !== null) {
      const d = Math.max(0, o.start), m = Math.min(l.count, o.start + o.count);
      for (let g = d, p = m; g < p; g++) {
        const f = l.getX(g);
        ki.fromBufferAttribute(u, f), va(ki, f, c, i, e, t, this);
      }
    } else {
      const d = Math.max(0, o.start), m = Math.min(u.count, o.start + o.count);
      for (let g = d, p = m; g < p; g++)
        ki.fromBufferAttribute(u, g), va(ki, g, c, i, e, t, this);
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, o = i.length; s < o; s++) {
          const r = i[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[r] = s;
        }
      }
    }
  }
}
function va(a, e, t, n, i, s, o) {
  const r = qs.distanceSqToPoint(a);
  if (r < t) {
    const c = new D();
    qs.closestPointToPoint(a, c), c.applyMatrix4(n);
    const l = i.ray.origin.distanceTo(c);
    if (l < i.near || l > i.far)
      return;
    s.push({
      distance: l,
      distanceToRay: Math.sqrt(r),
      point: c,
      index: e,
      face: null,
      object: o
    });
  }
}
class Qa extends Ut {
  constructor(e) {
    super(), this.isMeshStandardMaterial = !0, this.defines = { STANDARD: "" }, this.type = "MeshStandardMaterial", this.color = new Ee(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Ee(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = Zs, this.normalScale = new ye(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.defines = { STANDARD: "" }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapIntensity = e.envMapIntensity, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
class eo extends Ut {
  constructor(e) {
    super(), this.isMeshPhongMaterial = !0, this.type = "MeshPhongMaterial", this.color = new Ee(16777215), this.specular = new Ee(1118481), this.shininess = 30, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Ee(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = Zs, this.normalScale = new ye(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = Ys, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.specular.copy(e.specular), this.shininess = e.shininess, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
const ji = {
  enabled: !1,
  files: {},
  add: function(a, e) {
    this.enabled !== !1 && (this.files[a] = e);
  },
  get: function(a) {
    if (this.enabled !== !1)
      return this.files[a];
  },
  remove: function(a) {
    delete this.files[a];
  },
  clear: function() {
    this.files = {};
  }
};
class cf {
  constructor(e, t, n) {
    const i = this;
    let s = !1, o = 0, r = 0, c;
    const l = [];
    this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = n, this.itemStart = function(h) {
      r++, s === !1 && i.onStart !== void 0 && i.onStart(h, o, r), s = !0;
    }, this.itemEnd = function(h) {
      o++, i.onProgress !== void 0 && i.onProgress(h, o, r), o === r && (s = !1, i.onLoad !== void 0 && i.onLoad());
    }, this.itemError = function(h) {
      i.onError !== void 0 && i.onError(h);
    }, this.resolveURL = function(h) {
      return c ? c(h) : h;
    }, this.setURLModifier = function(h) {
      return c = h, this;
    }, this.addHandler = function(h, u) {
      return l.push(h, u), this;
    }, this.removeHandler = function(h) {
      const u = l.indexOf(h);
      return u !== -1 && l.splice(u, 2), this;
    }, this.getHandler = function(h) {
      for (let u = 0, d = l.length; u < d; u += 2) {
        const m = l[u], g = l[u + 1];
        if (m.global && (m.lastIndex = 0), m.test(h))
          return g;
      }
      return null;
    };
  }
}
const to = /* @__PURE__ */ new cf();
class xi {
  constructor(e) {
    this.manager = e !== void 0 ? e : to, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {};
  }
  load() {
  }
  loadAsync(e, t) {
    const n = this;
    return new Promise(function(i, s) {
      n.load(e, i, t, s);
    });
  }
  parse() {
  }
  setCrossOrigin(e) {
    return this.crossOrigin = e, this;
  }
  setWithCredentials(e) {
    return this.withCredentials = e, this;
  }
  setPath(e) {
    return this.path = e, this;
  }
  setResourcePath(e) {
    return this.resourcePath = e, this;
  }
  setRequestHeader(e) {
    return this.requestHeader = e, this;
  }
}
const Wt = {};
class hf extends Error {
  constructor(e, t) {
    super(e), this.response = t;
  }
}
class no extends xi {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const s = ji.get(e);
    if (s !== void 0)
      return this.manager.itemStart(e), setTimeout(() => {
        t && t(s), this.manager.itemEnd(e);
      }, 0), s;
    if (Wt[e] !== void 0) {
      Wt[e].push({
        onLoad: t,
        onProgress: n,
        onError: i
      });
      return;
    }
    Wt[e] = [], Wt[e].push({
      onLoad: t,
      onProgress: n,
      onError: i
    });
    const o = new Request(e, {
      headers: new Headers(this.requestHeader),
      credentials: this.withCredentials ? "include" : "same-origin"
    }), r = this.mimeType, c = this.responseType;
    fetch(o).then((l) => {
      if (l.status === 200 || l.status === 0) {
        if (l.status === 0 && console.warn("THREE.FileLoader: HTTP Status 0 received."), typeof ReadableStream > "u" || l.body === void 0 || l.body.getReader === void 0)
          return l;
        const h = Wt[e], u = l.body.getReader(), d = l.headers.get("Content-Length") || l.headers.get("X-File-Size"), m = d ? parseInt(d) : 0, g = m !== 0;
        let p = 0;
        const f = new ReadableStream({
          start(x) {
            T();
            function T() {
              u.read().then(({ done: y, value: b }) => {
                if (y)
                  x.close();
                else {
                  p += b.byteLength;
                  const w = new ProgressEvent("progress", { lengthComputable: g, loaded: p, total: m });
                  for (let C = 0, I = h.length; C < I; C++) {
                    const _ = h[C];
                    _.onProgress && _.onProgress(w);
                  }
                  x.enqueue(b), T();
                }
              });
            }
          }
        });
        return new Response(f);
      } else
        throw new hf(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`, l);
    }).then((l) => {
      switch (c) {
        case "arraybuffer":
          return l.arrayBuffer();
        case "blob":
          return l.blob();
        case "document":
          return l.text().then((h) => new DOMParser().parseFromString(h, r));
        case "json":
          return l.json();
        default:
          if (r === void 0)
            return l.text();
          {
            const u = /charset="?([^;"\s]*)"?/i.exec(r), d = u && u[1] ? u[1].toLowerCase() : void 0, m = new TextDecoder(d);
            return l.arrayBuffer().then((g) => m.decode(g));
          }
      }
    }).then((l) => {
      ji.add(e, l);
      const h = Wt[e];
      delete Wt[e];
      for (let u = 0, d = h.length; u < d; u++) {
        const m = h[u];
        m.onLoad && m.onLoad(l);
      }
    }).catch((l) => {
      const h = Wt[e];
      if (h === void 0)
        throw this.manager.itemError(e), l;
      delete Wt[e];
      for (let u = 0, d = h.length; u < d; u++) {
        const m = h[u];
        m.onError && m.onError(l);
      }
      this.manager.itemError(e);
    }).finally(() => {
      this.manager.itemEnd(e);
    }), this.manager.itemStart(e);
  }
  setResponseType(e) {
    return this.responseType = e, this;
  }
  setMimeType(e) {
    return this.mimeType = e, this;
  }
}
class uf extends xi {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const s = this, o = ji.get(e);
    if (o !== void 0)
      return s.manager.itemStart(e), setTimeout(function() {
        t && t(o), s.manager.itemEnd(e);
      }, 0), o;
    const r = di("img");
    function c() {
      h(), ji.add(e, this), t && t(this), s.manager.itemEnd(e);
    }
    function l(u) {
      h(), i && i(u), s.manager.itemError(e), s.manager.itemEnd(e);
    }
    function h() {
      r.removeEventListener("load", c, !1), r.removeEventListener("error", l, !1);
    }
    return r.addEventListener("load", c, !1), r.addEventListener("error", l, !1), e.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (r.crossOrigin = this.crossOrigin), s.manager.itemStart(e), r.src = e, r;
  }
}
class df extends xi {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const s = new dt(), o = new uf(this.manager);
    return o.setCrossOrigin(this.crossOrigin), o.setPath(this.path), o.load(e, function(r) {
      s.image = r, s.needsUpdate = !0, t !== void 0 && t(s);
    }, n, i), s;
  }
}
class io extends tt {
  constructor(e, t = 1) {
    super(), this.isLight = !0, this.type = "Light", this.color = new Ee(e), this.intensity = t;
  }
  dispose() {
  }
  copy(e, t) {
    return super.copy(e, t), this.color.copy(e.color), this.intensity = e.intensity, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.color = this.color.getHex(), t.object.intensity = this.intensity, this.groundColor !== void 0 && (t.object.groundColor = this.groundColor.getHex()), this.distance !== void 0 && (t.object.distance = this.distance), this.angle !== void 0 && (t.object.angle = this.angle), this.decay !== void 0 && (t.object.decay = this.decay), this.penumbra !== void 0 && (t.object.penumbra = this.penumbra), this.shadow !== void 0 && (t.object.shadow = this.shadow.toJSON()), t;
  }
}
const Ns = /* @__PURE__ */ new ke(), Ma = /* @__PURE__ */ new D(), ya = /* @__PURE__ */ new D();
class ff {
  constructor(e) {
    this.camera = e, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new ye(512, 512), this.map = null, this.mapPass = null, this.matrix = new ke(), this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new Ks(), this._frameExtents = new ye(1, 1), this._viewportCount = 1, this._viewports = [
      new et(0, 0, 1, 1)
    ];
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(e) {
    const t = this.camera, n = this.matrix;
    Ma.setFromMatrixPosition(e.matrixWorld), t.position.copy(Ma), ya.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(ya), t.updateMatrixWorld(), Ns.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Ns), n.set(
      0.5,
      0,
      0,
      0.5,
      0,
      0.5,
      0,
      0.5,
      0,
      0,
      0.5,
      0.5,
      0,
      0,
      0,
      1
    ), n.multiply(Ns);
  }
  getViewport(e) {
    return this._viewports[e];
  }
  getFrameExtents() {
    return this._frameExtents;
  }
  dispose() {
    this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
  }
  copy(e) {
    return this.camera = e.camera.clone(), this.bias = e.bias, this.radius = e.radius, this.mapSize.copy(e.mapSize), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    const e = {};
    return this.bias !== 0 && (e.bias = this.bias), this.normalBias !== 0 && (e.normalBias = this.normalBias), this.radius !== 1 && (e.radius = this.radius), (this.mapSize.x !== 512 || this.mapSize.y !== 512) && (e.mapSize = this.mapSize.toArray()), e.camera = this.camera.toJSON(!1).object, delete e.camera.matrix, e;
  }
}
class pf extends ff {
  constructor() {
    super(new ja(-5, 5, 5, -5, 0.5, 500)), this.isDirectionalLightShadow = !0;
  }
}
class mf extends io {
  constructor(e, t) {
    super(e, t), this.isDirectionalLight = !0, this.type = "DirectionalLight", this.position.copy(tt.DefaultUp), this.updateMatrix(), this.target = new tt(), this.shadow = new pf();
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e) {
    return super.copy(e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
  }
}
class gf extends io {
  constructor(e, t) {
    super(e, t), this.isAmbientLight = !0, this.type = "AmbientLight";
  }
}
class _f {
  static decodeText(e) {
    if (typeof TextDecoder < "u")
      return new TextDecoder().decode(e);
    let t = "";
    for (let n = 0, i = e.length; n < i; n++)
      t += String.fromCharCode(e[n]);
    try {
      return decodeURIComponent(escape(t));
    } catch {
      return t;
    }
  }
  static extractUrlBase(e) {
    const t = e.lastIndexOf("/");
    return t === -1 ? "./" : e.slice(0, t + 1);
  }
  static resolveURL(e, t) {
    return typeof e != "string" || e === "" ? "" : (/^https?:\/\//i.test(t) && /^\//.test(e) && (t = t.replace(/(^https?:\/\/[^\/]+).*/i, "$1")), /^(https?:)?\/\//i.test(e) || /^data:.*,.*$/i.test(e) || /^blob:.*$/i.test(e) ? e : t + e);
  }
}
class ba {
  constructor(e = 1, t = 0, n = 0) {
    return this.radius = e, this.phi = t, this.theta = n, this;
  }
  set(e, t, n) {
    return this.radius = e, this.phi = t, this.theta = n, this;
  }
  copy(e) {
    return this.radius = e.radius, this.phi = e.phi, this.theta = e.theta, this;
  }
  makeSafe() {
    return this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi)), this;
  }
  setFromVector3(e) {
    return this.setFromCartesianCoords(e.x, e.y, e.z);
  }
  setFromCartesianCoords(e, t, n) {
    return this.radius = Math.sqrt(e * e + t * t + n * n), this.radius === 0 ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(e, n), this.phi = Math.acos(ut(t / this.radius, -1, 1))), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class xf extends Xs {
  constructor(e = 1) {
    const t = [
      0,
      0,
      0,
      e,
      0,
      0,
      0,
      0,
      0,
      0,
      e,
      0,
      0,
      0,
      0,
      0,
      0,
      e
    ], n = [
      1,
      0,
      0,
      1,
      0.6,
      0,
      0,
      1,
      0,
      0.6,
      1,
      0,
      0,
      0,
      1,
      0,
      0.6,
      1
    ], i = new At();
    i.setAttribute("position", new nt(t, 3)), i.setAttribute("color", new nt(n, 3));
    const s = new oi({ vertexColors: !0, toneMapped: !1 });
    super(i, s), this.type = "AxesHelper";
  }
  setColors(e, t, n) {
    const i = new Ee(), s = this.geometry.attributes.color.array;
    return i.set(e), i.toArray(s, 0), i.toArray(s, 3), i.set(t), i.toArray(s, 6), i.toArray(s, 9), i.set(n), i.toArray(s, 12), i.toArray(s, 15), this.geometry.attributes.color.needsUpdate = !0, this;
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: {
  revision: js
} }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = js);
var li = function() {
  var a = 0, e = document.createElement("div");
  e.style.cssText = "position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000", e.addEventListener("click", function(h) {
    h.preventDefault(), n(++a % e.children.length);
  }, !1);
  function t(h) {
    return e.appendChild(h.dom), h;
  }
  function n(h) {
    for (var u = 0; u < e.children.length; u++)
      e.children[u].style.display = u === h ? "block" : "none";
    a = h;
  }
  var i = (performance || Date).now(), s = i, o = 0, r = t(new li.Panel("FPS", "#0ff", "#002")), c = t(new li.Panel("MS", "#0f0", "#020"));
  if (self.performance && self.performance.memory)
    var l = t(new li.Panel("MB", "#f08", "#201"));
  return n(0), {
    REVISION: 16,
    dom: e,
    addPanel: t,
    showPanel: n,
    begin: function() {
      i = (performance || Date).now();
    },
    end: function() {
      o++;
      var h = (performance || Date).now();
      if (c.update(h - i, 200), h >= s + 1e3 && (r.update(o * 1e3 / (h - s), 100), s = h, o = 0, l)) {
        var u = performance.memory;
        l.update(u.usedJSHeapSize / 1048576, u.jsHeapSizeLimit / 1048576);
      }
      return h;
    },
    update: function() {
      i = this.end();
    },
    domElement: e,
    setMode: n
  };
};
li.Panel = function(a, e, t) {
  var n = 1 / 0, i = 0, s = Math.round, o = s(window.devicePixelRatio || 1), r = 80 * o, c = 48 * o, l = 3 * o, h = 2 * o, u = 3 * o, d = 15 * o, m = 74 * o, g = 30 * o, p = document.createElement("canvas");
  p.width = r, p.height = c, p.style.cssText = "width:80px;height:48px";
  var f = p.getContext("2d");
  return f.font = "bold " + 9 * o + "px Helvetica,Arial,sans-serif", f.textBaseline = "top", f.fillStyle = t, f.fillRect(0, 0, r, c), f.fillStyle = e, f.fillText(a, l, h), f.fillRect(u, d, m, g), f.fillStyle = t, f.globalAlpha = 0.9, f.fillRect(u, d, m, g), {
    dom: p,
    update: function(x, T) {
      n = Math.min(n, x), i = Math.max(i, x), f.fillStyle = t, f.globalAlpha = 1, f.fillRect(0, 0, r, d), f.fillStyle = e, f.fillText(s(x) + " " + a + " (" + s(n) + "-" + s(i) + ")", l, h), f.drawImage(p, u + o, d, m - o, g, u, d, m - o, g), f.fillRect(u + m - o, d, o, g), f.fillStyle = t, f.globalAlpha = 0.9, f.fillRect(u + m - o, d, o, s((1 - x / T) * g));
    }
  };
};
const vf = li, Sa = { type: "change" }, Us = { type: "start" }, wa = { type: "end" };
class Mf extends bn {
  constructor(e, t) {
    super(), this.object = e, this.domElement = t, this.domElement.style.touchAction = "none", this.enabled = !0, this.target = new D(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = 0.05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: Sn.ROTATE, MIDDLE: Sn.DOLLY, RIGHT: Sn.PAN }, this.touches = { ONE: wn.ROTATE, TWO: wn.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this.getPolarAngle = function() {
      return r.phi;
    }, this.getAzimuthalAngle = function() {
      return r.theta;
    }, this.getDistance = function() {
      return this.object.position.distanceTo(this.target);
    }, this.listenToKeyEvents = function(E) {
      E.addEventListener("keydown", ht), this._domElementKeyEvents = E;
    }, this.saveState = function() {
      n.target0.copy(n.target), n.position0.copy(n.object.position), n.zoom0 = n.object.zoom;
    }, this.reset = function() {
      n.target.copy(n.target0), n.object.position.copy(n.position0), n.object.zoom = n.zoom0, n.object.updateProjectionMatrix(), n.dispatchEvent(Sa), n.update(), s = i.NONE;
    }, this.update = function() {
      const E = new D(), P = new Mn().setFromUnitVectors(e.up, new D(0, 1, 0)), le = P.clone().invert(), he = new D(), oe = new Mn(), pe = 2 * Math.PI;
      return function() {
        const Ce = n.object.position;
        E.copy(Ce).sub(n.target), E.applyQuaternion(P), r.setFromVector3(E), n.autoRotate && s === i.NONE && A(I()), n.enableDamping ? (r.theta += c.theta * n.dampingFactor, r.phi += c.phi * n.dampingFactor) : (r.theta += c.theta, r.phi += c.phi);
        let Le = n.minAzimuthAngle, Oe = n.maxAzimuthAngle;
        return isFinite(Le) && isFinite(Oe) && (Le < -Math.PI ? Le += pe : Le > Math.PI && (Le -= pe), Oe < -Math.PI ? Oe += pe : Oe > Math.PI && (Oe -= pe), Le <= Oe ? r.theta = Math.max(Le, Math.min(Oe, r.theta)) : r.theta = r.theta > (Le + Oe) / 2 ? Math.max(Le, r.theta) : Math.min(Oe, r.theta)), r.phi = Math.max(n.minPolarAngle, Math.min(n.maxPolarAngle, r.phi)), r.makeSafe(), r.radius *= l, r.radius = Math.max(n.minDistance, Math.min(n.maxDistance, r.radius)), n.enableDamping === !0 ? n.target.addScaledVector(h, n.dampingFactor) : n.target.add(h), E.setFromSpherical(r), E.applyQuaternion(le), Ce.copy(n.target).add(E), n.object.lookAt(n.target), n.enableDamping === !0 ? (c.theta *= 1 - n.dampingFactor, c.phi *= 1 - n.dampingFactor, h.multiplyScalar(1 - n.dampingFactor)) : (c.set(0, 0, 0), h.set(0, 0, 0)), l = 1, u || he.distanceToSquared(n.object.position) > o || 8 * (1 - oe.dot(n.object.quaternion)) > o ? (n.dispatchEvent(Sa), he.copy(n.object.position), oe.copy(n.object.quaternion), u = !1, !0) : !1;
      };
    }(), this.dispose = function() {
      n.domElement.removeEventListener("contextmenu", B), n.domElement.removeEventListener("pointerdown", $e), n.domElement.removeEventListener("pointercancel", rt), n.domElement.removeEventListener("wheel", vt), n.domElement.removeEventListener("pointermove", Xe), n.domElement.removeEventListener("pointerup", qe), n._domElementKeyEvents !== null && n._domElementKeyEvents.removeEventListener("keydown", ht);
    };
    const n = this, i = {
      NONE: -1,
      ROTATE: 0,
      DOLLY: 1,
      PAN: 2,
      TOUCH_ROTATE: 3,
      TOUCH_PAN: 4,
      TOUCH_DOLLY_PAN: 5,
      TOUCH_DOLLY_ROTATE: 6
    };
    let s = i.NONE;
    const o = 1e-6, r = new ba(), c = new ba();
    let l = 1;
    const h = new D();
    let u = !1;
    const d = new ye(), m = new ye(), g = new ye(), p = new ye(), f = new ye(), x = new ye(), T = new ye(), y = new ye(), b = new ye(), w = [], C = {};
    function I() {
      return 2 * Math.PI / 60 / 60 * n.autoRotateSpeed;
    }
    function _() {
      return Math.pow(0.95, n.zoomSpeed);
    }
    function A(E) {
      c.theta -= E;
    }
    function F(E) {
      c.phi -= E;
    }
    const j = function() {
      const E = new D();
      return function(le, he) {
        E.setFromMatrixColumn(he, 0), E.multiplyScalar(-le), h.add(E);
      };
    }(), J = function() {
      const E = new D();
      return function(le, he) {
        n.screenSpacePanning === !0 ? E.setFromMatrixColumn(he, 1) : (E.setFromMatrixColumn(he, 0), E.crossVectors(n.object.up, E)), E.multiplyScalar(le), h.add(E);
      };
    }(), O = function() {
      const E = new D();
      return function(le, he) {
        const oe = n.domElement;
        if (n.object.isPerspectiveCamera) {
          const pe = n.object.position;
          E.copy(pe).sub(n.target);
          let fe = E.length();
          fe *= Math.tan(n.object.fov / 2 * Math.PI / 180), j(2 * le * fe / oe.clientHeight, n.object.matrix), J(2 * he * fe / oe.clientHeight, n.object.matrix);
        } else
          n.object.isOrthographicCamera ? (j(le * (n.object.right - n.object.left) / n.object.zoom / oe.clientWidth, n.object.matrix), J(he * (n.object.top - n.object.bottom) / n.object.zoom / oe.clientHeight, n.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), n.enablePan = !1);
      };
    }();
    function N(E) {
      n.object.isPerspectiveCamera ? l /= E : n.object.isOrthographicCamera ? (n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom * E)), n.object.updateProjectionMatrix(), u = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), n.enableZoom = !1);
    }
    function X(E) {
      n.object.isPerspectiveCamera ? l *= E : n.object.isOrthographicCamera ? (n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom / E)), n.object.updateProjectionMatrix(), u = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), n.enableZoom = !1);
    }
    function Z(E) {
      d.set(E.clientX, E.clientY);
    }
    function Q(E) {
      T.set(E.clientX, E.clientY);
    }
    function q(E) {
      p.set(E.clientX, E.clientY);
    }
    function ee(E) {
      m.set(E.clientX, E.clientY), g.subVectors(m, d).multiplyScalar(n.rotateSpeed);
      const P = n.domElement;
      A(2 * Math.PI * g.x / P.clientHeight), F(2 * Math.PI * g.y / P.clientHeight), d.copy(m), n.update();
    }
    function Y(E) {
      y.set(E.clientX, E.clientY), b.subVectors(y, T), b.y > 0 ? N(_()) : b.y < 0 && X(_()), T.copy(y), n.update();
    }
    function V(E) {
      f.set(E.clientX, E.clientY), x.subVectors(f, p).multiplyScalar(n.panSpeed), O(x.x, x.y), p.copy(f), n.update();
    }
    function z(E) {
      E.deltaY < 0 ? X(_()) : E.deltaY > 0 && N(_()), n.update();
    }
    function se(E) {
      let P = !1;
      switch (E.code) {
        case n.keys.UP:
          E.ctrlKey || E.metaKey || E.shiftKey ? F(2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : O(0, n.keyPanSpeed), P = !0;
          break;
        case n.keys.BOTTOM:
          E.ctrlKey || E.metaKey || E.shiftKey ? F(-2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : O(0, -n.keyPanSpeed), P = !0;
          break;
        case n.keys.LEFT:
          E.ctrlKey || E.metaKey || E.shiftKey ? A(2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : O(n.keyPanSpeed, 0), P = !0;
          break;
        case n.keys.RIGHT:
          E.ctrlKey || E.metaKey || E.shiftKey ? A(-2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : O(-n.keyPanSpeed, 0), P = !0;
          break;
      }
      P && (E.preventDefault(), n.update());
    }
    function te() {
      if (w.length === 1)
        d.set(w[0].pageX, w[0].pageY);
      else {
        const E = 0.5 * (w[0].pageX + w[1].pageX), P = 0.5 * (w[0].pageY + w[1].pageY);
        d.set(E, P);
      }
    }
    function re() {
      if (w.length === 1)
        p.set(w[0].pageX, w[0].pageY);
      else {
        const E = 0.5 * (w[0].pageX + w[1].pageX), P = 0.5 * (w[0].pageY + w[1].pageY);
        p.set(E, P);
      }
    }
    function H() {
      const E = w[0].pageX - w[1].pageX, P = w[0].pageY - w[1].pageY, le = Math.sqrt(E * E + P * P);
      T.set(0, le);
    }
    function Ae() {
      n.enableZoom && H(), n.enablePan && re();
    }
    function de() {
      n.enableZoom && H(), n.enableRotate && te();
    }
    function _e(E) {
      if (w.length == 1)
        m.set(E.pageX, E.pageY);
      else {
        const le = ve(E), he = 0.5 * (E.pageX + le.x), oe = 0.5 * (E.pageY + le.y);
        m.set(he, oe);
      }
      g.subVectors(m, d).multiplyScalar(n.rotateSpeed);
      const P = n.domElement;
      A(2 * Math.PI * g.x / P.clientHeight), F(2 * Math.PI * g.y / P.clientHeight), d.copy(m);
    }
    function ue(E) {
      if (w.length === 1)
        f.set(E.pageX, E.pageY);
      else {
        const P = ve(E), le = 0.5 * (E.pageX + P.x), he = 0.5 * (E.pageY + P.y);
        f.set(le, he);
      }
      x.subVectors(f, p).multiplyScalar(n.panSpeed), O(x.x, x.y), p.copy(f);
    }
    function Fe(E) {
      const P = ve(E), le = E.pageX - P.x, he = E.pageY - P.y, oe = Math.sqrt(le * le + he * he);
      y.set(0, oe), b.set(0, Math.pow(y.y / T.y, n.zoomSpeed)), N(b.y), T.copy(y);
    }
    function be(E) {
      n.enableZoom && Fe(E), n.enablePan && ue(E);
    }
    function xe(E) {
      n.enableZoom && Fe(E), n.enableRotate && _e(E);
    }
    function $e(E) {
      n.enabled !== !1 && (w.length === 0 && (n.domElement.setPointerCapture(E.pointerId), n.domElement.addEventListener("pointermove", Xe), n.domElement.addEventListener("pointerup", qe)), K(E), E.pointerType === "touch" ? S(E) : Ge(E));
    }
    function Xe(E) {
      n.enabled !== !1 && (E.pointerType === "touch" ? v(E) : Ue(E));
    }
    function qe(E) {
      ne(E), w.length === 0 && (n.domElement.releasePointerCapture(E.pointerId), n.domElement.removeEventListener("pointermove", Xe), n.domElement.removeEventListener("pointerup", qe)), n.dispatchEvent(wa), s = i.NONE;
    }
    function rt(E) {
      ne(E);
    }
    function Ge(E) {
      let P;
      switch (E.button) {
        case 0:
          P = n.mouseButtons.LEFT;
          break;
        case 1:
          P = n.mouseButtons.MIDDLE;
          break;
        case 2:
          P = n.mouseButtons.RIGHT;
          break;
        default:
          P = -1;
      }
      switch (P) {
        case Sn.DOLLY:
          if (n.enableZoom === !1)
            return;
          Q(E), s = i.DOLLY;
          break;
        case Sn.ROTATE:
          if (E.ctrlKey || E.metaKey || E.shiftKey) {
            if (n.enablePan === !1)
              return;
            q(E), s = i.PAN;
          } else {
            if (n.enableRotate === !1)
              return;
            Z(E), s = i.ROTATE;
          }
          break;
        case Sn.PAN:
          if (E.ctrlKey || E.metaKey || E.shiftKey) {
            if (n.enableRotate === !1)
              return;
            Z(E), s = i.ROTATE;
          } else {
            if (n.enablePan === !1)
              return;
            q(E), s = i.PAN;
          }
          break;
        default:
          s = i.NONE;
      }
      s !== i.NONE && n.dispatchEvent(Us);
    }
    function Ue(E) {
      switch (s) {
        case i.ROTATE:
          if (n.enableRotate === !1)
            return;
          ee(E);
          break;
        case i.DOLLY:
          if (n.enableZoom === !1)
            return;
          Y(E);
          break;
        case i.PAN:
          if (n.enablePan === !1)
            return;
          V(E);
          break;
      }
    }
    function vt(E) {
      n.enabled === !1 || n.enableZoom === !1 || s !== i.NONE || (E.preventDefault(), n.dispatchEvent(Us), z(E), n.dispatchEvent(wa));
    }
    function ht(E) {
      n.enabled === !1 || n.enablePan === !1 || se(E);
    }
    function S(E) {
      switch (ae(E), w.length) {
        case 1:
          switch (n.touches.ONE) {
            case wn.ROTATE:
              if (n.enableRotate === !1)
                return;
              te(), s = i.TOUCH_ROTATE;
              break;
            case wn.PAN:
              if (n.enablePan === !1)
                return;
              re(), s = i.TOUCH_PAN;
              break;
            default:
              s = i.NONE;
          }
          break;
        case 2:
          switch (n.touches.TWO) {
            case wn.DOLLY_PAN:
              if (n.enableZoom === !1 && n.enablePan === !1)
                return;
              Ae(), s = i.TOUCH_DOLLY_PAN;
              break;
            case wn.DOLLY_ROTATE:
              if (n.enableZoom === !1 && n.enableRotate === !1)
                return;
              de(), s = i.TOUCH_DOLLY_ROTATE;
              break;
            default:
              s = i.NONE;
          }
          break;
        default:
          s = i.NONE;
      }
      s !== i.NONE && n.dispatchEvent(Us);
    }
    function v(E) {
      switch (ae(E), s) {
        case i.TOUCH_ROTATE:
          if (n.enableRotate === !1)
            return;
          _e(E), n.update();
          break;
        case i.TOUCH_PAN:
          if (n.enablePan === !1)
            return;
          ue(E), n.update();
          break;
        case i.TOUCH_DOLLY_PAN:
          if (n.enableZoom === !1 && n.enablePan === !1)
            return;
          be(E), n.update();
          break;
        case i.TOUCH_DOLLY_ROTATE:
          if (n.enableZoom === !1 && n.enableRotate === !1)
            return;
          xe(E), n.update();
          break;
        default:
          s = i.NONE;
      }
    }
    function B(E) {
      n.enabled !== !1 && E.preventDefault();
    }
    function K(E) {
      w.push(E);
    }
    function ne(E) {
      delete C[E.pointerId];
      for (let P = 0; P < w.length; P++)
        if (w[P].pointerId == E.pointerId) {
          w.splice(P, 1);
          return;
        }
    }
    function ae(E) {
      let P = C[E.pointerId];
      P === void 0 && (P = new ye(), C[E.pointerId] = P), P.set(E.pageX, E.pageY);
    }
    function ve(E) {
      const P = E.pointerId === w[0].pointerId ? w[1] : w[0];
      return C[P.pointerId];
    }
    n.domElement.addEventListener("contextmenu", B), n.domElement.addEventListener("pointerdown", $e), n.domElement.addEventListener("pointercancel", rt), n.domElement.addEventListener("wheel", vt, { passive: !1 }), this.update();
  }
}
class yf extends xi {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const s = this, o = this.path === "" ? _f.extractUrlBase(e) : this.path, r = new no(this.manager);
    r.setPath(this.path), r.setRequestHeader(this.requestHeader), r.setWithCredentials(this.withCredentials), r.load(e, function(c) {
      try {
        t(s.parse(c, o));
      } catch (l) {
        i ? i(l) : console.error(l), s.manager.itemError(e);
      }
    }, n, i);
  }
  setMaterialOptions(e) {
    return this.materialOptions = e, this;
  }
  parse(e, t) {
    const n = e.split(`
`);
    let i = {};
    const s = /\s+/, o = {};
    for (let c = 0; c < n.length; c++) {
      let l = n[c];
      if (l = l.trim(), l.length === 0 || l.charAt(0) === "#")
        continue;
      const h = l.indexOf(" ");
      let u = h >= 0 ? l.substring(0, h) : l;
      u = u.toLowerCase();
      let d = h >= 0 ? l.substring(h + 1) : "";
      if (d = d.trim(), u === "newmtl")
        i = { name: d }, o[d] = i;
      else if (u === "ka" || u === "kd" || u === "ks" || u === "ke") {
        const m = d.split(s, 3);
        i[u] = [parseFloat(m[0]), parseFloat(m[1]), parseFloat(m[2])];
      } else
        i[u] = d;
    }
    const r = new bf(this.resourcePath || t, this.materialOptions);
    return r.setCrossOrigin(this.crossOrigin), r.setManager(this.manager), r.setMaterials(o), r;
  }
}
class bf {
  constructor(e = "", t = {}) {
    this.baseUrl = e, this.options = t, this.materialsInfo = {}, this.materials = {}, this.materialsArray = [], this.nameLookup = {}, this.crossOrigin = "anonymous", this.side = this.options.side !== void 0 ? this.options.side : en, this.wrap = this.options.wrap !== void 0 ? this.options.wrap : qi;
  }
  setCrossOrigin(e) {
    return this.crossOrigin = e, this;
  }
  setManager(e) {
    this.manager = e;
  }
  setMaterials(e) {
    this.materialsInfo = this.convert(e), this.materials = {}, this.materialsArray = [], this.nameLookup = {};
  }
  convert(e) {
    if (!this.options)
      return e;
    const t = {};
    for (const n in e) {
      const i = e[n], s = {};
      t[n] = s;
      for (const o in i) {
        let r = !0, c = i[o];
        const l = o.toLowerCase();
        switch (l) {
          case "kd":
          case "ka":
          case "ks":
            this.options && this.options.normalizeRGB && (c = [c[0] / 255, c[1] / 255, c[2] / 255]), this.options && this.options.ignoreZeroRGBs && c[0] === 0 && c[1] === 0 && c[2] === 0 && (r = !1);
            break;
        }
        r && (s[l] = c);
      }
    }
    return t;
  }
  preload() {
    for (const e in this.materialsInfo)
      this.create(e);
  }
  getIndex(e) {
    return this.nameLookup[e];
  }
  getAsArray() {
    let e = 0;
    for (const t in this.materialsInfo)
      this.materialsArray[e] = this.create(t), this.nameLookup[t] = e, e++;
    return this.materialsArray;
  }
  create(e) {
    return this.materials[e] === void 0 && this.createMaterial_(e), this.materials[e];
  }
  createMaterial_(e) {
    const t = this, n = this.materialsInfo[e], i = {
      name: e,
      side: this.side
    };
    function s(r, c) {
      return typeof c != "string" || c === "" ? "" : /^https?:\/\//i.test(c) ? c : r + c;
    }
    function o(r, c) {
      if (i[r])
        return;
      const l = t.getTextureParams(c, i), h = t.loadTexture(s(t.baseUrl, l.url));
      h.repeat.copy(l.scale), h.offset.copy(l.offset), h.wrapS = t.wrap, h.wrapT = t.wrap, (r === "map" || r === "emissiveMap") && (h.encoding = ze), i[r] = h;
    }
    for (const r in n) {
      const c = n[r];
      let l;
      if (c !== "")
        switch (r.toLowerCase()) {
          case "kd":
            i.color = new Ee().fromArray(c).convertSRGBToLinear();
            break;
          case "ks":
            i.specular = new Ee().fromArray(c).convertSRGBToLinear();
            break;
          case "ke":
            i.emissive = new Ee().fromArray(c).convertSRGBToLinear();
            break;
          case "map_kd":
            o("map", c);
            break;
          case "map_ks":
            o("specularMap", c);
            break;
          case "map_ke":
            o("emissiveMap", c);
            break;
          case "norm":
            o("normalMap", c);
            break;
          case "map_bump":
          case "bump":
            o("bumpMap", c);
            break;
          case "map_d":
            o("alphaMap", c), i.transparent = !0;
            break;
          case "ns":
            i.shininess = parseFloat(c);
            break;
          case "d":
            l = parseFloat(c), l < 1 && (i.opacity = l, i.transparent = !0);
            break;
          case "tr":
            l = parseFloat(c), this.options && this.options.invertTrProperty && (l = 1 - l), l > 0 && (i.opacity = 1 - l, i.transparent = !0);
            break;
        }
    }
    return this.materials[e] = new eo(i), this.materials[e];
  }
  getTextureParams(e, t) {
    const n = {
      scale: new ye(1, 1),
      offset: new ye(0, 0)
    }, i = e.split(/\s+/);
    let s;
    return s = i.indexOf("-bm"), s >= 0 && (t.bumpScale = parseFloat(i[s + 1]), i.splice(s, 2)), s = i.indexOf("-s"), s >= 0 && (n.scale.set(parseFloat(i[s + 1]), parseFloat(i[s + 2])), i.splice(s, 4)), s = i.indexOf("-o"), s >= 0 && (n.offset.set(parseFloat(i[s + 1]), parseFloat(i[s + 2])), i.splice(s, 4)), n.url = i.join(" ").trim(), n;
  }
  loadTexture(e, t, n, i, s) {
    const o = this.manager !== void 0 ? this.manager : to;
    let r = o.getHandler(e);
    r === null && (r = new df(o)), r.setCrossOrigin && r.setCrossOrigin(this.crossOrigin);
    const c = r.load(e, n, i, s);
    return t !== void 0 && (c.mapping = t), c;
  }
}
const Sf = /^[og]\s*(.+)?/, wf = /^mtllib /, Tf = /^usemtl /, Ef = /^usemap /, Ta = /\s+/, Ea = new D(), Os = new D(), Aa = new D(), Ca = new D(), bt = new D(), Vi = new Ee();
function Af() {
  const a = {
    objects: [],
    object: {},
    vertices: [],
    normals: [],
    colors: [],
    uvs: [],
    materials: {},
    materialLibraries: [],
    startObject: function(e, t) {
      if (this.object && this.object.fromDeclaration === !1) {
        this.object.name = e, this.object.fromDeclaration = t !== !1;
        return;
      }
      const n = this.object && typeof this.object.currentMaterial == "function" ? this.object.currentMaterial() : void 0;
      if (this.object && typeof this.object._finalize == "function" && this.object._finalize(!0), this.object = {
        name: e || "",
        fromDeclaration: t !== !1,
        geometry: {
          vertices: [],
          normals: [],
          colors: [],
          uvs: [],
          hasUVIndices: !1
        },
        materials: [],
        smooth: !0,
        startMaterial: function(i, s) {
          const o = this._finalize(!1);
          o && (o.inherited || o.groupCount <= 0) && this.materials.splice(o.index, 1);
          const r = {
            index: this.materials.length,
            name: i || "",
            mtllib: Array.isArray(s) && s.length > 0 ? s[s.length - 1] : "",
            smooth: o !== void 0 ? o.smooth : this.smooth,
            groupStart: o !== void 0 ? o.groupEnd : 0,
            groupEnd: -1,
            groupCount: -1,
            inherited: !1,
            clone: function(c) {
              const l = {
                index: typeof c == "number" ? c : this.index,
                name: this.name,
                mtllib: this.mtllib,
                smooth: this.smooth,
                groupStart: 0,
                groupEnd: -1,
                groupCount: -1,
                inherited: !1
              };
              return l.clone = this.clone.bind(l), l;
            }
          };
          return this.materials.push(r), r;
        },
        currentMaterial: function() {
          if (this.materials.length > 0)
            return this.materials[this.materials.length - 1];
        },
        _finalize: function(i) {
          const s = this.currentMaterial();
          if (s && s.groupEnd === -1 && (s.groupEnd = this.geometry.vertices.length / 3, s.groupCount = s.groupEnd - s.groupStart, s.inherited = !1), i && this.materials.length > 1)
            for (let o = this.materials.length - 1; o >= 0; o--)
              this.materials[o].groupCount <= 0 && this.materials.splice(o, 1);
          return i && this.materials.length === 0 && this.materials.push({
            name: "",
            smooth: this.smooth
          }), s;
        }
      }, n && n.name && typeof n.clone == "function") {
        const i = n.clone(0);
        i.inherited = !0, this.object.materials.push(i);
      }
      this.objects.push(this.object);
    },
    finalize: function() {
      this.object && typeof this.object._finalize == "function" && this.object._finalize(!0);
    },
    parseVertexIndex: function(e, t) {
      const n = parseInt(e, 10);
      return (n >= 0 ? n - 1 : n + t / 3) * 3;
    },
    parseNormalIndex: function(e, t) {
      const n = parseInt(e, 10);
      return (n >= 0 ? n - 1 : n + t / 3) * 3;
    },
    parseUVIndex: function(e, t) {
      const n = parseInt(e, 10);
      return (n >= 0 ? n - 1 : n + t / 2) * 2;
    },
    addVertex: function(e, t, n) {
      const i = this.vertices, s = this.object.geometry.vertices;
      s.push(i[e + 0], i[e + 1], i[e + 2]), s.push(i[t + 0], i[t + 1], i[t + 2]), s.push(i[n + 0], i[n + 1], i[n + 2]);
    },
    addVertexPoint: function(e) {
      const t = this.vertices;
      this.object.geometry.vertices.push(t[e + 0], t[e + 1], t[e + 2]);
    },
    addVertexLine: function(e) {
      const t = this.vertices;
      this.object.geometry.vertices.push(t[e + 0], t[e + 1], t[e + 2]);
    },
    addNormal: function(e, t, n) {
      const i = this.normals, s = this.object.geometry.normals;
      s.push(i[e + 0], i[e + 1], i[e + 2]), s.push(i[t + 0], i[t + 1], i[t + 2]), s.push(i[n + 0], i[n + 1], i[n + 2]);
    },
    addFaceNormal: function(e, t, n) {
      const i = this.vertices, s = this.object.geometry.normals;
      Ea.fromArray(i, e), Os.fromArray(i, t), Aa.fromArray(i, n), bt.subVectors(Aa, Os), Ca.subVectors(Ea, Os), bt.cross(Ca), bt.normalize(), s.push(bt.x, bt.y, bt.z), s.push(bt.x, bt.y, bt.z), s.push(bt.x, bt.y, bt.z);
    },
    addColor: function(e, t, n) {
      const i = this.colors, s = this.object.geometry.colors;
      i[e] !== void 0 && s.push(i[e + 0], i[e + 1], i[e + 2]), i[t] !== void 0 && s.push(i[t + 0], i[t + 1], i[t + 2]), i[n] !== void 0 && s.push(i[n + 0], i[n + 1], i[n + 2]);
    },
    addUV: function(e, t, n) {
      const i = this.uvs, s = this.object.geometry.uvs;
      s.push(i[e + 0], i[e + 1]), s.push(i[t + 0], i[t + 1]), s.push(i[n + 0], i[n + 1]);
    },
    addDefaultUV: function() {
      const e = this.object.geometry.uvs;
      e.push(0, 0), e.push(0, 0), e.push(0, 0);
    },
    addUVLine: function(e) {
      const t = this.uvs;
      this.object.geometry.uvs.push(t[e + 0], t[e + 1]);
    },
    addFace: function(e, t, n, i, s, o, r, c, l) {
      const h = this.vertices.length;
      let u = this.parseVertexIndex(e, h), d = this.parseVertexIndex(t, h), m = this.parseVertexIndex(n, h);
      if (this.addVertex(u, d, m), this.addColor(u, d, m), r !== void 0 && r !== "") {
        const g = this.normals.length;
        u = this.parseNormalIndex(r, g), d = this.parseNormalIndex(c, g), m = this.parseNormalIndex(l, g), this.addNormal(u, d, m);
      } else
        this.addFaceNormal(u, d, m);
      if (i !== void 0 && i !== "") {
        const g = this.uvs.length;
        u = this.parseUVIndex(i, g), d = this.parseUVIndex(s, g), m = this.parseUVIndex(o, g), this.addUV(u, d, m), this.object.geometry.hasUVIndices = !0;
      } else
        this.addDefaultUV();
    },
    addPointGeometry: function(e) {
      this.object.geometry.type = "Points";
      const t = this.vertices.length;
      for (let n = 0, i = e.length; n < i; n++) {
        const s = this.parseVertexIndex(e[n], t);
        this.addVertexPoint(s), this.addColor(s);
      }
    },
    addLineGeometry: function(e, t) {
      this.object.geometry.type = "Line";
      const n = this.vertices.length, i = this.uvs.length;
      for (let s = 0, o = e.length; s < o; s++)
        this.addVertexLine(this.parseVertexIndex(e[s], n));
      for (let s = 0, o = t.length; s < o; s++)
        this.addUVLine(this.parseUVIndex(t[s], i));
    }
  };
  return a.startObject("", !1), a;
}
class Cf extends xi {
  constructor(e) {
    super(e), this.materials = null;
  }
  load(e, t, n, i) {
    const s = this, o = new no(this.manager);
    o.setPath(this.path), o.setRequestHeader(this.requestHeader), o.setWithCredentials(this.withCredentials), o.load(e, function(r) {
      try {
        t(s.parse(r));
      } catch (c) {
        i ? i(c) : console.error(c), s.manager.itemError(e);
      }
    }, n, i);
  }
  setMaterials(e) {
    return this.materials = e, this;
  }
  parse(e) {
    const t = new Af();
    e.indexOf(`\r
`) !== -1 && (e = e.replace(/\r\n/g, `
`)), e.indexOf(`\\
`) !== -1 && (e = e.replace(/\\\n/g, ""));
    const n = e.split(`
`);
    let i = [];
    for (let r = 0, c = n.length; r < c; r++) {
      const l = n[r].trimStart();
      if (l.length === 0)
        continue;
      const h = l.charAt(0);
      if (h !== "#")
        if (h === "v") {
          const u = l.split(Ta);
          switch (u[0]) {
            case "v":
              t.vertices.push(
                parseFloat(u[1]),
                parseFloat(u[2]),
                parseFloat(u[3])
              ), u.length >= 7 ? (Vi.setRGB(
                parseFloat(u[4]),
                parseFloat(u[5]),
                parseFloat(u[6])
              ).convertSRGBToLinear(), t.colors.push(Vi.r, Vi.g, Vi.b)) : t.colors.push(void 0, void 0, void 0);
              break;
            case "vn":
              t.normals.push(
                parseFloat(u[1]),
                parseFloat(u[2]),
                parseFloat(u[3])
              );
              break;
            case "vt":
              t.uvs.push(
                parseFloat(u[1]),
                parseFloat(u[2])
              );
              break;
          }
        } else if (h === "f") {
          const d = l.slice(1).trim().split(Ta), m = [];
          for (let p = 0, f = d.length; p < f; p++) {
            const x = d[p];
            if (x.length > 0) {
              const T = x.split("/");
              m.push(T);
            }
          }
          const g = m[0];
          for (let p = 1, f = m.length - 1; p < f; p++) {
            const x = m[p], T = m[p + 1];
            t.addFace(
              g[0],
              x[0],
              T[0],
              g[1],
              x[1],
              T[1],
              g[2],
              x[2],
              T[2]
            );
          }
        } else if (h === "l") {
          const u = l.substring(1).trim().split(" ");
          let d = [];
          const m = [];
          if (l.indexOf("/") === -1)
            d = u;
          else
            for (let g = 0, p = u.length; g < p; g++) {
              const f = u[g].split("/");
              f[0] !== "" && d.push(f[0]), f[1] !== "" && m.push(f[1]);
            }
          t.addLineGeometry(d, m);
        } else if (h === "p") {
          const d = l.slice(1).trim().split(" ");
          t.addPointGeometry(d);
        } else if ((i = Sf.exec(l)) !== null) {
          const u = (" " + i[0].slice(1).trim()).slice(1);
          t.startObject(u);
        } else if (Tf.test(l))
          t.object.startMaterial(l.substring(7).trim(), t.materialLibraries);
        else if (wf.test(l))
          t.materialLibraries.push(l.substring(7).trim());
        else if (Ef.test(l))
          console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');
        else if (h === "s") {
          if (i = l.split(" "), i.length > 1) {
            const d = i[1].trim().toLowerCase();
            t.object.smooth = d !== "0" && d !== "off";
          } else
            t.object.smooth = !0;
          const u = t.object.currentMaterial();
          u && (u.smooth = t.object.smooth);
        } else {
          if (l === "\0")
            continue;
          console.warn('THREE.OBJLoader: Unexpected line: "' + l + '"');
        }
    }
    t.finalize();
    const s = new ri();
    if (s.materialLibraries = [].concat(t.materialLibraries), !(t.objects.length === 1 && t.objects[0].geometry.vertices.length === 0) === !0)
      for (let r = 0, c = t.objects.length; r < c; r++) {
        const l = t.objects[r], h = l.geometry, u = l.materials, d = h.type === "Line", m = h.type === "Points";
        let g = !1;
        if (h.vertices.length === 0)
          continue;
        const p = new At();
        p.setAttribute("position", new nt(h.vertices, 3)), h.normals.length > 0 && p.setAttribute("normal", new nt(h.normals, 3)), h.colors.length > 0 && (g = !0, p.setAttribute("color", new nt(h.colors, 3))), h.hasUVIndices === !0 && p.setAttribute("uv", new nt(h.uvs, 2));
        const f = [];
        for (let T = 0, y = u.length; T < y; T++) {
          const b = u[T], w = b.name + "_" + b.smooth + "_" + g;
          let C = t.materials[w];
          if (this.materials !== null) {
            if (C = this.materials.create(b.name), d && C && !(C instanceof oi)) {
              const I = new oi();
              Ut.prototype.copy.call(I, C), I.color.copy(C.color), C = I;
            } else if (m && C && !(C instanceof ai)) {
              const I = new ai({ size: 10, sizeAttenuation: !1 });
              Ut.prototype.copy.call(I, C), I.color.copy(C.color), I.map = C.map, C = I;
            }
          }
          C === void 0 && (d ? C = new oi() : m ? C = new ai({ size: 1, sizeAttenuation: !1 }) : C = new eo(), C.name = b.name, C.flatShading = !b.smooth, C.vertexColors = g, t.materials[w] = C), f.push(C);
        }
        let x;
        if (f.length > 1) {
          for (let T = 0, y = u.length; T < y; T++) {
            const b = u[T];
            p.addGroup(b.groupStart, b.groupCount, T);
          }
          d ? x = new Xs(p, f) : m ? x = new Fs(p, f) : x = new Tt(p, f);
        } else
          d ? x = new Xs(p, f[0]) : m ? x = new Fs(p, f[0]) : x = new Tt(p, f[0]);
        x.name = l.name, s.add(x);
      }
    else if (t.vertices.length > 0) {
      const r = new ai({ size: 1, sizeAttenuation: !1 }), c = new At();
      c.setAttribute("position", new nt(t.vertices, 3)), t.colors.length > 0 && t.colors[0] !== void 0 && (c.setAttribute("color", new nt(t.colors, 3)), r.vertexColors = !0);
      const l = new Fs(c, r);
      s.add(l);
    }
    return s;
  }
}
const Lf = Math.PI / 180;
function so(a) {
  return a * Lf;
}
var ro = "sih3d-container", Xi = "./assets/", cn, qt = {
  hallLength: 5,
  hallWidth: 5,
  stalls: [
    { x: 0, y: 0, rot: 60, id: "A1", availability: 0 },
    { x: 2, y: 2, rot: 0, id: "A2", availability: 0 }
  ]
}, Qs = (a) => {
  console.log("SiH3D: Clicked on stall");
};
const Pf = (a) => {
  ro = a;
}, Df = (a) => {
  Xi = a;
}, Rf = (a) => {
  Qs = a;
};
var Xt;
new ye();
const If = (a = 0, e = 0, t = 0) => {
  const n = new jn(1, 0.65, 1), i = new Qa({
    color: 16711680,
    side: fi,
    opacity: 0.5,
    transparent: !0
  }), s = new Tt(n, i);
  s.position.x = a, s.position.y = 0.325, s.position.z = e, s.rotateY(so(t)), Xt.add(s);
}, Ff = (a = 0, e = 0, t = 0) => {
  var n = new yf(), i = new Cf();
  n.setPath(Xi), i.setPath(Xi), console.log(Xi), n.load("stall.mtl", (s) => {
    s.preload(), i.setMaterials(s), i.load("stall.obj", (o) => {
      o.position.x = a, o.position.z = e, o.rotateY(so(t)), Xt.add(o);
    });
  });
}, Nf = () => {
  for (let a of qt.stalls)
    Ff(a.x, a.y, a.rot), If(a.x, a.y, a.rot);
  Qs("testing this");
}, Uf = (a = qt) => {
  qt = a, cn = document.getElementById(ro);
  const e = new vf();
  e.domElement.style.position = "relative", cn.appendChild(e.domElement);
  const t = new Ja({
    antialias: !0
  });
  t.setSize(cn.offsetWidth, cn.offsetHeight), cn.appendChild(t.domElement), Xt = new of(), Xt.background = new Ee(13421772);
  const n = new xf(5);
  Xt.add(n);
  const i = new wt(
    75,
    cn.offsetWidth / cn.offsetHeight,
    0.1,
    1e3
  );
  i.position.z = 5;
  const s = new gf(4210752);
  Xt.add(s);
  const o = new mf(16777215);
  o.position.set(2, 3, 4), Xt.add(o);
  const r = new Zi(
    qt.hallWidth,
    qt.hallLength
  ), c = new Qa({
    color: 11184810,
    side: fi
  }), l = new Tt(r, c);
  l.rotateX(Math.PI / 2), l.receiveShadow = !0, Xt.add(l), Nf();
  const h = () => {
    requestAnimationFrame(h), u.update(), e.update(), t.render(Xt, i);
  }, u = new Mf(i, t.domElement);
  u.enableDamping = !0, u.dampingFactor = 0.05, u.minDistance = 2, u.maxDistance = Math.max(qt.hallLength, qt.hallWidth), u.enablePan = !1, u.maxPolarAngle = Math.PI / 2.1, h();
}, Of = (a = qt) => {
  qt = a, console.log(hallStuff);
}, zf = {
  updateContainerID: Pf,
  updateAssetPath: Df,
  updateOnStallClick: Rf,
  init: Uf,
  update: Of,
  onStallClick: Qs
};
export {
  zf as default
};
