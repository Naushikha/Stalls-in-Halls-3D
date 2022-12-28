/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const ir = "148", Tn = { LEFT: 0, MIDDLE: 1, RIGHT: 2, ROTATE: 0, DOLLY: 1, PAN: 2 }, En = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 }, Po = 0, pr = 1, Ro = 2, Xa = 1, Io = 2, oi = 3, nn = 0, Lt = 1, vi = 2, Ti = 3, tn = 0, qn = 1, mr = 2, gr = 3, _r = 4, Fo = 5, Vn = 100, No = 101, Oo = 102, xr = 103, vr = 104, Uo = 200, zo = 201, Bo = 202, ko = 203, ja = 204, Ya = 205, Go = 206, Vo = 207, Ho = 208, Wo = 209, qo = 210, Xo = 0, jo = 1, Yo = 2, qs = 3, Zo = 4, $o = 5, Ko = 6, Jo = 7, sr = 0, Qo = 1, el = 2, $t = 0, tl = 1, nl = 2, il = 3, sl = 4, rl = 5, Za = 300, Yn = 301, Zn = 302, Xs = 303, js = 304, es = 306, Ki = 1e3, Ft = 1001, Ys = 1002, ct = 1003, Mr = 1004, ls = 1005, At = 1006, al = 1007, mi = 1008, xn = 1009, ol = 1010, ll = 1011, $a = 1012, cl = 1013, pn = 1014, mn = 1015, gi = 1016, hl = 1017, ul = 1018, Xn = 1020, dl = 1021, fl = 1022, Nt = 1023, pl = 1024, ml = 1025, gn = 1026, $n = 1027, gl = 1028, _l = 1029, xl = 1030, vl = 1031, Ml = 1033, cs = 33776, hs = 33777, us = 33778, ds = 33779, yr = 35840, br = 35841, Sr = 35842, wr = 35843, yl = 36196, Tr = 37492, Er = 37496, Ar = 37808, Cr = 37809, Lr = 37810, Dr = 37811, Pr = 37812, Rr = 37813, Ir = 37814, Fr = 37815, Nr = 37816, Or = 37817, Ur = 37818, zr = 37819, Br = 37820, kr = 37821, Gr = 36492, vn = 3e3, ze = 3001, bl = 3200, Sl = 3201, rr = 0, wl = 1, Ot = "srgb", _i = "srgb-linear", fs = 7680, Tl = 519, Vr = 35044, Hr = "300 es", Zs = 1035;
class Sn {
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
const st = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"], ps = Math.PI / 180, Wr = 180 / Math.PI;
function Mi() {
  const r = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (st[r & 255] + st[r >> 8 & 255] + st[r >> 16 & 255] + st[r >> 24 & 255] + "-" + st[e & 255] + st[e >> 8 & 255] + "-" + st[e >> 16 & 15 | 64] + st[e >> 24 & 255] + "-" + st[t & 63 | 128] + st[t >> 8 & 255] + "-" + st[t >> 16 & 255] + st[t >> 24 & 255] + st[n & 255] + st[n >> 8 & 255] + st[n >> 16 & 255] + st[n >> 24 & 255]).toLowerCase();
}
function dt(r, e, t) {
  return Math.max(e, Math.min(t, r));
}
function El(r, e) {
  return (r % e + e) % e;
}
function ms(r, e, t) {
  return (1 - t) * r + t * e;
}
function qr(r) {
  return (r & r - 1) === 0 && r !== 0;
}
function $s(r) {
  return Math.pow(2, Math.floor(Math.log(r) / Math.LN2));
}
function Ei(r, e) {
  switch (e.constructor) {
    case Float32Array:
      return r;
    case Uint16Array:
      return r / 65535;
    case Uint8Array:
      return r / 255;
    case Int16Array:
      return Math.max(r / 32767, -1);
    case Int8Array:
      return Math.max(r / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function gt(r, e) {
  switch (e.constructor) {
    case Float32Array:
      return r;
    case Uint16Array:
      return Math.round(r * 65535);
    case Uint8Array:
      return Math.round(r * 255);
    case Int16Array:
      return Math.round(r * 32767);
    case Int8Array:
      return Math.round(r * 127);
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
class vt {
  constructor() {
    vt.prototype.isMatrix3 = !0, this.elements = [
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
  set(e, t, n, i, s, o, a, c, l) {
    const h = this.elements;
    return h[0] = e, h[1] = i, h[2] = a, h[3] = t, h[4] = s, h[5] = c, h[6] = n, h[7] = o, h[8] = l, this;
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
    const n = e.elements, i = t.elements, s = this.elements, o = n[0], a = n[3], c = n[6], l = n[1], h = n[4], u = n[7], f = n[2], m = n[5], g = n[8], p = i[0], d = i[3], _ = i[6], S = i[1], y = i[4], b = i[7], T = i[2], C = i[5], I = i[8];
    return s[0] = o * p + a * S + c * T, s[3] = o * d + a * y + c * C, s[6] = o * _ + a * b + c * I, s[1] = l * p + h * S + u * T, s[4] = l * d + h * y + u * C, s[7] = l * _ + h * b + u * I, s[2] = f * p + m * S + g * T, s[5] = f * d + m * y + g * C, s[8] = f * _ + m * b + g * I, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], s = e[3], o = e[4], a = e[5], c = e[6], l = e[7], h = e[8];
    return t * o * h - t * a * l - n * s * h + n * a * c + i * s * l - i * o * c;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], s = e[3], o = e[4], a = e[5], c = e[6], l = e[7], h = e[8], u = h * o - a * l, f = a * c - h * s, m = l * s - o * c, g = t * u + n * f + i * m;
    if (g === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const p = 1 / g;
    return e[0] = u * p, e[1] = (i * l - h * n) * p, e[2] = (a * n - i * o) * p, e[3] = f * p, e[4] = (h * t - i * c) * p, e[5] = (i * s - a * t) * p, e[6] = m * p, e[7] = (n * c - l * t) * p, e[8] = (o * t - n * s) * p, this;
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
  setUvTransform(e, t, n, i, s, o, a) {
    const c = Math.cos(s), l = Math.sin(s);
    return this.set(
      n * c,
      n * l,
      -n * (c * o + l * a) + o + e,
      -i * l,
      i * c,
      -i * (-l * o + c * a) + a + t,
      0,
      0,
      1
    ), this;
  }
  scale(e, t) {
    return this.premultiply(gs.makeScale(e, t)), this;
  }
  rotate(e) {
    return this.premultiply(gs.makeRotation(-e)), this;
  }
  translate(e, t) {
    return this.premultiply(gs.makeTranslation(e, t)), this;
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
const gs = /* @__PURE__ */ new vt();
function Ka(r) {
  for (let e = r.length - 1; e >= 0; --e)
    if (r[e] >= 65535)
      return !0;
  return !1;
}
function xi(r) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", r);
}
function _n(r) {
  return r < 0.04045 ? r * 0.0773993808 : Math.pow(r * 0.9478672986 + 0.0521327014, 2.4);
}
function Zi(r) {
  return r < 31308e-7 ? r * 12.92 : 1.055 * Math.pow(r, 0.41666) - 0.055;
}
const _s = {
  [Ot]: { [_i]: _n },
  [_i]: { [Ot]: Zi }
}, ot = {
  legacyMode: !0,
  get workingColorSpace() {
    return _i;
  },
  set workingColorSpace(r) {
    console.warn("THREE.ColorManagement: .workingColorSpace is readonly.");
  },
  convert: function(r, e, t) {
    if (this.legacyMode || e === t || !e || !t)
      return r;
    if (_s[e] && _s[e][t] !== void 0) {
      const n = _s[e][t];
      return r.r = n(r.r), r.g = n(r.g), r.b = n(r.b), r;
    }
    throw new Error("Unsupported color space conversion.");
  },
  fromWorkingColorSpace: function(r, e) {
    return this.convert(r, this.workingColorSpace, e);
  },
  toWorkingColorSpace: function(r, e) {
    return this.convert(r, e, this.workingColorSpace);
  }
}, Ja = {
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
}, je = { r: 0, g: 0, b: 0 }, Pt = { h: 0, s: 0, l: 0 }, Ai = { h: 0, s: 0, l: 0 };
function xs(r, e, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? r + (e - r) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? r + (e - r) * 6 * (2 / 3 - t) : r;
}
function Ci(r, e) {
  return e.r = r.r, e.g = r.g, e.b = r.b, e;
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
  setHex(e, t = Ot) {
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, ot.toWorkingColorSpace(this, t), this;
  }
  setRGB(e, t, n, i = ot.workingColorSpace) {
    return this.r = e, this.g = t, this.b = n, ot.toWorkingColorSpace(this, i), this;
  }
  setHSL(e, t, n, i = ot.workingColorSpace) {
    if (e = El(e, 1), t = dt(t, 0, 1), n = dt(n, 0, 1), t === 0)
      this.r = this.g = this.b = n;
    else {
      const s = n <= 0.5 ? n * (1 + t) : n + t - n * t, o = 2 * n - s;
      this.r = xs(o, s, e + 1 / 3), this.g = xs(o, s, e), this.b = xs(o, s, e - 1 / 3);
    }
    return ot.toWorkingColorSpace(this, i), this;
  }
  setStyle(e, t = Ot) {
    function n(s) {
      s !== void 0 && parseFloat(s) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.");
    }
    let i;
    if (i = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)) {
      let s;
      const o = i[1], a = i[2];
      switch (o) {
        case "rgb":
        case "rgba":
          if (s = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))
            return this.r = Math.min(255, parseInt(s[1], 10)) / 255, this.g = Math.min(255, parseInt(s[2], 10)) / 255, this.b = Math.min(255, parseInt(s[3], 10)) / 255, ot.toWorkingColorSpace(this, t), n(s[4]), this;
          if (s = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))
            return this.r = Math.min(100, parseInt(s[1], 10)) / 100, this.g = Math.min(100, parseInt(s[2], 10)) / 100, this.b = Math.min(100, parseInt(s[3], 10)) / 100, ot.toWorkingColorSpace(this, t), n(s[4]), this;
          break;
        case "hsl":
        case "hsla":
          if (s = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) {
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
  setColorName(e, t = Ot) {
    const n = Ja[e.toLowerCase()];
    return n !== void 0 ? this.setHex(n, t) : console.warn("THREE.Color: Unknown color " + e), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return this.r = e.r, this.g = e.g, this.b = e.b, this;
  }
  copySRGBToLinear(e) {
    return this.r = _n(e.r), this.g = _n(e.g), this.b = _n(e.b), this;
  }
  copyLinearToSRGB(e) {
    return this.r = Zi(e.r), this.g = Zi(e.g), this.b = Zi(e.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = Ot) {
    return ot.fromWorkingColorSpace(Ci(this, je), e), dt(je.r * 255, 0, 255) << 16 ^ dt(je.g * 255, 0, 255) << 8 ^ dt(je.b * 255, 0, 255) << 0;
  }
  getHexString(e = Ot) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = ot.workingColorSpace) {
    ot.fromWorkingColorSpace(Ci(this, je), t);
    const n = je.r, i = je.g, s = je.b, o = Math.max(n, i, s), a = Math.min(n, i, s);
    let c, l;
    const h = (a + o) / 2;
    if (a === o)
      c = 0, l = 0;
    else {
      const u = o - a;
      switch (l = h <= 0.5 ? u / (o + a) : u / (2 - o - a), o) {
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
    return ot.fromWorkingColorSpace(Ci(this, je), t), e.r = je.r, e.g = je.g, e.b = je.b, e;
  }
  getStyle(e = Ot) {
    return ot.fromWorkingColorSpace(Ci(this, je), e), e !== Ot ? `color(${e} ${je.r} ${je.g} ${je.b})` : `rgb(${je.r * 255 | 0},${je.g * 255 | 0},${je.b * 255 | 0})`;
  }
  offsetHSL(e, t, n) {
    return this.getHSL(Pt), Pt.h += e, Pt.s += t, Pt.l += n, this.setHSL(Pt.h, Pt.s, Pt.l), this;
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
    this.getHSL(Pt), e.getHSL(Ai);
    const n = ms(Pt.h, Ai.h, t), i = ms(Pt.s, Ai.s, t), s = ms(Pt.l, Ai.l, t);
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
Ee.NAMES = Ja;
let An;
class Qa {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u")
      return e.src;
    let t;
    if (e instanceof HTMLCanvasElement)
      t = e;
    else {
      An === void 0 && (An = xi("canvas")), An.width = e.width, An.height = e.height;
      const n = An.getContext("2d");
      e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), t = An;
    }
    return t.width > 2048 || t.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", e), t.toDataURL("image/jpeg", 0.6)) : t.toDataURL("image/png");
  }
  static sRGBToLinear(e) {
    if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
      const t = xi("canvas");
      t.width = e.width, t.height = e.height;
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const i = n.getImageData(0, 0, e.width, e.height), s = i.data;
      for (let o = 0; o < s.length; o++)
        s[o] = _n(s[o] / 255) * 255;
      return n.putImageData(i, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(_n(t[n] / 255) * 255) : t[n] = _n(t[n]);
      return {
        data: t,
        width: e.width,
        height: e.height
      };
    } else
      return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
  }
}
class eo {
  constructor(e = null) {
    this.isSource = !0, this.uuid = Mi(), this.data = e, this.version = 0;
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
        for (let o = 0, a = i.length; o < a; o++)
          i[o].isDataTexture ? s.push(vs(i[o].image)) : s.push(vs(i[o]));
      } else
        s = vs(i);
      n.url = s;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function vs(r) {
  return typeof HTMLImageElement < "u" && r instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && r instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && r instanceof ImageBitmap ? Qa.getDataURL(r) : r.data ? {
    data: Array.from(r.data),
    width: r.width,
    height: r.height,
    type: r.data.constructor.name
  } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let Al = 0;
class ft extends Sn {
  constructor(e = ft.DEFAULT_IMAGE, t = ft.DEFAULT_MAPPING, n = Ft, i = Ft, s = At, o = mi, a = Nt, c = xn, l = ft.DEFAULT_ANISOTROPY, h = vn) {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: Al++ }), this.uuid = Mi(), this.name = "", this.source = new eo(e), this.mipmaps = [], this.mapping = t, this.wrapS = n, this.wrapT = i, this.magFilter = s, this.minFilter = o, this.anisotropy = l, this.format = a, this.internalFormat = null, this.type = c, this.offset = new ye(0, 0), this.repeat = new ye(1, 1), this.center = new ye(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new vt(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.encoding = h, this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.needsPMREMUpdate = !1;
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
    if (this.mapping !== Za)
      return e;
    if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1)
      switch (this.wrapS) {
        case Ki:
          e.x = e.x - Math.floor(e.x);
          break;
        case Ft:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case Ys:
          Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case Ki:
          e.y = e.y - Math.floor(e.y);
          break;
        case Ft:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case Ys:
          Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
          break;
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    e === !0 && (this.version++, this.source.needsUpdate = !0);
  }
}
ft.DEFAULT_IMAGE = null;
ft.DEFAULT_MAPPING = Za;
ft.DEFAULT_ANISOTROPY = 1;
class tt {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    tt.prototype.isVector4 = !0, this.x = e, this.y = t, this.z = n, this.w = i;
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
    const c = e.elements, l = c[0], h = c[4], u = c[8], f = c[1], m = c[5], g = c[9], p = c[2], d = c[6], _ = c[10];
    if (Math.abs(h - f) < 0.01 && Math.abs(u - p) < 0.01 && Math.abs(g - d) < 0.01) {
      if (Math.abs(h + f) < 0.1 && Math.abs(u + p) < 0.1 && Math.abs(g + d) < 0.1 && Math.abs(l + m + _ - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const y = (l + 1) / 2, b = (m + 1) / 2, T = (_ + 1) / 2, C = (h + f) / 4, I = (u + p) / 4, x = (g + d) / 4;
      return y > b && y > T ? y < 0.01 ? (n = 0, i = 0.707106781, s = 0.707106781) : (n = Math.sqrt(y), i = C / n, s = I / n) : b > T ? b < 0.01 ? (n = 0.707106781, i = 0, s = 0.707106781) : (i = Math.sqrt(b), n = C / i, s = x / i) : T < 0.01 ? (n = 0.707106781, i = 0.707106781, s = 0) : (s = Math.sqrt(T), n = I / s, i = x / s), this.set(n, i, s, t), this;
    }
    let S = Math.sqrt((d - g) * (d - g) + (u - p) * (u - p) + (f - h) * (f - h));
    return Math.abs(S) < 1e-3 && (S = 1), this.x = (d - g) / S, this.y = (u - p) / S, this.z = (f - h) / S, this.w = Math.acos((l + m + _ - 1) / 2), this;
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
class Mn extends Sn {
  constructor(e = 1, t = 1, n = {}) {
    super(), this.isWebGLRenderTarget = !0, this.width = e, this.height = t, this.depth = 1, this.scissor = new tt(0, 0, e, t), this.scissorTest = !1, this.viewport = new tt(0, 0, e, t);
    const i = { width: e, height: t, depth: 1 };
    this.texture = new ft(i, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.encoding), this.texture.isRenderTargetTexture = !0, this.texture.flipY = !1, this.texture.generateMipmaps = n.generateMipmaps !== void 0 ? n.generateMipmaps : !1, this.texture.internalFormat = n.internalFormat !== void 0 ? n.internalFormat : null, this.texture.minFilter = n.minFilter !== void 0 ? n.minFilter : At, this.depthBuffer = n.depthBuffer !== void 0 ? n.depthBuffer : !0, this.stencilBuffer = n.stencilBuffer !== void 0 ? n.stencilBuffer : !1, this.depthTexture = n.depthTexture !== void 0 ? n.depthTexture : null, this.samples = n.samples !== void 0 ? n.samples : 0;
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
    return this.texture.source = new eo(t), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class to extends ft {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null), this.isDataArrayTexture = !0, this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = ct, this.minFilter = ct, this.wrapR = Ft, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class Cl extends ft {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null), this.isData3DTexture = !0, this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = ct, this.minFilter = ct, this.wrapR = Ft, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class yn {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    this.isQuaternion = !0, this._x = e, this._y = t, this._z = n, this._w = i;
  }
  static slerpFlat(e, t, n, i, s, o, a) {
    let c = n[i + 0], l = n[i + 1], h = n[i + 2], u = n[i + 3];
    const f = s[o + 0], m = s[o + 1], g = s[o + 2], p = s[o + 3];
    if (a === 0) {
      e[t + 0] = c, e[t + 1] = l, e[t + 2] = h, e[t + 3] = u;
      return;
    }
    if (a === 1) {
      e[t + 0] = f, e[t + 1] = m, e[t + 2] = g, e[t + 3] = p;
      return;
    }
    if (u !== p || c !== f || l !== m || h !== g) {
      let d = 1 - a;
      const _ = c * f + l * m + h * g + u * p, S = _ >= 0 ? 1 : -1, y = 1 - _ * _;
      if (y > Number.EPSILON) {
        const T = Math.sqrt(y), C = Math.atan2(T, _ * S);
        d = Math.sin(d * C) / T, a = Math.sin(a * C) / T;
      }
      const b = a * S;
      if (c = c * d + f * b, l = l * d + m * b, h = h * d + g * b, u = u * d + p * b, d === 1 - a) {
        const T = 1 / Math.sqrt(c * c + l * l + h * h + u * u);
        c *= T, l *= T, h *= T, u *= T;
      }
    }
    e[t] = c, e[t + 1] = l, e[t + 2] = h, e[t + 3] = u;
  }
  static multiplyQuaternionsFlat(e, t, n, i, s, o) {
    const a = n[i], c = n[i + 1], l = n[i + 2], h = n[i + 3], u = s[o], f = s[o + 1], m = s[o + 2], g = s[o + 3];
    return e[t] = a * g + h * u + c * m - l * f, e[t + 1] = c * g + h * f + l * u - a * m, e[t + 2] = l * g + h * m + a * f - c * u, e[t + 3] = h * g - a * u - c * f - l * m, e;
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
    const n = e._x, i = e._y, s = e._z, o = e._order, a = Math.cos, c = Math.sin, l = a(n / 2), h = a(i / 2), u = a(s / 2), f = c(n / 2), m = c(i / 2), g = c(s / 2);
    switch (o) {
      case "XYZ":
        this._x = f * h * u + l * m * g, this._y = l * m * u - f * h * g, this._z = l * h * g + f * m * u, this._w = l * h * u - f * m * g;
        break;
      case "YXZ":
        this._x = f * h * u + l * m * g, this._y = l * m * u - f * h * g, this._z = l * h * g - f * m * u, this._w = l * h * u + f * m * g;
        break;
      case "ZXY":
        this._x = f * h * u - l * m * g, this._y = l * m * u + f * h * g, this._z = l * h * g + f * m * u, this._w = l * h * u - f * m * g;
        break;
      case "ZYX":
        this._x = f * h * u - l * m * g, this._y = l * m * u + f * h * g, this._z = l * h * g - f * m * u, this._w = l * h * u + f * m * g;
        break;
      case "YZX":
        this._x = f * h * u + l * m * g, this._y = l * m * u + f * h * g, this._z = l * h * g - f * m * u, this._w = l * h * u - f * m * g;
        break;
      case "XZY":
        this._x = f * h * u - l * m * g, this._y = l * m * u - f * h * g, this._z = l * h * g + f * m * u, this._w = l * h * u + f * m * g;
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
    const t = e.elements, n = t[0], i = t[4], s = t[8], o = t[1], a = t[5], c = t[9], l = t[2], h = t[6], u = t[10], f = n + a + u;
    if (f > 0) {
      const m = 0.5 / Math.sqrt(f + 1);
      this._w = 0.25 / m, this._x = (h - c) * m, this._y = (s - l) * m, this._z = (o - i) * m;
    } else if (n > a && n > u) {
      const m = 2 * Math.sqrt(1 + n - a - u);
      this._w = (h - c) / m, this._x = 0.25 * m, this._y = (i + o) / m, this._z = (s + l) / m;
    } else if (a > u) {
      const m = 2 * Math.sqrt(1 + a - n - u);
      this._w = (s - l) / m, this._x = (i + o) / m, this._y = 0.25 * m, this._z = (c + h) / m;
    } else {
      const m = 2 * Math.sqrt(1 + u - n - a);
      this._w = (o - i) / m, this._x = (s + l) / m, this._y = (c + h) / m, this._z = 0.25 * m;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return n < Number.EPSILON ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize();
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(dt(this.dot(e), -1, 1)));
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
    const n = e._x, i = e._y, s = e._z, o = e._w, a = t._x, c = t._y, l = t._z, h = t._w;
    return this._x = n * h + o * a + i * l - s * c, this._y = i * h + o * c + s * a - n * l, this._z = s * h + o * l + n * c - i * a, this._w = o * h - n * a - i * c - s * l, this._onChangeCallback(), this;
  }
  slerp(e, t) {
    if (t === 0)
      return this;
    if (t === 1)
      return this.copy(e);
    const n = this._x, i = this._y, s = this._z, o = this._w;
    let a = o * e._w + n * e._x + i * e._y + s * e._z;
    if (a < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, a = -a) : this.copy(e), a >= 1)
      return this._w = o, this._x = n, this._y = i, this._z = s, this;
    const c = 1 - a * a;
    if (c <= Number.EPSILON) {
      const m = 1 - t;
      return this._w = m * o + t * this._w, this._x = m * n + t * this._x, this._y = m * i + t * this._y, this._z = m * s + t * this._z, this.normalize(), this._onChangeCallback(), this;
    }
    const l = Math.sqrt(c), h = Math.atan2(l, a), u = Math.sin((1 - t) * h) / l, f = Math.sin(t * h) / l;
    return this._w = o * u + this._w * f, this._x = n * u + this._x * f, this._y = i * u + this._y * f, this._z = s * u + this._z * f, this._onChangeCallback(), this;
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
    return this.applyQuaternion(Xr.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(Xr.setFromAxisAngle(e, t));
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
    const t = this.x, n = this.y, i = this.z, s = e.x, o = e.y, a = e.z, c = e.w, l = c * t + o * i - a * n, h = c * n + a * t - s * i, u = c * i + s * n - o * t, f = -s * t - o * n - a * i;
    return this.x = l * c + f * -s + h * -a - u * -o, this.y = h * c + f * -o + u * -s - l * -a, this.z = u * c + f * -a + l * -o - h * -s, this;
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
    const n = e.x, i = e.y, s = e.z, o = t.x, a = t.y, c = t.z;
    return this.x = i * c - s * a, this.y = s * o - n * c, this.z = n * a - i * o, this;
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0)
      return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  projectOnPlane(e) {
    return Ms.copy(this).projectOnVector(e), this.sub(Ms);
  }
  reflect(e) {
    return this.sub(Ms.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0)
      return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(dt(n, -1, 1));
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
const Ms = /* @__PURE__ */ new D(), Xr = /* @__PURE__ */ new yn();
class yi {
  constructor(e = new D(1 / 0, 1 / 0, 1 / 0), t = new D(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = !0, this.min = e, this.max = t;
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    let t = 1 / 0, n = 1 / 0, i = 1 / 0, s = -1 / 0, o = -1 / 0, a = -1 / 0;
    for (let c = 0, l = e.length; c < l; c += 3) {
      const h = e[c], u = e[c + 1], f = e[c + 2];
      h < t && (t = h), u < n && (n = u), f < i && (i = f), h > s && (s = h), u > o && (o = u), f > a && (a = f);
    }
    return this.min.set(t, n, i), this.max.set(s, o, a), this;
  }
  setFromBufferAttribute(e) {
    let t = 1 / 0, n = 1 / 0, i = 1 / 0, s = -1 / 0, o = -1 / 0, a = -1 / 0;
    for (let c = 0, l = e.count; c < l; c++) {
      const h = e.getX(c), u = e.getY(c), f = e.getZ(c);
      h < t && (t = h), u < n && (n = u), f < i && (i = f), h > s && (s = h), u > o && (o = u), f > a && (a = f);
    }
    return this.min.set(t, n, i), this.max.set(s, o, a), this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++)
      this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = ln.copy(t).multiplyScalar(0.5);
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
        for (let o = 0, a = s.count; o < a; o++)
          ln.fromBufferAttribute(s, o).applyMatrix4(e.matrixWorld), this.expandByPoint(ln);
      } else
        n.boundingBox === null && n.computeBoundingBox(), ys.copy(n.boundingBox), ys.applyMatrix4(e.matrixWorld), this.union(ys);
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
    return this.clampPoint(e.center, ln), ln.distanceToSquared(e.center) <= e.radius * e.radius;
  }
  intersectsPlane(e) {
    let t, n;
    return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant;
  }
  intersectsTriangle(e) {
    if (this.isEmpty())
      return !1;
    this.getCenter(ei), Li.subVectors(this.max, ei), Cn.subVectors(e.a, ei), Ln.subVectors(e.b, ei), Dn.subVectors(e.c, ei), Kt.subVectors(Ln, Cn), Jt.subVectors(Dn, Ln), cn.subVectors(Cn, Dn);
    let t = [
      0,
      -Kt.z,
      Kt.y,
      0,
      -Jt.z,
      Jt.y,
      0,
      -cn.z,
      cn.y,
      Kt.z,
      0,
      -Kt.x,
      Jt.z,
      0,
      -Jt.x,
      cn.z,
      0,
      -cn.x,
      -Kt.y,
      Kt.x,
      0,
      -Jt.y,
      Jt.x,
      0,
      -cn.y,
      cn.x,
      0
    ];
    return !bs(t, Cn, Ln, Dn, Li) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !bs(t, Cn, Ln, Dn, Li)) ? !1 : (Di.crossVectors(Kt, Jt), t = [Di.x, Di.y, Di.z], bs(t, Cn, Ln, Dn, Li));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return ln.copy(e).clamp(this.min, this.max).sub(e).length();
  }
  getBoundingSphere(e) {
    return this.getCenter(e.center), e.radius = this.getSize(ln).length() * 0.5, e;
  }
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty() ? this : (Ht[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), Ht[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), Ht[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), Ht[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), Ht[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), Ht[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), Ht[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), Ht[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(Ht), this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const Ht = [
  /* @__PURE__ */ new D(),
  /* @__PURE__ */ new D(),
  /* @__PURE__ */ new D(),
  /* @__PURE__ */ new D(),
  /* @__PURE__ */ new D(),
  /* @__PURE__ */ new D(),
  /* @__PURE__ */ new D(),
  /* @__PURE__ */ new D()
], ln = /* @__PURE__ */ new D(), ys = /* @__PURE__ */ new yi(), Cn = /* @__PURE__ */ new D(), Ln = /* @__PURE__ */ new D(), Dn = /* @__PURE__ */ new D(), Kt = /* @__PURE__ */ new D(), Jt = /* @__PURE__ */ new D(), cn = /* @__PURE__ */ new D(), ei = /* @__PURE__ */ new D(), Li = /* @__PURE__ */ new D(), Di = /* @__PURE__ */ new D(), hn = /* @__PURE__ */ new D();
function bs(r, e, t, n, i) {
  for (let s = 0, o = r.length - 3; s <= o; s += 3) {
    hn.fromArray(r, s);
    const a = i.x * Math.abs(hn.x) + i.y * Math.abs(hn.y) + i.z * Math.abs(hn.z), c = e.dot(hn), l = t.dot(hn), h = n.dot(hn);
    if (Math.max(-Math.max(c, l, h), Math.min(c, l, h)) > a)
      return !1;
  }
  return !0;
}
const Ll = /* @__PURE__ */ new yi(), ti = /* @__PURE__ */ new D(), Ss = /* @__PURE__ */ new D();
class bi {
  constructor(e = new D(), t = -1) {
    this.center = e, this.radius = t;
  }
  set(e, t) {
    return this.center.copy(e), this.radius = t, this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : Ll.setFromPoints(e).getCenter(n);
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
    ti.subVectors(e, this.center);
    const t = ti.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t), i = (n - this.radius) * 0.5;
      this.center.addScaledVector(ti, i / n), this.radius += i;
    }
    return this;
  }
  union(e) {
    return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (Ss.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(ti.copy(e.center).add(Ss)), this.expandByPoint(ti.copy(e.center).sub(Ss))), this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Wt = /* @__PURE__ */ new D(), ws = /* @__PURE__ */ new D(), Pi = /* @__PURE__ */ new D(), Qt = /* @__PURE__ */ new D(), Ts = /* @__PURE__ */ new D(), Ri = /* @__PURE__ */ new D(), Es = /* @__PURE__ */ new D();
class ts {
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
    return this.origin.copy(this.at(e, Wt)), this;
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
    const t = Wt.subVectors(e, this.origin).dot(this.direction);
    return t < 0 ? this.origin.distanceToSquared(e) : (Wt.copy(this.direction).multiplyScalar(t).add(this.origin), Wt.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, i) {
    ws.copy(e).add(t).multiplyScalar(0.5), Pi.copy(t).sub(e).normalize(), Qt.copy(this.origin).sub(ws);
    const s = e.distanceTo(t) * 0.5, o = -this.direction.dot(Pi), a = Qt.dot(this.direction), c = -Qt.dot(Pi), l = Qt.lengthSq(), h = Math.abs(1 - o * o);
    let u, f, m, g;
    if (h > 0)
      if (u = o * c - a, f = o * a - c, g = s * h, u >= 0)
        if (f >= -g)
          if (f <= g) {
            const p = 1 / h;
            u *= p, f *= p, m = u * (u + o * f + 2 * a) + f * (o * u + f + 2 * c) + l;
          } else
            f = s, u = Math.max(0, -(o * f + a)), m = -u * u + f * (f + 2 * c) + l;
        else
          f = -s, u = Math.max(0, -(o * f + a)), m = -u * u + f * (f + 2 * c) + l;
      else
        f <= -g ? (u = Math.max(0, -(-o * s + a)), f = u > 0 ? -s : Math.min(Math.max(-s, -c), s), m = -u * u + f * (f + 2 * c) + l) : f <= g ? (u = 0, f = Math.min(Math.max(-s, -c), s), m = f * (f + 2 * c) + l) : (u = Math.max(0, -(o * s + a)), f = u > 0 ? s : Math.min(Math.max(-s, -c), s), m = -u * u + f * (f + 2 * c) + l);
    else
      f = o > 0 ? -s : s, u = Math.max(0, -(o * f + a)), m = -u * u + f * (f + 2 * c) + l;
    return n && n.copy(this.direction).multiplyScalar(u).add(this.origin), i && i.copy(Pi).multiplyScalar(f).add(ws), m;
  }
  intersectSphere(e, t) {
    Wt.subVectors(e.center, this.origin);
    const n = Wt.dot(this.direction), i = Wt.dot(Wt) - n * n, s = e.radius * e.radius;
    if (i > s)
      return null;
    const o = Math.sqrt(s - i), a = n - o, c = n + o;
    return a < 0 && c < 0 ? null : a < 0 ? this.at(c, t) : this.at(a, t);
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
    let n, i, s, o, a, c;
    const l = 1 / this.direction.x, h = 1 / this.direction.y, u = 1 / this.direction.z, f = this.origin;
    return l >= 0 ? (n = (e.min.x - f.x) * l, i = (e.max.x - f.x) * l) : (n = (e.max.x - f.x) * l, i = (e.min.x - f.x) * l), h >= 0 ? (s = (e.min.y - f.y) * h, o = (e.max.y - f.y) * h) : (s = (e.max.y - f.y) * h, o = (e.min.y - f.y) * h), n > o || s > i || ((s > n || isNaN(n)) && (n = s), (o < i || isNaN(i)) && (i = o), u >= 0 ? (a = (e.min.z - f.z) * u, c = (e.max.z - f.z) * u) : (a = (e.max.z - f.z) * u, c = (e.min.z - f.z) * u), n > c || a > i) || ((a > n || n !== n) && (n = a), (c < i || i !== i) && (i = c), i < 0) ? null : this.at(n >= 0 ? n : i, t);
  }
  intersectsBox(e) {
    return this.intersectBox(e, Wt) !== null;
  }
  intersectTriangle(e, t, n, i, s) {
    Ts.subVectors(t, e), Ri.subVectors(n, e), Es.crossVectors(Ts, Ri);
    let o = this.direction.dot(Es), a;
    if (o > 0) {
      if (i)
        return null;
      a = 1;
    } else if (o < 0)
      a = -1, o = -o;
    else
      return null;
    Qt.subVectors(this.origin, e);
    const c = a * this.direction.dot(Ri.crossVectors(Qt, Ri));
    if (c < 0)
      return null;
    const l = a * this.direction.dot(Ts.cross(Qt));
    if (l < 0 || c + l > o)
      return null;
    const h = -a * Qt.dot(Es);
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
  set(e, t, n, i, s, o, a, c, l, h, u, f, m, g, p, d) {
    const _ = this.elements;
    return _[0] = e, _[4] = t, _[8] = n, _[12] = i, _[1] = s, _[5] = o, _[9] = a, _[13] = c, _[2] = l, _[6] = h, _[10] = u, _[14] = f, _[3] = m, _[7] = g, _[11] = p, _[15] = d, this;
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
    const t = this.elements, n = e.elements, i = 1 / Pn.setFromMatrixColumn(e, 0).length(), s = 1 / Pn.setFromMatrixColumn(e, 1).length(), o = 1 / Pn.setFromMatrixColumn(e, 2).length();
    return t[0] = n[0] * i, t[1] = n[1] * i, t[2] = n[2] * i, t[3] = 0, t[4] = n[4] * s, t[5] = n[5] * s, t[6] = n[6] * s, t[7] = 0, t[8] = n[8] * o, t[9] = n[9] * o, t[10] = n[10] * o, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromEuler(e) {
    const t = this.elements, n = e.x, i = e.y, s = e.z, o = Math.cos(n), a = Math.sin(n), c = Math.cos(i), l = Math.sin(i), h = Math.cos(s), u = Math.sin(s);
    if (e.order === "XYZ") {
      const f = o * h, m = o * u, g = a * h, p = a * u;
      t[0] = c * h, t[4] = -c * u, t[8] = l, t[1] = m + g * l, t[5] = f - p * l, t[9] = -a * c, t[2] = p - f * l, t[6] = g + m * l, t[10] = o * c;
    } else if (e.order === "YXZ") {
      const f = c * h, m = c * u, g = l * h, p = l * u;
      t[0] = f + p * a, t[4] = g * a - m, t[8] = o * l, t[1] = o * u, t[5] = o * h, t[9] = -a, t[2] = m * a - g, t[6] = p + f * a, t[10] = o * c;
    } else if (e.order === "ZXY") {
      const f = c * h, m = c * u, g = l * h, p = l * u;
      t[0] = f - p * a, t[4] = -o * u, t[8] = g + m * a, t[1] = m + g * a, t[5] = o * h, t[9] = p - f * a, t[2] = -o * l, t[6] = a, t[10] = o * c;
    } else if (e.order === "ZYX") {
      const f = o * h, m = o * u, g = a * h, p = a * u;
      t[0] = c * h, t[4] = g * l - m, t[8] = f * l + p, t[1] = c * u, t[5] = p * l + f, t[9] = m * l - g, t[2] = -l, t[6] = a * c, t[10] = o * c;
    } else if (e.order === "YZX") {
      const f = o * c, m = o * l, g = a * c, p = a * l;
      t[0] = c * h, t[4] = p - f * u, t[8] = g * u + m, t[1] = u, t[5] = o * h, t[9] = -a * h, t[2] = -l * h, t[6] = m * u + g, t[10] = f - p * u;
    } else if (e.order === "XZY") {
      const f = o * c, m = o * l, g = a * c, p = a * l;
      t[0] = c * h, t[4] = -u, t[8] = l * h, t[1] = f * u + p, t[5] = o * h, t[9] = m * u - g, t[2] = g * u - m, t[6] = a * h, t[10] = p * u + f;
    }
    return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromQuaternion(e) {
    return this.compose(Dl, e, Pl);
  }
  lookAt(e, t, n) {
    const i = this.elements;
    return _t.subVectors(e, t), _t.lengthSq() === 0 && (_t.z = 1), _t.normalize(), en.crossVectors(n, _t), en.lengthSq() === 0 && (Math.abs(n.z) === 1 ? _t.x += 1e-4 : _t.z += 1e-4, _t.normalize(), en.crossVectors(n, _t)), en.normalize(), Ii.crossVectors(_t, en), i[0] = en.x, i[4] = Ii.x, i[8] = _t.x, i[1] = en.y, i[5] = Ii.y, i[9] = _t.y, i[2] = en.z, i[6] = Ii.z, i[10] = _t.z, this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, i = t.elements, s = this.elements, o = n[0], a = n[4], c = n[8], l = n[12], h = n[1], u = n[5], f = n[9], m = n[13], g = n[2], p = n[6], d = n[10], _ = n[14], S = n[3], y = n[7], b = n[11], T = n[15], C = i[0], I = i[4], x = i[8], A = i[12], F = i[1], j = i[5], J = i[9], U = i[13], N = i[2], q = i[6], Z = i[10], Q = i[14], X = i[3], ee = i[7], Y = i[11], V = i[15];
    return s[0] = o * C + a * F + c * N + l * X, s[4] = o * I + a * j + c * q + l * ee, s[8] = o * x + a * J + c * Z + l * Y, s[12] = o * A + a * U + c * Q + l * V, s[1] = h * C + u * F + f * N + m * X, s[5] = h * I + u * j + f * q + m * ee, s[9] = h * x + u * J + f * Z + m * Y, s[13] = h * A + u * U + f * Q + m * V, s[2] = g * C + p * F + d * N + _ * X, s[6] = g * I + p * j + d * q + _ * ee, s[10] = g * x + p * J + d * Z + _ * Y, s[14] = g * A + p * U + d * Q + _ * V, s[3] = S * C + y * F + b * N + T * X, s[7] = S * I + y * j + b * q + T * ee, s[11] = S * x + y * J + b * Z + T * Y, s[15] = S * A + y * U + b * Q + T * V, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[4], i = e[8], s = e[12], o = e[1], a = e[5], c = e[9], l = e[13], h = e[2], u = e[6], f = e[10], m = e[14], g = e[3], p = e[7], d = e[11], _ = e[15];
    return g * (+s * c * u - i * l * u - s * a * f + n * l * f + i * a * m - n * c * m) + p * (+t * c * m - t * l * f + s * o * f - i * o * m + i * l * h - s * c * h) + d * (+t * l * u - t * a * m - s * o * u + n * o * m + s * a * h - n * l * h) + _ * (-i * a * h - t * c * u + t * a * f + i * o * u - n * o * f + n * c * h);
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
    const e = this.elements, t = e[0], n = e[1], i = e[2], s = e[3], o = e[4], a = e[5], c = e[6], l = e[7], h = e[8], u = e[9], f = e[10], m = e[11], g = e[12], p = e[13], d = e[14], _ = e[15], S = u * d * l - p * f * l + p * c * m - a * d * m - u * c * _ + a * f * _, y = g * f * l - h * d * l - g * c * m + o * d * m + h * c * _ - o * f * _, b = h * p * l - g * u * l + g * a * m - o * p * m - h * a * _ + o * u * _, T = g * u * c - h * p * c - g * a * f + o * p * f + h * a * d - o * u * d, C = t * S + n * y + i * b + s * T;
    if (C === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const I = 1 / C;
    return e[0] = S * I, e[1] = (p * f * s - u * d * s - p * i * m + n * d * m + u * i * _ - n * f * _) * I, e[2] = (a * d * s - p * c * s + p * i * l - n * d * l - a * i * _ + n * c * _) * I, e[3] = (u * c * s - a * f * s - u * i * l + n * f * l + a * i * m - n * c * m) * I, e[4] = y * I, e[5] = (h * d * s - g * f * s + g * i * m - t * d * m - h * i * _ + t * f * _) * I, e[6] = (g * c * s - o * d * s - g * i * l + t * d * l + o * i * _ - t * c * _) * I, e[7] = (o * f * s - h * c * s + h * i * l - t * f * l - o * i * m + t * c * m) * I, e[8] = b * I, e[9] = (g * u * s - h * p * s - g * n * m + t * p * m + h * n * _ - t * u * _) * I, e[10] = (o * p * s - g * a * s + g * n * l - t * p * l - o * n * _ + t * a * _) * I, e[11] = (h * a * s - o * u * s - h * n * l + t * u * l + o * n * m - t * a * m) * I, e[12] = T * I, e[13] = (h * p * i - g * u * i + g * n * f - t * p * f - h * n * d + t * u * d) * I, e[14] = (g * a * i - o * p * i - g * n * c + t * p * c + o * n * d - t * a * d) * I, e[15] = (o * u * i - h * a * i + h * n * c - t * u * c - o * n * f + t * a * f) * I, this;
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
    const n = Math.cos(t), i = Math.sin(t), s = 1 - n, o = e.x, a = e.y, c = e.z, l = s * o, h = s * a;
    return this.set(
      l * o + n,
      l * a - i * c,
      l * c + i * a,
      0,
      l * a + i * c,
      h * a + n,
      h * c - i * o,
      0,
      l * c - i * a,
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
    const i = this.elements, s = t._x, o = t._y, a = t._z, c = t._w, l = s + s, h = o + o, u = a + a, f = s * l, m = s * h, g = s * u, p = o * h, d = o * u, _ = a * u, S = c * l, y = c * h, b = c * u, T = n.x, C = n.y, I = n.z;
    return i[0] = (1 - (p + _)) * T, i[1] = (m + b) * T, i[2] = (g - y) * T, i[3] = 0, i[4] = (m - b) * C, i[5] = (1 - (f + _)) * C, i[6] = (d + S) * C, i[7] = 0, i[8] = (g + y) * I, i[9] = (d - S) * I, i[10] = (1 - (f + p)) * I, i[11] = 0, i[12] = e.x, i[13] = e.y, i[14] = e.z, i[15] = 1, this;
  }
  decompose(e, t, n) {
    const i = this.elements;
    let s = Pn.set(i[0], i[1], i[2]).length();
    const o = Pn.set(i[4], i[5], i[6]).length(), a = Pn.set(i[8], i[9], i[10]).length();
    this.determinant() < 0 && (s = -s), e.x = i[12], e.y = i[13], e.z = i[14], Rt.copy(this);
    const l = 1 / s, h = 1 / o, u = 1 / a;
    return Rt.elements[0] *= l, Rt.elements[1] *= l, Rt.elements[2] *= l, Rt.elements[4] *= h, Rt.elements[5] *= h, Rt.elements[6] *= h, Rt.elements[8] *= u, Rt.elements[9] *= u, Rt.elements[10] *= u, t.setFromRotationMatrix(Rt), n.x = s, n.y = o, n.z = a, this;
  }
  makePerspective(e, t, n, i, s, o) {
    const a = this.elements, c = 2 * s / (t - e), l = 2 * s / (n - i), h = (t + e) / (t - e), u = (n + i) / (n - i), f = -(o + s) / (o - s), m = -2 * o * s / (o - s);
    return a[0] = c, a[4] = 0, a[8] = h, a[12] = 0, a[1] = 0, a[5] = l, a[9] = u, a[13] = 0, a[2] = 0, a[6] = 0, a[10] = f, a[14] = m, a[3] = 0, a[7] = 0, a[11] = -1, a[15] = 0, this;
  }
  makeOrthographic(e, t, n, i, s, o) {
    const a = this.elements, c = 1 / (t - e), l = 1 / (n - i), h = 1 / (o - s), u = (t + e) * c, f = (n + i) * l, m = (o + s) * h;
    return a[0] = 2 * c, a[4] = 0, a[8] = 0, a[12] = -u, a[1] = 0, a[5] = 2 * l, a[9] = 0, a[13] = -f, a[2] = 0, a[6] = 0, a[10] = -2 * h, a[14] = -m, a[3] = 0, a[7] = 0, a[11] = 0, a[15] = 1, this;
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
const Pn = /* @__PURE__ */ new D(), Rt = /* @__PURE__ */ new ke(), Dl = /* @__PURE__ */ new D(0, 0, 0), Pl = /* @__PURE__ */ new D(1, 1, 1), en = /* @__PURE__ */ new D(), Ii = /* @__PURE__ */ new D(), _t = /* @__PURE__ */ new D(), jr = /* @__PURE__ */ new ke(), Yr = /* @__PURE__ */ new yn();
class Si {
  constructor(e = 0, t = 0, n = 0, i = Si.DefaultOrder) {
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
    const i = e.elements, s = i[0], o = i[4], a = i[8], c = i[1], l = i[5], h = i[9], u = i[2], f = i[6], m = i[10];
    switch (t) {
      case "XYZ":
        this._y = Math.asin(dt(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(-h, m), this._z = Math.atan2(-o, s)) : (this._x = Math.atan2(f, l), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-dt(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._y = Math.atan2(a, m), this._z = Math.atan2(c, l)) : (this._y = Math.atan2(-u, s), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(dt(f, -1, 1)), Math.abs(f) < 0.9999999 ? (this._y = Math.atan2(-u, m), this._z = Math.atan2(-o, l)) : (this._y = 0, this._z = Math.atan2(c, s));
        break;
      case "ZYX":
        this._y = Math.asin(-dt(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._x = Math.atan2(f, m), this._z = Math.atan2(c, s)) : (this._x = 0, this._z = Math.atan2(-o, l));
        break;
      case "YZX":
        this._z = Math.asin(dt(c, -1, 1)), Math.abs(c) < 0.9999999 ? (this._x = Math.atan2(-h, l), this._y = Math.atan2(-u, s)) : (this._x = 0, this._y = Math.atan2(a, m));
        break;
      case "XZY":
        this._z = Math.asin(-dt(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(f, l), this._y = Math.atan2(a, s)) : (this._x = Math.atan2(-h, m), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
    }
    return this._order = t, n === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, n) {
    return jr.makeRotationFromQuaternion(e), this.setFromRotationMatrix(jr, t, n);
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return Yr.setFromEuler(this), this.setFromQuaternion(Yr, e);
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
Si.DefaultOrder = "XYZ";
Si.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"];
class ar {
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
let Rl = 0;
const Zr = /* @__PURE__ */ new D(), Rn = /* @__PURE__ */ new yn(), qt = /* @__PURE__ */ new ke(), Fi = /* @__PURE__ */ new D(), ni = /* @__PURE__ */ new D(), Il = /* @__PURE__ */ new D(), Fl = /* @__PURE__ */ new yn(), $r = /* @__PURE__ */ new D(1, 0, 0), Kr = /* @__PURE__ */ new D(0, 1, 0), Jr = /* @__PURE__ */ new D(0, 0, 1), Nl = { type: "added" }, Qr = { type: "removed" };
class Ye extends Sn {
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: Rl++ }), this.uuid = Mi(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = Ye.DefaultUp.clone();
    const e = new D(), t = new Si(), n = new yn(), i = new D(1, 1, 1);
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
        value: new vt()
      }
    }), this.matrix = new ke(), this.matrixWorld = new ke(), this.matrixAutoUpdate = Ye.DefaultMatrixAutoUpdate, this.matrixWorldNeedsUpdate = !1, this.matrixWorldAutoUpdate = Ye.DefaultMatrixWorldAutoUpdate, this.layers = new ar(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {};
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
    return Rn.setFromAxisAngle(e, t), this.quaternion.multiply(Rn), this;
  }
  rotateOnWorldAxis(e, t) {
    return Rn.setFromAxisAngle(e, t), this.quaternion.premultiply(Rn), this;
  }
  rotateX(e) {
    return this.rotateOnAxis($r, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(Kr, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(Jr, e);
  }
  translateOnAxis(e, t) {
    return Zr.copy(e).applyQuaternion(this.quaternion), this.position.add(Zr.multiplyScalar(t)), this;
  }
  translateX(e) {
    return this.translateOnAxis($r, e);
  }
  translateY(e) {
    return this.translateOnAxis(Kr, e);
  }
  translateZ(e) {
    return this.translateOnAxis(Jr, e);
  }
  localToWorld(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(qt.copy(this.matrixWorld).invert());
  }
  lookAt(e, t, n) {
    e.isVector3 ? Fi.copy(e) : Fi.set(e, t, n);
    const i = this.parent;
    this.updateWorldMatrix(!0, !1), ni.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? qt.lookAt(ni, Fi, this.up) : qt.lookAt(Fi, ni, this.up), this.quaternion.setFromRotationMatrix(qt), i && (qt.extractRotation(i.matrixWorld), Rn.setFromRotationMatrix(qt), this.quaternion.premultiply(Rn.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++)
        this.add(arguments[t]);
      return this;
    }
    return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.parent !== null && e.parent.remove(e), e.parent = this, this.children.push(e), e.dispatchEvent(Nl)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++)
        this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(Qr)), this;
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    for (let e = 0; e < this.children.length; e++) {
      const t = this.children[e];
      t.parent = null, t.dispatchEvent(Qr);
    }
    return this.children.length = 0, this;
  }
  attach(e) {
    return this.updateWorldMatrix(!0, !1), qt.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), qt.multiply(e.parent.matrixWorld)), e.applyMatrix4(qt), this.add(e), e.updateWorldMatrix(!1, !0), this;
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
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(ni, e, Il), e;
  }
  getWorldScale(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(ni, Fl, e), e;
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
        const a = i[s];
        a.matrixWorldAutoUpdate === !0 && a.updateWorldMatrix(!1, !0);
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
    function s(a, c) {
      return a[c.uuid] === void 0 && (a[c.uuid] = c.toJSON(e)), c.uuid;
    }
    if (this.isScene)
      this.background && (this.background.isColor ? i.background = this.background.toJSON() : this.background.isTexture && (i.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (i.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      i.geometry = s(e.geometries, this.geometry);
      const a = this.geometry.parameters;
      if (a !== void 0 && a.shapes !== void 0) {
        const c = a.shapes;
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
        const a = [];
        for (let c = 0, l = this.material.length; c < l; c++)
          a.push(s(e.materials, this.material[c]));
        i.material = a;
      } else
        i.material = s(e.materials, this.material);
    if (this.children.length > 0) {
      i.children = [];
      for (let a = 0; a < this.children.length; a++)
        i.children.push(this.children[a].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      i.animations = [];
      for (let a = 0; a < this.animations.length; a++) {
        const c = this.animations[a];
        i.animations.push(s(e.animations, c));
      }
    }
    if (t) {
      const a = o(e.geometries), c = o(e.materials), l = o(e.textures), h = o(e.images), u = o(e.shapes), f = o(e.skeletons), m = o(e.animations), g = o(e.nodes);
      a.length > 0 && (n.geometries = a), c.length > 0 && (n.materials = c), l.length > 0 && (n.textures = l), h.length > 0 && (n.images = h), u.length > 0 && (n.shapes = u), f.length > 0 && (n.skeletons = f), m.length > 0 && (n.animations = m), g.length > 0 && (n.nodes = g);
    }
    return n.object = i, n;
    function o(a) {
      const c = [];
      for (const l in a) {
        const h = a[l];
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
Ye.DefaultUp = /* @__PURE__ */ new D(0, 1, 0);
Ye.DefaultMatrixAutoUpdate = !0;
Ye.DefaultMatrixWorldAutoUpdate = !0;
const It = /* @__PURE__ */ new D(), Xt = /* @__PURE__ */ new D(), As = /* @__PURE__ */ new D(), jt = /* @__PURE__ */ new D(), In = /* @__PURE__ */ new D(), Fn = /* @__PURE__ */ new D(), ea = /* @__PURE__ */ new D(), Cs = /* @__PURE__ */ new D(), Ls = /* @__PURE__ */ new D(), Ds = /* @__PURE__ */ new D();
class Zt {
  constructor(e = new D(), t = new D(), n = new D()) {
    this.a = e, this.b = t, this.c = n;
  }
  static getNormal(e, t, n, i) {
    i.subVectors(n, t), It.subVectors(e, t), i.cross(It);
    const s = i.lengthSq();
    return s > 0 ? i.multiplyScalar(1 / Math.sqrt(s)) : i.set(0, 0, 0);
  }
  static getBarycoord(e, t, n, i, s) {
    It.subVectors(i, t), Xt.subVectors(n, t), As.subVectors(e, t);
    const o = It.dot(It), a = It.dot(Xt), c = It.dot(As), l = Xt.dot(Xt), h = Xt.dot(As), u = o * l - a * a;
    if (u === 0)
      return s.set(-2, -1, -1);
    const f = 1 / u, m = (l * c - a * h) * f, g = (o * h - a * c) * f;
    return s.set(1 - m - g, g, m);
  }
  static containsPoint(e, t, n, i) {
    return this.getBarycoord(e, t, n, i, jt), jt.x >= 0 && jt.y >= 0 && jt.x + jt.y <= 1;
  }
  static getUV(e, t, n, i, s, o, a, c) {
    return this.getBarycoord(e, t, n, i, jt), c.set(0, 0), c.addScaledVector(s, jt.x), c.addScaledVector(o, jt.y), c.addScaledVector(a, jt.z), c;
  }
  static isFrontFacing(e, t, n, i) {
    return It.subVectors(n, t), Xt.subVectors(e, t), It.cross(Xt).dot(i) < 0;
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
    return It.subVectors(this.c, this.b), Xt.subVectors(this.a, this.b), It.cross(Xt).length() * 0.5;
  }
  getMidpoint(e) {
    return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return Zt.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return Zt.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getUV(e, t, n, i, s) {
    return Zt.getUV(e, this.a, this.b, this.c, t, n, i, s);
  }
  containsPoint(e) {
    return Zt.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return Zt.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const n = this.a, i = this.b, s = this.c;
    let o, a;
    In.subVectors(i, n), Fn.subVectors(s, n), Cs.subVectors(e, n);
    const c = In.dot(Cs), l = Fn.dot(Cs);
    if (c <= 0 && l <= 0)
      return t.copy(n);
    Ls.subVectors(e, i);
    const h = In.dot(Ls), u = Fn.dot(Ls);
    if (h >= 0 && u <= h)
      return t.copy(i);
    const f = c * u - h * l;
    if (f <= 0 && c >= 0 && h <= 0)
      return o = c / (c - h), t.copy(n).addScaledVector(In, o);
    Ds.subVectors(e, s);
    const m = In.dot(Ds), g = Fn.dot(Ds);
    if (g >= 0 && m <= g)
      return t.copy(s);
    const p = m * l - c * g;
    if (p <= 0 && l >= 0 && g <= 0)
      return a = l / (l - g), t.copy(n).addScaledVector(Fn, a);
    const d = h * g - m * u;
    if (d <= 0 && u - h >= 0 && m - g >= 0)
      return ea.subVectors(s, i), a = (u - h) / (u - h + (m - g)), t.copy(i).addScaledVector(ea, a);
    const _ = 1 / (d + p + f);
    return o = p * _, a = f * _, t.copy(n).addScaledVector(In, o).addScaledVector(Fn, a);
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
let Ol = 0;
class kt extends Sn {
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: Ol++ }), this.uuid = Mi(), this.name = "", this.type = "Material", this.blending = qn, this.side = nn, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.blendSrc = ja, this.blendDst = Ya, this.blendEquation = Vn, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = qs, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = Tl, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = fs, this.stencilZFail = fs, this.stencilZPass = fs, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
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
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== qn && (n.blending = this.blending), this.side !== nn && (n.side = this.side), this.vertexColors && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = this.transparent), n.depthFunc = this.depthFunc, n.depthTest = this.depthTest, n.depthWrite = this.depthWrite, n.colorWrite = this.colorWrite, n.stencilWrite = this.stencilWrite, n.stencilWriteMask = this.stencilWriteMask, n.stencilFunc = this.stencilFunc, n.stencilRef = this.stencilRef, n.stencilFuncMask = this.stencilFuncMask, n.stencilFail = this.stencilFail, n.stencilZFail = this.stencilZFail, n.stencilZPass = this.stencilZPass, this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaToCoverage === !0 && (n.alphaToCoverage = this.alphaToCoverage), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = this.premultipliedAlpha), this.wireframe === !0 && (n.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (n.flatShading = this.flatShading), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), this.fog === !1 && (n.fog = !1), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
    function i(s) {
      const o = [];
      for (const a in s) {
        const c = s[a];
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
class no extends kt {
  constructor(e) {
    super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new Ee(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = sr, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
const We = /* @__PURE__ */ new D(), Ni = /* @__PURE__ */ new ye();
class Bt {
  constructor(e, t, n = !1) {
    if (Array.isArray(e))
      throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = !0, this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n, this.usage = Vr, this.updateRange = { offset: 0, count: -1 }, this.version = 0;
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
        Ni.fromBufferAttribute(this, t), Ni.applyMatrix3(e), this.setXY(t, Ni.x, Ni.y);
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
    return this.normalized && (t = Ei(t, this.array)), t;
  }
  setX(e, t) {
    return this.normalized && (t = gt(t, this.array)), this.array[e * this.itemSize] = t, this;
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = Ei(t, this.array)), t;
  }
  setY(e, t) {
    return this.normalized && (t = gt(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = Ei(t, this.array)), t;
  }
  setZ(e, t) {
    return this.normalized && (t = gt(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = Ei(t, this.array)), t;
  }
  setW(e, t) {
    return this.normalized && (t = gt(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
  }
  setXY(e, t, n) {
    return e *= this.itemSize, this.normalized && (t = gt(t, this.array), n = gt(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, i) {
    return e *= this.itemSize, this.normalized && (t = gt(t, this.array), n = gt(n, this.array), i = gt(i, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this;
  }
  setXYZW(e, t, n, i, s) {
    return e *= this.itemSize, this.normalized && (t = gt(t, this.array), n = gt(n, this.array), i = gt(i, this.array), s = gt(s, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this.array[e + 3] = s, this;
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
    return this.name !== "" && (e.name = this.name), this.usage !== Vr && (e.usage = this.usage), (this.updateRange.offset !== 0 || this.updateRange.count !== -1) && (e.updateRange = this.updateRange), e;
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
class io extends Bt {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class so extends Bt {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class nt extends Bt {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let Ul = 0;
const St = /* @__PURE__ */ new ke(), Ps = /* @__PURE__ */ new Ye(), Nn = /* @__PURE__ */ new D(), xt = /* @__PURE__ */ new yi(), ii = /* @__PURE__ */ new yi(), et = /* @__PURE__ */ new D();
class Dt extends Sn {
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: Ul++ }), this.uuid = Mi(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return Array.isArray(e) ? this.index = new (Ka(e) ? so : io)(e, 1) : this.index = e, this;
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
      const s = new vt().getNormalMatrix(e);
      n.applyNormalMatrix(s), n.needsUpdate = !0;
    }
    const i = this.attributes.tangent;
    return i !== void 0 && (i.transformDirection(e), i.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  applyQuaternion(e) {
    return St.makeRotationFromQuaternion(e), this.applyMatrix4(St), this;
  }
  rotateX(e) {
    return St.makeRotationX(e), this.applyMatrix4(St), this;
  }
  rotateY(e) {
    return St.makeRotationY(e), this.applyMatrix4(St), this;
  }
  rotateZ(e) {
    return St.makeRotationZ(e), this.applyMatrix4(St), this;
  }
  translate(e, t, n) {
    return St.makeTranslation(e, t, n), this.applyMatrix4(St), this;
  }
  scale(e, t, n) {
    return St.makeScale(e, t, n), this.applyMatrix4(St), this;
  }
  lookAt(e) {
    return Ps.lookAt(e), Ps.updateMatrix(), this.applyMatrix4(Ps.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(Nn).negate(), this.translate(Nn.x, Nn.y, Nn.z), this;
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
    this.boundingBox === null && (this.boundingBox = new yi());
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
          xt.setFromBufferAttribute(s), this.morphTargetsRelative ? (et.addVectors(this.boundingBox.min, xt.min), this.boundingBox.expandByPoint(et), et.addVectors(this.boundingBox.max, xt.max), this.boundingBox.expandByPoint(et)) : (this.boundingBox.expandByPoint(xt.min), this.boundingBox.expandByPoint(xt.max));
        }
    } else
      this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new bi());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingSphere.set(new D(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if (xt.setFromBufferAttribute(e), t)
        for (let s = 0, o = t.length; s < o; s++) {
          const a = t[s];
          ii.setFromBufferAttribute(a), this.morphTargetsRelative ? (et.addVectors(xt.min, ii.min), xt.expandByPoint(et), et.addVectors(xt.max, ii.max), xt.expandByPoint(et)) : (xt.expandByPoint(ii.min), xt.expandByPoint(ii.max));
        }
      xt.getCenter(n);
      let i = 0;
      for (let s = 0, o = e.count; s < o; s++)
        et.fromBufferAttribute(e, s), i = Math.max(i, n.distanceToSquared(et));
      if (t)
        for (let s = 0, o = t.length; s < o; s++) {
          const a = t[s], c = this.morphTargetsRelative;
          for (let l = 0, h = a.count; l < h; l++)
            et.fromBufferAttribute(a, l), c && (Nn.fromBufferAttribute(e, l), et.add(Nn)), i = Math.max(i, n.distanceToSquared(et));
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
    const n = e.array, i = t.position.array, s = t.normal.array, o = t.uv.array, a = i.length / 3;
    this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new Bt(new Float32Array(4 * a), 4));
    const c = this.getAttribute("tangent").array, l = [], h = [];
    for (let F = 0; F < a; F++)
      l[F] = new D(), h[F] = new D();
    const u = new D(), f = new D(), m = new D(), g = new ye(), p = new ye(), d = new ye(), _ = new D(), S = new D();
    function y(F, j, J) {
      u.fromArray(i, F * 3), f.fromArray(i, j * 3), m.fromArray(i, J * 3), g.fromArray(o, F * 2), p.fromArray(o, j * 2), d.fromArray(o, J * 2), f.sub(u), m.sub(u), p.sub(g), d.sub(g);
      const U = 1 / (p.x * d.y - d.x * p.y);
      isFinite(U) && (_.copy(f).multiplyScalar(d.y).addScaledVector(m, -p.y).multiplyScalar(U), S.copy(m).multiplyScalar(p.x).addScaledVector(f, -d.x).multiplyScalar(U), l[F].add(_), l[j].add(_), l[J].add(_), h[F].add(S), h[j].add(S), h[J].add(S));
    }
    let b = this.groups;
    b.length === 0 && (b = [{
      start: 0,
      count: n.length
    }]);
    for (let F = 0, j = b.length; F < j; ++F) {
      const J = b[F], U = J.start, N = J.count;
      for (let q = U, Z = U + N; q < Z; q += 3)
        y(
          n[q + 0],
          n[q + 1],
          n[q + 2]
        );
    }
    const T = new D(), C = new D(), I = new D(), x = new D();
    function A(F) {
      I.fromArray(s, F * 3), x.copy(I);
      const j = l[F];
      T.copy(j), T.sub(I.multiplyScalar(I.dot(j))).normalize(), C.crossVectors(x, j);
      const U = C.dot(h[F]) < 0 ? -1 : 1;
      c[F * 4] = T.x, c[F * 4 + 1] = T.y, c[F * 4 + 2] = T.z, c[F * 4 + 3] = U;
    }
    for (let F = 0, j = b.length; F < j; ++F) {
      const J = b[F], U = J.start, N = J.count;
      for (let q = U, Z = U + N; q < Z; q += 3)
        A(n[q + 0]), A(n[q + 1]), A(n[q + 2]);
    }
  }
  computeVertexNormals() {
    const e = this.index, t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0)
        n = new Bt(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
      else
        for (let f = 0, m = n.count; f < m; f++)
          n.setXYZ(f, 0, 0, 0);
      const i = new D(), s = new D(), o = new D(), a = new D(), c = new D(), l = new D(), h = new D(), u = new D();
      if (e)
        for (let f = 0, m = e.count; f < m; f += 3) {
          const g = e.getX(f + 0), p = e.getX(f + 1), d = e.getX(f + 2);
          i.fromBufferAttribute(t, g), s.fromBufferAttribute(t, p), o.fromBufferAttribute(t, d), h.subVectors(o, s), u.subVectors(i, s), h.cross(u), a.fromBufferAttribute(n, g), c.fromBufferAttribute(n, p), l.fromBufferAttribute(n, d), a.add(h), c.add(h), l.add(h), n.setXYZ(g, a.x, a.y, a.z), n.setXYZ(p, c.x, c.y, c.z), n.setXYZ(d, l.x, l.y, l.z);
        }
      else
        for (let f = 0, m = t.count; f < m; f += 3)
          i.fromBufferAttribute(t, f + 0), s.fromBufferAttribute(t, f + 1), o.fromBufferAttribute(t, f + 2), h.subVectors(o, s), u.subVectors(i, s), h.cross(u), n.setXYZ(f + 0, h.x, h.y, h.z), n.setXYZ(f + 1, h.x, h.y, h.z), n.setXYZ(f + 2, h.x, h.y, h.z);
      this.normalizeNormals(), n.needsUpdate = !0;
    }
  }
  merge() {
    return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."), this;
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++)
      et.fromBufferAttribute(e, t), et.normalize(), e.setXYZ(t, et.x, et.y, et.z);
  }
  toNonIndexed() {
    function e(a, c) {
      const l = a.array, h = a.itemSize, u = a.normalized, f = new l.constructor(c.length * h);
      let m = 0, g = 0;
      for (let p = 0, d = c.length; p < d; p++) {
        a.isInterleavedBufferAttribute ? m = c[p] * a.data.stride + a.offset : m = c[p] * h;
        for (let _ = 0; _ < h; _++)
          f[g++] = l[m++];
      }
      return new Bt(f, h, u);
    }
    if (this.index === null)
      return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const t = new Dt(), n = this.index.array, i = this.attributes;
    for (const a in i) {
      const c = i[a], l = e(c, n);
      t.setAttribute(a, l);
    }
    const s = this.morphAttributes;
    for (const a in s) {
      const c = [], l = s[a];
      for (let h = 0, u = l.length; h < u; h++) {
        const f = l[h], m = e(f, n);
        c.push(m);
      }
      t.morphAttributes[a] = c;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const o = this.groups;
    for (let a = 0, c = o.length; a < c; a++) {
      const l = o[a];
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
      for (let u = 0, f = l.length; u < f; u++) {
        const m = l[u];
        h.push(m.toJSON(e.data));
      }
      h.length > 0 && (i[c] = h, s = !0);
    }
    s && (e.data.morphAttributes = i, e.data.morphTargetsRelative = this.morphTargetsRelative);
    const o = this.groups;
    o.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(o)));
    const a = this.boundingSphere;
    return a !== null && (e.data.boundingSphere = {
      center: a.center.toArray(),
      radius: a.radius
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
      for (let f = 0, m = u.length; f < m; f++)
        h.push(u[f].clone(t));
      this.morphAttributes[l] = h;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const o = e.groups;
    for (let l = 0, h = o.length; l < h; l++) {
      const u = o[l];
      this.addGroup(u.start, u.count, u.materialIndex);
    }
    const a = e.boundingBox;
    a !== null && (this.boundingBox = a.clone());
    const c = e.boundingSphere;
    return c !== null && (this.boundingSphere = c.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, e.parameters !== void 0 && (this.parameters = Object.assign({}, e.parameters)), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const ta = /* @__PURE__ */ new ke(), On = /* @__PURE__ */ new ts(), Rs = /* @__PURE__ */ new bi(), si = /* @__PURE__ */ new D(), ri = /* @__PURE__ */ new D(), ai = /* @__PURE__ */ new D(), Is = /* @__PURE__ */ new D(), Oi = /* @__PURE__ */ new D(), Ui = /* @__PURE__ */ new ye(), zi = /* @__PURE__ */ new ye(), Bi = /* @__PURE__ */ new ye(), Fs = /* @__PURE__ */ new D(), ki = /* @__PURE__ */ new D();
class Mt extends Ye {
  constructor(e = new Dt(), t = new no()) {
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
          const a = i[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = s;
        }
      }
    }
  }
  getVertexPosition(e, t) {
    const n = this.geometry, i = n.attributes.position, s = n.morphAttributes.position, o = n.morphTargetsRelative;
    t.fromBufferAttribute(i, e);
    const a = this.morphTargetInfluences;
    if (s && a) {
      Oi.set(0, 0, 0);
      for (let c = 0, l = s.length; c < l; c++) {
        const h = a[c], u = s[c];
        h !== 0 && (Is.fromBufferAttribute(u, e), o ? Oi.addScaledVector(Is, h) : Oi.addScaledVector(Is.sub(t), h));
      }
      t.add(Oi);
    }
    return this.isSkinnedMesh && this.boneTransform(e, t), t;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.material, s = this.matrixWorld;
    if (i === void 0 || (n.boundingSphere === null && n.computeBoundingSphere(), Rs.copy(n.boundingSphere), Rs.applyMatrix4(s), e.ray.intersectsSphere(Rs) === !1) || (ta.copy(s).invert(), On.copy(e.ray).applyMatrix4(ta), n.boundingBox !== null && On.intersectsBox(n.boundingBox) === !1))
      return;
    let o;
    const a = n.index, c = n.attributes.position, l = n.attributes.uv, h = n.attributes.uv2, u = n.groups, f = n.drawRange;
    if (a !== null)
      if (Array.isArray(i))
        for (let m = 0, g = u.length; m < g; m++) {
          const p = u[m], d = i[p.materialIndex], _ = Math.max(p.start, f.start), S = Math.min(a.count, Math.min(p.start + p.count, f.start + f.count));
          for (let y = _, b = S; y < b; y += 3) {
            const T = a.getX(y), C = a.getX(y + 1), I = a.getX(y + 2);
            o = Gi(this, d, e, On, l, h, T, C, I), o && (o.faceIndex = Math.floor(y / 3), o.face.materialIndex = p.materialIndex, t.push(o));
          }
        }
      else {
        const m = Math.max(0, f.start), g = Math.min(a.count, f.start + f.count);
        for (let p = m, d = g; p < d; p += 3) {
          const _ = a.getX(p), S = a.getX(p + 1), y = a.getX(p + 2);
          o = Gi(this, i, e, On, l, h, _, S, y), o && (o.faceIndex = Math.floor(p / 3), t.push(o));
        }
      }
    else if (c !== void 0)
      if (Array.isArray(i))
        for (let m = 0, g = u.length; m < g; m++) {
          const p = u[m], d = i[p.materialIndex], _ = Math.max(p.start, f.start), S = Math.min(c.count, Math.min(p.start + p.count, f.start + f.count));
          for (let y = _, b = S; y < b; y += 3) {
            const T = y, C = y + 1, I = y + 2;
            o = Gi(this, d, e, On, l, h, T, C, I), o && (o.faceIndex = Math.floor(y / 3), o.face.materialIndex = p.materialIndex, t.push(o));
          }
        }
      else {
        const m = Math.max(0, f.start), g = Math.min(c.count, f.start + f.count);
        for (let p = m, d = g; p < d; p += 3) {
          const _ = p, S = p + 1, y = p + 2;
          o = Gi(this, i, e, On, l, h, _, S, y), o && (o.faceIndex = Math.floor(p / 3), t.push(o));
        }
      }
  }
}
function zl(r, e, t, n, i, s, o, a) {
  let c;
  if (e.side === Lt ? c = n.intersectTriangle(o, s, i, !0, a) : c = n.intersectTriangle(i, s, o, e.side === nn, a), c === null)
    return null;
  ki.copy(a), ki.applyMatrix4(r.matrixWorld);
  const l = t.ray.origin.distanceTo(ki);
  return l < t.near || l > t.far ? null : {
    distance: l,
    point: ki.clone(),
    object: r
  };
}
function Gi(r, e, t, n, i, s, o, a, c) {
  r.getVertexPosition(o, si), r.getVertexPosition(a, ri), r.getVertexPosition(c, ai);
  const l = zl(r, e, t, n, si, ri, ai, Fs);
  if (l) {
    i && (Ui.fromBufferAttribute(i, o), zi.fromBufferAttribute(i, a), Bi.fromBufferAttribute(i, c), l.uv = Zt.getUV(Fs, si, ri, ai, Ui, zi, Bi, new ye())), s && (Ui.fromBufferAttribute(s, o), zi.fromBufferAttribute(s, a), Bi.fromBufferAttribute(s, c), l.uv2 = Zt.getUV(Fs, si, ri, ai, Ui, zi, Bi, new ye()));
    const h = {
      a: o,
      b: a,
      c,
      normal: new D(),
      materialIndex: 0
    };
    Zt.getNormal(si, ri, ai, h.normal), l.face = h;
  }
  return l;
}
class wn extends Dt {
  constructor(e = 1, t = 1, n = 1, i = 1, s = 1, o = 1) {
    super(), this.type = "BoxGeometry", this.parameters = {
      width: e,
      height: t,
      depth: n,
      widthSegments: i,
      heightSegments: s,
      depthSegments: o
    };
    const a = this;
    i = Math.floor(i), s = Math.floor(s), o = Math.floor(o);
    const c = [], l = [], h = [], u = [];
    let f = 0, m = 0;
    g("z", "y", "x", -1, -1, n, t, e, o, s, 0), g("z", "y", "x", 1, -1, n, t, -e, o, s, 1), g("x", "z", "y", 1, 1, e, n, t, i, o, 2), g("x", "z", "y", 1, -1, e, n, -t, i, o, 3), g("x", "y", "z", 1, -1, e, t, n, i, s, 4), g("x", "y", "z", -1, -1, e, t, -n, i, s, 5), this.setIndex(c), this.setAttribute("position", new nt(l, 3)), this.setAttribute("normal", new nt(h, 3)), this.setAttribute("uv", new nt(u, 2));
    function g(p, d, _, S, y, b, T, C, I, x, A) {
      const F = b / I, j = T / x, J = b / 2, U = T / 2, N = C / 2, q = I + 1, Z = x + 1;
      let Q = 0, X = 0;
      const ee = new D();
      for (let Y = 0; Y < Z; Y++) {
        const V = Y * j - U;
        for (let z = 0; z < q; z++) {
          const se = z * F - J;
          ee[p] = se * S, ee[d] = V * y, ee[_] = N, l.push(ee.x, ee.y, ee.z), ee[p] = 0, ee[d] = 0, ee[_] = C > 0 ? 1 : -1, h.push(ee.x, ee.y, ee.z), u.push(z / I), u.push(1 - Y / x), Q += 1;
        }
      }
      for (let Y = 0; Y < x; Y++)
        for (let V = 0; V < I; V++) {
          const z = f + V + q * Y, se = f + V + q * (Y + 1), te = f + (V + 1) + q * (Y + 1), re = f + (V + 1) + q * Y;
          c.push(z, se, re), c.push(se, te, re), X += 6;
        }
      a.addGroup(m, X, A), m += X, f += Q;
    }
  }
  static fromJSON(e) {
    return new wn(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
  }
}
function Kn(r) {
  const e = {};
  for (const t in r) {
    e[t] = {};
    for (const n in r[t]) {
      const i = r[t][n];
      i && (i.isColor || i.isMatrix3 || i.isMatrix4 || i.isVector2 || i.isVector3 || i.isVector4 || i.isTexture || i.isQuaternion) ? e[t][n] = i.clone() : Array.isArray(i) ? e[t][n] = i.slice() : e[t][n] = i;
    }
  }
  return e;
}
function lt(r) {
  const e = {};
  for (let t = 0; t < r.length; t++) {
    const n = Kn(r[t]);
    for (const i in n)
      e[i] = n[i];
  }
  return e;
}
function Bl(r) {
  const e = [];
  for (let t = 0; t < r.length; t++)
    e.push(r[t].clone());
  return e;
}
function ro(r) {
  return r.getRenderTarget() === null && r.outputEncoding === ze ? Ot : _i;
}
const kl = { clone: Kn, merge: lt };
var Gl = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, Vl = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class bn extends kt {
  constructor(e) {
    super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = Gl, this.fragmentShader = Vl, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.extensions = {
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
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = Kn(e.uniforms), this.uniformsGroups = Bl(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this;
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
class ao extends Ye {
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
class Ct extends ao {
  constructor(e = 50, t = 1, n = 0.1, i = 2e3) {
    super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = i, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
  }
  setFocalLength(e) {
    const t = 0.5 * this.getFilmHeight() / e;
    this.fov = Wr * 2 * Math.atan(t), this.updateProjectionMatrix();
  }
  getFocalLength() {
    const e = Math.tan(ps * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / e;
  }
  getEffectiveFOV() {
    return Wr * 2 * Math.atan(
      Math.tan(ps * 0.5 * this.fov) / this.zoom
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
    let t = e * Math.tan(ps * 0.5 * this.fov) / this.zoom, n = 2 * t, i = this.aspect * n, s = -0.5 * i;
    const o = this.view;
    if (this.view !== null && this.view.enabled) {
      const c = o.fullWidth, l = o.fullHeight;
      s += o.offsetX * i / c, t -= o.offsetY * n / l, i *= o.width / c, n *= o.height / l;
    }
    const a = this.filmOffset;
    a !== 0 && (s += e * a / this.getFilmWidth()), this.projectionMatrix.makePerspective(s, s + i, t, t - n, e, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
  }
}
const Un = -90, zn = 1;
class Hl extends Ye {
  constructor(e, t, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n;
    const i = new Ct(Un, zn, e, t);
    i.layers = this.layers, i.up.set(0, 1, 0), i.lookAt(1, 0, 0), this.add(i);
    const s = new Ct(Un, zn, e, t);
    s.layers = this.layers, s.up.set(0, 1, 0), s.lookAt(-1, 0, 0), this.add(s);
    const o = new Ct(Un, zn, e, t);
    o.layers = this.layers, o.up.set(0, 0, -1), o.lookAt(0, 1, 0), this.add(o);
    const a = new Ct(Un, zn, e, t);
    a.layers = this.layers, a.up.set(0, 0, 1), a.lookAt(0, -1, 0), this.add(a);
    const c = new Ct(Un, zn, e, t);
    c.layers = this.layers, c.up.set(0, 1, 0), c.lookAt(0, 0, 1), this.add(c);
    const l = new Ct(Un, zn, e, t);
    l.layers = this.layers, l.up.set(0, 1, 0), l.lookAt(0, 0, -1), this.add(l);
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const n = this.renderTarget, [i, s, o, a, c, l] = this.children, h = e.getRenderTarget(), u = e.toneMapping, f = e.xr.enabled;
    e.toneMapping = $t, e.xr.enabled = !1;
    const m = n.texture.generateMipmaps;
    n.texture.generateMipmaps = !1, e.setRenderTarget(n, 0), e.render(t, i), e.setRenderTarget(n, 1), e.render(t, s), e.setRenderTarget(n, 2), e.render(t, o), e.setRenderTarget(n, 3), e.render(t, a), e.setRenderTarget(n, 4), e.render(t, c), n.texture.generateMipmaps = m, e.setRenderTarget(n, 5), e.render(t, l), e.setRenderTarget(h), e.toneMapping = u, e.xr.enabled = f, n.texture.needsPMREMUpdate = !0;
  }
}
class oo extends ft {
  constructor(e, t, n, i, s, o, a, c, l, h) {
    e = e !== void 0 ? e : [], t = t !== void 0 ? t : Yn, super(e, t, n, i, s, o, a, c, l, h), this.isCubeTexture = !0, this.flipY = !1;
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class Wl extends Mn {
  constructor(e = 1, t = {}) {
    super(e, e, t), this.isWebGLCubeRenderTarget = !0;
    const n = { width: e, height: e, depth: 1 }, i = [n, n, n, n, n, n];
    this.texture = new oo(i, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.encoding), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = t.generateMipmaps !== void 0 ? t.generateMipmaps : !1, this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : At;
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
    }, i = new wn(5, 5, 5), s = new bn({
      name: "CubemapFromEquirect",
      uniforms: Kn(n.uniforms),
      vertexShader: n.vertexShader,
      fragmentShader: n.fragmentShader,
      side: Lt,
      blending: tn
    });
    s.uniforms.tEquirect.value = t;
    const o = new Mt(i, s), a = t.minFilter;
    return t.minFilter === mi && (t.minFilter = At), new Hl(1, 10, this).update(e, o), t.minFilter = a, o.geometry.dispose(), o.material.dispose(), this;
  }
  clear(e, t, n, i) {
    const s = e.getRenderTarget();
    for (let o = 0; o < 6; o++)
      e.setRenderTarget(this, o), e.clear(t, n, i);
    e.setRenderTarget(s);
  }
}
const Ns = /* @__PURE__ */ new D(), ql = /* @__PURE__ */ new D(), Xl = /* @__PURE__ */ new vt();
class un {
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
    const i = Ns.subVectors(n, t).cross(ql.subVectors(e, t)).normalize();
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
    const n = e.delta(Ns), i = this.normal.dot(n);
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
    const n = t || Xl.getNormalMatrix(e), i = this.coplanarPoint(Ns).applyMatrix4(e), s = this.normal.applyMatrix3(n).normalize();
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
const Bn = /* @__PURE__ */ new bi(), Vi = /* @__PURE__ */ new D();
class or {
  constructor(e = new un(), t = new un(), n = new un(), i = new un(), s = new un(), o = new un()) {
    this.planes = [e, t, n, i, s, o];
  }
  set(e, t, n, i, s, o) {
    const a = this.planes;
    return a[0].copy(e), a[1].copy(t), a[2].copy(n), a[3].copy(i), a[4].copy(s), a[5].copy(o), this;
  }
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++)
      t[n].copy(e.planes[n]);
    return this;
  }
  setFromProjectionMatrix(e) {
    const t = this.planes, n = e.elements, i = n[0], s = n[1], o = n[2], a = n[3], c = n[4], l = n[5], h = n[6], u = n[7], f = n[8], m = n[9], g = n[10], p = n[11], d = n[12], _ = n[13], S = n[14], y = n[15];
    return t[0].setComponents(a - i, u - c, p - f, y - d).normalize(), t[1].setComponents(a + i, u + c, p + f, y + d).normalize(), t[2].setComponents(a + s, u + l, p + m, y + _).normalize(), t[3].setComponents(a - s, u - l, p - m, y - _).normalize(), t[4].setComponents(a - o, u - h, p - g, y - S).normalize(), t[5].setComponents(a + o, u + h, p + g, y + S).normalize(), this;
  }
  intersectsObject(e) {
    const t = e.geometry;
    return t.boundingSphere === null && t.computeBoundingSphere(), Bn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld), this.intersectsSphere(Bn);
  }
  intersectsSprite(e) {
    return Bn.center.set(0, 0, 0), Bn.radius = 0.7071067811865476, Bn.applyMatrix4(e.matrixWorld), this.intersectsSphere(Bn);
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
      if (Vi.x = i.normal.x > 0 ? e.max.x : e.min.x, Vi.y = i.normal.y > 0 ? e.max.y : e.min.y, Vi.z = i.normal.z > 0 ? e.max.z : e.min.z, i.distanceToPoint(Vi) < 0)
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
function lo() {
  let r = null, e = !1, t = null, n = null;
  function i(s, o) {
    t(s, o), n = r.requestAnimationFrame(i);
  }
  return {
    start: function() {
      e !== !0 && t !== null && (n = r.requestAnimationFrame(i), e = !0);
    },
    stop: function() {
      r.cancelAnimationFrame(n), e = !1;
    },
    setAnimationLoop: function(s) {
      t = s;
    },
    setContext: function(s) {
      r = s;
    }
  };
}
function jl(r, e) {
  const t = e.isWebGL2, n = /* @__PURE__ */ new WeakMap();
  function i(l, h) {
    const u = l.array, f = l.usage, m = r.createBuffer();
    r.bindBuffer(h, m), r.bufferData(h, u, f), l.onUploadCallback();
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
    const f = h.array, m = h.updateRange;
    r.bindBuffer(u, l), m.count === -1 ? r.bufferSubData(u, 0, f) : (t ? r.bufferSubData(
      u,
      m.offset * f.BYTES_PER_ELEMENT,
      f,
      m.offset,
      m.count
    ) : r.bufferSubData(
      u,
      m.offset * f.BYTES_PER_ELEMENT,
      f.subarray(m.offset, m.offset + m.count)
    ), m.count = -1), h.onUploadCallback();
  }
  function o(l) {
    return l.isInterleavedBufferAttribute && (l = l.data), n.get(l);
  }
  function a(l) {
    l.isInterleavedBufferAttribute && (l = l.data);
    const h = n.get(l);
    h && (r.deleteBuffer(h.buffer), n.delete(l));
  }
  function c(l, h) {
    if (l.isGLBufferAttribute) {
      const f = n.get(l);
      (!f || f.version < l.version) && n.set(l, {
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
    remove: a,
    update: c
  };
}
class ns extends Dt {
  constructor(e = 1, t = 1, n = 1, i = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = {
      width: e,
      height: t,
      widthSegments: n,
      heightSegments: i
    };
    const s = e / 2, o = t / 2, a = Math.floor(n), c = Math.floor(i), l = a + 1, h = c + 1, u = e / a, f = t / c, m = [], g = [], p = [], d = [];
    for (let _ = 0; _ < h; _++) {
      const S = _ * f - o;
      for (let y = 0; y < l; y++) {
        const b = y * u - s;
        g.push(b, -S, 0), p.push(0, 0, 1), d.push(y / a), d.push(1 - _ / c);
      }
    }
    for (let _ = 0; _ < c; _++)
      for (let S = 0; S < a; S++) {
        const y = S + l * _, b = S + l * (_ + 1), T = S + 1 + l * (_ + 1), C = S + 1 + l * _;
        m.push(y, b, C), m.push(b, T, C);
      }
    this.setIndex(m), this.setAttribute("position", new nt(g, 3)), this.setAttribute("normal", new nt(p, 3)), this.setAttribute("uv", new nt(d, 2));
  }
  static fromJSON(e) {
    return new ns(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
var Yl = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`, Zl = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, $l = `#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`, Kl = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, Jl = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, Ql = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, ec = "vec3 transformed = vec3( position );", tc = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, nc = `vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`, ic = `#ifdef USE_IRIDESCENCE
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
#endif`, sc = `#ifdef USE_BUMPMAP
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
#endif`, rc = `#if NUM_CLIPPING_PLANES > 0
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
#endif`, ac = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, oc = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, lc = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, cc = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, hc = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, uc = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`, dc = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`, fc = `#define PI 3.141592653589793
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
}`, pc = `#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`, mc = `vec3 transformedNormal = objectNormal;
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
#endif`, gc = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, _c = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`, xc = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, vc = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, Mc = "gl_FragColor = linearToOutputTexel( gl_FragColor );", yc = `vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, bc = `#ifdef USE_ENVMAP
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
#endif`, Sc = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, wc = `#ifdef USE_ENVMAP
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
#endif`, Tc = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, Ec = `#ifdef USE_ENVMAP
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
#endif`, Ac = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, Cc = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, Lc = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, Dc = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, Pc = `#ifdef USE_GRADIENTMAP
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
}`, Rc = `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`, Ic = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, Fc = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, Nc = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, Oc = `uniform bool receiveShadow;
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
#endif`, Uc = `#if defined( USE_ENVMAP )
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
#endif`, zc = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, Bc = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, kc = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, Gc = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, Vc = `PhysicalMaterial material;
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
#endif`, Hc = `struct PhysicalMaterial {
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
}`, Wc = `
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
#endif`, qc = `#if defined( RE_IndirectDiffuse )
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
#endif`, Xc = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`, jc = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, Yc = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, Zc = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`, $c = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`, Kc = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, Jc = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, Qc = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, eh = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, th = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`, nh = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, ih = `#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, sh = `#ifdef USE_MORPHNORMALS
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
#endif`, rh = `#ifdef USE_MORPHTARGETS
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
#endif`, ah = `#ifdef USE_MORPHTARGETS
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
#endif`, oh = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`, lh = `#ifdef OBJECTSPACE_NORMALMAP
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
#endif`, ch = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, hh = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, uh = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, dh = `#ifdef USE_NORMALMAP
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
#endif`, fh = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`, ph = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`, mh = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`, gh = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, _h = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, xh = `vec3 packNormalToRGB( const in vec3 normal ) {
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
}`, vh = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, Mh = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, yh = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, bh = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, Sh = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`, wh = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, Th = `#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`, Eh = `#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`, Ah = `#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`, Ch = `float getShadowMask() {
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
}`, Lh = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, Dh = `#ifdef USE_SKINNING
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
#endif`, Ph = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, Rh = `#ifdef USE_SKINNING
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
#endif`, Ih = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, Fh = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, Nh = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, Oh = `#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`, Uh = `#ifdef USE_TRANSMISSION
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
#endif`, zh = `#ifdef USE_TRANSMISSION
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
#endif`, Bh = `#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`, kh = `#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`, Gh = `#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`, Vh = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`, Hh = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`, Wh = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`, qh = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const Xh = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, jh = `uniform sampler2D t2D;
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
}`, Yh = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Zh = `#ifdef ENVMAP_TYPE_CUBE
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
}`, $h = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Kh = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, Jh = `#include <common>
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
}`, Qh = `#if DEPTH_PACKING == 3200
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
}`, eu = `#define DISTANCE
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
}`, tu = `#define DISTANCE
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
}`, nu = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, iu = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, su = `uniform float scale;
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
}`, ru = `uniform vec3 diffuse;
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
}`, au = `#include <common>
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
}`, ou = `uniform vec3 diffuse;
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
}`, lu = `#define LAMBERT
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
}`, cu = `#define LAMBERT
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
}`, hu = `#define MATCAP
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
}`, uu = `#define MATCAP
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
}`, du = `#define NORMAL
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
}`, fu = `#define NORMAL
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
}`, pu = `#define PHONG
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
}`, mu = `#define PHONG
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
}`, gu = `#define STANDARD
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
}`, _u = `#define STANDARD
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
}`, xu = `#define TOON
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
}`, vu = `#define TOON
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
}`, Mu = `uniform float size;
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
}`, yu = `uniform vec3 diffuse;
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
}`, bu = `#include <common>
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
}`, Su = `uniform vec3 color;
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
}`, wu = `uniform float rotation;
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
}`, Tu = `uniform vec3 diffuse;
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
  alphamap_fragment: Yl,
  alphamap_pars_fragment: Zl,
  alphatest_fragment: $l,
  alphatest_pars_fragment: Kl,
  aomap_fragment: Jl,
  aomap_pars_fragment: Ql,
  begin_vertex: ec,
  beginnormal_vertex: tc,
  bsdfs: nc,
  iridescence_fragment: ic,
  bumpmap_pars_fragment: sc,
  clipping_planes_fragment: rc,
  clipping_planes_pars_fragment: ac,
  clipping_planes_pars_vertex: oc,
  clipping_planes_vertex: lc,
  color_fragment: cc,
  color_pars_fragment: hc,
  color_pars_vertex: uc,
  color_vertex: dc,
  common: fc,
  cube_uv_reflection_fragment: pc,
  defaultnormal_vertex: mc,
  displacementmap_pars_vertex: gc,
  displacementmap_vertex: _c,
  emissivemap_fragment: xc,
  emissivemap_pars_fragment: vc,
  encodings_fragment: Mc,
  encodings_pars_fragment: yc,
  envmap_fragment: bc,
  envmap_common_pars_fragment: Sc,
  envmap_pars_fragment: wc,
  envmap_pars_vertex: Tc,
  envmap_physical_pars_fragment: Uc,
  envmap_vertex: Ec,
  fog_vertex: Ac,
  fog_pars_vertex: Cc,
  fog_fragment: Lc,
  fog_pars_fragment: Dc,
  gradientmap_pars_fragment: Pc,
  lightmap_fragment: Rc,
  lightmap_pars_fragment: Ic,
  lights_lambert_fragment: Fc,
  lights_lambert_pars_fragment: Nc,
  lights_pars_begin: Oc,
  lights_toon_fragment: zc,
  lights_toon_pars_fragment: Bc,
  lights_phong_fragment: kc,
  lights_phong_pars_fragment: Gc,
  lights_physical_fragment: Vc,
  lights_physical_pars_fragment: Hc,
  lights_fragment_begin: Wc,
  lights_fragment_maps: qc,
  lights_fragment_end: Xc,
  logdepthbuf_fragment: jc,
  logdepthbuf_pars_fragment: Yc,
  logdepthbuf_pars_vertex: Zc,
  logdepthbuf_vertex: $c,
  map_fragment: Kc,
  map_pars_fragment: Jc,
  map_particle_fragment: Qc,
  map_particle_pars_fragment: eh,
  metalnessmap_fragment: th,
  metalnessmap_pars_fragment: nh,
  morphcolor_vertex: ih,
  morphnormal_vertex: sh,
  morphtarget_pars_vertex: rh,
  morphtarget_vertex: ah,
  normal_fragment_begin: oh,
  normal_fragment_maps: lh,
  normal_pars_fragment: ch,
  normal_pars_vertex: hh,
  normal_vertex: uh,
  normalmap_pars_fragment: dh,
  clearcoat_normal_fragment_begin: fh,
  clearcoat_normal_fragment_maps: ph,
  clearcoat_pars_fragment: mh,
  iridescence_pars_fragment: gh,
  output_fragment: _h,
  packing: xh,
  premultiplied_alpha_fragment: vh,
  project_vertex: Mh,
  dithering_fragment: yh,
  dithering_pars_fragment: bh,
  roughnessmap_fragment: Sh,
  roughnessmap_pars_fragment: wh,
  shadowmap_pars_fragment: Th,
  shadowmap_pars_vertex: Eh,
  shadowmap_vertex: Ah,
  shadowmask_pars_fragment: Ch,
  skinbase_vertex: Lh,
  skinning_pars_vertex: Dh,
  skinning_vertex: Ph,
  skinnormal_vertex: Rh,
  specularmap_fragment: Ih,
  specularmap_pars_fragment: Fh,
  tonemapping_fragment: Nh,
  tonemapping_pars_fragment: Oh,
  transmission_fragment: Uh,
  transmission_pars_fragment: zh,
  uv_pars_fragment: Bh,
  uv_pars_vertex: kh,
  uv_vertex: Gh,
  uv2_pars_fragment: Vh,
  uv2_pars_vertex: Hh,
  uv2_vertex: Wh,
  worldpos_vertex: qh,
  background_vert: Xh,
  background_frag: jh,
  backgroundCube_vert: Yh,
  backgroundCube_frag: Zh,
  cube_vert: $h,
  cube_frag: Kh,
  depth_vert: Jh,
  depth_frag: Qh,
  distanceRGBA_vert: eu,
  distanceRGBA_frag: tu,
  equirect_vert: nu,
  equirect_frag: iu,
  linedashed_vert: su,
  linedashed_frag: ru,
  meshbasic_vert: au,
  meshbasic_frag: ou,
  meshlambert_vert: lu,
  meshlambert_frag: cu,
  meshmatcap_vert: hu,
  meshmatcap_frag: uu,
  meshnormal_vert: du,
  meshnormal_frag: fu,
  meshphong_vert: pu,
  meshphong_frag: mu,
  meshphysical_vert: gu,
  meshphysical_frag: _u,
  meshtoon_vert: xu,
  meshtoon_frag: vu,
  points_vert: Mu,
  points_frag: yu,
  shadow_vert: bu,
  shadow_frag: Su,
  sprite_vert: wu,
  sprite_frag: Tu
}, ie = {
  common: {
    diffuse: { value: /* @__PURE__ */ new Ee(16777215) },
    opacity: { value: 1 },
    map: { value: null },
    uvTransform: { value: /* @__PURE__ */ new vt() },
    uv2Transform: { value: /* @__PURE__ */ new vt() },
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
    uvTransform: { value: /* @__PURE__ */ new vt() }
  },
  sprite: {
    diffuse: { value: /* @__PURE__ */ new Ee(16777215) },
    opacity: { value: 1 },
    center: { value: /* @__PURE__ */ new ye(0.5, 0.5) },
    rotation: { value: 0 },
    map: { value: null },
    alphaMap: { value: null },
    alphaTest: { value: 0 },
    uvTransform: { value: /* @__PURE__ */ new vt() }
  }
}, Ut = {
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
      uvTransform: { value: /* @__PURE__ */ new vt() },
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
Ut.physical = {
  uniforms: /* @__PURE__ */ lt([
    Ut.standard.uniforms,
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
const Hi = { r: 0, b: 0, g: 0 };
function Eu(r, e, t, n, i, s, o) {
  const a = new Ee(0);
  let c = s === !0 ? 0 : 1, l, h, u = null, f = 0, m = null;
  function g(d, _) {
    let S = !1, y = _.isScene === !0 ? _.background : null;
    y && y.isTexture && (y = (_.backgroundBlurriness > 0 ? t : e).get(y));
    const b = r.xr, T = b.getSession && b.getSession();
    T && T.environmentBlendMode === "additive" && (y = null), y === null ? p(a, c) : y && y.isColor && (p(y, 1), S = !0), (r.autoClear || S) && r.clear(r.autoClearColor, r.autoClearDepth, r.autoClearStencil), y && (y.isCubeTexture || y.mapping === es) ? (h === void 0 && (h = new Mt(
      new wn(1, 1, 1),
      new bn({
        name: "BackgroundCubeMaterial",
        uniforms: Kn(Ut.backgroundCube.uniforms),
        vertexShader: Ut.backgroundCube.vertexShader,
        fragmentShader: Ut.backgroundCube.fragmentShader,
        side: Lt,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), h.geometry.deleteAttribute("normal"), h.geometry.deleteAttribute("uv"), h.onBeforeRender = function(C, I, x) {
      this.matrixWorld.copyPosition(x.matrixWorld);
    }, Object.defineProperty(h.material, "envMap", {
      get: function() {
        return this.uniforms.envMap.value;
      }
    }), i.update(h)), h.material.uniforms.envMap.value = y, h.material.uniforms.flipEnvMap.value = y.isCubeTexture && y.isRenderTargetTexture === !1 ? -1 : 1, h.material.uniforms.backgroundBlurriness.value = _.backgroundBlurriness, h.material.uniforms.backgroundIntensity.value = _.backgroundIntensity, h.material.toneMapped = y.encoding !== ze, (u !== y || f !== y.version || m !== r.toneMapping) && (h.material.needsUpdate = !0, u = y, f = y.version, m = r.toneMapping), h.layers.enableAll(), d.unshift(h, h.geometry, h.material, 0, 0, null)) : y && y.isTexture && (l === void 0 && (l = new Mt(
      new ns(2, 2),
      new bn({
        name: "BackgroundMaterial",
        uniforms: Kn(Ut.background.uniforms),
        vertexShader: Ut.background.vertexShader,
        fragmentShader: Ut.background.fragmentShader,
        side: nn,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), l.geometry.deleteAttribute("normal"), Object.defineProperty(l.material, "map", {
      get: function() {
        return this.uniforms.t2D.value;
      }
    }), i.update(l)), l.material.uniforms.t2D.value = y, l.material.uniforms.backgroundIntensity.value = _.backgroundIntensity, l.material.toneMapped = y.encoding !== ze, y.matrixAutoUpdate === !0 && y.updateMatrix(), l.material.uniforms.uvTransform.value.copy(y.matrix), (u !== y || f !== y.version || m !== r.toneMapping) && (l.material.needsUpdate = !0, u = y, f = y.version, m = r.toneMapping), l.layers.enableAll(), d.unshift(l, l.geometry, l.material, 0, 0, null));
  }
  function p(d, _) {
    d.getRGB(Hi, ro(r)), n.buffers.color.setClear(Hi.r, Hi.g, Hi.b, _, o);
  }
  return {
    getClearColor: function() {
      return a;
    },
    setClearColor: function(d, _ = 1) {
      a.set(d), c = _, p(a, c);
    },
    getClearAlpha: function() {
      return c;
    },
    setClearAlpha: function(d) {
      c = d, p(a, c);
    },
    render: g
  };
}
function Au(r, e, t, n) {
  const i = r.getParameter(34921), s = n.isWebGL2 ? null : e.get("OES_vertex_array_object"), o = n.isWebGL2 || s !== null, a = {}, c = d(null);
  let l = c, h = !1;
  function u(N, q, Z, Q, X) {
    let ee = !1;
    if (o) {
      const Y = p(Q, Z, q);
      l !== Y && (l = Y, m(l.object)), ee = _(N, Q, Z, X), ee && S(N, Q, Z, X);
    } else {
      const Y = q.wireframe === !0;
      (l.geometry !== Q.id || l.program !== Z.id || l.wireframe !== Y) && (l.geometry = Q.id, l.program = Z.id, l.wireframe = Y, ee = !0);
    }
    X !== null && t.update(X, 34963), (ee || h) && (h = !1, x(N, q, Z, Q), X !== null && r.bindBuffer(34963, t.get(X).buffer));
  }
  function f() {
    return n.isWebGL2 ? r.createVertexArray() : s.createVertexArrayOES();
  }
  function m(N) {
    return n.isWebGL2 ? r.bindVertexArray(N) : s.bindVertexArrayOES(N);
  }
  function g(N) {
    return n.isWebGL2 ? r.deleteVertexArray(N) : s.deleteVertexArrayOES(N);
  }
  function p(N, q, Z) {
    const Q = Z.wireframe === !0;
    let X = a[N.id];
    X === void 0 && (X = {}, a[N.id] = X);
    let ee = X[q.id];
    ee === void 0 && (ee = {}, X[q.id] = ee);
    let Y = ee[Q];
    return Y === void 0 && (Y = d(f()), ee[Q] = Y), Y;
  }
  function d(N) {
    const q = [], Z = [], Q = [];
    for (let X = 0; X < i; X++)
      q[X] = 0, Z[X] = 0, Q[X] = 0;
    return {
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: q,
      enabledAttributes: Z,
      attributeDivisors: Q,
      object: N,
      attributes: {},
      index: null
    };
  }
  function _(N, q, Z, Q) {
    const X = l.attributes, ee = q.attributes;
    let Y = 0;
    const V = Z.getAttributes();
    for (const z in V)
      if (V[z].location >= 0) {
        const te = X[z];
        let re = ee[z];
        if (re === void 0 && (z === "instanceMatrix" && N.instanceMatrix && (re = N.instanceMatrix), z === "instanceColor" && N.instanceColor && (re = N.instanceColor)), te === void 0 || te.attribute !== re || re && te.data !== re.data)
          return !0;
        Y++;
      }
    return l.attributesNum !== Y || l.index !== Q;
  }
  function S(N, q, Z, Q) {
    const X = {}, ee = q.attributes;
    let Y = 0;
    const V = Z.getAttributes();
    for (const z in V)
      if (V[z].location >= 0) {
        let te = ee[z];
        te === void 0 && (z === "instanceMatrix" && N.instanceMatrix && (te = N.instanceMatrix), z === "instanceColor" && N.instanceColor && (te = N.instanceColor));
        const re = {};
        re.attribute = te, te && te.data && (re.data = te.data), X[z] = re, Y++;
      }
    l.attributes = X, l.attributesNum = Y, l.index = Q;
  }
  function y() {
    const N = l.newAttributes;
    for (let q = 0, Z = N.length; q < Z; q++)
      N[q] = 0;
  }
  function b(N) {
    T(N, 0);
  }
  function T(N, q) {
    const Z = l.newAttributes, Q = l.enabledAttributes, X = l.attributeDivisors;
    Z[N] = 1, Q[N] === 0 && (r.enableVertexAttribArray(N), Q[N] = 1), X[N] !== q && ((n.isWebGL2 ? r : e.get("ANGLE_instanced_arrays"))[n.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](N, q), X[N] = q);
  }
  function C() {
    const N = l.newAttributes, q = l.enabledAttributes;
    for (let Z = 0, Q = q.length; Z < Q; Z++)
      q[Z] !== N[Z] && (r.disableVertexAttribArray(Z), q[Z] = 0);
  }
  function I(N, q, Z, Q, X, ee) {
    n.isWebGL2 === !0 && (Z === 5124 || Z === 5125) ? r.vertexAttribIPointer(N, q, Z, X, ee) : r.vertexAttribPointer(N, q, Z, Q, X, ee);
  }
  function x(N, q, Z, Q) {
    if (n.isWebGL2 === !1 && (N.isInstancedMesh || Q.isInstancedBufferGeometry) && e.get("ANGLE_instanced_arrays") === null)
      return;
    y();
    const X = Q.attributes, ee = Z.getAttributes(), Y = q.defaultAttributeValues;
    for (const V in ee) {
      const z = ee[V];
      if (z.location >= 0) {
        let se = X[V];
        if (se === void 0 && (V === "instanceMatrix" && N.instanceMatrix && (se = N.instanceMatrix), V === "instanceColor" && N.instanceColor && (se = N.instanceColor)), se !== void 0) {
          const te = se.normalized, re = se.itemSize, H = t.get(se);
          if (H === void 0)
            continue;
          const Ae = H.buffer, de = H.type, _e = H.bytesPerElement;
          if (se.isInterleavedBufferAttribute) {
            const ue = se.data, Fe = ue.stride, be = se.offset;
            if (ue.isInstancedInterleavedBuffer) {
              for (let xe = 0; xe < z.locationSize; xe++)
                T(z.location + xe, ue.meshPerAttribute);
              N.isInstancedMesh !== !0 && Q._maxInstanceCount === void 0 && (Q._maxInstanceCount = ue.meshPerAttribute * ue.count);
            } else
              for (let xe = 0; xe < z.locationSize; xe++)
                b(z.location + xe);
            r.bindBuffer(34962, Ae);
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
                T(z.location + ue, se.meshPerAttribute);
              N.isInstancedMesh !== !0 && Q._maxInstanceCount === void 0 && (Q._maxInstanceCount = se.meshPerAttribute * se.count);
            } else
              for (let ue = 0; ue < z.locationSize; ue++)
                b(z.location + ue);
            r.bindBuffer(34962, Ae);
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
                r.vertexAttrib2fv(z.location, te);
                break;
              case 3:
                r.vertexAttrib3fv(z.location, te);
                break;
              case 4:
                r.vertexAttrib4fv(z.location, te);
                break;
              default:
                r.vertexAttrib1fv(z.location, te);
            }
        }
      }
    }
    C();
  }
  function A() {
    J();
    for (const N in a) {
      const q = a[N];
      for (const Z in q) {
        const Q = q[Z];
        for (const X in Q)
          g(Q[X].object), delete Q[X];
        delete q[Z];
      }
      delete a[N];
    }
  }
  function F(N) {
    if (a[N.id] === void 0)
      return;
    const q = a[N.id];
    for (const Z in q) {
      const Q = q[Z];
      for (const X in Q)
        g(Q[X].object), delete Q[X];
      delete q[Z];
    }
    delete a[N.id];
  }
  function j(N) {
    for (const q in a) {
      const Z = a[q];
      if (Z[N.id] === void 0)
        continue;
      const Q = Z[N.id];
      for (const X in Q)
        g(Q[X].object), delete Q[X];
      delete Z[N.id];
    }
  }
  function J() {
    U(), h = !0, l !== c && (l = c, m(l.object));
  }
  function U() {
    c.geometry = null, c.program = null, c.wireframe = !1;
  }
  return {
    setup: u,
    reset: J,
    resetDefaultState: U,
    dispose: A,
    releaseStatesOfGeometry: F,
    releaseStatesOfProgram: j,
    initAttributes: y,
    enableAttribute: b,
    disableUnusedAttributes: C
  };
}
function Cu(r, e, t, n) {
  const i = n.isWebGL2;
  let s;
  function o(l) {
    s = l;
  }
  function a(l, h) {
    r.drawArrays(s, l, h), t.update(h, s, 1);
  }
  function c(l, h, u) {
    if (u === 0)
      return;
    let f, m;
    if (i)
      f = r, m = "drawArraysInstanced";
    else if (f = e.get("ANGLE_instanced_arrays"), m = "drawArraysInstancedANGLE", f === null) {
      console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      return;
    }
    f[m](s, l, h, u), t.update(h, s, u);
  }
  this.setMode = o, this.render = a, this.renderInstances = c;
}
function Lu(r, e, t) {
  let n;
  function i() {
    if (n !== void 0)
      return n;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const I = e.get("EXT_texture_filter_anisotropic");
      n = r.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else
      n = 0;
    return n;
  }
  function s(I) {
    if (I === "highp") {
      if (r.getShaderPrecisionFormat(35633, 36338).precision > 0 && r.getShaderPrecisionFormat(35632, 36338).precision > 0)
        return "highp";
      I = "mediump";
    }
    return I === "mediump" && r.getShaderPrecisionFormat(35633, 36337).precision > 0 && r.getShaderPrecisionFormat(35632, 36337).precision > 0 ? "mediump" : "lowp";
  }
  const o = typeof WebGL2RenderingContext < "u" && r instanceof WebGL2RenderingContext || typeof WebGL2ComputeRenderingContext < "u" && r instanceof WebGL2ComputeRenderingContext;
  let a = t.precision !== void 0 ? t.precision : "highp";
  const c = s(a);
  c !== a && (console.warn("THREE.WebGLRenderer:", a, "not supported, using", c, "instead."), a = c);
  const l = o || e.has("WEBGL_draw_buffers"), h = t.logarithmicDepthBuffer === !0, u = r.getParameter(34930), f = r.getParameter(35660), m = r.getParameter(3379), g = r.getParameter(34076), p = r.getParameter(34921), d = r.getParameter(36347), _ = r.getParameter(36348), S = r.getParameter(36349), y = f > 0, b = o || e.has("OES_texture_float"), T = y && b, C = o ? r.getParameter(36183) : 0;
  return {
    isWebGL2: o,
    drawBuffers: l,
    getMaxAnisotropy: i,
    getMaxPrecision: s,
    precision: a,
    logarithmicDepthBuffer: h,
    maxTextures: u,
    maxVertexTextures: f,
    maxTextureSize: m,
    maxCubemapSize: g,
    maxAttributes: p,
    maxVertexUniforms: d,
    maxVaryings: _,
    maxFragmentUniforms: S,
    vertexTextures: y,
    floatFragmentTextures: b,
    floatVertexTextures: T,
    maxSamples: C
  };
}
function Du(r) {
  const e = this;
  let t = null, n = 0, i = !1, s = !1;
  const o = new un(), a = new vt(), c = { value: null, needsUpdate: !1 };
  this.uniform = c, this.numPlanes = 0, this.numIntersection = 0, this.init = function(u, f, m) {
    const g = u.length !== 0 || f || n !== 0 || i;
    return i = f, t = h(u, m, 0), n = u.length, g;
  }, this.beginShadows = function() {
    s = !0, h(null);
  }, this.endShadows = function() {
    s = !1, l();
  }, this.setState = function(u, f, m) {
    const g = u.clippingPlanes, p = u.clipIntersection, d = u.clipShadows, _ = r.get(u);
    if (!i || g === null || g.length === 0 || s && !d)
      s ? h(null) : l();
    else {
      const S = s ? 0 : n, y = S * 4;
      let b = _.clippingState || null;
      c.value = b, b = h(g, f, y, m);
      for (let T = 0; T !== y; ++T)
        b[T] = t[T];
      _.clippingState = b, this.numIntersection = p ? this.numPlanes : 0, this.numPlanes += S;
    }
  };
  function l() {
    c.value !== t && (c.value = t, c.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0;
  }
  function h(u, f, m, g) {
    const p = u !== null ? u.length : 0;
    let d = null;
    if (p !== 0) {
      if (d = c.value, g !== !0 || d === null) {
        const _ = m + p * 4, S = f.matrixWorldInverse;
        a.getNormalMatrix(S), (d === null || d.length < _) && (d = new Float32Array(_));
        for (let y = 0, b = m; y !== p; ++y, b += 4)
          o.copy(u[y]).applyMatrix4(S, a), o.normal.toArray(d, b), d[b + 3] = o.constant;
      }
      c.value = d, c.needsUpdate = !0;
    }
    return e.numPlanes = p, e.numIntersection = 0, d;
  }
}
function Pu(r) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(o, a) {
    return a === Xs ? o.mapping = Yn : a === js && (o.mapping = Zn), o;
  }
  function n(o) {
    if (o && o.isTexture && o.isRenderTargetTexture === !1) {
      const a = o.mapping;
      if (a === Xs || a === js)
        if (e.has(o)) {
          const c = e.get(o).texture;
          return t(c, o.mapping);
        } else {
          const c = o.image;
          if (c && c.height > 0) {
            const l = new Wl(c.height / 2);
            return l.fromEquirectangularTexture(r, o), e.set(o, l), o.addEventListener("dispose", i), t(l.texture, o.mapping);
          } else
            return null;
        }
    }
    return o;
  }
  function i(o) {
    const a = o.target;
    a.removeEventListener("dispose", i);
    const c = e.get(a);
    c !== void 0 && (e.delete(a), c.dispose());
  }
  function s() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: s
  };
}
class co extends ao {
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
    let s = n - e, o = n + e, a = i + t, c = i - t;
    if (this.view !== null && this.view.enabled) {
      const l = (this.right - this.left) / this.view.fullWidth / this.zoom, h = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      s += l * this.view.offsetX, o = s + l * this.view.width, a -= h * this.view.offsetY, c = a - h * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(s, o, a, c, this.near, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
  }
}
const Wn = 4, na = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], fn = 20, Os = /* @__PURE__ */ new co(), ia = /* @__PURE__ */ new Ee();
let Us = null;
const dn = (1 + Math.sqrt(5)) / 2, kn = 1 / dn, sa = [
  /* @__PURE__ */ new D(1, 1, 1),
  /* @__PURE__ */ new D(-1, 1, 1),
  /* @__PURE__ */ new D(1, 1, -1),
  /* @__PURE__ */ new D(-1, 1, -1),
  /* @__PURE__ */ new D(0, dn, kn),
  /* @__PURE__ */ new D(0, dn, -kn),
  /* @__PURE__ */ new D(kn, 0, dn),
  /* @__PURE__ */ new D(-kn, 0, dn),
  /* @__PURE__ */ new D(dn, kn, 0),
  /* @__PURE__ */ new D(-dn, kn, 0)
];
class ra {
  constructor(e) {
    this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
  }
  fromScene(e, t = 0, n = 0.1, i = 100) {
    Us = this._renderer.getRenderTarget(), this._setSize(256);
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
    this._cubemapMaterial === null && (this._cubemapMaterial = la(), this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = oa(), this._compileMaterial(this._equirectMaterial));
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
    this._renderer.setRenderTarget(Us), e.scissorTest = !1, Wi(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === Yn || e.mapping === Zn ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), Us = this._renderer.getRenderTarget();
    const n = t || this._allocateTargets();
    return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n;
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, n = {
      magFilter: At,
      minFilter: At,
      generateMipmaps: !1,
      type: gi,
      format: Nt,
      encoding: vn,
      depthBuffer: !1
    }, i = aa(e, t, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = aa(e, t, n);
      const { _lodMax: s } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = Ru(s)), this._blurMaterial = Iu(s, e, t);
    }
    return i;
  }
  _compileMaterial(e) {
    const t = new Mt(this._lodPlanes[0], e);
    this._renderer.compile(t, Os);
  }
  _sceneToCubeUV(e, t, n, i) {
    const a = new Ct(90, 1, t, n), c = [1, -1, 1, 1, 1, 1], l = [1, 1, 1, -1, -1, -1], h = this._renderer, u = h.autoClear, f = h.toneMapping;
    h.getClearColor(ia), h.toneMapping = $t, h.autoClear = !1;
    const m = new no({
      name: "PMREM.Background",
      side: Lt,
      depthWrite: !1,
      depthTest: !1
    }), g = new Mt(new wn(), m);
    let p = !1;
    const d = e.background;
    d ? d.isColor && (m.color.copy(d), e.background = null, p = !0) : (m.color.copy(ia), p = !0);
    for (let _ = 0; _ < 6; _++) {
      const S = _ % 3;
      S === 0 ? (a.up.set(0, c[_], 0), a.lookAt(l[_], 0, 0)) : S === 1 ? (a.up.set(0, 0, c[_]), a.lookAt(0, l[_], 0)) : (a.up.set(0, c[_], 0), a.lookAt(0, 0, l[_]));
      const y = this._cubeSize;
      Wi(i, S * y, _ > 2 ? y : 0, y, y), h.setRenderTarget(i), p && h.render(g, a), h.render(e, a);
    }
    g.geometry.dispose(), g.material.dispose(), h.toneMapping = f, h.autoClear = u, e.background = d;
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer, i = e.mapping === Yn || e.mapping === Zn;
    i ? (this._cubemapMaterial === null && (this._cubemapMaterial = la()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = oa());
    const s = i ? this._cubemapMaterial : this._equirectMaterial, o = new Mt(this._lodPlanes[0], s), a = s.uniforms;
    a.envMap.value = e;
    const c = this._cubeSize;
    Wi(t, 0, 0, 3 * c, 2 * c), n.setRenderTarget(t), n.render(o, Os);
  }
  _applyPMREM(e) {
    const t = this._renderer, n = t.autoClear;
    t.autoClear = !1;
    for (let i = 1; i < this._lodPlanes.length; i++) {
      const s = Math.sqrt(this._sigmas[i] * this._sigmas[i] - this._sigmas[i - 1] * this._sigmas[i - 1]), o = sa[(i - 1) % sa.length];
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
  _halfBlur(e, t, n, i, s, o, a) {
    const c = this._renderer, l = this._blurMaterial;
    o !== "latitudinal" && o !== "longitudinal" && console.error(
      "blur direction must be either latitudinal or longitudinal!"
    );
    const h = 3, u = new Mt(this._lodPlanes[i], l), f = l.uniforms, m = this._sizeLods[n] - 1, g = isFinite(s) ? Math.PI / (2 * m) : 2 * Math.PI / (2 * fn - 1), p = s / g, d = isFinite(s) ? 1 + Math.floor(h * p) : fn;
    d > fn && console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${fn}`);
    const _ = [];
    let S = 0;
    for (let I = 0; I < fn; ++I) {
      const x = I / p, A = Math.exp(-x * x / 2);
      _.push(A), I === 0 ? S += A : I < d && (S += 2 * A);
    }
    for (let I = 0; I < _.length; I++)
      _[I] = _[I] / S;
    f.envMap.value = e.texture, f.samples.value = d, f.weights.value = _, f.latitudinal.value = o === "latitudinal", a && (f.poleAxis.value = a);
    const { _lodMax: y } = this;
    f.dTheta.value = g, f.mipInt.value = y - n;
    const b = this._sizeLods[i], T = 3 * b * (i > y - Wn ? i - y + Wn : 0), C = 4 * (this._cubeSize - b);
    Wi(t, T, C, 3 * b, 2 * b), c.setRenderTarget(t), c.render(u, Os);
  }
}
function Ru(r) {
  const e = [], t = [], n = [];
  let i = r;
  const s = r - Wn + 1 + na.length;
  for (let o = 0; o < s; o++) {
    const a = Math.pow(2, i);
    t.push(a);
    let c = 1 / a;
    o > r - Wn ? c = na[o - r + Wn - 1] : o === 0 && (c = 0), n.push(c);
    const l = 1 / (a - 2), h = -l, u = 1 + l, f = [h, h, u, h, u, u, h, h, u, u, h, u], m = 6, g = 6, p = 3, d = 2, _ = 1, S = new Float32Array(p * g * m), y = new Float32Array(d * g * m), b = new Float32Array(_ * g * m);
    for (let C = 0; C < m; C++) {
      const I = C % 3 * 2 / 3 - 1, x = C > 2 ? 0 : -1, A = [
        I,
        x,
        0,
        I + 2 / 3,
        x,
        0,
        I + 2 / 3,
        x + 1,
        0,
        I,
        x,
        0,
        I + 2 / 3,
        x + 1,
        0,
        I,
        x + 1,
        0
      ];
      S.set(A, p * g * C), y.set(f, d * g * C);
      const F = [C, C, C, C, C, C];
      b.set(F, _ * g * C);
    }
    const T = new Dt();
    T.setAttribute("position", new Bt(S, p)), T.setAttribute("uv", new Bt(y, d)), T.setAttribute("faceIndex", new Bt(b, _)), e.push(T), i > Wn && i--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: n };
}
function aa(r, e, t) {
  const n = new Mn(r, e, t);
  return n.texture.mapping = es, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n;
}
function Wi(r, e, t, n, i) {
  r.viewport.set(e, t, n, i), r.scissor.set(e, t, n, i);
}
function Iu(r, e, t) {
  const n = new Float32Array(fn), i = new D(0, 1, 0);
  return new bn({
    name: "SphericalGaussianBlur",
    defines: {
      n: fn,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${r}.0`
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
    vertexShader: lr(),
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
    blending: tn,
    depthTest: !1,
    depthWrite: !1
  });
}
function oa() {
  return new bn({
    name: "EquirectangularToCubeUV",
    uniforms: {
      envMap: { value: null }
    },
    vertexShader: lr(),
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
    blending: tn,
    depthTest: !1,
    depthWrite: !1
  });
}
function la() {
  return new bn({
    name: "CubemapToCubeUV",
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 }
    },
    vertexShader: lr(),
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
    blending: tn,
    depthTest: !1,
    depthWrite: !1
  });
}
function lr() {
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
function Fu(r) {
  let e = /* @__PURE__ */ new WeakMap(), t = null;
  function n(a) {
    if (a && a.isTexture) {
      const c = a.mapping, l = c === Xs || c === js, h = c === Yn || c === Zn;
      if (l || h)
        if (a.isRenderTargetTexture && a.needsPMREMUpdate === !0) {
          a.needsPMREMUpdate = !1;
          let u = e.get(a);
          return t === null && (t = new ra(r)), u = l ? t.fromEquirectangular(a, u) : t.fromCubemap(a, u), e.set(a, u), u.texture;
        } else {
          if (e.has(a))
            return e.get(a).texture;
          {
            const u = a.image;
            if (l && u && u.height > 0 || h && u && i(u)) {
              t === null && (t = new ra(r));
              const f = l ? t.fromEquirectangular(a) : t.fromCubemap(a);
              return e.set(a, f), a.addEventListener("dispose", s), f.texture;
            } else
              return null;
          }
        }
    }
    return a;
  }
  function i(a) {
    let c = 0;
    const l = 6;
    for (let h = 0; h < l; h++)
      a[h] !== void 0 && c++;
    return c === l;
  }
  function s(a) {
    const c = a.target;
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
function Nu(r) {
  const e = {};
  function t(n) {
    if (e[n] !== void 0)
      return e[n];
    let i;
    switch (n) {
      case "WEBGL_depth_texture":
        i = r.getExtension("WEBGL_depth_texture") || r.getExtension("MOZ_WEBGL_depth_texture") || r.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        i = r.getExtension("EXT_texture_filter_anisotropic") || r.getExtension("MOZ_EXT_texture_filter_anisotropic") || r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        i = r.getExtension("WEBGL_compressed_texture_s3tc") || r.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        i = r.getExtension("WEBGL_compressed_texture_pvrtc") || r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        i = r.getExtension(n);
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
function Ou(r, e, t, n) {
  const i = {}, s = /* @__PURE__ */ new WeakMap();
  function o(u) {
    const f = u.target;
    f.index !== null && e.remove(f.index);
    for (const g in f.attributes)
      e.remove(f.attributes[g]);
    f.removeEventListener("dispose", o), delete i[f.id];
    const m = s.get(f);
    m && (e.remove(m), s.delete(f)), n.releaseStatesOfGeometry(f), f.isInstancedBufferGeometry === !0 && delete f._maxInstanceCount, t.memory.geometries--;
  }
  function a(u, f) {
    return i[f.id] === !0 || (f.addEventListener("dispose", o), i[f.id] = !0, t.memory.geometries++), f;
  }
  function c(u) {
    const f = u.attributes;
    for (const g in f)
      e.update(f[g], 34962);
    const m = u.morphAttributes;
    for (const g in m) {
      const p = m[g];
      for (let d = 0, _ = p.length; d < _; d++)
        e.update(p[d], 34962);
    }
  }
  function l(u) {
    const f = [], m = u.index, g = u.attributes.position;
    let p = 0;
    if (m !== null) {
      const S = m.array;
      p = m.version;
      for (let y = 0, b = S.length; y < b; y += 3) {
        const T = S[y + 0], C = S[y + 1], I = S[y + 2];
        f.push(T, C, C, I, I, T);
      }
    } else {
      const S = g.array;
      p = g.version;
      for (let y = 0, b = S.length / 3 - 1; y < b; y += 3) {
        const T = y + 0, C = y + 1, I = y + 2;
        f.push(T, C, C, I, I, T);
      }
    }
    const d = new (Ka(f) ? so : io)(f, 1);
    d.version = p;
    const _ = s.get(u);
    _ && e.remove(_), s.set(u, d);
  }
  function h(u) {
    const f = s.get(u);
    if (f) {
      const m = u.index;
      m !== null && f.version < m.version && l(u);
    } else
      l(u);
    return s.get(u);
  }
  return {
    get: a,
    update: c,
    getWireframeAttribute: h
  };
}
function Uu(r, e, t, n) {
  const i = n.isWebGL2;
  let s;
  function o(f) {
    s = f;
  }
  let a, c;
  function l(f) {
    a = f.type, c = f.bytesPerElement;
  }
  function h(f, m) {
    r.drawElements(s, m, a, f * c), t.update(m, s, 1);
  }
  function u(f, m, g) {
    if (g === 0)
      return;
    let p, d;
    if (i)
      p = r, d = "drawElementsInstanced";
    else if (p = e.get("ANGLE_instanced_arrays"), d = "drawElementsInstancedANGLE", p === null) {
      console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      return;
    }
    p[d](s, m, a, f * c, g), t.update(m, s, g);
  }
  this.setMode = o, this.setIndex = l, this.render = h, this.renderInstances = u;
}
function zu(r) {
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
  function n(s, o, a) {
    switch (t.calls++, o) {
      case 4:
        t.triangles += a * (s / 3);
        break;
      case 1:
        t.lines += a * (s / 2);
        break;
      case 3:
        t.lines += a * (s - 1);
        break;
      case 2:
        t.lines += a * s;
        break;
      case 0:
        t.points += a * s;
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
function Bu(r, e) {
  return r[0] - e[0];
}
function ku(r, e) {
  return Math.abs(e[1]) - Math.abs(r[1]);
}
function Gu(r, e, t) {
  const n = {}, i = new Float32Array(8), s = /* @__PURE__ */ new WeakMap(), o = new tt(), a = [];
  for (let l = 0; l < 8; l++)
    a[l] = [l, 0];
  function c(l, h, u, f) {
    const m = l.morphTargetInfluences;
    if (e.isWebGL2 === !0) {
      const g = h.morphAttributes.position || h.morphAttributes.normal || h.morphAttributes.color, p = g !== void 0 ? g.length : 0;
      let d = s.get(h);
      if (d === void 0 || d.count !== p) {
        let q = function() {
          U.dispose(), s.delete(h), h.removeEventListener("dispose", q);
        };
        d !== void 0 && d.texture.dispose();
        const y = h.morphAttributes.position !== void 0, b = h.morphAttributes.normal !== void 0, T = h.morphAttributes.color !== void 0, C = h.morphAttributes.position || [], I = h.morphAttributes.normal || [], x = h.morphAttributes.color || [];
        let A = 0;
        y === !0 && (A = 1), b === !0 && (A = 2), T === !0 && (A = 3);
        let F = h.attributes.position.count * A, j = 1;
        F > e.maxTextureSize && (j = Math.ceil(F / e.maxTextureSize), F = e.maxTextureSize);
        const J = new Float32Array(F * j * 4 * p), U = new to(J, F, j, p);
        U.type = mn, U.needsUpdate = !0;
        const N = A * 4;
        for (let Z = 0; Z < p; Z++) {
          const Q = C[Z], X = I[Z], ee = x[Z], Y = F * j * 4 * Z;
          for (let V = 0; V < Q.count; V++) {
            const z = V * N;
            y === !0 && (o.fromBufferAttribute(Q, V), J[Y + z + 0] = o.x, J[Y + z + 1] = o.y, J[Y + z + 2] = o.z, J[Y + z + 3] = 0), b === !0 && (o.fromBufferAttribute(X, V), J[Y + z + 4] = o.x, J[Y + z + 5] = o.y, J[Y + z + 6] = o.z, J[Y + z + 7] = 0), T === !0 && (o.fromBufferAttribute(ee, V), J[Y + z + 8] = o.x, J[Y + z + 9] = o.y, J[Y + z + 10] = o.z, J[Y + z + 11] = ee.itemSize === 4 ? o.w : 1);
          }
        }
        d = {
          count: p,
          texture: U,
          size: new ye(F, j)
        }, s.set(h, d), h.addEventListener("dispose", q);
      }
      let _ = 0;
      for (let y = 0; y < m.length; y++)
        _ += m[y];
      const S = h.morphTargetsRelative ? 1 : 1 - _;
      f.getUniforms().setValue(r, "morphTargetBaseInfluence", S), f.getUniforms().setValue(r, "morphTargetInfluences", m), f.getUniforms().setValue(r, "morphTargetsTexture", d.texture, t), f.getUniforms().setValue(r, "morphTargetsTextureSize", d.size);
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
        const T = p[b];
        T[0] = b, T[1] = m[b];
      }
      p.sort(ku);
      for (let b = 0; b < 8; b++)
        b < g && p[b][1] ? (a[b][0] = p[b][0], a[b][1] = p[b][1]) : (a[b][0] = Number.MAX_SAFE_INTEGER, a[b][1] = 0);
      a.sort(Bu);
      const d = h.morphAttributes.position, _ = h.morphAttributes.normal;
      let S = 0;
      for (let b = 0; b < 8; b++) {
        const T = a[b], C = T[0], I = T[1];
        C !== Number.MAX_SAFE_INTEGER && I ? (d && h.getAttribute("morphTarget" + b) !== d[C] && h.setAttribute("morphTarget" + b, d[C]), _ && h.getAttribute("morphNormal" + b) !== _[C] && h.setAttribute("morphNormal" + b, _[C]), i[b] = I, S += I) : (d && h.hasAttribute("morphTarget" + b) === !0 && h.deleteAttribute("morphTarget" + b), _ && h.hasAttribute("morphNormal" + b) === !0 && h.deleteAttribute("morphNormal" + b), i[b] = 0);
      }
      const y = h.morphTargetsRelative ? 1 : 1 - S;
      f.getUniforms().setValue(r, "morphTargetBaseInfluence", y), f.getUniforms().setValue(r, "morphTargetInfluences", i);
    }
  }
  return {
    update: c
  };
}
function Vu(r, e, t, n) {
  let i = /* @__PURE__ */ new WeakMap();
  function s(c) {
    const l = n.render.frame, h = c.geometry, u = e.get(c, h);
    return i.get(u) !== l && (e.update(u), i.set(u, l)), c.isInstancedMesh && (c.hasEventListener("dispose", a) === !1 && c.addEventListener("dispose", a), t.update(c.instanceMatrix, 34962), c.instanceColor !== null && t.update(c.instanceColor, 34962)), u;
  }
  function o() {
    i = /* @__PURE__ */ new WeakMap();
  }
  function a(c) {
    const l = c.target;
    l.removeEventListener("dispose", a), t.remove(l.instanceMatrix), l.instanceColor !== null && t.remove(l.instanceColor);
  }
  return {
    update: s,
    dispose: o
  };
}
const ho = /* @__PURE__ */ new ft(), uo = /* @__PURE__ */ new to(), fo = /* @__PURE__ */ new Cl(), po = /* @__PURE__ */ new oo(), ca = [], ha = [], ua = new Float32Array(16), da = new Float32Array(9), fa = new Float32Array(4);
function Jn(r, e, t) {
  const n = r[0];
  if (n <= 0 || n > 0)
    return r;
  const i = e * t;
  let s = ca[i];
  if (s === void 0 && (s = new Float32Array(i), ca[i] = s), e !== 0) {
    n.toArray(s, 0);
    for (let o = 1, a = 0; o !== e; ++o)
      a += t, r[o].toArray(s, a);
  }
  return s;
}
function Ze(r, e) {
  if (r.length !== e.length)
    return !1;
  for (let t = 0, n = r.length; t < n; t++)
    if (r[t] !== e[t])
      return !1;
  return !0;
}
function $e(r, e) {
  for (let t = 0, n = e.length; t < n; t++)
    r[t] = e[t];
}
function is(r, e) {
  let t = ha[e];
  t === void 0 && (t = new Int32Array(e), ha[e] = t);
  for (let n = 0; n !== e; ++n)
    t[n] = r.allocateTextureUnit();
  return t;
}
function Hu(r, e) {
  const t = this.cache;
  t[0] !== e && (r.uniform1f(this.addr, e), t[0] = e);
}
function Wu(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (r.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (Ze(t, e))
      return;
    r.uniform2fv(this.addr, e), $e(t, e);
  }
}
function qu(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (r.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (r.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
  else {
    if (Ze(t, e))
      return;
    r.uniform3fv(this.addr, e), $e(t, e);
  }
}
function Xu(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (r.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (Ze(t, e))
      return;
    r.uniform4fv(this.addr, e), $e(t, e);
  }
}
function ju(r, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (Ze(t, e))
      return;
    r.uniformMatrix2fv(this.addr, !1, e), $e(t, e);
  } else {
    if (Ze(t, n))
      return;
    fa.set(n), r.uniformMatrix2fv(this.addr, !1, fa), $e(t, n);
  }
}
function Yu(r, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (Ze(t, e))
      return;
    r.uniformMatrix3fv(this.addr, !1, e), $e(t, e);
  } else {
    if (Ze(t, n))
      return;
    da.set(n), r.uniformMatrix3fv(this.addr, !1, da), $e(t, n);
  }
}
function Zu(r, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (Ze(t, e))
      return;
    r.uniformMatrix4fv(this.addr, !1, e), $e(t, e);
  } else {
    if (Ze(t, n))
      return;
    ua.set(n), r.uniformMatrix4fv(this.addr, !1, ua), $e(t, n);
  }
}
function $u(r, e) {
  const t = this.cache;
  t[0] !== e && (r.uniform1i(this.addr, e), t[0] = e);
}
function Ku(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (r.uniform2i(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (Ze(t, e))
      return;
    r.uniform2iv(this.addr, e), $e(t, e);
  }
}
function Ju(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (r.uniform3i(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (Ze(t, e))
      return;
    r.uniform3iv(this.addr, e), $e(t, e);
  }
}
function Qu(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (r.uniform4i(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (Ze(t, e))
      return;
    r.uniform4iv(this.addr, e), $e(t, e);
  }
}
function ed(r, e) {
  const t = this.cache;
  t[0] !== e && (r.uniform1ui(this.addr, e), t[0] = e);
}
function td(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (r.uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (Ze(t, e))
      return;
    r.uniform2uiv(this.addr, e), $e(t, e);
  }
}
function nd(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (r.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (Ze(t, e))
      return;
    r.uniform3uiv(this.addr, e), $e(t, e);
  }
}
function id(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (r.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (Ze(t, e))
      return;
    r.uniform4uiv(this.addr, e), $e(t, e);
  }
}
function sd(r, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i), t.setTexture2D(e || ho, i);
}
function rd(r, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i), t.setTexture3D(e || fo, i);
}
function ad(r, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i), t.setTextureCube(e || po, i);
}
function od(r, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i), t.setTexture2DArray(e || uo, i);
}
function ld(r) {
  switch (r) {
    case 5126:
      return Hu;
    case 35664:
      return Wu;
    case 35665:
      return qu;
    case 35666:
      return Xu;
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
function cd(r, e) {
  r.uniform1fv(this.addr, e);
}
function hd(r, e) {
  const t = Jn(e, this.size, 2);
  r.uniform2fv(this.addr, t);
}
function ud(r, e) {
  const t = Jn(e, this.size, 3);
  r.uniform3fv(this.addr, t);
}
function dd(r, e) {
  const t = Jn(e, this.size, 4);
  r.uniform4fv(this.addr, t);
}
function fd(r, e) {
  const t = Jn(e, this.size, 4);
  r.uniformMatrix2fv(this.addr, !1, t);
}
function pd(r, e) {
  const t = Jn(e, this.size, 9);
  r.uniformMatrix3fv(this.addr, !1, t);
}
function md(r, e) {
  const t = Jn(e, this.size, 16);
  r.uniformMatrix4fv(this.addr, !1, t);
}
function gd(r, e) {
  r.uniform1iv(this.addr, e);
}
function _d(r, e) {
  r.uniform2iv(this.addr, e);
}
function xd(r, e) {
  r.uniform3iv(this.addr, e);
}
function vd(r, e) {
  r.uniform4iv(this.addr, e);
}
function Md(r, e) {
  r.uniform1uiv(this.addr, e);
}
function yd(r, e) {
  r.uniform2uiv(this.addr, e);
}
function bd(r, e) {
  r.uniform3uiv(this.addr, e);
}
function Sd(r, e) {
  r.uniform4uiv(this.addr, e);
}
function wd(r, e, t) {
  const n = this.cache, i = e.length, s = is(t, i);
  Ze(n, s) || (r.uniform1iv(this.addr, s), $e(n, s));
  for (let o = 0; o !== i; ++o)
    t.setTexture2D(e[o] || ho, s[o]);
}
function Td(r, e, t) {
  const n = this.cache, i = e.length, s = is(t, i);
  Ze(n, s) || (r.uniform1iv(this.addr, s), $e(n, s));
  for (let o = 0; o !== i; ++o)
    t.setTexture3D(e[o] || fo, s[o]);
}
function Ed(r, e, t) {
  const n = this.cache, i = e.length, s = is(t, i);
  Ze(n, s) || (r.uniform1iv(this.addr, s), $e(n, s));
  for (let o = 0; o !== i; ++o)
    t.setTextureCube(e[o] || po, s[o]);
}
function Ad(r, e, t) {
  const n = this.cache, i = e.length, s = is(t, i);
  Ze(n, s) || (r.uniform1iv(this.addr, s), $e(n, s));
  for (let o = 0; o !== i; ++o)
    t.setTexture2DArray(e[o] || uo, s[o]);
}
function Cd(r) {
  switch (r) {
    case 5126:
      return cd;
    case 35664:
      return hd;
    case 35665:
      return ud;
    case 35666:
      return dd;
    case 35674:
      return fd;
    case 35675:
      return pd;
    case 35676:
      return md;
    case 5124:
    case 35670:
      return gd;
    case 35667:
    case 35671:
      return _d;
    case 35668:
    case 35672:
      return xd;
    case 35669:
    case 35673:
      return vd;
    case 5125:
      return Md;
    case 36294:
      return yd;
    case 36295:
      return bd;
    case 36296:
      return Sd;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return wd;
    case 35679:
    case 36299:
    case 36307:
      return Td;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Ed;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Ad;
  }
}
class Ld {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.setValue = ld(t.type);
  }
}
class Dd {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.size = t.size, this.setValue = Cd(t.type);
  }
}
class Pd {
  constructor(e) {
    this.id = e, this.seq = [], this.map = {};
  }
  setValue(e, t, n) {
    const i = this.seq;
    for (let s = 0, o = i.length; s !== o; ++s) {
      const a = i[s];
      a.setValue(e, t[a.id], n);
    }
  }
}
const zs = /(\w+)(\])?(\[|\.)?/g;
function pa(r, e) {
  r.seq.push(e), r.map[e.id] = e;
}
function Rd(r, e, t) {
  const n = r.name, i = n.length;
  for (zs.lastIndex = 0; ; ) {
    const s = zs.exec(n), o = zs.lastIndex;
    let a = s[1];
    const c = s[2] === "]", l = s[3];
    if (c && (a = a | 0), l === void 0 || l === "[" && o + 2 === i) {
      pa(t, l === void 0 ? new Ld(a, r, e) : new Dd(a, r, e));
      break;
    } else {
      let u = t.map[a];
      u === void 0 && (u = new Pd(a), pa(t, u)), t = u;
    }
  }
}
class $i {
  constructor(e, t) {
    this.seq = [], this.map = {};
    const n = e.getProgramParameter(t, 35718);
    for (let i = 0; i < n; ++i) {
      const s = e.getActiveUniform(t, i), o = e.getUniformLocation(t, s.name);
      Rd(s, o, this);
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
      const a = t[s], c = n[a.id];
      c.needsUpdate !== !1 && a.setValue(e, c.value, i);
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
function ma(r, e, t) {
  const n = r.createShader(e);
  return r.shaderSource(n, t), r.compileShader(n), n;
}
let Id = 0;
function Fd(r, e) {
  const t = r.split(`
`), n = [], i = Math.max(e - 6, 0), s = Math.min(e + 6, t.length);
  for (let o = i; o < s; o++) {
    const a = o + 1;
    n.push(`${a === e ? ">" : " "} ${a}: ${t[o]}`);
  }
  return n.join(`
`);
}
function Nd(r) {
  switch (r) {
    case vn:
      return ["Linear", "( value )"];
    case ze:
      return ["sRGB", "( value )"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported encoding:", r), ["Linear", "( value )"];
  }
}
function ga(r, e, t) {
  const n = r.getShaderParameter(e, 35713), i = r.getShaderInfoLog(e).trim();
  if (n && i === "")
    return "";
  const s = /ERROR: 0:(\d+)/.exec(i);
  if (s) {
    const o = parseInt(s[1]);
    return t.toUpperCase() + `

` + i + `

` + Fd(r.getShaderSource(e), o);
  } else
    return i;
}
function Od(r, e) {
  const t = Nd(e);
  return "vec4 " + r + "( vec4 value ) { return LinearTo" + t[0] + t[1] + "; }";
}
function Ud(r, e) {
  let t;
  switch (e) {
    case tl:
      t = "Linear";
      break;
    case nl:
      t = "Reinhard";
      break;
    case il:
      t = "OptimizedCineon";
      break;
    case sl:
      t = "ACESFilmic";
      break;
    case rl:
      t = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), t = "Linear";
  }
  return "vec3 " + r + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
}
function zd(r) {
  return [
    r.extensionDerivatives || r.envMapCubeUVHeight || r.bumpMap || r.tangentSpaceNormalMap || r.clearcoatNormalMap || r.flatShading || r.shaderID === "physical" ? "#extension GL_OES_standard_derivatives : enable" : "",
    (r.extensionFragDepth || r.logarithmicDepthBuffer) && r.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "",
    r.extensionDrawBuffers && r.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "",
    (r.extensionShaderTextureLOD || r.envMap || r.transmission) && r.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""
  ].filter(li).join(`
`);
}
function Bd(r) {
  const e = [];
  for (const t in r) {
    const n = r[t];
    n !== !1 && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function kd(r, e) {
  const t = {}, n = r.getProgramParameter(e, 35721);
  for (let i = 0; i < n; i++) {
    const s = r.getActiveAttrib(e, i), o = s.name;
    let a = 1;
    s.type === 35674 && (a = 2), s.type === 35675 && (a = 3), s.type === 35676 && (a = 4), t[o] = {
      type: s.type,
      location: r.getAttribLocation(e, o),
      locationSize: a
    };
  }
  return t;
}
function li(r) {
  return r !== "";
}
function _a(r, e) {
  const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return r.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function xa(r, e) {
  return r.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
const Gd = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Ks(r) {
  return r.replace(Gd, Vd);
}
function Vd(r, e) {
  const t = Se[e];
  if (t === void 0)
    throw new Error("Can not resolve #include <" + e + ">");
  return Ks(t);
}
const Hd = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function va(r) {
  return r.replace(Hd, Wd);
}
function Wd(r, e, t, n) {
  let i = "";
  for (let s = parseInt(e); s < parseInt(t); s++)
    i += n.replace(/\[\s*i\s*\]/g, "[ " + s + " ]").replace(/UNROLLED_LOOP_INDEX/g, s);
  return i;
}
function Ma(r) {
  let e = "precision " + r.precision + ` float;
precision ` + r.precision + " int;";
  return r.precision === "highp" ? e += `
#define HIGH_PRECISION` : r.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : r.precision === "lowp" && (e += `
#define LOW_PRECISION`), e;
}
function qd(r) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return r.shadowMapType === Xa ? e = "SHADOWMAP_TYPE_PCF" : r.shadowMapType === Io ? e = "SHADOWMAP_TYPE_PCF_SOFT" : r.shadowMapType === oi && (e = "SHADOWMAP_TYPE_VSM"), e;
}
function Xd(r) {
  let e = "ENVMAP_TYPE_CUBE";
  if (r.envMap)
    switch (r.envMapMode) {
      case Yn:
      case Zn:
        e = "ENVMAP_TYPE_CUBE";
        break;
      case es:
        e = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return e;
}
function jd(r) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (r.envMap)
    switch (r.envMapMode) {
      case Zn:
        e = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return e;
}
function Yd(r) {
  let e = "ENVMAP_BLENDING_NONE";
  if (r.envMap)
    switch (r.combine) {
      case sr:
        e = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case Qo:
        e = "ENVMAP_BLENDING_MIX";
        break;
      case el:
        e = "ENVMAP_BLENDING_ADD";
        break;
    }
  return e;
}
function Zd(r) {
  const e = r.envMapCubeUVHeight;
  if (e === null)
    return null;
  const t = Math.log2(e) - 2, n = 1 / e;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)), texelHeight: n, maxMip: t };
}
function $d(r, e, t, n) {
  const i = r.getContext(), s = t.defines;
  let o = t.vertexShader, a = t.fragmentShader;
  const c = qd(t), l = Xd(t), h = jd(t), u = Yd(t), f = Zd(t), m = t.isWebGL2 ? "" : zd(t), g = Bd(s), p = i.createProgram();
  let d, _, S = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
  t.isRawShaderMaterial ? (d = [
    g
  ].filter(li).join(`
`), d.length > 0 && (d += `
`), _ = [
    m,
    g
  ].filter(li).join(`
`), _.length > 0 && (_ += `
`)) : (d = [
    Ma(t),
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
  ].filter(li).join(`
`), _ = [
    m,
    Ma(t),
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
    f ? "#define CUBEUV_TEXEL_WIDTH " + f.texelWidth : "",
    f ? "#define CUBEUV_TEXEL_HEIGHT " + f.texelHeight : "",
    f ? "#define CUBEUV_MAX_MIP " + f.maxMip + ".0" : "",
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
    t.toneMapping !== $t ? "#define TONE_MAPPING" : "",
    t.toneMapping !== $t ? Se.tonemapping_pars_fragment : "",
    t.toneMapping !== $t ? Ud("toneMapping", t.toneMapping) : "",
    t.dithering ? "#define DITHERING" : "",
    t.opaque ? "#define OPAQUE" : "",
    Se.encodings_pars_fragment,
    Od("linearToOutputTexel", t.outputEncoding),
    t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
    `
`
  ].filter(li).join(`
`)), o = Ks(o), o = _a(o, t), o = xa(o, t), a = Ks(a), a = _a(a, t), a = xa(a, t), o = va(o), a = va(a), t.isWebGL2 && t.isRawShaderMaterial !== !0 && (S = `#version 300 es
`, d = [
    "precision mediump sampler2DArray;",
    "#define attribute in",
    "#define varying out",
    "#define texture2D texture"
  ].join(`
`) + `
` + d, _ = [
    "#define varying in",
    t.glslVersion === Hr ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
    t.glslVersion === Hr ? "" : "#define gl_FragColor pc_fragColor",
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
` + _);
  const y = S + d + o, b = S + _ + a, T = ma(i, 35633, y), C = ma(i, 35632, b);
  if (i.attachShader(p, T), i.attachShader(p, C), t.index0AttributeName !== void 0 ? i.bindAttribLocation(p, 0, t.index0AttributeName) : t.morphTargets === !0 && i.bindAttribLocation(p, 0, "position"), i.linkProgram(p), r.debug.checkShaderErrors) {
    const A = i.getProgramInfoLog(p).trim(), F = i.getShaderInfoLog(T).trim(), j = i.getShaderInfoLog(C).trim();
    let J = !0, U = !0;
    if (i.getProgramParameter(p, 35714) === !1) {
      J = !1;
      const N = ga(i, T, "vertex"), q = ga(i, C, "fragment");
      console.error(
        "THREE.WebGLProgram: Shader Error " + i.getError() + " - VALIDATE_STATUS " + i.getProgramParameter(p, 35715) + `

Program Info Log: ` + A + `
` + N + `
` + q
      );
    } else
      A !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", A) : (F === "" || j === "") && (U = !1);
    U && (this.diagnostics = {
      runnable: J,
      programLog: A,
      vertexShader: {
        log: F,
        prefix: d
      },
      fragmentShader: {
        log: j,
        prefix: _
      }
    });
  }
  i.deleteShader(T), i.deleteShader(C);
  let I;
  this.getUniforms = function() {
    return I === void 0 && (I = new $i(i, p)), I;
  };
  let x;
  return this.getAttributes = function() {
    return x === void 0 && (x = kd(i, p)), x;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), i.deleteProgram(p), this.program = void 0;
  }, this.name = t.shaderName, this.id = Id++, this.cacheKey = e, this.usedTimes = 1, this.program = p, this.vertexShader = T, this.fragmentShader = C, this;
}
let Kd = 0;
class Jd {
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
    return n === void 0 && (n = new Qd(e), t.set(e, n)), n;
  }
}
class Qd {
  constructor(e) {
    this.id = Kd++, this.code = e, this.usedTimes = 0;
  }
}
function ef(r, e, t, n, i, s, o) {
  const a = new ar(), c = new Jd(), l = [], h = i.isWebGL2, u = i.logarithmicDepthBuffer, f = i.vertexTextures;
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
  function p(x, A, F, j, J) {
    const U = j.fog, N = J.geometry, q = x.isMeshStandardMaterial ? j.environment : null, Z = (x.isMeshStandardMaterial ? t : e).get(x.envMap || q), Q = Z && Z.mapping === es ? Z.image.height : null, X = g[x.type];
    x.precision !== null && (m = i.getMaxPrecision(x.precision), m !== x.precision && console.warn("THREE.WebGLProgram.getParameters:", x.precision, "not supported, using", m, "instead."));
    const ee = N.morphAttributes.position || N.morphAttributes.normal || N.morphAttributes.color, Y = ee !== void 0 ? ee.length : 0;
    let V = 0;
    N.morphAttributes.position !== void 0 && (V = 1), N.morphAttributes.normal !== void 0 && (V = 2), N.morphAttributes.color !== void 0 && (V = 3);
    let z, se, te, re;
    if (X) {
      const Fe = Ut[X];
      z = Fe.vertexShader, se = Fe.fragmentShader;
    } else
      z = x.vertexShader, se = x.fragmentShader, c.update(x), te = c.getVertexShaderID(x), re = c.getFragmentShaderID(x);
    const H = r.getRenderTarget(), Ae = x.alphaTest > 0, de = x.clearcoat > 0, _e = x.iridescence > 0;
    return {
      isWebGL2: h,
      shaderID: X,
      shaderName: x.type,
      vertexShader: z,
      fragmentShader: se,
      defines: x.defines,
      customVertexShaderID: te,
      customFragmentShaderID: re,
      isRawShaderMaterial: x.isRawShaderMaterial === !0,
      glslVersion: x.glslVersion,
      precision: m,
      instancing: J.isInstancedMesh === !0,
      instancingColor: J.isInstancedMesh === !0 && J.instanceColor !== null,
      supportsVertexTextures: f,
      outputEncoding: H === null ? r.outputEncoding : H.isXRRenderTarget === !0 ? H.texture.encoding : vn,
      map: !!x.map,
      matcap: !!x.matcap,
      envMap: !!Z,
      envMapMode: Z && Z.mapping,
      envMapCubeUVHeight: Q,
      lightMap: !!x.lightMap,
      aoMap: !!x.aoMap,
      emissiveMap: !!x.emissiveMap,
      bumpMap: !!x.bumpMap,
      normalMap: !!x.normalMap,
      objectSpaceNormalMap: x.normalMapType === wl,
      tangentSpaceNormalMap: x.normalMapType === rr,
      decodeVideoTexture: !!x.map && x.map.isVideoTexture === !0 && x.map.encoding === ze,
      clearcoat: de,
      clearcoatMap: de && !!x.clearcoatMap,
      clearcoatRoughnessMap: de && !!x.clearcoatRoughnessMap,
      clearcoatNormalMap: de && !!x.clearcoatNormalMap,
      iridescence: _e,
      iridescenceMap: _e && !!x.iridescenceMap,
      iridescenceThicknessMap: _e && !!x.iridescenceThicknessMap,
      displacementMap: !!x.displacementMap,
      roughnessMap: !!x.roughnessMap,
      metalnessMap: !!x.metalnessMap,
      specularMap: !!x.specularMap,
      specularIntensityMap: !!x.specularIntensityMap,
      specularColorMap: !!x.specularColorMap,
      opaque: x.transparent === !1 && x.blending === qn,
      alphaMap: !!x.alphaMap,
      alphaTest: Ae,
      gradientMap: !!x.gradientMap,
      sheen: x.sheen > 0,
      sheenColorMap: !!x.sheenColorMap,
      sheenRoughnessMap: !!x.sheenRoughnessMap,
      transmission: x.transmission > 0,
      transmissionMap: !!x.transmissionMap,
      thicknessMap: !!x.thicknessMap,
      combine: x.combine,
      vertexTangents: !!x.normalMap && !!N.attributes.tangent,
      vertexColors: x.vertexColors,
      vertexAlphas: x.vertexColors === !0 && !!N.attributes.color && N.attributes.color.itemSize === 4,
      vertexUvs: !!x.map || !!x.bumpMap || !!x.normalMap || !!x.specularMap || !!x.alphaMap || !!x.emissiveMap || !!x.roughnessMap || !!x.metalnessMap || !!x.clearcoatMap || !!x.clearcoatRoughnessMap || !!x.clearcoatNormalMap || !!x.iridescenceMap || !!x.iridescenceThicknessMap || !!x.displacementMap || !!x.transmissionMap || !!x.thicknessMap || !!x.specularIntensityMap || !!x.specularColorMap || !!x.sheenColorMap || !!x.sheenRoughnessMap,
      uvsVertexOnly: !(x.map || x.bumpMap || x.normalMap || x.specularMap || x.alphaMap || x.emissiveMap || x.roughnessMap || x.metalnessMap || x.clearcoatNormalMap || x.iridescenceMap || x.iridescenceThicknessMap || x.transmission > 0 || x.transmissionMap || x.thicknessMap || x.specularIntensityMap || x.specularColorMap || x.sheen > 0 || x.sheenColorMap || x.sheenRoughnessMap) && !!x.displacementMap,
      fog: !!U,
      useFog: x.fog === !0,
      fogExp2: U && U.isFogExp2,
      flatShading: !!x.flatShading,
      sizeAttenuation: x.sizeAttenuation,
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
      dithering: x.dithering,
      shadowMapEnabled: r.shadowMap.enabled && F.length > 0,
      shadowMapType: r.shadowMap.type,
      toneMapping: x.toneMapped ? r.toneMapping : $t,
      physicallyCorrectLights: r.physicallyCorrectLights,
      premultipliedAlpha: x.premultipliedAlpha,
      doubleSided: x.side === vi,
      flipSided: x.side === Lt,
      useDepthPacking: !!x.depthPacking,
      depthPacking: x.depthPacking || 0,
      index0AttributeName: x.index0AttributeName,
      extensionDerivatives: x.extensions && x.extensions.derivatives,
      extensionFragDepth: x.extensions && x.extensions.fragDepth,
      extensionDrawBuffers: x.extensions && x.extensions.drawBuffers,
      extensionShaderTextureLOD: x.extensions && x.extensions.shaderTextureLOD,
      rendererExtensionFragDepth: h || n.has("EXT_frag_depth"),
      rendererExtensionDrawBuffers: h || n.has("WEBGL_draw_buffers"),
      rendererExtensionShaderTextureLod: h || n.has("EXT_shader_texture_lod"),
      customProgramCacheKey: x.customProgramCacheKey()
    };
  }
  function d(x) {
    const A = [];
    if (x.shaderID ? A.push(x.shaderID) : (A.push(x.customVertexShaderID), A.push(x.customFragmentShaderID)), x.defines !== void 0)
      for (const F in x.defines)
        A.push(F), A.push(x.defines[F]);
    return x.isRawShaderMaterial === !1 && (_(A, x), S(A, x), A.push(r.outputEncoding)), A.push(x.customProgramCacheKey), A.join();
  }
  function _(x, A) {
    x.push(A.precision), x.push(A.outputEncoding), x.push(A.envMapMode), x.push(A.envMapCubeUVHeight), x.push(A.combine), x.push(A.vertexUvs), x.push(A.fogExp2), x.push(A.sizeAttenuation), x.push(A.morphTargetsCount), x.push(A.morphAttributeCount), x.push(A.numDirLights), x.push(A.numPointLights), x.push(A.numSpotLights), x.push(A.numSpotLightMaps), x.push(A.numHemiLights), x.push(A.numRectAreaLights), x.push(A.numDirLightShadows), x.push(A.numPointLightShadows), x.push(A.numSpotLightShadows), x.push(A.numSpotLightShadowsWithMaps), x.push(A.shadowMapType), x.push(A.toneMapping), x.push(A.numClippingPlanes), x.push(A.numClipIntersection), x.push(A.depthPacking);
  }
  function S(x, A) {
    a.disableAll(), A.isWebGL2 && a.enable(0), A.supportsVertexTextures && a.enable(1), A.instancing && a.enable(2), A.instancingColor && a.enable(3), A.map && a.enable(4), A.matcap && a.enable(5), A.envMap && a.enable(6), A.lightMap && a.enable(7), A.aoMap && a.enable(8), A.emissiveMap && a.enable(9), A.bumpMap && a.enable(10), A.normalMap && a.enable(11), A.objectSpaceNormalMap && a.enable(12), A.tangentSpaceNormalMap && a.enable(13), A.clearcoat && a.enable(14), A.clearcoatMap && a.enable(15), A.clearcoatRoughnessMap && a.enable(16), A.clearcoatNormalMap && a.enable(17), A.iridescence && a.enable(18), A.iridescenceMap && a.enable(19), A.iridescenceThicknessMap && a.enable(20), A.displacementMap && a.enable(21), A.specularMap && a.enable(22), A.roughnessMap && a.enable(23), A.metalnessMap && a.enable(24), A.gradientMap && a.enable(25), A.alphaMap && a.enable(26), A.alphaTest && a.enable(27), A.vertexColors && a.enable(28), A.vertexAlphas && a.enable(29), A.vertexUvs && a.enable(30), A.vertexTangents && a.enable(31), A.uvsVertexOnly && a.enable(32), x.push(a.mask), a.disableAll(), A.fog && a.enable(0), A.useFog && a.enable(1), A.flatShading && a.enable(2), A.logarithmicDepthBuffer && a.enable(3), A.skinning && a.enable(4), A.morphTargets && a.enable(5), A.morphNormals && a.enable(6), A.morphColors && a.enable(7), A.premultipliedAlpha && a.enable(8), A.shadowMapEnabled && a.enable(9), A.physicallyCorrectLights && a.enable(10), A.doubleSided && a.enable(11), A.flipSided && a.enable(12), A.useDepthPacking && a.enable(13), A.dithering && a.enable(14), A.specularIntensityMap && a.enable(15), A.specularColorMap && a.enable(16), A.transmission && a.enable(17), A.transmissionMap && a.enable(18), A.thicknessMap && a.enable(19), A.sheen && a.enable(20), A.sheenColorMap && a.enable(21), A.sheenRoughnessMap && a.enable(22), A.decodeVideoTexture && a.enable(23), A.opaque && a.enable(24), x.push(a.mask);
  }
  function y(x) {
    const A = g[x.type];
    let F;
    if (A) {
      const j = Ut[A];
      F = kl.clone(j.uniforms);
    } else
      F = x.uniforms;
    return F;
  }
  function b(x, A) {
    let F;
    for (let j = 0, J = l.length; j < J; j++) {
      const U = l[j];
      if (U.cacheKey === A) {
        F = U, ++F.usedTimes;
        break;
      }
    }
    return F === void 0 && (F = new $d(r, A, x, s), l.push(F)), F;
  }
  function T(x) {
    if (--x.usedTimes === 0) {
      const A = l.indexOf(x);
      l[A] = l[l.length - 1], l.pop(), x.destroy();
    }
  }
  function C(x) {
    c.remove(x);
  }
  function I() {
    c.dispose();
  }
  return {
    getParameters: p,
    getProgramCacheKey: d,
    getUniforms: y,
    acquireProgram: b,
    releaseProgram: T,
    releaseShaderCache: C,
    programs: l,
    dispose: I
  };
}
function tf() {
  let r = /* @__PURE__ */ new WeakMap();
  function e(s) {
    let o = r.get(s);
    return o === void 0 && (o = {}, r.set(s, o)), o;
  }
  function t(s) {
    r.delete(s);
  }
  function n(s, o, a) {
    r.get(s)[o] = a;
  }
  function i() {
    r = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    remove: t,
    update: n,
    dispose: i
  };
}
function nf(r, e) {
  return r.groupOrder !== e.groupOrder ? r.groupOrder - e.groupOrder : r.renderOrder !== e.renderOrder ? r.renderOrder - e.renderOrder : r.material.id !== e.material.id ? r.material.id - e.material.id : r.z !== e.z ? r.z - e.z : r.id - e.id;
}
function ya(r, e) {
  return r.groupOrder !== e.groupOrder ? r.groupOrder - e.groupOrder : r.renderOrder !== e.renderOrder ? r.renderOrder - e.renderOrder : r.z !== e.z ? e.z - r.z : r.id - e.id;
}
function ba() {
  const r = [];
  let e = 0;
  const t = [], n = [], i = [];
  function s() {
    e = 0, t.length = 0, n.length = 0, i.length = 0;
  }
  function o(u, f, m, g, p, d) {
    let _ = r[e];
    return _ === void 0 ? (_ = {
      id: u.id,
      object: u,
      geometry: f,
      material: m,
      groupOrder: g,
      renderOrder: u.renderOrder,
      z: p,
      group: d
    }, r[e] = _) : (_.id = u.id, _.object = u, _.geometry = f, _.material = m, _.groupOrder = g, _.renderOrder = u.renderOrder, _.z = p, _.group = d), e++, _;
  }
  function a(u, f, m, g, p, d) {
    const _ = o(u, f, m, g, p, d);
    m.transmission > 0 ? n.push(_) : m.transparent === !0 ? i.push(_) : t.push(_);
  }
  function c(u, f, m, g, p, d) {
    const _ = o(u, f, m, g, p, d);
    m.transmission > 0 ? n.unshift(_) : m.transparent === !0 ? i.unshift(_) : t.unshift(_);
  }
  function l(u, f) {
    t.length > 1 && t.sort(u || nf), n.length > 1 && n.sort(f || ya), i.length > 1 && i.sort(f || ya);
  }
  function h() {
    for (let u = e, f = r.length; u < f; u++) {
      const m = r[u];
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
    push: a,
    unshift: c,
    finish: h,
    sort: l
  };
}
function sf() {
  let r = /* @__PURE__ */ new WeakMap();
  function e(n, i) {
    const s = r.get(n);
    let o;
    return s === void 0 ? (o = new ba(), r.set(n, [o])) : i >= s.length ? (o = new ba(), s.push(o)) : o = s[i], o;
  }
  function t() {
    r = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    dispose: t
  };
}
function rf() {
  const r = {};
  return {
    get: function(e) {
      if (r[e.id] !== void 0)
        return r[e.id];
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
      return r[e.id] = t, t;
    }
  };
}
function af() {
  const r = {};
  return {
    get: function(e) {
      if (r[e.id] !== void 0)
        return r[e.id];
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
      return r[e.id] = t, t;
    }
  };
}
let of = 0;
function lf(r, e) {
  return (e.castShadow ? 2 : 0) - (r.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (r.map ? 1 : 0);
}
function cf(r, e) {
  const t = new rf(), n = af(), i = {
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
  const s = new D(), o = new ke(), a = new ke();
  function c(h, u) {
    let f = 0, m = 0, g = 0;
    for (let j = 0; j < 9; j++)
      i.probe[j].set(0, 0, 0);
    let p = 0, d = 0, _ = 0, S = 0, y = 0, b = 0, T = 0, C = 0, I = 0, x = 0;
    h.sort(lf);
    const A = u !== !0 ? Math.PI : 1;
    for (let j = 0, J = h.length; j < J; j++) {
      const U = h[j], N = U.color, q = U.intensity, Z = U.distance, Q = U.shadow && U.shadow.map ? U.shadow.map.texture : null;
      if (U.isAmbientLight)
        f += N.r * q * A, m += N.g * q * A, g += N.b * q * A;
      else if (U.isLightProbe)
        for (let X = 0; X < 9; X++)
          i.probe[X].addScaledVector(U.sh.coefficients[X], q);
      else if (U.isDirectionalLight) {
        const X = t.get(U);
        if (X.color.copy(U.color).multiplyScalar(U.intensity * A), U.castShadow) {
          const ee = U.shadow, Y = n.get(U);
          Y.shadowBias = ee.bias, Y.shadowNormalBias = ee.normalBias, Y.shadowRadius = ee.radius, Y.shadowMapSize = ee.mapSize, i.directionalShadow[p] = Y, i.directionalShadowMap[p] = Q, i.directionalShadowMatrix[p] = U.shadow.matrix, b++;
        }
        i.directional[p] = X, p++;
      } else if (U.isSpotLight) {
        const X = t.get(U);
        X.position.setFromMatrixPosition(U.matrixWorld), X.color.copy(N).multiplyScalar(q * A), X.distance = Z, X.coneCos = Math.cos(U.angle), X.penumbraCos = Math.cos(U.angle * (1 - U.penumbra)), X.decay = U.decay, i.spot[_] = X;
        const ee = U.shadow;
        if (U.map && (i.spotLightMap[I] = U.map, I++, ee.updateMatrices(U), U.castShadow && x++), i.spotLightMatrix[_] = ee.matrix, U.castShadow) {
          const Y = n.get(U);
          Y.shadowBias = ee.bias, Y.shadowNormalBias = ee.normalBias, Y.shadowRadius = ee.radius, Y.shadowMapSize = ee.mapSize, i.spotShadow[_] = Y, i.spotShadowMap[_] = Q, C++;
        }
        _++;
      } else if (U.isRectAreaLight) {
        const X = t.get(U);
        X.color.copy(N).multiplyScalar(q), X.halfWidth.set(U.width * 0.5, 0, 0), X.halfHeight.set(0, U.height * 0.5, 0), i.rectArea[S] = X, S++;
      } else if (U.isPointLight) {
        const X = t.get(U);
        if (X.color.copy(U.color).multiplyScalar(U.intensity * A), X.distance = U.distance, X.decay = U.decay, U.castShadow) {
          const ee = U.shadow, Y = n.get(U);
          Y.shadowBias = ee.bias, Y.shadowNormalBias = ee.normalBias, Y.shadowRadius = ee.radius, Y.shadowMapSize = ee.mapSize, Y.shadowCameraNear = ee.camera.near, Y.shadowCameraFar = ee.camera.far, i.pointShadow[d] = Y, i.pointShadowMap[d] = Q, i.pointShadowMatrix[d] = U.shadow.matrix, T++;
        }
        i.point[d] = X, d++;
      } else if (U.isHemisphereLight) {
        const X = t.get(U);
        X.skyColor.copy(U.color).multiplyScalar(q * A), X.groundColor.copy(U.groundColor).multiplyScalar(q * A), i.hemi[y] = X, y++;
      }
    }
    S > 0 && (e.isWebGL2 || r.has("OES_texture_float_linear") === !0 ? (i.rectAreaLTC1 = ie.LTC_FLOAT_1, i.rectAreaLTC2 = ie.LTC_FLOAT_2) : r.has("OES_texture_half_float_linear") === !0 ? (i.rectAreaLTC1 = ie.LTC_HALF_1, i.rectAreaLTC2 = ie.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")), i.ambient[0] = f, i.ambient[1] = m, i.ambient[2] = g;
    const F = i.hash;
    (F.directionalLength !== p || F.pointLength !== d || F.spotLength !== _ || F.rectAreaLength !== S || F.hemiLength !== y || F.numDirectionalShadows !== b || F.numPointShadows !== T || F.numSpotShadows !== C || F.numSpotMaps !== I) && (i.directional.length = p, i.spot.length = _, i.rectArea.length = S, i.point.length = d, i.hemi.length = y, i.directionalShadow.length = b, i.directionalShadowMap.length = b, i.pointShadow.length = T, i.pointShadowMap.length = T, i.spotShadow.length = C, i.spotShadowMap.length = C, i.directionalShadowMatrix.length = b, i.pointShadowMatrix.length = T, i.spotLightMatrix.length = C + I - x, i.spotLightMap.length = I, i.numSpotLightShadowsWithMaps = x, F.directionalLength = p, F.pointLength = d, F.spotLength = _, F.rectAreaLength = S, F.hemiLength = y, F.numDirectionalShadows = b, F.numPointShadows = T, F.numSpotShadows = C, F.numSpotMaps = I, i.version = of++);
  }
  function l(h, u) {
    let f = 0, m = 0, g = 0, p = 0, d = 0;
    const _ = u.matrixWorldInverse;
    for (let S = 0, y = h.length; S < y; S++) {
      const b = h[S];
      if (b.isDirectionalLight) {
        const T = i.directional[f];
        T.direction.setFromMatrixPosition(b.matrixWorld), s.setFromMatrixPosition(b.target.matrixWorld), T.direction.sub(s), T.direction.transformDirection(_), f++;
      } else if (b.isSpotLight) {
        const T = i.spot[g];
        T.position.setFromMatrixPosition(b.matrixWorld), T.position.applyMatrix4(_), T.direction.setFromMatrixPosition(b.matrixWorld), s.setFromMatrixPosition(b.target.matrixWorld), T.direction.sub(s), T.direction.transformDirection(_), g++;
      } else if (b.isRectAreaLight) {
        const T = i.rectArea[p];
        T.position.setFromMatrixPosition(b.matrixWorld), T.position.applyMatrix4(_), a.identity(), o.copy(b.matrixWorld), o.premultiply(_), a.extractRotation(o), T.halfWidth.set(b.width * 0.5, 0, 0), T.halfHeight.set(0, b.height * 0.5, 0), T.halfWidth.applyMatrix4(a), T.halfHeight.applyMatrix4(a), p++;
      } else if (b.isPointLight) {
        const T = i.point[m];
        T.position.setFromMatrixPosition(b.matrixWorld), T.position.applyMatrix4(_), m++;
      } else if (b.isHemisphereLight) {
        const T = i.hemi[d];
        T.direction.setFromMatrixPosition(b.matrixWorld), T.direction.transformDirection(_), d++;
      }
    }
  }
  return {
    setup: c,
    setupView: l,
    state: i
  };
}
function Sa(r, e) {
  const t = new cf(r, e), n = [], i = [];
  function s() {
    n.length = 0, i.length = 0;
  }
  function o(u) {
    n.push(u);
  }
  function a(u) {
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
    pushShadow: a
  };
}
function hf(r, e) {
  let t = /* @__PURE__ */ new WeakMap();
  function n(s, o = 0) {
    const a = t.get(s);
    let c;
    return a === void 0 ? (c = new Sa(r, e), t.set(s, [c])) : o >= a.length ? (c = new Sa(r, e), a.push(c)) : c = a[o], c;
  }
  function i() {
    t = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: i
  };
}
class uf extends kt {
  constructor(e) {
    super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = bl, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
  }
}
class df extends kt {
  constructor(e) {
    super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.referencePosition = new D(), this.nearDistance = 1, this.farDistance = 1e3, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.referencePosition.copy(e.referencePosition), this.nearDistance = e.nearDistance, this.farDistance = e.farDistance, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
  }
}
const ff = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, pf = `uniform sampler2D shadow_pass;
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
function mf(r, e, t) {
  let n = new or();
  const i = new ye(), s = new ye(), o = new tt(), a = new uf({ depthPacking: Sl }), c = new df(), l = {}, h = t.maxTextureSize, u = { 0: Lt, 1: nn, 2: vi }, f = new bn({
    defines: {
      VSM_SAMPLES: 8
    },
    uniforms: {
      shadow_pass: { value: null },
      resolution: { value: new ye() },
      radius: { value: 4 }
    },
    vertexShader: ff,
    fragmentShader: pf
  }), m = f.clone();
  m.defines.HORIZONTAL_PASS = 1;
  const g = new Dt();
  g.setAttribute(
    "position",
    new Bt(
      new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]),
      3
    )
  );
  const p = new Mt(g, f), d = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = Xa, this.render = function(b, T, C) {
    if (d.enabled === !1 || d.autoUpdate === !1 && d.needsUpdate === !1 || b.length === 0)
      return;
    const I = r.getRenderTarget(), x = r.getActiveCubeFace(), A = r.getActiveMipmapLevel(), F = r.state;
    F.setBlending(tn), F.buffers.color.setClear(1, 1, 1, 1), F.buffers.depth.setTest(!0), F.setScissorTest(!1);
    for (let j = 0, J = b.length; j < J; j++) {
      const U = b[j], N = U.shadow;
      if (N === void 0) {
        console.warn("THREE.WebGLShadowMap:", U, "has no shadow.");
        continue;
      }
      if (N.autoUpdate === !1 && N.needsUpdate === !1)
        continue;
      i.copy(N.mapSize);
      const q = N.getFrameExtents();
      if (i.multiply(q), s.copy(N.mapSize), (i.x > h || i.y > h) && (i.x > h && (s.x = Math.floor(h / q.x), i.x = s.x * q.x, N.mapSize.x = s.x), i.y > h && (s.y = Math.floor(h / q.y), i.y = s.y * q.y, N.mapSize.y = s.y)), N.map === null) {
        const Q = this.type !== oi ? { minFilter: ct, magFilter: ct } : {};
        N.map = new Mn(i.x, i.y, Q), N.map.texture.name = U.name + ".shadowMap", N.camera.updateProjectionMatrix();
      }
      r.setRenderTarget(N.map), r.clear();
      const Z = N.getViewportCount();
      for (let Q = 0; Q < Z; Q++) {
        const X = N.getViewport(Q);
        o.set(
          s.x * X.x,
          s.y * X.y,
          s.x * X.z,
          s.y * X.w
        ), F.viewport(o), N.updateMatrices(U, Q), n = N.getFrustum(), y(T, C, N.camera, U, this.type);
      }
      N.isPointLightShadow !== !0 && this.type === oi && _(N, C), N.needsUpdate = !1;
    }
    d.needsUpdate = !1, r.setRenderTarget(I, x, A);
  };
  function _(b, T) {
    const C = e.update(p);
    f.defines.VSM_SAMPLES !== b.blurSamples && (f.defines.VSM_SAMPLES = b.blurSamples, m.defines.VSM_SAMPLES = b.blurSamples, f.needsUpdate = !0, m.needsUpdate = !0), b.mapPass === null && (b.mapPass = new Mn(i.x, i.y)), f.uniforms.shadow_pass.value = b.map.texture, f.uniforms.resolution.value = b.mapSize, f.uniforms.radius.value = b.radius, r.setRenderTarget(b.mapPass), r.clear(), r.renderBufferDirect(T, null, C, f, p, null), m.uniforms.shadow_pass.value = b.mapPass.texture, m.uniforms.resolution.value = b.mapSize, m.uniforms.radius.value = b.radius, r.setRenderTarget(b.map), r.clear(), r.renderBufferDirect(T, null, C, m, p, null);
  }
  function S(b, T, C, I, x, A) {
    let F = null;
    const j = C.isPointLight === !0 ? b.customDistanceMaterial : b.customDepthMaterial;
    if (j !== void 0)
      F = j;
    else if (F = C.isPointLight === !0 ? c : a, r.localClippingEnabled && T.clipShadows === !0 && Array.isArray(T.clippingPlanes) && T.clippingPlanes.length !== 0 || T.displacementMap && T.displacementScale !== 0 || T.alphaMap && T.alphaTest > 0 || T.map && T.alphaTest > 0) {
      const J = F.uuid, U = T.uuid;
      let N = l[J];
      N === void 0 && (N = {}, l[J] = N);
      let q = N[U];
      q === void 0 && (q = F.clone(), N[U] = q), F = q;
    }
    return F.visible = T.visible, F.wireframe = T.wireframe, A === oi ? F.side = T.shadowSide !== null ? T.shadowSide : T.side : F.side = T.shadowSide !== null ? T.shadowSide : u[T.side], F.alphaMap = T.alphaMap, F.alphaTest = T.alphaTest, F.map = T.map, F.clipShadows = T.clipShadows, F.clippingPlanes = T.clippingPlanes, F.clipIntersection = T.clipIntersection, F.displacementMap = T.displacementMap, F.displacementScale = T.displacementScale, F.displacementBias = T.displacementBias, F.wireframeLinewidth = T.wireframeLinewidth, F.linewidth = T.linewidth, C.isPointLight === !0 && F.isMeshDistanceMaterial === !0 && (F.referencePosition.setFromMatrixPosition(C.matrixWorld), F.nearDistance = I, F.farDistance = x), F;
  }
  function y(b, T, C, I, x) {
    if (b.visible === !1)
      return;
    if (b.layers.test(T.layers) && (b.isMesh || b.isLine || b.isPoints) && (b.castShadow || b.receiveShadow && x === oi) && (!b.frustumCulled || n.intersectsObject(b))) {
      b.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse, b.matrixWorld);
      const j = e.update(b), J = b.material;
      if (Array.isArray(J)) {
        const U = j.groups;
        for (let N = 0, q = U.length; N < q; N++) {
          const Z = U[N], Q = J[Z.materialIndex];
          if (Q && Q.visible) {
            const X = S(b, Q, I, C.near, C.far, x);
            r.renderBufferDirect(C, null, j, X, b, Z);
          }
        }
      } else if (J.visible) {
        const U = S(b, J, I, C.near, C.far, x);
        r.renderBufferDirect(C, null, j, U, b, null);
      }
    }
    const F = b.children;
    for (let j = 0, J = F.length; j < J; j++)
      y(F[j], T, C, I, x);
  }
}
function gf(r, e, t) {
  const n = t.isWebGL2;
  function i() {
    let L = !1;
    const k = new tt();
    let $ = null;
    const ce = new tt(0, 0, 0, 0);
    return {
      setMask: function(me) {
        $ !== me && !L && (r.colorMask(me, me, me, me), $ = me);
      },
      setLocked: function(me) {
        L = me;
      },
      setClear: function(me, Ne, Je, it, sn) {
        sn === !0 && (me *= it, Ne *= it, Je *= it), k.set(me, Ne, Je, it), ce.equals(k) === !1 && (r.clearColor(me, Ne, Je, it), ce.copy(k));
      },
      reset: function() {
        L = !1, $ = null, ce.set(-1, 0, 0, 0);
      }
    };
  }
  function s() {
    let L = !1, k = null, $ = null, ce = null;
    return {
      setTest: function(me) {
        me ? Ae(2929) : de(2929);
      },
      setMask: function(me) {
        k !== me && !L && (r.depthMask(me), k = me);
      },
      setFunc: function(me) {
        if ($ !== me) {
          switch (me) {
            case Xo:
              r.depthFunc(512);
              break;
            case jo:
              r.depthFunc(519);
              break;
            case Yo:
              r.depthFunc(513);
              break;
            case qs:
              r.depthFunc(515);
              break;
            case Zo:
              r.depthFunc(514);
              break;
            case $o:
              r.depthFunc(518);
              break;
            case Ko:
              r.depthFunc(516);
              break;
            case Jo:
              r.depthFunc(517);
              break;
            default:
              r.depthFunc(515);
          }
          $ = me;
        }
      },
      setLocked: function(me) {
        L = me;
      },
      setClear: function(me) {
        ce !== me && (r.clearDepth(me), ce = me);
      },
      reset: function() {
        L = !1, k = null, $ = null, ce = null;
      }
    };
  }
  function o() {
    let L = !1, k = null, $ = null, ce = null, me = null, Ne = null, Je = null, it = null, sn = null;
    return {
      setTest: function(Be) {
        L || (Be ? Ae(2960) : de(2960));
      },
      setMask: function(Be) {
        k !== Be && !L && (r.stencilMask(Be), k = Be);
      },
      setFunc: function(Be, Gt, bt) {
        ($ !== Be || ce !== Gt || me !== bt) && (r.stencilFunc(Be, Gt, bt), $ = Be, ce = Gt, me = bt);
      },
      setOp: function(Be, Gt, bt) {
        (Ne !== Be || Je !== Gt || it !== bt) && (r.stencilOp(Be, Gt, bt), Ne = Be, Je = Gt, it = bt);
      },
      setLocked: function(Be) {
        L = Be;
      },
      setClear: function(Be) {
        sn !== Be && (r.clearStencil(Be), sn = Be);
      },
      reset: function() {
        L = !1, k = null, $ = null, ce = null, me = null, Ne = null, Je = null, it = null, sn = null;
      }
    };
  }
  const a = new i(), c = new s(), l = new o(), h = /* @__PURE__ */ new WeakMap(), u = /* @__PURE__ */ new WeakMap();
  let f = {}, m = {}, g = /* @__PURE__ */ new WeakMap(), p = [], d = null, _ = !1, S = null, y = null, b = null, T = null, C = null, I = null, x = null, A = !1, F = null, j = null, J = null, U = null, N = null;
  const q = r.getParameter(35661);
  let Z = !1, Q = 0;
  const X = r.getParameter(7938);
  X.indexOf("WebGL") !== -1 ? (Q = parseFloat(/^WebGL (\d)/.exec(X)[1]), Z = Q >= 1) : X.indexOf("OpenGL ES") !== -1 && (Q = parseFloat(/^OpenGL ES (\d)/.exec(X)[1]), Z = Q >= 2);
  let ee = null, Y = {};
  const V = r.getParameter(3088), z = r.getParameter(2978), se = new tt().fromArray(V), te = new tt().fromArray(z);
  function re(L, k, $) {
    const ce = new Uint8Array(4), me = r.createTexture();
    r.bindTexture(L, me), r.texParameteri(L, 10241, 9728), r.texParameteri(L, 10240, 9728);
    for (let Ne = 0; Ne < $; Ne++)
      r.texImage2D(k + Ne, 0, 6408, 1, 1, 0, 6408, 5121, ce);
    return me;
  }
  const H = {};
  H[3553] = re(3553, 3553, 1), H[34067] = re(34067, 34069, 6), a.setClear(0, 0, 0, 1), c.setClear(1), l.setClear(0), Ae(2929), c.setFunc(qs), Xe(!1), rt(pr), Ae(2884), Ke(tn);
  function Ae(L) {
    f[L] !== !0 && (r.enable(L), f[L] = !0);
  }
  function de(L) {
    f[L] !== !1 && (r.disable(L), f[L] = !1);
  }
  function _e(L, k) {
    return m[L] !== k ? (r.bindFramebuffer(L, k), m[L] = k, n && (L === 36009 && (m[36160] = k), L === 36160 && (m[36009] = k)), !0) : !1;
  }
  function ue(L, k) {
    let $ = p, ce = !1;
    if (L)
      if ($ = g.get(k), $ === void 0 && ($ = [], g.set(k, $)), L.isWebGLMultipleRenderTargets) {
        const me = L.texture;
        if ($.length !== me.length || $[0] !== 36064) {
          for (let Ne = 0, Je = me.length; Ne < Je; Ne++)
            $[Ne] = 36064 + Ne;
          $.length = me.length, ce = !0;
        }
      } else
        $[0] !== 36064 && ($[0] = 36064, ce = !0);
    else
      $[0] !== 1029 && ($[0] = 1029, ce = !0);
    ce && (t.isWebGL2 ? r.drawBuffers($) : e.get("WEBGL_draw_buffers").drawBuffersWEBGL($));
  }
  function Fe(L) {
    return d !== L ? (r.useProgram(L), d = L, !0) : !1;
  }
  const be = {
    [Vn]: 32774,
    [No]: 32778,
    [Oo]: 32779
  };
  if (n)
    be[xr] = 32775, be[vr] = 32776;
  else {
    const L = e.get("EXT_blend_minmax");
    L !== null && (be[xr] = L.MIN_EXT, be[vr] = L.MAX_EXT);
  }
  const xe = {
    [Uo]: 0,
    [zo]: 1,
    [Bo]: 768,
    [ja]: 770,
    [qo]: 776,
    [Ho]: 774,
    [Go]: 772,
    [ko]: 769,
    [Ya]: 771,
    [Wo]: 775,
    [Vo]: 773
  };
  function Ke(L, k, $, ce, me, Ne, Je, it) {
    if (L === tn) {
      _ === !0 && (de(3042), _ = !1);
      return;
    }
    if (_ === !1 && (Ae(3042), _ = !0), L !== Fo) {
      if (L !== S || it !== A) {
        if ((y !== Vn || C !== Vn) && (r.blendEquation(32774), y = Vn, C = Vn), it)
          switch (L) {
            case qn:
              r.blendFuncSeparate(1, 771, 1, 771);
              break;
            case mr:
              r.blendFunc(1, 1);
              break;
            case gr:
              r.blendFuncSeparate(0, 769, 0, 1);
              break;
            case _r:
              r.blendFuncSeparate(0, 768, 0, 770);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", L);
              break;
          }
        else
          switch (L) {
            case qn:
              r.blendFuncSeparate(770, 771, 1, 771);
              break;
            case mr:
              r.blendFunc(770, 1);
              break;
            case gr:
              r.blendFuncSeparate(0, 769, 0, 1);
              break;
            case _r:
              r.blendFunc(0, 768);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", L);
              break;
          }
        b = null, T = null, I = null, x = null, S = L, A = it;
      }
      return;
    }
    me = me || k, Ne = Ne || $, Je = Je || ce, (k !== y || me !== C) && (r.blendEquationSeparate(be[k], be[me]), y = k, C = me), ($ !== b || ce !== T || Ne !== I || Je !== x) && (r.blendFuncSeparate(xe[$], xe[ce], xe[Ne], xe[Je]), b = $, T = ce, I = Ne, x = Je), S = L, A = !1;
  }
  function qe(L, k) {
    L.side === vi ? de(2884) : Ae(2884);
    let $ = L.side === Lt;
    k && ($ = !$), Xe($), L.blending === qn && L.transparent === !1 ? Ke(tn) : Ke(L.blending, L.blendEquation, L.blendSrc, L.blendDst, L.blendEquationAlpha, L.blendSrcAlpha, L.blendDstAlpha, L.premultipliedAlpha), c.setFunc(L.depthFunc), c.setTest(L.depthTest), c.setMask(L.depthWrite), a.setMask(L.colorWrite);
    const ce = L.stencilWrite;
    l.setTest(ce), ce && (l.setMask(L.stencilWriteMask), l.setFunc(L.stencilFunc, L.stencilRef, L.stencilFuncMask), l.setOp(L.stencilFail, L.stencilZFail, L.stencilZPass)), Oe(L.polygonOffset, L.polygonOffsetFactor, L.polygonOffsetUnits), L.alphaToCoverage === !0 ? Ae(32926) : de(32926);
  }
  function Xe(L) {
    F !== L && (L ? r.frontFace(2304) : r.frontFace(2305), F = L);
  }
  function rt(L) {
    L !== Po ? (Ae(2884), L !== j && (L === pr ? r.cullFace(1029) : L === Ro ? r.cullFace(1028) : r.cullFace(1032))) : de(2884), j = L;
  }
  function Ge(L) {
    L !== J && (Z && r.lineWidth(L), J = L);
  }
  function Oe(L, k, $) {
    L ? (Ae(32823), (U !== k || N !== $) && (r.polygonOffset(k, $), U = k, N = $)) : de(32823);
  }
  function yt(L) {
    L ? Ae(3089) : de(3089);
  }
  function ht(L) {
    L === void 0 && (L = 33984 + q - 1), ee !== L && (r.activeTexture(L), ee = L);
  }
  function w(L, k, $) {
    $ === void 0 && (ee === null ? $ = 33984 + q - 1 : $ = ee);
    let ce = Y[$];
    ce === void 0 && (ce = { type: void 0, texture: void 0 }, Y[$] = ce), (ce.type !== L || ce.texture !== k) && (ee !== $ && (r.activeTexture($), ee = $), r.bindTexture(L, k || H[L]), ce.type = L, ce.texture = k);
  }
  function v() {
    const L = Y[ee];
    L !== void 0 && L.type !== void 0 && (r.bindTexture(L.type, null), L.type = void 0, L.texture = void 0);
  }
  function B() {
    try {
      r.compressedTexImage2D.apply(r, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function K() {
    try {
      r.compressedTexImage3D.apply(r, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function ne() {
    try {
      r.texSubImage2D.apply(r, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function ae() {
    try {
      r.texSubImage3D.apply(r, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function ve() {
    try {
      r.compressedTexSubImage2D.apply(r, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function E() {
    try {
      r.compressedTexSubImage3D.apply(r, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function P() {
    try {
      r.texStorage2D.apply(r, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function le() {
    try {
      r.texStorage3D.apply(r, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function he() {
    try {
      r.texImage2D.apply(r, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function oe() {
    try {
      r.texImage3D.apply(r, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function pe(L) {
    se.equals(L) === !1 && (r.scissor(L.x, L.y, L.z, L.w), se.copy(L));
  }
  function fe(L) {
    te.equals(L) === !1 && (r.viewport(L.x, L.y, L.z, L.w), te.copy(L));
  }
  function Ce(L, k) {
    let $ = u.get(k);
    $ === void 0 && ($ = /* @__PURE__ */ new WeakMap(), u.set(k, $));
    let ce = $.get(L);
    ce === void 0 && (ce = r.getUniformBlockIndex(k, L.name), $.set(L, ce));
  }
  function Le(L, k) {
    const ce = u.get(k).get(L);
    h.get(k) !== ce && (r.uniformBlockBinding(k, ce, L.__bindingPointIndex), h.set(k, ce));
  }
  function Ue() {
    r.disable(3042), r.disable(2884), r.disable(2929), r.disable(32823), r.disable(3089), r.disable(2960), r.disable(32926), r.blendEquation(32774), r.blendFunc(1, 0), r.blendFuncSeparate(1, 0, 1, 0), r.colorMask(!0, !0, !0, !0), r.clearColor(0, 0, 0, 0), r.depthMask(!0), r.depthFunc(513), r.clearDepth(1), r.stencilMask(4294967295), r.stencilFunc(519, 0, 4294967295), r.stencilOp(7680, 7680, 7680), r.clearStencil(0), r.cullFace(1029), r.frontFace(2305), r.polygonOffset(0, 0), r.activeTexture(33984), r.bindFramebuffer(36160, null), n === !0 && (r.bindFramebuffer(36009, null), r.bindFramebuffer(36008, null)), r.useProgram(null), r.lineWidth(1), r.scissor(0, 0, r.canvas.width, r.canvas.height), r.viewport(0, 0, r.canvas.width, r.canvas.height), f = {}, ee = null, Y = {}, m = {}, g = /* @__PURE__ */ new WeakMap(), p = [], d = null, _ = !1, S = null, y = null, b = null, T = null, C = null, I = null, x = null, A = !1, F = null, j = null, J = null, U = null, N = null, se.set(0, 0, r.canvas.width, r.canvas.height), te.set(0, 0, r.canvas.width, r.canvas.height), a.reset(), c.reset(), l.reset();
  }
  return {
    buffers: {
      color: a,
      depth: c,
      stencil: l
    },
    enable: Ae,
    disable: de,
    bindFramebuffer: _e,
    drawBuffers: ue,
    useProgram: Fe,
    setBlending: Ke,
    setMaterial: qe,
    setFlipSided: Xe,
    setCullFace: rt,
    setLineWidth: Ge,
    setPolygonOffset: Oe,
    setScissorTest: yt,
    activeTexture: ht,
    bindTexture: w,
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
    reset: Ue
  };
}
function _f(r, e, t, n, i, s, o) {
  const a = i.isWebGL2, c = i.maxTextures, l = i.maxCubemapSize, h = i.maxTextureSize, u = i.maxSamples, f = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, m = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), g = /* @__PURE__ */ new WeakMap();
  let p;
  const d = /* @__PURE__ */ new WeakMap();
  let _ = !1;
  try {
    _ = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function S(w, v) {
    return _ ? new OffscreenCanvas(w, v) : xi("canvas");
  }
  function y(w, v, B, K) {
    let ne = 1;
    if ((w.width > K || w.height > K) && (ne = K / Math.max(w.width, w.height)), ne < 1 || v === !0)
      if (typeof HTMLImageElement < "u" && w instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && w instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && w instanceof ImageBitmap) {
        const ae = v ? $s : Math.floor, ve = ae(ne * w.width), E = ae(ne * w.height);
        p === void 0 && (p = S(ve, E));
        const P = B ? S(ve, E) : p;
        return P.width = ve, P.height = E, P.getContext("2d").drawImage(w, 0, 0, ve, E), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + w.width + "x" + w.height + ") to (" + ve + "x" + E + ")."), P;
      } else
        return "data" in w && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + w.width + "x" + w.height + ")."), w;
    return w;
  }
  function b(w) {
    return qr(w.width) && qr(w.height);
  }
  function T(w) {
    return a ? !1 : w.wrapS !== Ft || w.wrapT !== Ft || w.minFilter !== ct && w.minFilter !== At;
  }
  function C(w, v) {
    return w.generateMipmaps && v && w.minFilter !== ct && w.minFilter !== At;
  }
  function I(w) {
    r.generateMipmap(w);
  }
  function x(w, v, B, K, ne = !1) {
    if (a === !1)
      return v;
    if (w !== null) {
      if (r[w] !== void 0)
        return r[w];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + w + "'");
    }
    let ae = v;
    return v === 6403 && (B === 5126 && (ae = 33326), B === 5131 && (ae = 33325), B === 5121 && (ae = 33321)), v === 33319 && (B === 5126 && (ae = 33328), B === 5131 && (ae = 33327), B === 5121 && (ae = 33323)), v === 6408 && (B === 5126 && (ae = 34836), B === 5131 && (ae = 34842), B === 5121 && (ae = K === ze && ne === !1 ? 35907 : 32856), B === 32819 && (ae = 32854), B === 32820 && (ae = 32855)), (ae === 33325 || ae === 33326 || ae === 33327 || ae === 33328 || ae === 34842 || ae === 34836) && e.get("EXT_color_buffer_float"), ae;
  }
  function A(w, v, B) {
    return C(w, B) === !0 || w.isFramebufferTexture && w.minFilter !== ct && w.minFilter !== At ? Math.log2(Math.max(v.width, v.height)) + 1 : w.mipmaps !== void 0 && w.mipmaps.length > 0 ? w.mipmaps.length : w.isCompressedTexture && Array.isArray(w.image) ? v.mipmaps.length : 1;
  }
  function F(w) {
    return w === ct || w === Mr || w === ls ? 9728 : 9729;
  }
  function j(w) {
    const v = w.target;
    v.removeEventListener("dispose", j), U(v), v.isVideoTexture && g.delete(v);
  }
  function J(w) {
    const v = w.target;
    v.removeEventListener("dispose", J), q(v);
  }
  function U(w) {
    const v = n.get(w);
    if (v.__webglInit === void 0)
      return;
    const B = w.source, K = d.get(B);
    if (K) {
      const ne = K[v.__cacheKey];
      ne.usedTimes--, ne.usedTimes === 0 && N(w), Object.keys(K).length === 0 && d.delete(B);
    }
    n.remove(w);
  }
  function N(w) {
    const v = n.get(w);
    r.deleteTexture(v.__webglTexture);
    const B = w.source, K = d.get(B);
    delete K[v.__cacheKey], o.memory.textures--;
  }
  function q(w) {
    const v = w.texture, B = n.get(w), K = n.get(v);
    if (K.__webglTexture !== void 0 && (r.deleteTexture(K.__webglTexture), o.memory.textures--), w.depthTexture && w.depthTexture.dispose(), w.isWebGLCubeRenderTarget)
      for (let ne = 0; ne < 6; ne++)
        r.deleteFramebuffer(B.__webglFramebuffer[ne]), B.__webglDepthbuffer && r.deleteRenderbuffer(B.__webglDepthbuffer[ne]);
    else {
      if (r.deleteFramebuffer(B.__webglFramebuffer), B.__webglDepthbuffer && r.deleteRenderbuffer(B.__webglDepthbuffer), B.__webglMultisampledFramebuffer && r.deleteFramebuffer(B.__webglMultisampledFramebuffer), B.__webglColorRenderbuffer)
        for (let ne = 0; ne < B.__webglColorRenderbuffer.length; ne++)
          B.__webglColorRenderbuffer[ne] && r.deleteRenderbuffer(B.__webglColorRenderbuffer[ne]);
      B.__webglDepthRenderbuffer && r.deleteRenderbuffer(B.__webglDepthRenderbuffer);
    }
    if (w.isWebGLMultipleRenderTargets)
      for (let ne = 0, ae = v.length; ne < ae; ne++) {
        const ve = n.get(v[ne]);
        ve.__webglTexture && (r.deleteTexture(ve.__webglTexture), o.memory.textures--), n.remove(v[ne]);
      }
    n.remove(v), n.remove(w);
  }
  let Z = 0;
  function Q() {
    Z = 0;
  }
  function X() {
    const w = Z;
    return w >= c && console.warn("THREE.WebGLTextures: Trying to use " + w + " texture units while this GPU supports only " + c), Z += 1, w;
  }
  function ee(w) {
    const v = [];
    return v.push(w.wrapS), v.push(w.wrapT), v.push(w.wrapR || 0), v.push(w.magFilter), v.push(w.minFilter), v.push(w.anisotropy), v.push(w.internalFormat), v.push(w.format), v.push(w.type), v.push(w.generateMipmaps), v.push(w.premultiplyAlpha), v.push(w.flipY), v.push(w.unpackAlignment), v.push(w.encoding), v.join();
  }
  function Y(w, v) {
    const B = n.get(w);
    if (w.isVideoTexture && yt(w), w.isRenderTargetTexture === !1 && w.version > 0 && B.__version !== w.version) {
      const K = w.image;
      if (K === null)
        console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else if (K.complete === !1)
        console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        de(B, w, v);
        return;
      }
    }
    t.bindTexture(3553, B.__webglTexture, 33984 + v);
  }
  function V(w, v) {
    const B = n.get(w);
    if (w.version > 0 && B.__version !== w.version) {
      de(B, w, v);
      return;
    }
    t.bindTexture(35866, B.__webglTexture, 33984 + v);
  }
  function z(w, v) {
    const B = n.get(w);
    if (w.version > 0 && B.__version !== w.version) {
      de(B, w, v);
      return;
    }
    t.bindTexture(32879, B.__webglTexture, 33984 + v);
  }
  function se(w, v) {
    const B = n.get(w);
    if (w.version > 0 && B.__version !== w.version) {
      _e(B, w, v);
      return;
    }
    t.bindTexture(34067, B.__webglTexture, 33984 + v);
  }
  const te = {
    [Ki]: 10497,
    [Ft]: 33071,
    [Ys]: 33648
  }, re = {
    [ct]: 9728,
    [Mr]: 9984,
    [ls]: 9986,
    [At]: 9729,
    [al]: 9985,
    [mi]: 9987
  };
  function H(w, v, B) {
    if (B ? (r.texParameteri(w, 10242, te[v.wrapS]), r.texParameteri(w, 10243, te[v.wrapT]), (w === 32879 || w === 35866) && r.texParameteri(w, 32882, te[v.wrapR]), r.texParameteri(w, 10240, re[v.magFilter]), r.texParameteri(w, 10241, re[v.minFilter])) : (r.texParameteri(w, 10242, 33071), r.texParameteri(w, 10243, 33071), (w === 32879 || w === 35866) && r.texParameteri(w, 32882, 33071), (v.wrapS !== Ft || v.wrapT !== Ft) && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), r.texParameteri(w, 10240, F(v.magFilter)), r.texParameteri(w, 10241, F(v.minFilter)), v.minFilter !== ct && v.minFilter !== At && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), e.has("EXT_texture_filter_anisotropic") === !0) {
      const K = e.get("EXT_texture_filter_anisotropic");
      if (v.magFilter === ct || v.minFilter !== ls && v.minFilter !== mi || v.type === mn && e.has("OES_texture_float_linear") === !1 || a === !1 && v.type === gi && e.has("OES_texture_half_float_linear") === !1)
        return;
      (v.anisotropy > 1 || n.get(v).__currentAnisotropy) && (r.texParameterf(w, K.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(v.anisotropy, i.getMaxAnisotropy())), n.get(v).__currentAnisotropy = v.anisotropy);
    }
  }
  function Ae(w, v) {
    let B = !1;
    w.__webglInit === void 0 && (w.__webglInit = !0, v.addEventListener("dispose", j));
    const K = v.source;
    let ne = d.get(K);
    ne === void 0 && (ne = {}, d.set(K, ne));
    const ae = ee(v);
    if (ae !== w.__cacheKey) {
      ne[ae] === void 0 && (ne[ae] = {
        texture: r.createTexture(),
        usedTimes: 0
      }, o.memory.textures++, B = !0), ne[ae].usedTimes++;
      const ve = ne[w.__cacheKey];
      ve !== void 0 && (ne[w.__cacheKey].usedTimes--, ve.usedTimes === 0 && N(v)), w.__cacheKey = ae, w.__webglTexture = ne[ae].texture;
    }
    return B;
  }
  function de(w, v, B) {
    let K = 3553;
    (v.isDataArrayTexture || v.isCompressedArrayTexture) && (K = 35866), v.isData3DTexture && (K = 32879);
    const ne = Ae(w, v), ae = v.source;
    t.bindTexture(K, w.__webglTexture, 33984 + B);
    const ve = n.get(ae);
    if (ae.version !== ve.__version || ne === !0) {
      t.activeTexture(33984 + B), r.pixelStorei(37440, v.flipY), r.pixelStorei(37441, v.premultiplyAlpha), r.pixelStorei(3317, v.unpackAlignment), r.pixelStorei(37443, 0);
      const E = T(v) && b(v.image) === !1;
      let P = y(v.image, E, !1, h);
      P = ht(v, P);
      const le = b(P) || a, he = s.convert(v.format, v.encoding);
      let oe = s.convert(v.type), pe = x(v.internalFormat, he, oe, v.encoding, v.isVideoTexture);
      H(K, v, le);
      let fe;
      const Ce = v.mipmaps, Le = a && v.isVideoTexture !== !0, Ue = ve.__version === void 0 || ne === !0, L = A(v, P, le);
      if (v.isDepthTexture)
        pe = 6402, a ? v.type === mn ? pe = 36012 : v.type === pn ? pe = 33190 : v.type === Xn ? pe = 35056 : pe = 33189 : v.type === mn && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), v.format === gn && pe === 6402 && v.type !== $a && v.type !== pn && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), v.type = pn, oe = s.convert(v.type)), v.format === $n && pe === 6402 && (pe = 34041, v.type !== Xn && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), v.type = Xn, oe = s.convert(v.type))), Ue && (Le ? t.texStorage2D(3553, 1, pe, P.width, P.height) : t.texImage2D(3553, 0, pe, P.width, P.height, 0, he, oe, null));
      else if (v.isDataTexture)
        if (Ce.length > 0 && le) {
          Le && Ue && t.texStorage2D(3553, L, pe, Ce[0].width, Ce[0].height);
          for (let k = 0, $ = Ce.length; k < $; k++)
            fe = Ce[k], Le ? t.texSubImage2D(3553, k, 0, 0, fe.width, fe.height, he, oe, fe.data) : t.texImage2D(3553, k, pe, fe.width, fe.height, 0, he, oe, fe.data);
          v.generateMipmaps = !1;
        } else
          Le ? (Ue && t.texStorage2D(3553, L, pe, P.width, P.height), t.texSubImage2D(3553, 0, 0, 0, P.width, P.height, he, oe, P.data)) : t.texImage2D(3553, 0, pe, P.width, P.height, 0, he, oe, P.data);
      else if (v.isCompressedTexture)
        if (v.isCompressedArrayTexture) {
          Le && Ue && t.texStorage3D(35866, L, pe, Ce[0].width, Ce[0].height, P.depth);
          for (let k = 0, $ = Ce.length; k < $; k++)
            fe = Ce[k], v.format !== Nt ? he !== null ? Le ? t.compressedTexSubImage3D(35866, k, 0, 0, 0, fe.width, fe.height, P.depth, he, fe.data, 0, 0) : t.compressedTexImage3D(35866, k, pe, fe.width, fe.height, P.depth, 0, fe.data, 0, 0) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Le ? t.texSubImage3D(35866, k, 0, 0, 0, fe.width, fe.height, P.depth, he, oe, fe.data) : t.texImage3D(35866, k, pe, fe.width, fe.height, P.depth, 0, he, oe, fe.data);
        } else {
          Le && Ue && t.texStorage2D(3553, L, pe, Ce[0].width, Ce[0].height);
          for (let k = 0, $ = Ce.length; k < $; k++)
            fe = Ce[k], v.format !== Nt ? he !== null ? Le ? t.compressedTexSubImage2D(3553, k, 0, 0, fe.width, fe.height, he, fe.data) : t.compressedTexImage2D(3553, k, pe, fe.width, fe.height, 0, fe.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Le ? t.texSubImage2D(3553, k, 0, 0, fe.width, fe.height, he, oe, fe.data) : t.texImage2D(3553, k, pe, fe.width, fe.height, 0, he, oe, fe.data);
        }
      else if (v.isDataArrayTexture)
        Le ? (Ue && t.texStorage3D(35866, L, pe, P.width, P.height, P.depth), t.texSubImage3D(35866, 0, 0, 0, 0, P.width, P.height, P.depth, he, oe, P.data)) : t.texImage3D(35866, 0, pe, P.width, P.height, P.depth, 0, he, oe, P.data);
      else if (v.isData3DTexture)
        Le ? (Ue && t.texStorage3D(32879, L, pe, P.width, P.height, P.depth), t.texSubImage3D(32879, 0, 0, 0, 0, P.width, P.height, P.depth, he, oe, P.data)) : t.texImage3D(32879, 0, pe, P.width, P.height, P.depth, 0, he, oe, P.data);
      else if (v.isFramebufferTexture) {
        if (Ue)
          if (Le)
            t.texStorage2D(3553, L, pe, P.width, P.height);
          else {
            let k = P.width, $ = P.height;
            for (let ce = 0; ce < L; ce++)
              t.texImage2D(3553, ce, pe, k, $, 0, he, oe, null), k >>= 1, $ >>= 1;
          }
      } else if (Ce.length > 0 && le) {
        Le && Ue && t.texStorage2D(3553, L, pe, Ce[0].width, Ce[0].height);
        for (let k = 0, $ = Ce.length; k < $; k++)
          fe = Ce[k], Le ? t.texSubImage2D(3553, k, 0, 0, he, oe, fe) : t.texImage2D(3553, k, pe, he, oe, fe);
        v.generateMipmaps = !1;
      } else
        Le ? (Ue && t.texStorage2D(3553, L, pe, P.width, P.height), t.texSubImage2D(3553, 0, 0, 0, he, oe, P)) : t.texImage2D(3553, 0, pe, he, oe, P);
      C(v, le) && I(K), ve.__version = ae.version, v.onUpdate && v.onUpdate(v);
    }
    w.__version = v.version;
  }
  function _e(w, v, B) {
    if (v.image.length !== 6)
      return;
    const K = Ae(w, v), ne = v.source;
    t.bindTexture(34067, w.__webglTexture, 33984 + B);
    const ae = n.get(ne);
    if (ne.version !== ae.__version || K === !0) {
      t.activeTexture(33984 + B), r.pixelStorei(37440, v.flipY), r.pixelStorei(37441, v.premultiplyAlpha), r.pixelStorei(3317, v.unpackAlignment), r.pixelStorei(37443, 0);
      const ve = v.isCompressedTexture || v.image[0].isCompressedTexture, E = v.image[0] && v.image[0].isDataTexture, P = [];
      for (let k = 0; k < 6; k++)
        !ve && !E ? P[k] = y(v.image[k], !1, !0, l) : P[k] = E ? v.image[k].image : v.image[k], P[k] = ht(v, P[k]);
      const le = P[0], he = b(le) || a, oe = s.convert(v.format, v.encoding), pe = s.convert(v.type), fe = x(v.internalFormat, oe, pe, v.encoding), Ce = a && v.isVideoTexture !== !0, Le = ae.__version === void 0 || K === !0;
      let Ue = A(v, le, he);
      H(34067, v, he);
      let L;
      if (ve) {
        Ce && Le && t.texStorage2D(34067, Ue, fe, le.width, le.height);
        for (let k = 0; k < 6; k++) {
          L = P[k].mipmaps;
          for (let $ = 0; $ < L.length; $++) {
            const ce = L[$];
            v.format !== Nt ? oe !== null ? Ce ? t.compressedTexSubImage2D(34069 + k, $, 0, 0, ce.width, ce.height, oe, ce.data) : t.compressedTexImage2D(34069 + k, $, fe, ce.width, ce.height, 0, ce.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : Ce ? t.texSubImage2D(34069 + k, $, 0, 0, ce.width, ce.height, oe, pe, ce.data) : t.texImage2D(34069 + k, $, fe, ce.width, ce.height, 0, oe, pe, ce.data);
          }
        }
      } else {
        L = v.mipmaps, Ce && Le && (L.length > 0 && Ue++, t.texStorage2D(34067, Ue, fe, P[0].width, P[0].height));
        for (let k = 0; k < 6; k++)
          if (E) {
            Ce ? t.texSubImage2D(34069 + k, 0, 0, 0, P[k].width, P[k].height, oe, pe, P[k].data) : t.texImage2D(34069 + k, 0, fe, P[k].width, P[k].height, 0, oe, pe, P[k].data);
            for (let $ = 0; $ < L.length; $++) {
              const me = L[$].image[k].image;
              Ce ? t.texSubImage2D(34069 + k, $ + 1, 0, 0, me.width, me.height, oe, pe, me.data) : t.texImage2D(34069 + k, $ + 1, fe, me.width, me.height, 0, oe, pe, me.data);
            }
          } else {
            Ce ? t.texSubImage2D(34069 + k, 0, 0, 0, oe, pe, P[k]) : t.texImage2D(34069 + k, 0, fe, oe, pe, P[k]);
            for (let $ = 0; $ < L.length; $++) {
              const ce = L[$];
              Ce ? t.texSubImage2D(34069 + k, $ + 1, 0, 0, oe, pe, ce.image[k]) : t.texImage2D(34069 + k, $ + 1, fe, oe, pe, ce.image[k]);
            }
          }
      }
      C(v, he) && I(34067), ae.__version = ne.version, v.onUpdate && v.onUpdate(v);
    }
    w.__version = v.version;
  }
  function ue(w, v, B, K, ne) {
    const ae = s.convert(B.format, B.encoding), ve = s.convert(B.type), E = x(B.internalFormat, ae, ve, B.encoding);
    n.get(v).__hasExternalTextures || (ne === 32879 || ne === 35866 ? t.texImage3D(ne, 0, E, v.width, v.height, v.depth, 0, ae, ve, null) : t.texImage2D(ne, 0, E, v.width, v.height, 0, ae, ve, null)), t.bindFramebuffer(36160, w), Oe(v) ? f.framebufferTexture2DMultisampleEXT(36160, K, ne, n.get(B).__webglTexture, 0, Ge(v)) : (ne === 3553 || ne >= 34069 && ne <= 34074) && r.framebufferTexture2D(36160, K, ne, n.get(B).__webglTexture, 0), t.bindFramebuffer(36160, null);
  }
  function Fe(w, v, B) {
    if (r.bindRenderbuffer(36161, w), v.depthBuffer && !v.stencilBuffer) {
      let K = 33189;
      if (B || Oe(v)) {
        const ne = v.depthTexture;
        ne && ne.isDepthTexture && (ne.type === mn ? K = 36012 : ne.type === pn && (K = 33190));
        const ae = Ge(v);
        Oe(v) ? f.renderbufferStorageMultisampleEXT(36161, ae, K, v.width, v.height) : r.renderbufferStorageMultisample(36161, ae, K, v.width, v.height);
      } else
        r.renderbufferStorage(36161, K, v.width, v.height);
      r.framebufferRenderbuffer(36160, 36096, 36161, w);
    } else if (v.depthBuffer && v.stencilBuffer) {
      const K = Ge(v);
      B && Oe(v) === !1 ? r.renderbufferStorageMultisample(36161, K, 35056, v.width, v.height) : Oe(v) ? f.renderbufferStorageMultisampleEXT(36161, K, 35056, v.width, v.height) : r.renderbufferStorage(36161, 34041, v.width, v.height), r.framebufferRenderbuffer(36160, 33306, 36161, w);
    } else {
      const K = v.isWebGLMultipleRenderTargets === !0 ? v.texture : [v.texture];
      for (let ne = 0; ne < K.length; ne++) {
        const ae = K[ne], ve = s.convert(ae.format, ae.encoding), E = s.convert(ae.type), P = x(ae.internalFormat, ve, E, ae.encoding), le = Ge(v);
        B && Oe(v) === !1 ? r.renderbufferStorageMultisample(36161, le, P, v.width, v.height) : Oe(v) ? f.renderbufferStorageMultisampleEXT(36161, le, P, v.width, v.height) : r.renderbufferStorage(36161, P, v.width, v.height);
      }
    }
    r.bindRenderbuffer(36161, null);
  }
  function be(w, v) {
    if (v && v.isWebGLCubeRenderTarget)
      throw new Error("Depth Texture with cube render targets is not supported");
    if (t.bindFramebuffer(36160, w), !(v.depthTexture && v.depthTexture.isDepthTexture))
      throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    (!n.get(v.depthTexture).__webglTexture || v.depthTexture.image.width !== v.width || v.depthTexture.image.height !== v.height) && (v.depthTexture.image.width = v.width, v.depthTexture.image.height = v.height, v.depthTexture.needsUpdate = !0), Y(v.depthTexture, 0);
    const K = n.get(v.depthTexture).__webglTexture, ne = Ge(v);
    if (v.depthTexture.format === gn)
      Oe(v) ? f.framebufferTexture2DMultisampleEXT(36160, 36096, 3553, K, 0, ne) : r.framebufferTexture2D(36160, 36096, 3553, K, 0);
    else if (v.depthTexture.format === $n)
      Oe(v) ? f.framebufferTexture2DMultisampleEXT(36160, 33306, 3553, K, 0, ne) : r.framebufferTexture2D(36160, 33306, 3553, K, 0);
    else
      throw new Error("Unknown depthTexture format");
  }
  function xe(w) {
    const v = n.get(w), B = w.isWebGLCubeRenderTarget === !0;
    if (w.depthTexture && !v.__autoAllocateDepthBuffer) {
      if (B)
        throw new Error("target.depthTexture not supported in Cube render targets");
      be(v.__webglFramebuffer, w);
    } else if (B) {
      v.__webglDepthbuffer = [];
      for (let K = 0; K < 6; K++)
        t.bindFramebuffer(36160, v.__webglFramebuffer[K]), v.__webglDepthbuffer[K] = r.createRenderbuffer(), Fe(v.__webglDepthbuffer[K], w, !1);
    } else
      t.bindFramebuffer(36160, v.__webglFramebuffer), v.__webglDepthbuffer = r.createRenderbuffer(), Fe(v.__webglDepthbuffer, w, !1);
    t.bindFramebuffer(36160, null);
  }
  function Ke(w, v, B) {
    const K = n.get(w);
    v !== void 0 && ue(K.__webglFramebuffer, w, w.texture, 36064, 3553), B !== void 0 && xe(w);
  }
  function qe(w) {
    const v = w.texture, B = n.get(w), K = n.get(v);
    w.addEventListener("dispose", J), w.isWebGLMultipleRenderTargets !== !0 && (K.__webglTexture === void 0 && (K.__webglTexture = r.createTexture()), K.__version = v.version, o.memory.textures++);
    const ne = w.isWebGLCubeRenderTarget === !0, ae = w.isWebGLMultipleRenderTargets === !0, ve = b(w) || a;
    if (ne) {
      B.__webglFramebuffer = [];
      for (let E = 0; E < 6; E++)
        B.__webglFramebuffer[E] = r.createFramebuffer();
    } else {
      if (B.__webglFramebuffer = r.createFramebuffer(), ae)
        if (i.drawBuffers) {
          const E = w.texture;
          for (let P = 0, le = E.length; P < le; P++) {
            const he = n.get(E[P]);
            he.__webglTexture === void 0 && (he.__webglTexture = r.createTexture(), o.memory.textures++);
          }
        } else
          console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");
      if (a && w.samples > 0 && Oe(w) === !1) {
        const E = ae ? v : [v];
        B.__webglMultisampledFramebuffer = r.createFramebuffer(), B.__webglColorRenderbuffer = [], t.bindFramebuffer(36160, B.__webglMultisampledFramebuffer);
        for (let P = 0; P < E.length; P++) {
          const le = E[P];
          B.__webglColorRenderbuffer[P] = r.createRenderbuffer(), r.bindRenderbuffer(36161, B.__webglColorRenderbuffer[P]);
          const he = s.convert(le.format, le.encoding), oe = s.convert(le.type), pe = x(le.internalFormat, he, oe, le.encoding, w.isXRRenderTarget === !0), fe = Ge(w);
          r.renderbufferStorageMultisample(36161, fe, pe, w.width, w.height), r.framebufferRenderbuffer(36160, 36064 + P, 36161, B.__webglColorRenderbuffer[P]);
        }
        r.bindRenderbuffer(36161, null), w.depthBuffer && (B.__webglDepthRenderbuffer = r.createRenderbuffer(), Fe(B.__webglDepthRenderbuffer, w, !0)), t.bindFramebuffer(36160, null);
      }
    }
    if (ne) {
      t.bindTexture(34067, K.__webglTexture), H(34067, v, ve);
      for (let E = 0; E < 6; E++)
        ue(B.__webglFramebuffer[E], w, v, 36064, 34069 + E);
      C(v, ve) && I(34067), t.unbindTexture();
    } else if (ae) {
      const E = w.texture;
      for (let P = 0, le = E.length; P < le; P++) {
        const he = E[P], oe = n.get(he);
        t.bindTexture(3553, oe.__webglTexture), H(3553, he, ve), ue(B.__webglFramebuffer, w, he, 36064 + P, 3553), C(he, ve) && I(3553);
      }
      t.unbindTexture();
    } else {
      let E = 3553;
      (w.isWebGL3DRenderTarget || w.isWebGLArrayRenderTarget) && (a ? E = w.isWebGL3DRenderTarget ? 32879 : 35866 : console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")), t.bindTexture(E, K.__webglTexture), H(E, v, ve), ue(B.__webglFramebuffer, w, v, 36064, E), C(v, ve) && I(E), t.unbindTexture();
    }
    w.depthBuffer && xe(w);
  }
  function Xe(w) {
    const v = b(w) || a, B = w.isWebGLMultipleRenderTargets === !0 ? w.texture : [w.texture];
    for (let K = 0, ne = B.length; K < ne; K++) {
      const ae = B[K];
      if (C(ae, v)) {
        const ve = w.isWebGLCubeRenderTarget ? 34067 : 3553, E = n.get(ae).__webglTexture;
        t.bindTexture(ve, E), I(ve), t.unbindTexture();
      }
    }
  }
  function rt(w) {
    if (a && w.samples > 0 && Oe(w) === !1) {
      const v = w.isWebGLMultipleRenderTargets ? w.texture : [w.texture], B = w.width, K = w.height;
      let ne = 16384;
      const ae = [], ve = w.stencilBuffer ? 33306 : 36096, E = n.get(w), P = w.isWebGLMultipleRenderTargets === !0;
      if (P)
        for (let le = 0; le < v.length; le++)
          t.bindFramebuffer(36160, E.__webglMultisampledFramebuffer), r.framebufferRenderbuffer(36160, 36064 + le, 36161, null), t.bindFramebuffer(36160, E.__webglFramebuffer), r.framebufferTexture2D(36009, 36064 + le, 3553, null, 0);
      t.bindFramebuffer(36008, E.__webglMultisampledFramebuffer), t.bindFramebuffer(36009, E.__webglFramebuffer);
      for (let le = 0; le < v.length; le++) {
        ae.push(36064 + le), w.depthBuffer && ae.push(ve);
        const he = E.__ignoreDepthValues !== void 0 ? E.__ignoreDepthValues : !1;
        if (he === !1 && (w.depthBuffer && (ne |= 256), w.stencilBuffer && (ne |= 1024)), P && r.framebufferRenderbuffer(36008, 36064, 36161, E.__webglColorRenderbuffer[le]), he === !0 && (r.invalidateFramebuffer(36008, [ve]), r.invalidateFramebuffer(36009, [ve])), P) {
          const oe = n.get(v[le]).__webglTexture;
          r.framebufferTexture2D(36009, 36064, 3553, oe, 0);
        }
        r.blitFramebuffer(0, 0, B, K, 0, 0, B, K, ne, 9728), m && r.invalidateFramebuffer(36008, ae);
      }
      if (t.bindFramebuffer(36008, null), t.bindFramebuffer(36009, null), P)
        for (let le = 0; le < v.length; le++) {
          t.bindFramebuffer(36160, E.__webglMultisampledFramebuffer), r.framebufferRenderbuffer(36160, 36064 + le, 36161, E.__webglColorRenderbuffer[le]);
          const he = n.get(v[le]).__webglTexture;
          t.bindFramebuffer(36160, E.__webglFramebuffer), r.framebufferTexture2D(36009, 36064 + le, 3553, he, 0);
        }
      t.bindFramebuffer(36009, E.__webglMultisampledFramebuffer);
    }
  }
  function Ge(w) {
    return Math.min(u, w.samples);
  }
  function Oe(w) {
    const v = n.get(w);
    return a && w.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === !0 && v.__useRenderToTexture !== !1;
  }
  function yt(w) {
    const v = o.render.frame;
    g.get(w) !== v && (g.set(w, v), w.update());
  }
  function ht(w, v) {
    const B = w.encoding, K = w.format, ne = w.type;
    return w.isCompressedTexture === !0 || w.isVideoTexture === !0 || w.format === Zs || B !== vn && (B === ze ? a === !1 ? e.has("EXT_sRGB") === !0 && K === Nt ? (w.format = Zs, w.minFilter = At, w.generateMipmaps = !1) : v = Qa.sRGBToLinear(v) : (K !== Nt || ne !== xn) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture encoding:", B)), v;
  }
  this.allocateTextureUnit = X, this.resetTextureUnits = Q, this.setTexture2D = Y, this.setTexture2DArray = V, this.setTexture3D = z, this.setTextureCube = se, this.rebindTextures = Ke, this.setupRenderTarget = qe, this.updateRenderTargetMipmap = Xe, this.updateMultisampleRenderTarget = rt, this.setupDepthRenderbuffer = xe, this.setupFrameBufferTexture = ue, this.useMultisampledRTT = Oe;
}
function xf(r, e, t) {
  const n = t.isWebGL2;
  function i(s, o = null) {
    let a;
    if (s === xn)
      return 5121;
    if (s === hl)
      return 32819;
    if (s === ul)
      return 32820;
    if (s === ol)
      return 5120;
    if (s === ll)
      return 5122;
    if (s === $a)
      return 5123;
    if (s === cl)
      return 5124;
    if (s === pn)
      return 5125;
    if (s === mn)
      return 5126;
    if (s === gi)
      return n ? 5131 : (a = e.get("OES_texture_half_float"), a !== null ? a.HALF_FLOAT_OES : null);
    if (s === dl)
      return 6406;
    if (s === Nt)
      return 6408;
    if (s === pl)
      return 6409;
    if (s === ml)
      return 6410;
    if (s === gn)
      return 6402;
    if (s === $n)
      return 34041;
    if (s === fl)
      return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"), 6408;
    if (s === Zs)
      return a = e.get("EXT_sRGB"), a !== null ? a.SRGB_ALPHA_EXT : null;
    if (s === gl)
      return 6403;
    if (s === _l)
      return 36244;
    if (s === xl)
      return 33319;
    if (s === vl)
      return 33320;
    if (s === Ml)
      return 36249;
    if (s === cs || s === hs || s === us || s === ds)
      if (o === ze)
        if (a = e.get("WEBGL_compressed_texture_s3tc_srgb"), a !== null) {
          if (s === cs)
            return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (s === hs)
            return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (s === us)
            return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (s === ds)
            return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else
          return null;
      else if (a = e.get("WEBGL_compressed_texture_s3tc"), a !== null) {
        if (s === cs)
          return a.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (s === hs)
          return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (s === us)
          return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (s === ds)
          return a.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else
        return null;
    if (s === yr || s === br || s === Sr || s === wr)
      if (a = e.get("WEBGL_compressed_texture_pvrtc"), a !== null) {
        if (s === yr)
          return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (s === br)
          return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (s === Sr)
          return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (s === wr)
          return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else
        return null;
    if (s === yl)
      return a = e.get("WEBGL_compressed_texture_etc1"), a !== null ? a.COMPRESSED_RGB_ETC1_WEBGL : null;
    if (s === Tr || s === Er)
      if (a = e.get("WEBGL_compressed_texture_etc"), a !== null) {
        if (s === Tr)
          return o === ze ? a.COMPRESSED_SRGB8_ETC2 : a.COMPRESSED_RGB8_ETC2;
        if (s === Er)
          return o === ze ? a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : a.COMPRESSED_RGBA8_ETC2_EAC;
      } else
        return null;
    if (s === Ar || s === Cr || s === Lr || s === Dr || s === Pr || s === Rr || s === Ir || s === Fr || s === Nr || s === Or || s === Ur || s === zr || s === Br || s === kr)
      if (a = e.get("WEBGL_compressed_texture_astc"), a !== null) {
        if (s === Ar)
          return o === ze ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : a.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (s === Cr)
          return o === ze ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : a.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (s === Lr)
          return o === ze ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : a.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (s === Dr)
          return o === ze ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : a.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (s === Pr)
          return o === ze ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : a.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (s === Rr)
          return o === ze ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : a.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (s === Ir)
          return o === ze ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : a.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (s === Fr)
          return o === ze ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : a.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (s === Nr)
          return o === ze ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : a.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (s === Or)
          return o === ze ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : a.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (s === Ur)
          return o === ze ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : a.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (s === zr)
          return o === ze ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : a.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (s === Br)
          return o === ze ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : a.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (s === kr)
          return o === ze ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : a.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else
        return null;
    if (s === Gr)
      if (a = e.get("EXT_texture_compression_bptc"), a !== null) {
        if (s === Gr)
          return o === ze ? a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : a.COMPRESSED_RGBA_BPTC_UNORM_EXT;
      } else
        return null;
    return s === Xn ? n ? 34042 : (a = e.get("WEBGL_depth_texture"), a !== null ? a.UNSIGNED_INT_24_8_WEBGL : null) : r[s] !== void 0 ? r[s] : null;
  }
  return { convert: i };
}
class vf extends Ct {
  constructor(e = []) {
    super(), this.isArrayCamera = !0, this.cameras = e;
  }
}
class ci extends Ye {
  constructor() {
    super(), this.isGroup = !0, this.type = "Group";
  }
}
const Mf = { type: "move" };
class Bs {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new ci(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new ci(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new D(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new D()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new ci(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new D(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new D()), this._grip;
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
    const a = this._targetRay, c = this._grip, l = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (l && e.hand) {
        o = !0;
        for (const p of e.hand.values()) {
          const d = t.getJointPose(p, n), _ = this._getHandJoint(l, p);
          d !== null && (_.matrix.fromArray(d.transform.matrix), _.matrix.decompose(_.position, _.rotation, _.scale), _.jointRadius = d.radius), _.visible = d !== null;
        }
        const h = l.joints["index-finger-tip"], u = l.joints["thumb-tip"], f = h.position.distanceTo(u.position), m = 0.02, g = 5e-3;
        l.inputState.pinching && f > m + g ? (l.inputState.pinching = !1, this.dispatchEvent({
          type: "pinchend",
          handedness: e.handedness,
          target: this
        })) : !l.inputState.pinching && f <= m - g && (l.inputState.pinching = !0, this.dispatchEvent({
          type: "pinchstart",
          handedness: e.handedness,
          target: this
        }));
      } else
        c !== null && e.gripSpace && (s = t.getPose(e.gripSpace, n), s !== null && (c.matrix.fromArray(s.transform.matrix), c.matrix.decompose(c.position, c.rotation, c.scale), s.linearVelocity ? (c.hasLinearVelocity = !0, c.linearVelocity.copy(s.linearVelocity)) : c.hasLinearVelocity = !1, s.angularVelocity ? (c.hasAngularVelocity = !0, c.angularVelocity.copy(s.angularVelocity)) : c.hasAngularVelocity = !1));
      a !== null && (i = t.getPose(e.targetRaySpace, n), i === null && s !== null && (i = s), i !== null && (a.matrix.fromArray(i.transform.matrix), a.matrix.decompose(a.position, a.rotation, a.scale), i.linearVelocity ? (a.hasLinearVelocity = !0, a.linearVelocity.copy(i.linearVelocity)) : a.hasLinearVelocity = !1, i.angularVelocity ? (a.hasAngularVelocity = !0, a.angularVelocity.copy(i.angularVelocity)) : a.hasAngularVelocity = !1, this.dispatchEvent(Mf)));
    }
    return a !== null && (a.visible = i !== null), c !== null && (c.visible = s !== null), l !== null && (l.visible = o !== null), this;
  }
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const n = new ci();
      n.matrixAutoUpdate = !1, n.visible = !1, e.joints[t.jointName] = n, e.add(n);
    }
    return e.joints[t.jointName];
  }
}
class yf extends ft {
  constructor(e, t, n, i, s, o, a, c, l, h) {
    if (h = h !== void 0 ? h : gn, h !== gn && h !== $n)
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    n === void 0 && h === gn && (n = pn), n === void 0 && h === $n && (n = Xn), super(null, i, s, o, a, c, h, n, l), this.isDepthTexture = !0, this.image = { width: e, height: t }, this.magFilter = a !== void 0 ? a : ct, this.minFilter = c !== void 0 ? c : ct, this.flipY = !1, this.generateMipmaps = !1;
  }
}
class bf extends Sn {
  constructor(e, t) {
    super();
    const n = this;
    let i = null, s = 1, o = null, a = "local-floor", c = null, l = null, h = null, u = null, f = null, m = null;
    const g = t.getContextAttributes();
    let p = null, d = null;
    const _ = [], S = [], y = /* @__PURE__ */ new Set(), b = /* @__PURE__ */ new Map(), T = new Ct();
    T.layers.enable(1), T.viewport = new tt();
    const C = new Ct();
    C.layers.enable(2), C.viewport = new tt();
    const I = [T, C], x = new vf();
    x.layers.enable(1), x.layers.enable(2);
    let A = null, F = null;
    this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(V) {
      let z = _[V];
      return z === void 0 && (z = new Bs(), _[V] = z), z.getTargetRaySpace();
    }, this.getControllerGrip = function(V) {
      let z = _[V];
      return z === void 0 && (z = new Bs(), _[V] = z), z.getGripSpace();
    }, this.getHand = function(V) {
      let z = _[V];
      return z === void 0 && (z = new Bs(), _[V] = z), z.getHandSpace();
    };
    function j(V) {
      const z = S.indexOf(V.inputSource);
      if (z === -1)
        return;
      const se = _[z];
      se !== void 0 && se.dispatchEvent({ type: V.type, data: V.inputSource });
    }
    function J() {
      i.removeEventListener("select", j), i.removeEventListener("selectstart", j), i.removeEventListener("selectend", j), i.removeEventListener("squeeze", j), i.removeEventListener("squeezestart", j), i.removeEventListener("squeezeend", j), i.removeEventListener("end", J), i.removeEventListener("inputsourceschange", U);
      for (let V = 0; V < _.length; V++) {
        const z = S[V];
        z !== null && (S[V] = null, _[V].disconnect(z));
      }
      A = null, F = null, e.setRenderTarget(p), f = null, u = null, h = null, i = null, d = null, Y.stop(), n.isPresenting = !1, n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(V) {
      s = V, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(V) {
      a = V, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return c || o;
    }, this.setReferenceSpace = function(V) {
      c = V;
    }, this.getBaseLayer = function() {
      return u !== null ? u : f;
    }, this.getBinding = function() {
      return h;
    }, this.getFrame = function() {
      return m;
    }, this.getSession = function() {
      return i;
    }, this.setSession = async function(V) {
      if (i = V, i !== null) {
        if (p = e.getRenderTarget(), i.addEventListener("select", j), i.addEventListener("selectstart", j), i.addEventListener("selectend", j), i.addEventListener("squeeze", j), i.addEventListener("squeezestart", j), i.addEventListener("squeezeend", j), i.addEventListener("end", J), i.addEventListener("inputsourceschange", U), g.xrCompatible !== !0 && await t.makeXRCompatible(), i.renderState.layers === void 0 || e.capabilities.isWebGL2 === !1) {
          const z = {
            antialias: i.renderState.layers === void 0 ? g.antialias : !0,
            alpha: g.alpha,
            depth: g.depth,
            stencil: g.stencil,
            framebufferScaleFactor: s
          };
          f = new XRWebGLLayer(i, t, z), i.updateRenderState({ baseLayer: f }), d = new Mn(
            f.framebufferWidth,
            f.framebufferHeight,
            {
              format: Nt,
              type: xn,
              encoding: e.outputEncoding,
              stencilBuffer: g.stencil
            }
          );
        } else {
          let z = null, se = null, te = null;
          g.depth && (te = g.stencil ? 35056 : 33190, z = g.stencil ? $n : gn, se = g.stencil ? Xn : pn);
          const re = {
            colorFormat: 32856,
            depthFormat: te,
            scaleFactor: s
          };
          h = new XRWebGLBinding(i, t), u = h.createProjectionLayer(re), i.updateRenderState({ layers: [u] }), d = new Mn(
            u.textureWidth,
            u.textureHeight,
            {
              format: Nt,
              type: xn,
              depthTexture: new yf(u.textureWidth, u.textureHeight, se, void 0, void 0, void 0, void 0, void 0, void 0, z),
              stencilBuffer: g.stencil,
              encoding: e.outputEncoding,
              samples: g.antialias ? 4 : 0
            }
          );
          const H = e.properties.get(d);
          H.__ignoreDepthValues = u.ignoreDepthValues;
        }
        d.isXRRenderTarget = !0, this.setFoveation(1), c = null, o = await i.requestReferenceSpace(a), Y.setContext(i), Y.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" });
      }
    };
    function U(V) {
      for (let z = 0; z < V.removed.length; z++) {
        const se = V.removed[z], te = S.indexOf(se);
        te >= 0 && (S[te] = null, _[te].disconnect(se));
      }
      for (let z = 0; z < V.added.length; z++) {
        const se = V.added[z];
        let te = S.indexOf(se);
        if (te === -1) {
          for (let H = 0; H < _.length; H++)
            if (H >= S.length) {
              S.push(se), te = H;
              break;
            } else if (S[H] === null) {
              S[H] = se, te = H;
              break;
            }
          if (te === -1)
            break;
        }
        const re = _[te];
        re && re.connect(se);
      }
    }
    const N = new D(), q = new D();
    function Z(V, z, se) {
      N.setFromMatrixPosition(z.matrixWorld), q.setFromMatrixPosition(se.matrixWorld);
      const te = N.distanceTo(q), re = z.projectionMatrix.elements, H = se.projectionMatrix.elements, Ae = re[14] / (re[10] - 1), de = re[14] / (re[10] + 1), _e = (re[9] + 1) / re[5], ue = (re[9] - 1) / re[5], Fe = (re[8] - 1) / re[0], be = (H[8] + 1) / H[0], xe = Ae * Fe, Ke = Ae * be, qe = te / (-Fe + be), Xe = qe * -Fe;
      z.matrixWorld.decompose(V.position, V.quaternion, V.scale), V.translateX(Xe), V.translateZ(qe), V.matrixWorld.compose(V.position, V.quaternion, V.scale), V.matrixWorldInverse.copy(V.matrixWorld).invert();
      const rt = Ae + qe, Ge = de + qe, Oe = xe - Xe, yt = Ke + (te - Xe), ht = _e * de / Ge * rt, w = ue * de / Ge * rt;
      V.projectionMatrix.makePerspective(Oe, yt, ht, w, rt, Ge);
    }
    function Q(V, z) {
      z === null ? V.matrixWorld.copy(V.matrix) : V.matrixWorld.multiplyMatrices(z.matrixWorld, V.matrix), V.matrixWorldInverse.copy(V.matrixWorld).invert();
    }
    this.updateCamera = function(V) {
      if (i === null)
        return;
      x.near = C.near = T.near = V.near, x.far = C.far = T.far = V.far, (A !== x.near || F !== x.far) && (i.updateRenderState({
        depthNear: x.near,
        depthFar: x.far
      }), A = x.near, F = x.far);
      const z = V.parent, se = x.cameras;
      Q(x, z);
      for (let re = 0; re < se.length; re++)
        Q(se[re], z);
      x.matrixWorld.decompose(x.position, x.quaternion, x.scale), V.matrix.copy(x.matrix), V.matrix.decompose(V.position, V.quaternion, V.scale);
      const te = V.children;
      for (let re = 0, H = te.length; re < H; re++)
        te[re].updateMatrixWorld(!0);
      se.length === 2 ? Z(x, T, C) : x.projectionMatrix.copy(T.projectionMatrix);
    }, this.getCamera = function() {
      return x;
    }, this.getFoveation = function() {
      if (u !== null)
        return u.fixedFoveation;
      if (f !== null)
        return f.fixedFoveation;
    }, this.setFoveation = function(V) {
      u !== null && (u.fixedFoveation = V), f !== null && f.fixedFoveation !== void 0 && (f.fixedFoveation = V);
    }, this.getPlanes = function() {
      return y;
    };
    let X = null;
    function ee(V, z) {
      if (l = z.getViewerPose(c || o), m = z, l !== null) {
        const se = l.views;
        f !== null && (e.setRenderTargetFramebuffer(d, f.framebuffer), e.setRenderTarget(d));
        let te = !1;
        se.length !== x.cameras.length && (x.cameras.length = 0, te = !0);
        for (let re = 0; re < se.length; re++) {
          const H = se[re];
          let Ae = null;
          if (f !== null)
            Ae = f.getViewport(H);
          else {
            const _e = h.getViewSubImage(u, H);
            Ae = _e.viewport, re === 0 && (e.setRenderTargetTextures(
              d,
              _e.colorTexture,
              u.ignoreDepthValues ? void 0 : _e.depthStencilTexture
            ), e.setRenderTarget(d));
          }
          let de = I[re];
          de === void 0 && (de = new Ct(), de.layers.enable(re), de.viewport = new tt(), I[re] = de), de.matrix.fromArray(H.transform.matrix), de.projectionMatrix.fromArray(H.projectionMatrix), de.viewport.set(Ae.x, Ae.y, Ae.width, Ae.height), re === 0 && x.matrix.copy(de.matrix), te === !0 && x.cameras.push(de);
        }
      }
      for (let se = 0; se < _.length; se++) {
        const te = S[se], re = _[se];
        te !== null && re !== void 0 && re.update(te, z, c || o);
      }
      if (X && X(V, z), z.detectedPlanes) {
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
    const Y = new lo();
    Y.setAnimationLoop(ee), this.setAnimationLoop = function(V) {
      X = V;
    }, this.dispose = function() {
    };
  }
}
function Sf(r, e) {
  function t(p, d) {
    d.color.getRGB(p.fogColor.value, ro(r)), d.isFog ? (p.fogNear.value = d.near, p.fogFar.value = d.far) : d.isFogExp2 && (p.fogDensity.value = d.density);
  }
  function n(p, d, _, S, y) {
    d.isMeshBasicMaterial || d.isMeshLambertMaterial ? i(p, d) : d.isMeshToonMaterial ? (i(p, d), h(p, d)) : d.isMeshPhongMaterial ? (i(p, d), l(p, d)) : d.isMeshStandardMaterial ? (i(p, d), u(p, d), d.isMeshPhysicalMaterial && f(p, d, y)) : d.isMeshMatcapMaterial ? (i(p, d), m(p, d)) : d.isMeshDepthMaterial ? i(p, d) : d.isMeshDistanceMaterial ? (i(p, d), g(p, d)) : d.isMeshNormalMaterial ? i(p, d) : d.isLineBasicMaterial ? (s(p, d), d.isLineDashedMaterial && o(p, d)) : d.isPointsMaterial ? a(p, d, _, S) : d.isSpriteMaterial ? c(p, d) : d.isShadowMaterial ? (p.color.value.copy(d.color), p.opacity.value = d.opacity) : d.isShaderMaterial && (d.uniformsNeedUpdate = !1);
  }
  function i(p, d) {
    p.opacity.value = d.opacity, d.color && p.diffuse.value.copy(d.color), d.emissive && p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity), d.map && (p.map.value = d.map), d.alphaMap && (p.alphaMap.value = d.alphaMap), d.bumpMap && (p.bumpMap.value = d.bumpMap, p.bumpScale.value = d.bumpScale, d.side === Lt && (p.bumpScale.value *= -1)), d.displacementMap && (p.displacementMap.value = d.displacementMap, p.displacementScale.value = d.displacementScale, p.displacementBias.value = d.displacementBias), d.emissiveMap && (p.emissiveMap.value = d.emissiveMap), d.normalMap && (p.normalMap.value = d.normalMap, p.normalScale.value.copy(d.normalScale), d.side === Lt && p.normalScale.value.negate()), d.specularMap && (p.specularMap.value = d.specularMap), d.alphaTest > 0 && (p.alphaTest.value = d.alphaTest);
    const _ = e.get(d).envMap;
    if (_ && (p.envMap.value = _, p.flipEnvMap.value = _.isCubeTexture && _.isRenderTargetTexture === !1 ? -1 : 1, p.reflectivity.value = d.reflectivity, p.ior.value = d.ior, p.refractionRatio.value = d.refractionRatio), d.lightMap) {
      p.lightMap.value = d.lightMap;
      const b = r.physicallyCorrectLights !== !0 ? Math.PI : 1;
      p.lightMapIntensity.value = d.lightMapIntensity * b;
    }
    d.aoMap && (p.aoMap.value = d.aoMap, p.aoMapIntensity.value = d.aoMapIntensity);
    let S;
    d.map ? S = d.map : d.specularMap ? S = d.specularMap : d.displacementMap ? S = d.displacementMap : d.normalMap ? S = d.normalMap : d.bumpMap ? S = d.bumpMap : d.roughnessMap ? S = d.roughnessMap : d.metalnessMap ? S = d.metalnessMap : d.alphaMap ? S = d.alphaMap : d.emissiveMap ? S = d.emissiveMap : d.clearcoatMap ? S = d.clearcoatMap : d.clearcoatNormalMap ? S = d.clearcoatNormalMap : d.clearcoatRoughnessMap ? S = d.clearcoatRoughnessMap : d.iridescenceMap ? S = d.iridescenceMap : d.iridescenceThicknessMap ? S = d.iridescenceThicknessMap : d.specularIntensityMap ? S = d.specularIntensityMap : d.specularColorMap ? S = d.specularColorMap : d.transmissionMap ? S = d.transmissionMap : d.thicknessMap ? S = d.thicknessMap : d.sheenColorMap ? S = d.sheenColorMap : d.sheenRoughnessMap && (S = d.sheenRoughnessMap), S !== void 0 && (S.isWebGLRenderTarget && (S = S.texture), S.matrixAutoUpdate === !0 && S.updateMatrix(), p.uvTransform.value.copy(S.matrix));
    let y;
    d.aoMap ? y = d.aoMap : d.lightMap && (y = d.lightMap), y !== void 0 && (y.isWebGLRenderTarget && (y = y.texture), y.matrixAutoUpdate === !0 && y.updateMatrix(), p.uv2Transform.value.copy(y.matrix));
  }
  function s(p, d) {
    p.diffuse.value.copy(d.color), p.opacity.value = d.opacity;
  }
  function o(p, d) {
    p.dashSize.value = d.dashSize, p.totalSize.value = d.dashSize + d.gapSize, p.scale.value = d.scale;
  }
  function a(p, d, _, S) {
    p.diffuse.value.copy(d.color), p.opacity.value = d.opacity, p.size.value = d.size * _, p.scale.value = S * 0.5, d.map && (p.map.value = d.map), d.alphaMap && (p.alphaMap.value = d.alphaMap), d.alphaTest > 0 && (p.alphaTest.value = d.alphaTest);
    let y;
    d.map ? y = d.map : d.alphaMap && (y = d.alphaMap), y !== void 0 && (y.matrixAutoUpdate === !0 && y.updateMatrix(), p.uvTransform.value.copy(y.matrix));
  }
  function c(p, d) {
    p.diffuse.value.copy(d.color), p.opacity.value = d.opacity, p.rotation.value = d.rotation, d.map && (p.map.value = d.map), d.alphaMap && (p.alphaMap.value = d.alphaMap), d.alphaTest > 0 && (p.alphaTest.value = d.alphaTest);
    let _;
    d.map ? _ = d.map : d.alphaMap && (_ = d.alphaMap), _ !== void 0 && (_.matrixAutoUpdate === !0 && _.updateMatrix(), p.uvTransform.value.copy(_.matrix));
  }
  function l(p, d) {
    p.specular.value.copy(d.specular), p.shininess.value = Math.max(d.shininess, 1e-4);
  }
  function h(p, d) {
    d.gradientMap && (p.gradientMap.value = d.gradientMap);
  }
  function u(p, d) {
    p.roughness.value = d.roughness, p.metalness.value = d.metalness, d.roughnessMap && (p.roughnessMap.value = d.roughnessMap), d.metalnessMap && (p.metalnessMap.value = d.metalnessMap), e.get(d).envMap && (p.envMapIntensity.value = d.envMapIntensity);
  }
  function f(p, d, _) {
    p.ior.value = d.ior, d.sheen > 0 && (p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen), p.sheenRoughness.value = d.sheenRoughness, d.sheenColorMap && (p.sheenColorMap.value = d.sheenColorMap), d.sheenRoughnessMap && (p.sheenRoughnessMap.value = d.sheenRoughnessMap)), d.clearcoat > 0 && (p.clearcoat.value = d.clearcoat, p.clearcoatRoughness.value = d.clearcoatRoughness, d.clearcoatMap && (p.clearcoatMap.value = d.clearcoatMap), d.clearcoatRoughnessMap && (p.clearcoatRoughnessMap.value = d.clearcoatRoughnessMap), d.clearcoatNormalMap && (p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale), p.clearcoatNormalMap.value = d.clearcoatNormalMap, d.side === Lt && p.clearcoatNormalScale.value.negate())), d.iridescence > 0 && (p.iridescence.value = d.iridescence, p.iridescenceIOR.value = d.iridescenceIOR, p.iridescenceThicknessMinimum.value = d.iridescenceThicknessRange[0], p.iridescenceThicknessMaximum.value = d.iridescenceThicknessRange[1], d.iridescenceMap && (p.iridescenceMap.value = d.iridescenceMap), d.iridescenceThicknessMap && (p.iridescenceThicknessMap.value = d.iridescenceThicknessMap)), d.transmission > 0 && (p.transmission.value = d.transmission, p.transmissionSamplerMap.value = _.texture, p.transmissionSamplerSize.value.set(_.width, _.height), d.transmissionMap && (p.transmissionMap.value = d.transmissionMap), p.thickness.value = d.thickness, d.thicknessMap && (p.thicknessMap.value = d.thicknessMap), p.attenuationDistance.value = d.attenuationDistance, p.attenuationColor.value.copy(d.attenuationColor)), p.specularIntensity.value = d.specularIntensity, p.specularColor.value.copy(d.specularColor), d.specularIntensityMap && (p.specularIntensityMap.value = d.specularIntensityMap), d.specularColorMap && (p.specularColorMap.value = d.specularColorMap);
  }
  function m(p, d) {
    d.matcap && (p.matcap.value = d.matcap);
  }
  function g(p, d) {
    p.referencePosition.value.copy(d.referencePosition), p.nearDistance.value = d.nearDistance, p.farDistance.value = d.farDistance;
  }
  return {
    refreshFogUniforms: t,
    refreshMaterialUniforms: n
  };
}
function wf(r, e, t, n) {
  let i = {}, s = {}, o = [];
  const a = t.isWebGL2 ? r.getParameter(35375) : 0;
  function c(S, y) {
    const b = y.program;
    n.uniformBlockBinding(S, b);
  }
  function l(S, y) {
    let b = i[S.id];
    b === void 0 && (g(S), b = h(S), i[S.id] = b, S.addEventListener("dispose", d));
    const T = y.program;
    n.updateUBOMapping(S, T);
    const C = e.render.frame;
    s[S.id] !== C && (f(S), s[S.id] = C);
  }
  function h(S) {
    const y = u();
    S.__bindingPointIndex = y;
    const b = r.createBuffer(), T = S.__size, C = S.usage;
    return r.bindBuffer(35345, b), r.bufferData(35345, T, C), r.bindBuffer(35345, null), r.bindBufferBase(35345, y, b), b;
  }
  function u() {
    for (let S = 0; S < a; S++)
      if (o.indexOf(S) === -1)
        return o.push(S), S;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function f(S) {
    const y = i[S.id], b = S.uniforms, T = S.__cache;
    r.bindBuffer(35345, y);
    for (let C = 0, I = b.length; C < I; C++) {
      const x = b[C];
      if (m(x, C, T) === !0) {
        const A = x.__offset, F = Array.isArray(x.value) ? x.value : [x.value];
        let j = 0;
        for (let J = 0; J < F.length; J++) {
          const U = F[J], N = p(U);
          typeof U == "number" ? (x.__data[0] = U, r.bufferSubData(35345, A + j, x.__data)) : U.isMatrix3 ? (x.__data[0] = U.elements[0], x.__data[1] = U.elements[1], x.__data[2] = U.elements[2], x.__data[3] = U.elements[0], x.__data[4] = U.elements[3], x.__data[5] = U.elements[4], x.__data[6] = U.elements[5], x.__data[7] = U.elements[0], x.__data[8] = U.elements[6], x.__data[9] = U.elements[7], x.__data[10] = U.elements[8], x.__data[11] = U.elements[0]) : (U.toArray(x.__data, j), j += N.storage / Float32Array.BYTES_PER_ELEMENT);
        }
        r.bufferSubData(35345, A, x.__data);
      }
    }
    r.bindBuffer(35345, null);
  }
  function m(S, y, b) {
    const T = S.value;
    if (b[y] === void 0) {
      if (typeof T == "number")
        b[y] = T;
      else {
        const C = Array.isArray(T) ? T : [T], I = [];
        for (let x = 0; x < C.length; x++)
          I.push(C[x].clone());
        b[y] = I;
      }
      return !0;
    } else if (typeof T == "number") {
      if (b[y] !== T)
        return b[y] = T, !0;
    } else {
      const C = Array.isArray(b[y]) ? b[y] : [b[y]], I = Array.isArray(T) ? T : [T];
      for (let x = 0; x < C.length; x++) {
        const A = C[x];
        if (A.equals(I[x]) === !1)
          return A.copy(I[x]), !0;
      }
    }
    return !1;
  }
  function g(S) {
    const y = S.uniforms;
    let b = 0;
    const T = 16;
    let C = 0;
    for (let I = 0, x = y.length; I < x; I++) {
      const A = y[I], F = {
        boundary: 0,
        storage: 0
      }, j = Array.isArray(A.value) ? A.value : [A.value];
      for (let J = 0, U = j.length; J < U; J++) {
        const N = j[J], q = p(N);
        F.boundary += q.boundary, F.storage += q.storage;
      }
      if (A.__data = new Float32Array(F.storage / Float32Array.BYTES_PER_ELEMENT), A.__offset = b, I > 0) {
        C = b % T;
        const J = T - C;
        C !== 0 && J - F.boundary < 0 && (b += T - C, A.__offset = b);
      }
      b += F.storage;
    }
    return C = b % T, C > 0 && (b += T - C), S.__size = b, S.__cache = {}, this;
  }
  function p(S) {
    const y = {
      boundary: 0,
      storage: 0
    };
    return typeof S == "number" ? (y.boundary = 4, y.storage = 4) : S.isVector2 ? (y.boundary = 8, y.storage = 8) : S.isVector3 || S.isColor ? (y.boundary = 16, y.storage = 12) : S.isVector4 ? (y.boundary = 16, y.storage = 16) : S.isMatrix3 ? (y.boundary = 48, y.storage = 48) : S.isMatrix4 ? (y.boundary = 64, y.storage = 64) : S.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", S), y;
  }
  function d(S) {
    const y = S.target;
    y.removeEventListener("dispose", d);
    const b = o.indexOf(y.__bindingPointIndex);
    o.splice(b, 1), r.deleteBuffer(i[y.id]), delete i[y.id], delete s[y.id];
  }
  function _() {
    for (const S in i)
      r.deleteBuffer(i[S]);
    o = [], i = {}, s = {};
  }
  return {
    bind: c,
    update: l,
    dispose: _
  };
}
function Tf() {
  const r = xi("canvas");
  return r.style.display = "block", r;
}
function mo(r = {}) {
  this.isWebGLRenderer = !0;
  const e = r.canvas !== void 0 ? r.canvas : Tf(), t = r.context !== void 0 ? r.context : null, n = r.depth !== void 0 ? r.depth : !0, i = r.stencil !== void 0 ? r.stencil : !0, s = r.antialias !== void 0 ? r.antialias : !1, o = r.premultipliedAlpha !== void 0 ? r.premultipliedAlpha : !0, a = r.preserveDrawingBuffer !== void 0 ? r.preserveDrawingBuffer : !1, c = r.powerPreference !== void 0 ? r.powerPreference : "default", l = r.failIfMajorPerformanceCaveat !== void 0 ? r.failIfMajorPerformanceCaveat : !1;
  let h;
  t !== null ? h = t.getContextAttributes().alpha : h = r.alpha !== void 0 ? r.alpha : !1;
  let u = null, f = null;
  const m = [], g = [];
  this.domElement = e, this.debug = {
    checkShaderErrors: !0
  }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.outputEncoding = vn, this.physicallyCorrectLights = !1, this.toneMapping = $t, this.toneMappingExposure = 1;
  const p = this;
  let d = !1, _ = 0, S = 0, y = null, b = -1, T = null;
  const C = new tt(), I = new tt();
  let x = null, A = e.width, F = e.height, j = 1, J = null, U = null;
  const N = new tt(0, 0, A, F), q = new tt(0, 0, A, F);
  let Z = !1;
  const Q = new or();
  let X = !1, ee = !1, Y = null;
  const V = new ke(), z = new ye(), se = new D(), te = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };
  function re() {
    return y === null ? j : 1;
  }
  let H = t;
  function Ae(M, O) {
    for (let G = 0; G < M.length; G++) {
      const R = M[G], W = e.getContext(R, O);
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
      preserveDrawingBuffer: a,
      powerPreference: c,
      failIfMajorPerformanceCaveat: l
    };
    if ("setAttribute" in e && e.setAttribute("data-engine", `three.js r${ir}`), e.addEventListener("webglcontextlost", pe, !1), e.addEventListener("webglcontextrestored", fe, !1), e.addEventListener("webglcontextcreationerror", Ce, !1), H === null) {
      const O = ["webgl2", "webgl", "experimental-webgl"];
      if (p.isWebGL1Renderer === !0 && O.shift(), H = Ae(O, M), H === null)
        throw Ae(O) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
    }
    H.getShaderPrecisionFormat === void 0 && (H.getShaderPrecisionFormat = function() {
      return { rangeMin: 1, rangeMax: 1, precision: 1 };
    });
  } catch (M) {
    throw console.error("THREE.WebGLRenderer: " + M.message), M;
  }
  let de, _e, ue, Fe, be, xe, Ke, qe, Xe, rt, Ge, Oe, yt, ht, w, v, B, K, ne, ae, ve, E, P, le;
  function he() {
    de = new Nu(H), _e = new Lu(H, de, r), de.init(_e), E = new xf(H, de, _e), ue = new gf(H, de, _e), Fe = new zu(), be = new tf(), xe = new _f(H, de, ue, be, _e, E, Fe), Ke = new Pu(p), qe = new Fu(p), Xe = new jl(H, _e), P = new Au(H, de, Xe, _e), rt = new Ou(H, Xe, Fe, P), Ge = new Vu(H, rt, Xe, Fe), ne = new Gu(H, _e, xe), v = new Du(be), Oe = new ef(p, Ke, qe, de, _e, P, v), yt = new Sf(p, be), ht = new sf(), w = new hf(de, _e), K = new Eu(p, Ke, qe, ue, Ge, h, o), B = new mf(p, Ge, _e), le = new wf(H, Fe, _e, ue), ae = new Cu(H, de, Fe, _e), ve = new Uu(H, de, Fe, _e), Fe.programs = Oe.programs, p.capabilities = _e, p.extensions = de, p.properties = be, p.renderLists = ht, p.shadowMap = B, p.state = ue, p.info = Fe;
  }
  he();
  const oe = new bf(p, H);
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
  }, this.setSize = function(M, O, G) {
    if (oe.isPresenting) {
      console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
      return;
    }
    A = M, F = O, e.width = Math.floor(M * j), e.height = Math.floor(O * j), G !== !1 && (e.style.width = M + "px", e.style.height = O + "px"), this.setViewport(0, 0, M, O);
  }, this.getDrawingBufferSize = function(M) {
    return M.set(A * j, F * j).floor();
  }, this.setDrawingBufferSize = function(M, O, G) {
    A = M, F = O, j = G, e.width = Math.floor(M * G), e.height = Math.floor(O * G), this.setViewport(0, 0, M, O);
  }, this.getCurrentViewport = function(M) {
    return M.copy(C);
  }, this.getViewport = function(M) {
    return M.copy(N);
  }, this.setViewport = function(M, O, G, R) {
    M.isVector4 ? N.set(M.x, M.y, M.z, M.w) : N.set(M, O, G, R), ue.viewport(C.copy(N).multiplyScalar(j).floor());
  }, this.getScissor = function(M) {
    return M.copy(q);
  }, this.setScissor = function(M, O, G, R) {
    M.isVector4 ? q.set(M.x, M.y, M.z, M.w) : q.set(M, O, G, R), ue.scissor(I.copy(q).multiplyScalar(j).floor());
  }, this.getScissorTest = function() {
    return Z;
  }, this.setScissorTest = function(M) {
    ue.setScissorTest(Z = M);
  }, this.setOpaqueSort = function(M) {
    J = M;
  }, this.setTransparentSort = function(M) {
    U = M;
  }, this.getClearColor = function(M) {
    return M.copy(K.getClearColor());
  }, this.setClearColor = function() {
    K.setClearColor.apply(K, arguments);
  }, this.getClearAlpha = function() {
    return K.getClearAlpha();
  }, this.setClearAlpha = function() {
    K.setClearAlpha.apply(K, arguments);
  }, this.clear = function(M = !0, O = !0, G = !0) {
    let R = 0;
    M && (R |= 16384), O && (R |= 256), G && (R |= 1024), H.clear(R);
  }, this.clearColor = function() {
    this.clear(!0, !1, !1);
  }, this.clearDepth = function() {
    this.clear(!1, !0, !1);
  }, this.clearStencil = function() {
    this.clear(!1, !1, !0);
  }, this.dispose = function() {
    e.removeEventListener("webglcontextlost", pe, !1), e.removeEventListener("webglcontextrestored", fe, !1), e.removeEventListener("webglcontextcreationerror", Ce, !1), ht.dispose(), w.dispose(), be.dispose(), Ke.dispose(), qe.dispose(), Ge.dispose(), P.dispose(), le.dispose(), Oe.dispose(), oe.dispose(), oe.removeEventListener("sessionstart", ce), oe.removeEventListener("sessionend", me), Y && (Y.dispose(), Y = null), Ne.stop();
  };
  function pe(M) {
    M.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), d = !0;
  }
  function fe() {
    console.log("THREE.WebGLRenderer: Context Restored."), d = !1;
    const M = Fe.autoReset, O = B.enabled, G = B.autoUpdate, R = B.needsUpdate, W = B.type;
    he(), Fe.autoReset = M, B.enabled = O, B.autoUpdate = G, B.needsUpdate = R, B.type = W;
  }
  function Ce(M) {
    console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", M.statusMessage);
  }
  function Le(M) {
    const O = M.target;
    O.removeEventListener("dispose", Le), Ue(O);
  }
  function Ue(M) {
    L(M), be.remove(M);
  }
  function L(M) {
    const O = be.get(M).programs;
    O !== void 0 && (O.forEach(function(G) {
      Oe.releaseProgram(G);
    }), M.isShaderMaterial && Oe.releaseShaderCache(M));
  }
  this.renderBufferDirect = function(M, O, G, R, W, ge) {
    O === null && (O = te);
    const Me = W.isMesh && W.matrixWorld.determinant() < 0, we = Ao(M, O, G, R, W);
    ue.setMaterial(R, Me);
    let Te = G.index, Ie = 1;
    R.wireframe === !0 && (Te = rt.getWireframeAttribute(G), Ie = 2);
    const De = G.drawRange, Pe = G.attributes.position;
    let Ve = De.start * Ie, pt = (De.start + De.count) * Ie;
    ge !== null && (Ve = Math.max(Ve, ge.start * Ie), pt = Math.min(pt, (ge.start + ge.count) * Ie)), Te !== null ? (Ve = Math.max(Ve, 0), pt = Math.min(pt, Te.count)) : Pe != null && (Ve = Math.max(Ve, 0), pt = Math.min(pt, Pe.count));
    const Vt = pt - Ve;
    if (Vt < 0 || Vt === 1 / 0)
      return;
    P.setup(W, R, we, G, Te);
    let rn, He = ae;
    if (Te !== null && (rn = Xe.get(Te), He = ve, He.setIndex(rn)), W.isMesh)
      R.wireframe === !0 ? (ue.setLineWidth(R.wireframeLinewidth * re()), He.setMode(1)) : He.setMode(4);
    else if (W.isLine) {
      let Re = R.linewidth;
      Re === void 0 && (Re = 1), ue.setLineWidth(Re * re()), W.isLineSegments ? He.setMode(1) : W.isLineLoop ? He.setMode(2) : He.setMode(3);
    } else
      W.isPoints ? He.setMode(0) : W.isSprite && He.setMode(4);
    if (W.isInstancedMesh)
      He.renderInstances(Ve, Vt, W.count);
    else if (G.isInstancedBufferGeometry) {
      const Re = G._maxInstanceCount !== void 0 ? G._maxInstanceCount : 1 / 0, ss = Math.min(G.instanceCount, Re);
      He.renderInstances(Ve, Vt, ss);
    } else
      He.render(Ve, Vt);
  }, this.compile = function(M, O) {
    function G(R, W, ge) {
      R.transparent === !0 && R.side === Ti ? (R.side = Lt, R.needsUpdate = !0, bt(R, W, ge), R.side = nn, R.needsUpdate = !0, bt(R, W, ge), R.side = Ti) : bt(R, W, ge);
    }
    f = w.get(M), f.init(), g.push(f), M.traverseVisible(function(R) {
      R.isLight && R.layers.test(O.layers) && (f.pushLight(R), R.castShadow && f.pushShadow(R));
    }), f.setupLights(p.physicallyCorrectLights), M.traverse(function(R) {
      const W = R.material;
      if (W)
        if (Array.isArray(W))
          for (let ge = 0; ge < W.length; ge++) {
            const Me = W[ge];
            G(Me, M, R);
          }
        else
          G(W, M, R);
    }), g.pop(), f = null;
  };
  let k = null;
  function $(M) {
    k && k(M);
  }
  function ce() {
    Ne.stop();
  }
  function me() {
    Ne.start();
  }
  const Ne = new lo();
  Ne.setAnimationLoop($), typeof self < "u" && Ne.setContext(self), this.setAnimationLoop = function(M) {
    k = M, oe.setAnimationLoop(M), M === null ? Ne.stop() : Ne.start();
  }, oe.addEventListener("sessionstart", ce), oe.addEventListener("sessionend", me), this.render = function(M, O) {
    if (O !== void 0 && O.isCamera !== !0) {
      console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
      return;
    }
    if (d === !0)
      return;
    M.matrixWorldAutoUpdate === !0 && M.updateMatrixWorld(), O.parent === null && O.matrixWorldAutoUpdate === !0 && O.updateMatrixWorld(), oe.enabled === !0 && oe.isPresenting === !0 && (oe.cameraAutoUpdate === !0 && oe.updateCamera(O), O = oe.getCamera()), M.isScene === !0 && M.onBeforeRender(p, M, O, y), f = w.get(M, g.length), f.init(), g.push(f), V.multiplyMatrices(O.projectionMatrix, O.matrixWorldInverse), Q.setFromProjectionMatrix(V), ee = this.localClippingEnabled, X = v.init(this.clippingPlanes, ee, O), u = ht.get(M, m.length), u.init(), m.push(u), Je(M, O, 0, p.sortObjects), u.finish(), p.sortObjects === !0 && u.sort(J, U), X === !0 && v.beginShadows();
    const G = f.state.shadowsArray;
    if (B.render(G, M, O), X === !0 && v.endShadows(), this.info.autoReset === !0 && this.info.reset(), K.render(u, M), f.setupLights(p.physicallyCorrectLights), O.isArrayCamera) {
      const R = O.cameras;
      for (let W = 0, ge = R.length; W < ge; W++) {
        const Me = R[W];
        it(u, M, Me, Me.viewport);
      }
    } else
      it(u, M, O);
    y !== null && (xe.updateMultisampleRenderTarget(y), xe.updateRenderTargetMipmap(y)), M.isScene === !0 && M.onAfterRender(p, M, O), P.resetDefaultState(), b = -1, T = null, g.pop(), g.length > 0 ? f = g[g.length - 1] : f = null, m.pop(), m.length > 0 ? u = m[m.length - 1] : u = null;
  };
  function Je(M, O, G, R) {
    if (M.visible === !1)
      return;
    if (M.layers.test(O.layers)) {
      if (M.isGroup)
        G = M.renderOrder;
      else if (M.isLOD)
        M.autoUpdate === !0 && M.update(O);
      else if (M.isLight)
        f.pushLight(M), M.castShadow && f.pushShadow(M);
      else if (M.isSprite) {
        if (!M.frustumCulled || Q.intersectsSprite(M)) {
          R && se.setFromMatrixPosition(M.matrixWorld).applyMatrix4(V);
          const Me = Ge.update(M), we = M.material;
          we.visible && u.push(M, Me, we, G, se.z, null);
        }
      } else if ((M.isMesh || M.isLine || M.isPoints) && (M.isSkinnedMesh && M.skeleton.frame !== Fe.render.frame && (M.skeleton.update(), M.skeleton.frame = Fe.render.frame), !M.frustumCulled || Q.intersectsObject(M))) {
        R && se.setFromMatrixPosition(M.matrixWorld).applyMatrix4(V);
        const Me = Ge.update(M), we = M.material;
        if (Array.isArray(we)) {
          const Te = Me.groups;
          for (let Ie = 0, De = Te.length; Ie < De; Ie++) {
            const Pe = Te[Ie], Ve = we[Pe.materialIndex];
            Ve && Ve.visible && u.push(M, Me, Ve, G, se.z, Pe);
          }
        } else
          we.visible && u.push(M, Me, we, G, se.z, null);
      }
    }
    const ge = M.children;
    for (let Me = 0, we = ge.length; Me < we; Me++)
      Je(ge[Me], O, G, R);
  }
  function it(M, O, G, R) {
    const W = M.opaque, ge = M.transmissive, Me = M.transparent;
    f.setupLightsView(G), ge.length > 0 && sn(W, O, G), R && ue.viewport(C.copy(R)), W.length > 0 && Be(W, O, G), ge.length > 0 && Be(ge, O, G), Me.length > 0 && Be(Me, O, G), ue.buffers.depth.setTest(!0), ue.buffers.depth.setMask(!0), ue.buffers.color.setMask(!0), ue.setPolygonOffset(!1);
  }
  function sn(M, O, G) {
    const R = _e.isWebGL2;
    Y === null && (Y = new Mn(1, 1, {
      generateMipmaps: !0,
      type: de.has("EXT_color_buffer_half_float") ? gi : xn,
      minFilter: mi,
      samples: R && s === !0 ? 4 : 0
    })), p.getDrawingBufferSize(z), R ? Y.setSize(z.x, z.y) : Y.setSize($s(z.x), $s(z.y));
    const W = p.getRenderTarget();
    p.setRenderTarget(Y), p.clear();
    const ge = p.toneMapping;
    p.toneMapping = $t, Be(M, O, G), p.toneMapping = ge, xe.updateMultisampleRenderTarget(Y), xe.updateRenderTargetMipmap(Y), p.setRenderTarget(W);
  }
  function Be(M, O, G) {
    const R = O.isScene === !0 ? O.overrideMaterial : null;
    for (let W = 0, ge = M.length; W < ge; W++) {
      const Me = M[W], we = Me.object, Te = Me.geometry, Ie = R === null ? Me.material : R, De = Me.group;
      we.layers.test(G.layers) && Gt(we, O, G, Te, Ie, De);
    }
  }
  function Gt(M, O, G, R, W, ge) {
    M.onBeforeRender(p, O, G, R, W, ge), M.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse, M.matrixWorld), M.normalMatrix.getNormalMatrix(M.modelViewMatrix), W.onBeforeRender(p, O, G, R, M, ge), W.transparent === !0 && W.side === Ti ? (W.side = Lt, W.needsUpdate = !0, p.renderBufferDirect(G, O, R, W, M, ge), W.side = nn, W.needsUpdate = !0, p.renderBufferDirect(G, O, R, W, M, ge), W.side = Ti) : p.renderBufferDirect(G, O, R, W, M, ge), M.onAfterRender(p, O, G, R, W, ge);
  }
  function bt(M, O, G) {
    O.isScene !== !0 && (O = te);
    const R = be.get(M), W = f.state.lights, ge = f.state.shadowsArray, Me = W.state.version, we = Oe.getParameters(M, W.state, ge, O, G), Te = Oe.getProgramCacheKey(we);
    let Ie = R.programs;
    R.environment = M.isMeshStandardMaterial ? O.environment : null, R.fog = O.fog, R.envMap = (M.isMeshStandardMaterial ? qe : Ke).get(M.envMap || R.environment), Ie === void 0 && (M.addEventListener("dispose", Le), Ie = /* @__PURE__ */ new Map(), R.programs = Ie);
    let De = Ie.get(Te);
    if (De !== void 0) {
      if (R.currentProgram === De && R.lightsStateVersion === Me)
        return ur(M, we), De;
    } else
      we.uniforms = Oe.getUniforms(M), M.onBuild(G, we, p), M.onBeforeCompile(we, p), De = Oe.acquireProgram(we, Te), Ie.set(Te, De), R.uniforms = we.uniforms;
    const Pe = R.uniforms;
    (!M.isShaderMaterial && !M.isRawShaderMaterial || M.clipping === !0) && (Pe.clippingPlanes = v.uniform), ur(M, we), R.needsLights = Lo(M), R.lightsStateVersion = Me, R.needsLights && (Pe.ambientLightColor.value = W.state.ambient, Pe.lightProbe.value = W.state.probe, Pe.directionalLights.value = W.state.directional, Pe.directionalLightShadows.value = W.state.directionalShadow, Pe.spotLights.value = W.state.spot, Pe.spotLightShadows.value = W.state.spotShadow, Pe.rectAreaLights.value = W.state.rectArea, Pe.ltc_1.value = W.state.rectAreaLTC1, Pe.ltc_2.value = W.state.rectAreaLTC2, Pe.pointLights.value = W.state.point, Pe.pointLightShadows.value = W.state.pointShadow, Pe.hemisphereLights.value = W.state.hemi, Pe.directionalShadowMap.value = W.state.directionalShadowMap, Pe.directionalShadowMatrix.value = W.state.directionalShadowMatrix, Pe.spotShadowMap.value = W.state.spotShadowMap, Pe.spotLightMatrix.value = W.state.spotLightMatrix, Pe.spotLightMap.value = W.state.spotLightMap, Pe.pointShadowMap.value = W.state.pointShadowMap, Pe.pointShadowMatrix.value = W.state.pointShadowMatrix);
    const Ve = De.getUniforms(), pt = $i.seqWithValue(Ve.seq, Pe);
    return R.currentProgram = De, R.uniformsList = pt, De;
  }
  function ur(M, O) {
    const G = be.get(M);
    G.outputEncoding = O.outputEncoding, G.instancing = O.instancing, G.skinning = O.skinning, G.morphTargets = O.morphTargets, G.morphNormals = O.morphNormals, G.morphColors = O.morphColors, G.morphTargetsCount = O.morphTargetsCount, G.numClippingPlanes = O.numClippingPlanes, G.numIntersection = O.numClipIntersection, G.vertexAlphas = O.vertexAlphas, G.vertexTangents = O.vertexTangents, G.toneMapping = O.toneMapping;
  }
  function Ao(M, O, G, R, W) {
    O.isScene !== !0 && (O = te), xe.resetTextureUnits();
    const ge = O.fog, Me = R.isMeshStandardMaterial ? O.environment : null, we = y === null ? p.outputEncoding : y.isXRRenderTarget === !0 ? y.texture.encoding : vn, Te = (R.isMeshStandardMaterial ? qe : Ke).get(R.envMap || Me), Ie = R.vertexColors === !0 && !!G.attributes.color && G.attributes.color.itemSize === 4, De = !!R.normalMap && !!G.attributes.tangent, Pe = !!G.morphAttributes.position, Ve = !!G.morphAttributes.normal, pt = !!G.morphAttributes.color, Vt = R.toneMapped ? p.toneMapping : $t, rn = G.morphAttributes.position || G.morphAttributes.normal || G.morphAttributes.color, He = rn !== void 0 ? rn.length : 0, Re = be.get(R), ss = f.state.lights;
    if (X === !0 && (ee === !0 || M !== T)) {
      const mt = M === T && R.id === b;
      v.setState(R, M, mt);
    }
    let Qe = !1;
    R.version === Re.__version ? (Re.needsLights && Re.lightsStateVersion !== ss.state.version || Re.outputEncoding !== we || W.isInstancedMesh && Re.instancing === !1 || !W.isInstancedMesh && Re.instancing === !0 || W.isSkinnedMesh && Re.skinning === !1 || !W.isSkinnedMesh && Re.skinning === !0 || Re.envMap !== Te || R.fog === !0 && Re.fog !== ge || Re.numClippingPlanes !== void 0 && (Re.numClippingPlanes !== v.numPlanes || Re.numIntersection !== v.numIntersection) || Re.vertexAlphas !== Ie || Re.vertexTangents !== De || Re.morphTargets !== Pe || Re.morphNormals !== Ve || Re.morphColors !== pt || Re.toneMapping !== Vt || _e.isWebGL2 === !0 && Re.morphTargetsCount !== He) && (Qe = !0) : (Qe = !0, Re.__version = R.version);
    let an = Re.currentProgram;
    Qe === !0 && (an = bt(R, O, W));
    let dr = !1, Qn = !1, rs = !1;
    const at = an.getUniforms(), on = Re.uniforms;
    if (ue.useProgram(an.program) && (dr = !0, Qn = !0, rs = !0), R.id !== b && (b = R.id, Qn = !0), dr || T !== M) {
      if (at.setValue(H, "projectionMatrix", M.projectionMatrix), _e.logarithmicDepthBuffer && at.setValue(
        H,
        "logDepthBufFC",
        2 / (Math.log(M.far + 1) / Math.LN2)
      ), T !== M && (T = M, Qn = !0, rs = !0), R.isShaderMaterial || R.isMeshPhongMaterial || R.isMeshToonMaterial || R.isMeshStandardMaterial || R.envMap) {
        const mt = at.map.cameraPosition;
        mt !== void 0 && mt.setValue(
          H,
          se.setFromMatrixPosition(M.matrixWorld)
        );
      }
      (R.isMeshPhongMaterial || R.isMeshToonMaterial || R.isMeshLambertMaterial || R.isMeshBasicMaterial || R.isMeshStandardMaterial || R.isShaderMaterial) && at.setValue(H, "isOrthographic", M.isOrthographicCamera === !0), (R.isMeshPhongMaterial || R.isMeshToonMaterial || R.isMeshLambertMaterial || R.isMeshBasicMaterial || R.isMeshStandardMaterial || R.isShaderMaterial || R.isShadowMaterial || W.isSkinnedMesh) && at.setValue(H, "viewMatrix", M.matrixWorldInverse);
    }
    if (W.isSkinnedMesh) {
      at.setOptional(H, W, "bindMatrix"), at.setOptional(H, W, "bindMatrixInverse");
      const mt = W.skeleton;
      mt && (_e.floatVertexTextures ? (mt.boneTexture === null && mt.computeBoneTexture(), at.setValue(H, "boneTexture", mt.boneTexture, xe), at.setValue(H, "boneTextureSize", mt.boneTextureSize)) : console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."));
    }
    const as = G.morphAttributes;
    if ((as.position !== void 0 || as.normal !== void 0 || as.color !== void 0 && _e.isWebGL2 === !0) && ne.update(W, G, R, an), (Qn || Re.receiveShadow !== W.receiveShadow) && (Re.receiveShadow = W.receiveShadow, at.setValue(H, "receiveShadow", W.receiveShadow)), R.isMeshGouraudMaterial && R.envMap !== null && (on.envMap.value = Te, on.flipEnvMap.value = Te.isCubeTexture && Te.isRenderTargetTexture === !1 ? -1 : 1), Qn && (at.setValue(H, "toneMappingExposure", p.toneMappingExposure), Re.needsLights && Co(on, rs), ge && R.fog === !0 && yt.refreshFogUniforms(on, ge), yt.refreshMaterialUniforms(on, R, j, F, Y), $i.upload(H, Re.uniformsList, on, xe)), R.isShaderMaterial && R.uniformsNeedUpdate === !0 && ($i.upload(H, Re.uniformsList, on, xe), R.uniformsNeedUpdate = !1), R.isSpriteMaterial && at.setValue(H, "center", W.center), at.setValue(H, "modelViewMatrix", W.modelViewMatrix), at.setValue(H, "normalMatrix", W.normalMatrix), at.setValue(H, "modelMatrix", W.matrixWorld), R.isShaderMaterial || R.isRawShaderMaterial) {
      const mt = R.uniformsGroups;
      for (let os = 0, Do = mt.length; os < Do; os++)
        if (_e.isWebGL2) {
          const fr = mt[os];
          le.update(fr, an), le.bind(fr, an);
        } else
          console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.");
    }
    return an;
  }
  function Co(M, O) {
    M.ambientLightColor.needsUpdate = O, M.lightProbe.needsUpdate = O, M.directionalLights.needsUpdate = O, M.directionalLightShadows.needsUpdate = O, M.pointLights.needsUpdate = O, M.pointLightShadows.needsUpdate = O, M.spotLights.needsUpdate = O, M.spotLightShadows.needsUpdate = O, M.rectAreaLights.needsUpdate = O, M.hemisphereLights.needsUpdate = O;
  }
  function Lo(M) {
    return M.isMeshLambertMaterial || M.isMeshToonMaterial || M.isMeshPhongMaterial || M.isMeshStandardMaterial || M.isShadowMaterial || M.isShaderMaterial && M.lights === !0;
  }
  this.getActiveCubeFace = function() {
    return _;
  }, this.getActiveMipmapLevel = function() {
    return S;
  }, this.getRenderTarget = function() {
    return y;
  }, this.setRenderTargetTextures = function(M, O, G) {
    be.get(M.texture).__webglTexture = O, be.get(M.depthTexture).__webglTexture = G;
    const R = be.get(M);
    R.__hasExternalTextures = !0, R.__hasExternalTextures && (R.__autoAllocateDepthBuffer = G === void 0, R.__autoAllocateDepthBuffer || de.has("WEBGL_multisampled_render_to_texture") === !0 && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), R.__useRenderToTexture = !1));
  }, this.setRenderTargetFramebuffer = function(M, O) {
    const G = be.get(M);
    G.__webglFramebuffer = O, G.__useDefaultFramebuffer = O === void 0;
  }, this.setRenderTarget = function(M, O = 0, G = 0) {
    y = M, _ = O, S = G;
    let R = !0, W = null, ge = !1, Me = !1;
    if (M) {
      const Te = be.get(M);
      Te.__useDefaultFramebuffer !== void 0 ? (ue.bindFramebuffer(36160, null), R = !1) : Te.__webglFramebuffer === void 0 ? xe.setupRenderTarget(M) : Te.__hasExternalTextures && xe.rebindTextures(M, be.get(M.texture).__webglTexture, be.get(M.depthTexture).__webglTexture);
      const Ie = M.texture;
      (Ie.isData3DTexture || Ie.isDataArrayTexture || Ie.isCompressedArrayTexture) && (Me = !0);
      const De = be.get(M).__webglFramebuffer;
      M.isWebGLCubeRenderTarget ? (W = De[O], ge = !0) : _e.isWebGL2 && M.samples > 0 && xe.useMultisampledRTT(M) === !1 ? W = be.get(M).__webglMultisampledFramebuffer : W = De, C.copy(M.viewport), I.copy(M.scissor), x = M.scissorTest;
    } else
      C.copy(N).multiplyScalar(j).floor(), I.copy(q).multiplyScalar(j).floor(), x = Z;
    if (ue.bindFramebuffer(36160, W) && _e.drawBuffers && R && ue.drawBuffers(M, W), ue.viewport(C), ue.scissor(I), ue.setScissorTest(x), ge) {
      const Te = be.get(M.texture);
      H.framebufferTexture2D(36160, 36064, 34069 + O, Te.__webglTexture, G);
    } else if (Me) {
      const Te = be.get(M.texture), Ie = O || 0;
      H.framebufferTextureLayer(36160, 36064, Te.__webglTexture, G || 0, Ie);
    }
    b = -1;
  }, this.readRenderTargetPixels = function(M, O, G, R, W, ge, Me) {
    if (!(M && M.isWebGLRenderTarget)) {
      console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      return;
    }
    let we = be.get(M).__webglFramebuffer;
    if (M.isWebGLCubeRenderTarget && Me !== void 0 && (we = we[Me]), we) {
      ue.bindFramebuffer(36160, we);
      try {
        const Te = M.texture, Ie = Te.format, De = Te.type;
        if (Ie !== Nt && E.convert(Ie) !== H.getParameter(35739)) {
          console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
          return;
        }
        const Pe = De === gi && (de.has("EXT_color_buffer_half_float") || _e.isWebGL2 && de.has("EXT_color_buffer_float"));
        if (De !== xn && E.convert(De) !== H.getParameter(35738) && !(De === mn && (_e.isWebGL2 || de.has("OES_texture_float") || de.has("WEBGL_color_buffer_float"))) && !Pe) {
          console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
          return;
        }
        O >= 0 && O <= M.width - R && G >= 0 && G <= M.height - W && H.readPixels(O, G, R, W, E.convert(Ie), E.convert(De), ge);
      } finally {
        const Te = y !== null ? be.get(y).__webglFramebuffer : null;
        ue.bindFramebuffer(36160, Te);
      }
    }
  }, this.copyFramebufferToTexture = function(M, O, G = 0) {
    const R = Math.pow(2, -G), W = Math.floor(O.image.width * R), ge = Math.floor(O.image.height * R);
    xe.setTexture2D(O, 0), H.copyTexSubImage2D(3553, G, 0, 0, M.x, M.y, W, ge), ue.unbindTexture();
  }, this.copyTextureToTexture = function(M, O, G, R = 0) {
    const W = O.image.width, ge = O.image.height, Me = E.convert(G.format), we = E.convert(G.type);
    xe.setTexture2D(G, 0), H.pixelStorei(37440, G.flipY), H.pixelStorei(37441, G.premultiplyAlpha), H.pixelStorei(3317, G.unpackAlignment), O.isDataTexture ? H.texSubImage2D(3553, R, M.x, M.y, W, ge, Me, we, O.image.data) : O.isCompressedTexture ? H.compressedTexSubImage2D(3553, R, M.x, M.y, O.mipmaps[0].width, O.mipmaps[0].height, Me, O.mipmaps[0].data) : H.texSubImage2D(3553, R, M.x, M.y, Me, we, O.image), R === 0 && G.generateMipmaps && H.generateMipmap(3553), ue.unbindTexture();
  }, this.copyTextureToTexture3D = function(M, O, G, R, W = 0) {
    if (p.isWebGL1Renderer) {
      console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
      return;
    }
    const ge = M.max.x - M.min.x + 1, Me = M.max.y - M.min.y + 1, we = M.max.z - M.min.z + 1, Te = E.convert(R.format), Ie = E.convert(R.type);
    let De;
    if (R.isData3DTexture)
      xe.setTexture3D(R, 0), De = 32879;
    else if (R.isDataArrayTexture)
      xe.setTexture2DArray(R, 0), De = 35866;
    else {
      console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
      return;
    }
    H.pixelStorei(37440, R.flipY), H.pixelStorei(37441, R.premultiplyAlpha), H.pixelStorei(3317, R.unpackAlignment);
    const Pe = H.getParameter(3314), Ve = H.getParameter(32878), pt = H.getParameter(3316), Vt = H.getParameter(3315), rn = H.getParameter(32877), He = G.isCompressedTexture ? G.mipmaps[0] : G.image;
    H.pixelStorei(3314, He.width), H.pixelStorei(32878, He.height), H.pixelStorei(3316, M.min.x), H.pixelStorei(3315, M.min.y), H.pixelStorei(32877, M.min.z), G.isDataTexture || G.isData3DTexture ? H.texSubImage3D(De, W, O.x, O.y, O.z, ge, Me, we, Te, Ie, He.data) : G.isCompressedArrayTexture ? (console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."), H.compressedTexSubImage3D(De, W, O.x, O.y, O.z, ge, Me, we, Te, He.data)) : H.texSubImage3D(De, W, O.x, O.y, O.z, ge, Me, we, Te, Ie, He), H.pixelStorei(3314, Pe), H.pixelStorei(32878, Ve), H.pixelStorei(3316, pt), H.pixelStorei(3315, Vt), H.pixelStorei(32877, rn), W === 0 && R.generateMipmaps && H.generateMipmap(De), ue.unbindTexture();
  }, this.initTexture = function(M) {
    M.isCubeTexture ? xe.setTextureCube(M, 0) : M.isData3DTexture ? xe.setTexture3D(M, 0) : M.isDataArrayTexture || M.isCompressedArrayTexture ? xe.setTexture2DArray(M, 0) : xe.setTexture2D(M, 0), ue.unbindTexture();
  }, this.resetState = function() {
    _ = 0, S = 0, y = null, ue.reset(), P.reset();
  }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
}
class Ef extends mo {
}
Ef.prototype.isWebGL1Renderer = !0;
class Af extends Ye {
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
class di extends kt {
  constructor(e) {
    super(), this.isLineBasicMaterial = !0, this.type = "LineBasicMaterial", this.color = new Ee(16777215), this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this.fog = e.fog, this;
  }
}
const wa = /* @__PURE__ */ new D(), Ta = /* @__PURE__ */ new D(), Ea = /* @__PURE__ */ new ke(), ks = /* @__PURE__ */ new ts(), qi = /* @__PURE__ */ new bi();
class Cf extends Ye {
  constructor(e = new Dt(), t = new di()) {
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
        wa.fromBufferAttribute(t, i - 1), Ta.fromBufferAttribute(t, i), n[i] = n[i - 1], n[i] += wa.distanceTo(Ta);
      e.setAttribute("lineDistance", new nt(n, 1));
    } else
      console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.matrixWorld, s = e.params.Line.threshold, o = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), qi.copy(n.boundingSphere), qi.applyMatrix4(i), qi.radius += s, e.ray.intersectsSphere(qi) === !1)
      return;
    Ea.copy(i).invert(), ks.copy(e.ray).applyMatrix4(Ea);
    const a = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), c = a * a, l = new D(), h = new D(), u = new D(), f = new D(), m = this.isLineSegments ? 2 : 1, g = n.index, d = n.attributes.position;
    if (g !== null) {
      const _ = Math.max(0, o.start), S = Math.min(g.count, o.start + o.count);
      for (let y = _, b = S - 1; y < b; y += m) {
        const T = g.getX(y), C = g.getX(y + 1);
        if (l.fromBufferAttribute(d, T), h.fromBufferAttribute(d, C), ks.distanceSqToSegment(l, h, f, u) > c)
          continue;
        f.applyMatrix4(this.matrixWorld);
        const x = e.ray.origin.distanceTo(f);
        x < e.near || x > e.far || t.push({
          distance: x,
          point: u.clone().applyMatrix4(this.matrixWorld),
          index: y,
          face: null,
          faceIndex: null,
          object: this
        });
      }
    } else {
      const _ = Math.max(0, o.start), S = Math.min(d.count, o.start + o.count);
      for (let y = _, b = S - 1; y < b; y += m) {
        if (l.fromBufferAttribute(d, y), h.fromBufferAttribute(d, y + 1), ks.distanceSqToSegment(l, h, f, u) > c)
          continue;
        f.applyMatrix4(this.matrixWorld);
        const C = e.ray.origin.distanceTo(f);
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
          const a = i[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = s;
        }
      }
    }
  }
}
const Aa = /* @__PURE__ */ new D(), Ca = /* @__PURE__ */ new D();
class Js extends Cf {
  constructor(e, t) {
    super(e, t), this.isLineSegments = !0, this.type = "LineSegments";
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [];
      for (let i = 0, s = t.count; i < s; i += 2)
        Aa.fromBufferAttribute(t, i), Ca.fromBufferAttribute(t, i + 1), n[i] = i === 0 ? 0 : n[i - 1], n[i + 1] = n[i] + Aa.distanceTo(Ca);
      e.setAttribute("lineDistance", new nt(n, 1));
    } else
      console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
}
class hi extends kt {
  constructor(e) {
    super(), this.isPointsMaterial = !0, this.type = "PointsMaterial", this.color = new Ee(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
  }
}
const La = /* @__PURE__ */ new ke(), Qs = /* @__PURE__ */ new ts(), Xi = /* @__PURE__ */ new bi(), ji = /* @__PURE__ */ new D();
class Gs extends Ye {
  constructor(e = new Dt(), t = new hi()) {
    super(), this.isPoints = !0, this.type = "Points", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = e.material, this.geometry = e.geometry, this;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.matrixWorld, s = e.params.Points.threshold, o = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), Xi.copy(n.boundingSphere), Xi.applyMatrix4(i), Xi.radius += s, e.ray.intersectsSphere(Xi) === !1)
      return;
    La.copy(i).invert(), Qs.copy(e.ray).applyMatrix4(La);
    const a = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), c = a * a, l = n.index, u = n.attributes.position;
    if (l !== null) {
      const f = Math.max(0, o.start), m = Math.min(l.count, o.start + o.count);
      for (let g = f, p = m; g < p; g++) {
        const d = l.getX(g);
        ji.fromBufferAttribute(u, d), Da(ji, d, c, i, e, t, this);
      }
    } else {
      const f = Math.max(0, o.start), m = Math.min(u.count, o.start + o.count);
      for (let g = f, p = m; g < p; g++)
        ji.fromBufferAttribute(u, g), Da(ji, g, c, i, e, t, this);
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, o = i.length; s < o; s++) {
          const a = i[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = s;
        }
      }
    }
  }
}
function Da(r, e, t, n, i, s, o) {
  const a = Qs.distanceSqToPoint(r);
  if (a < t) {
    const c = new D();
    Qs.closestPointToPoint(r, c), c.applyMatrix4(n);
    const l = i.ray.origin.distanceTo(c);
    if (l < i.near || l > i.far)
      return;
    s.push({
      distance: l,
      distanceToRay: Math.sqrt(a),
      point: c,
      index: e,
      face: null,
      object: o
    });
  }
}
class cr extends kt {
  constructor(e) {
    super(), this.isMeshStandardMaterial = !0, this.defines = { STANDARD: "" }, this.type = "MeshStandardMaterial", this.color = new Ee(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Ee(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = rr, this.normalScale = new ye(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.defines = { STANDARD: "" }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapIntensity = e.envMapIntensity, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
class go extends kt {
  constructor(e) {
    super(), this.isMeshPhongMaterial = !0, this.type = "MeshPhongMaterial", this.color = new Ee(16777215), this.specular = new Ee(1118481), this.shininess = 30, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Ee(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = rr, this.normalScale = new ye(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = sr, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.specular.copy(e.specular), this.shininess = e.shininess, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
const Ji = {
  enabled: !1,
  files: {},
  add: function(r, e) {
    this.enabled !== !1 && (this.files[r] = e);
  },
  get: function(r) {
    if (this.enabled !== !1)
      return this.files[r];
  },
  remove: function(r) {
    delete this.files[r];
  },
  clear: function() {
    this.files = {};
  }
};
class Lf {
  constructor(e, t, n) {
    const i = this;
    let s = !1, o = 0, a = 0, c;
    const l = [];
    this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = n, this.itemStart = function(h) {
      a++, s === !1 && i.onStart !== void 0 && i.onStart(h, o, a), s = !0;
    }, this.itemEnd = function(h) {
      o++, i.onProgress !== void 0 && i.onProgress(h, o, a), o === a && (s = !1, i.onLoad !== void 0 && i.onLoad());
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
      for (let u = 0, f = l.length; u < f; u += 2) {
        const m = l[u], g = l[u + 1];
        if (m.global && (m.lastIndex = 0), m.test(h))
          return g;
      }
      return null;
    };
  }
}
const _o = /* @__PURE__ */ new Lf();
class wi {
  constructor(e) {
    this.manager = e !== void 0 ? e : _o, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {};
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
const Yt = {};
class Df extends Error {
  constructor(e, t) {
    super(e), this.response = t;
  }
}
class xo extends wi {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const s = Ji.get(e);
    if (s !== void 0)
      return this.manager.itemStart(e), setTimeout(() => {
        t && t(s), this.manager.itemEnd(e);
      }, 0), s;
    if (Yt[e] !== void 0) {
      Yt[e].push({
        onLoad: t,
        onProgress: n,
        onError: i
      });
      return;
    }
    Yt[e] = [], Yt[e].push({
      onLoad: t,
      onProgress: n,
      onError: i
    });
    const o = new Request(e, {
      headers: new Headers(this.requestHeader),
      credentials: this.withCredentials ? "include" : "same-origin"
    }), a = this.mimeType, c = this.responseType;
    fetch(o).then((l) => {
      if (l.status === 200 || l.status === 0) {
        if (l.status === 0 && console.warn("THREE.FileLoader: HTTP Status 0 received."), typeof ReadableStream > "u" || l.body === void 0 || l.body.getReader === void 0)
          return l;
        const h = Yt[e], u = l.body.getReader(), f = l.headers.get("Content-Length") || l.headers.get("X-File-Size"), m = f ? parseInt(f) : 0, g = m !== 0;
        let p = 0;
        const d = new ReadableStream({
          start(_) {
            S();
            function S() {
              u.read().then(({ done: y, value: b }) => {
                if (y)
                  _.close();
                else {
                  p += b.byteLength;
                  const T = new ProgressEvent("progress", { lengthComputable: g, loaded: p, total: m });
                  for (let C = 0, I = h.length; C < I; C++) {
                    const x = h[C];
                    x.onProgress && x.onProgress(T);
                  }
                  _.enqueue(b), S();
                }
              });
            }
          }
        });
        return new Response(d);
      } else
        throw new Df(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`, l);
    }).then((l) => {
      switch (c) {
        case "arraybuffer":
          return l.arrayBuffer();
        case "blob":
          return l.blob();
        case "document":
          return l.text().then((h) => new DOMParser().parseFromString(h, a));
        case "json":
          return l.json();
        default:
          if (a === void 0)
            return l.text();
          {
            const u = /charset="?([^;"\s]*)"?/i.exec(a), f = u && u[1] ? u[1].toLowerCase() : void 0, m = new TextDecoder(f);
            return l.arrayBuffer().then((g) => m.decode(g));
          }
      }
    }).then((l) => {
      Ji.add(e, l);
      const h = Yt[e];
      delete Yt[e];
      for (let u = 0, f = h.length; u < f; u++) {
        const m = h[u];
        m.onLoad && m.onLoad(l);
      }
    }).catch((l) => {
      const h = Yt[e];
      if (h === void 0)
        throw this.manager.itemError(e), l;
      delete Yt[e];
      for (let u = 0, f = h.length; u < f; u++) {
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
class Pf extends wi {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const s = this, o = Ji.get(e);
    if (o !== void 0)
      return s.manager.itemStart(e), setTimeout(function() {
        t && t(o), s.manager.itemEnd(e);
      }, 0), o;
    const a = xi("img");
    function c() {
      h(), Ji.add(e, this), t && t(this), s.manager.itemEnd(e);
    }
    function l(u) {
      h(), i && i(u), s.manager.itemError(e), s.manager.itemEnd(e);
    }
    function h() {
      a.removeEventListener("load", c, !1), a.removeEventListener("error", l, !1);
    }
    return a.addEventListener("load", c, !1), a.addEventListener("error", l, !1), e.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (a.crossOrigin = this.crossOrigin), s.manager.itemStart(e), a.src = e, a;
  }
}
class Rf extends wi {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const s = new ft(), o = new Pf(this.manager);
    return o.setCrossOrigin(this.crossOrigin), o.setPath(this.path), o.load(e, function(a) {
      s.image = a, s.needsUpdate = !0, t !== void 0 && t(s);
    }, n, i), s;
  }
}
class vo extends Ye {
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
const Vs = /* @__PURE__ */ new ke(), Pa = /* @__PURE__ */ new D(), Ra = /* @__PURE__ */ new D();
class If {
  constructor(e) {
    this.camera = e, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new ye(512, 512), this.map = null, this.mapPass = null, this.matrix = new ke(), this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new or(), this._frameExtents = new ye(1, 1), this._viewportCount = 1, this._viewports = [
      new tt(0, 0, 1, 1)
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
    Pa.setFromMatrixPosition(e.matrixWorld), t.position.copy(Pa), Ra.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(Ra), t.updateMatrixWorld(), Vs.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Vs), n.set(
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
    ), n.multiply(Vs);
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
class Ff extends If {
  constructor() {
    super(new co(-5, 5, 5, -5, 0.5, 500)), this.isDirectionalLightShadow = !0;
  }
}
class Nf extends vo {
  constructor(e, t) {
    super(e, t), this.isDirectionalLight = !0, this.type = "DirectionalLight", this.position.copy(Ye.DefaultUp), this.updateMatrix(), this.target = new Ye(), this.shadow = new Ff();
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e) {
    return super.copy(e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
  }
}
class Of extends vo {
  constructor(e, t) {
    super(e, t), this.isAmbientLight = !0, this.type = "AmbientLight";
  }
}
class Uf {
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
class zf {
  constructor(e, t, n = 0, i = 1 / 0) {
    this.ray = new ts(e, t), this.near = n, this.far = i, this.camera = null, this.layers = new ar(), this.params = {
      Mesh: {},
      Line: { threshold: 1 },
      LOD: {},
      Points: { threshold: 1 },
      Sprite: {}
    };
  }
  set(e, t) {
    this.ray.set(e, t);
  }
  setFromCamera(e, t) {
    t.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(t.matrixWorld), this.ray.direction.set(e.x, e.y, 0.5).unproject(t).sub(this.ray.origin).normalize(), this.camera = t) : t.isOrthographicCamera ? (this.ray.origin.set(e.x, e.y, (t.near + t.far) / (t.near - t.far)).unproject(t), this.ray.direction.set(0, 0, -1).transformDirection(t.matrixWorld), this.camera = t) : console.error("THREE.Raycaster: Unsupported camera type: " + t.type);
  }
  intersectObject(e, t = !0, n = []) {
    return er(e, this, n, t), n.sort(Ia), n;
  }
  intersectObjects(e, t = !0, n = []) {
    for (let i = 0, s = e.length; i < s; i++)
      er(e[i], this, n, t);
    return n.sort(Ia), n;
  }
}
function Ia(r, e) {
  return r.distance - e.distance;
}
function er(r, e, t, n) {
  if (r.layers.test(e.layers) && r.raycast(e, t), n === !0) {
    const i = r.children;
    for (let s = 0, o = i.length; s < o; s++)
      er(i[s], e, t, !0);
  }
}
class Fa {
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
    return this.radius = Math.sqrt(e * e + t * t + n * n), this.radius === 0 ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(e, n), this.phi = Math.acos(dt(t / this.radius, -1, 1))), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Bf extends Js {
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
    ], i = new Dt();
    i.setAttribute("position", new nt(t, 3)), i.setAttribute("color", new nt(n, 3));
    const s = new di({ vertexColors: !0, toneMapped: !1 });
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
  revision: ir
} }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = ir);
var fi = function() {
  var r = 0, e = document.createElement("div");
  e.style.cssText = "position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000", e.addEventListener("click", function(h) {
    h.preventDefault(), n(++r % e.children.length);
  }, !1);
  function t(h) {
    return e.appendChild(h.dom), h;
  }
  function n(h) {
    for (var u = 0; u < e.children.length; u++)
      e.children[u].style.display = u === h ? "block" : "none";
    r = h;
  }
  var i = (performance || Date).now(), s = i, o = 0, a = t(new fi.Panel("FPS", "#0ff", "#002")), c = t(new fi.Panel("MS", "#0f0", "#020"));
  if (self.performance && self.performance.memory)
    var l = t(new fi.Panel("MB", "#f08", "#201"));
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
      if (c.update(h - i, 200), h >= s + 1e3 && (a.update(o * 1e3 / (h - s), 100), s = h, o = 0, l)) {
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
fi.Panel = function(r, e, t) {
  var n = 1 / 0, i = 0, s = Math.round, o = s(window.devicePixelRatio || 1), a = 80 * o, c = 48 * o, l = 3 * o, h = 2 * o, u = 3 * o, f = 15 * o, m = 74 * o, g = 30 * o, p = document.createElement("canvas");
  p.width = a, p.height = c, p.style.cssText = "width:80px;height:48px";
  var d = p.getContext("2d");
  return d.font = "bold " + 9 * o + "px Helvetica,Arial,sans-serif", d.textBaseline = "top", d.fillStyle = t, d.fillRect(0, 0, a, c), d.fillStyle = e, d.fillText(r, l, h), d.fillRect(u, f, m, g), d.fillStyle = t, d.globalAlpha = 0.9, d.fillRect(u, f, m, g), {
    dom: p,
    update: function(_, S) {
      n = Math.min(n, _), i = Math.max(i, _), d.fillStyle = t, d.globalAlpha = 1, d.fillRect(0, 0, a, f), d.fillStyle = e, d.fillText(s(_) + " " + r + " (" + s(n) + "-" + s(i) + ")", l, h), d.drawImage(p, u + o, f, m - o, g, u, f, m - o, g), d.fillRect(u + m - o, f, o, g), d.fillStyle = t, d.globalAlpha = 0.9, d.fillRect(u + m - o, f, o, s((1 - _ / S) * g));
    }
  };
};
const kf = fi, Na = { type: "change" }, Hs = { type: "start" }, Oa = { type: "end" };
class Gf extends Sn {
  constructor(e, t) {
    super(), this.object = e, this.domElement = t, this.domElement.style.touchAction = "none", this.enabled = !0, this.target = new D(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = 0.05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: Tn.ROTATE, MIDDLE: Tn.DOLLY, RIGHT: Tn.PAN }, this.touches = { ONE: En.ROTATE, TWO: En.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this.getPolarAngle = function() {
      return a.phi;
    }, this.getAzimuthalAngle = function() {
      return a.theta;
    }, this.getDistance = function() {
      return this.object.position.distanceTo(this.target);
    }, this.listenToKeyEvents = function(E) {
      E.addEventListener("keydown", ht), this._domElementKeyEvents = E;
    }, this.saveState = function() {
      n.target0.copy(n.target), n.position0.copy(n.object.position), n.zoom0 = n.object.zoom;
    }, this.reset = function() {
      n.target.copy(n.target0), n.object.position.copy(n.position0), n.object.zoom = n.zoom0, n.object.updateProjectionMatrix(), n.dispatchEvent(Na), n.update(), s = i.NONE;
    }, this.update = function() {
      const E = new D(), P = new yn().setFromUnitVectors(e.up, new D(0, 1, 0)), le = P.clone().invert(), he = new D(), oe = new yn(), pe = 2 * Math.PI;
      return function() {
        const Ce = n.object.position;
        E.copy(Ce).sub(n.target), E.applyQuaternion(P), a.setFromVector3(E), n.autoRotate && s === i.NONE && A(I()), n.enableDamping ? (a.theta += c.theta * n.dampingFactor, a.phi += c.phi * n.dampingFactor) : (a.theta += c.theta, a.phi += c.phi);
        let Le = n.minAzimuthAngle, Ue = n.maxAzimuthAngle;
        return isFinite(Le) && isFinite(Ue) && (Le < -Math.PI ? Le += pe : Le > Math.PI && (Le -= pe), Ue < -Math.PI ? Ue += pe : Ue > Math.PI && (Ue -= pe), Le <= Ue ? a.theta = Math.max(Le, Math.min(Ue, a.theta)) : a.theta = a.theta > (Le + Ue) / 2 ? Math.max(Le, a.theta) : Math.min(Ue, a.theta)), a.phi = Math.max(n.minPolarAngle, Math.min(n.maxPolarAngle, a.phi)), a.makeSafe(), a.radius *= l, a.radius = Math.max(n.minDistance, Math.min(n.maxDistance, a.radius)), n.enableDamping === !0 ? n.target.addScaledVector(h, n.dampingFactor) : n.target.add(h), E.setFromSpherical(a), E.applyQuaternion(le), Ce.copy(n.target).add(E), n.object.lookAt(n.target), n.enableDamping === !0 ? (c.theta *= 1 - n.dampingFactor, c.phi *= 1 - n.dampingFactor, h.multiplyScalar(1 - n.dampingFactor)) : (c.set(0, 0, 0), h.set(0, 0, 0)), l = 1, u || he.distanceToSquared(n.object.position) > o || 8 * (1 - oe.dot(n.object.quaternion)) > o ? (n.dispatchEvent(Na), he.copy(n.object.position), oe.copy(n.object.quaternion), u = !1, !0) : !1;
      };
    }(), this.dispose = function() {
      n.domElement.removeEventListener("contextmenu", B), n.domElement.removeEventListener("pointerdown", Ke), n.domElement.removeEventListener("pointercancel", rt), n.domElement.removeEventListener("wheel", yt), n.domElement.removeEventListener("pointermove", qe), n.domElement.removeEventListener("pointerup", Xe), n._domElementKeyEvents !== null && n._domElementKeyEvents.removeEventListener("keydown", ht);
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
    const o = 1e-6, a = new Fa(), c = new Fa();
    let l = 1;
    const h = new D();
    let u = !1;
    const f = new ye(), m = new ye(), g = new ye(), p = new ye(), d = new ye(), _ = new ye(), S = new ye(), y = new ye(), b = new ye(), T = [], C = {};
    function I() {
      return 2 * Math.PI / 60 / 60 * n.autoRotateSpeed;
    }
    function x() {
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
    }(), U = function() {
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
    function q(E) {
      n.object.isPerspectiveCamera ? l *= E : n.object.isOrthographicCamera ? (n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom / E)), n.object.updateProjectionMatrix(), u = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), n.enableZoom = !1);
    }
    function Z(E) {
      f.set(E.clientX, E.clientY);
    }
    function Q(E) {
      S.set(E.clientX, E.clientY);
    }
    function X(E) {
      p.set(E.clientX, E.clientY);
    }
    function ee(E) {
      m.set(E.clientX, E.clientY), g.subVectors(m, f).multiplyScalar(n.rotateSpeed);
      const P = n.domElement;
      A(2 * Math.PI * g.x / P.clientHeight), F(2 * Math.PI * g.y / P.clientHeight), f.copy(m), n.update();
    }
    function Y(E) {
      y.set(E.clientX, E.clientY), b.subVectors(y, S), b.y > 0 ? N(x()) : b.y < 0 && q(x()), S.copy(y), n.update();
    }
    function V(E) {
      d.set(E.clientX, E.clientY), _.subVectors(d, p).multiplyScalar(n.panSpeed), U(_.x, _.y), p.copy(d), n.update();
    }
    function z(E) {
      E.deltaY < 0 ? q(x()) : E.deltaY > 0 && N(x()), n.update();
    }
    function se(E) {
      let P = !1;
      switch (E.code) {
        case n.keys.UP:
          E.ctrlKey || E.metaKey || E.shiftKey ? F(2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : U(0, n.keyPanSpeed), P = !0;
          break;
        case n.keys.BOTTOM:
          E.ctrlKey || E.metaKey || E.shiftKey ? F(-2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : U(0, -n.keyPanSpeed), P = !0;
          break;
        case n.keys.LEFT:
          E.ctrlKey || E.metaKey || E.shiftKey ? A(2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : U(n.keyPanSpeed, 0), P = !0;
          break;
        case n.keys.RIGHT:
          E.ctrlKey || E.metaKey || E.shiftKey ? A(-2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : U(-n.keyPanSpeed, 0), P = !0;
          break;
      }
      P && (E.preventDefault(), n.update());
    }
    function te() {
      if (T.length === 1)
        f.set(T[0].pageX, T[0].pageY);
      else {
        const E = 0.5 * (T[0].pageX + T[1].pageX), P = 0.5 * (T[0].pageY + T[1].pageY);
        f.set(E, P);
      }
    }
    function re() {
      if (T.length === 1)
        p.set(T[0].pageX, T[0].pageY);
      else {
        const E = 0.5 * (T[0].pageX + T[1].pageX), P = 0.5 * (T[0].pageY + T[1].pageY);
        p.set(E, P);
      }
    }
    function H() {
      const E = T[0].pageX - T[1].pageX, P = T[0].pageY - T[1].pageY, le = Math.sqrt(E * E + P * P);
      S.set(0, le);
    }
    function Ae() {
      n.enableZoom && H(), n.enablePan && re();
    }
    function de() {
      n.enableZoom && H(), n.enableRotate && te();
    }
    function _e(E) {
      if (T.length == 1)
        m.set(E.pageX, E.pageY);
      else {
        const le = ve(E), he = 0.5 * (E.pageX + le.x), oe = 0.5 * (E.pageY + le.y);
        m.set(he, oe);
      }
      g.subVectors(m, f).multiplyScalar(n.rotateSpeed);
      const P = n.domElement;
      A(2 * Math.PI * g.x / P.clientHeight), F(2 * Math.PI * g.y / P.clientHeight), f.copy(m);
    }
    function ue(E) {
      if (T.length === 1)
        d.set(E.pageX, E.pageY);
      else {
        const P = ve(E), le = 0.5 * (E.pageX + P.x), he = 0.5 * (E.pageY + P.y);
        d.set(le, he);
      }
      _.subVectors(d, p).multiplyScalar(n.panSpeed), U(_.x, _.y), p.copy(d);
    }
    function Fe(E) {
      const P = ve(E), le = E.pageX - P.x, he = E.pageY - P.y, oe = Math.sqrt(le * le + he * he);
      y.set(0, oe), b.set(0, Math.pow(y.y / S.y, n.zoomSpeed)), N(b.y), S.copy(y);
    }
    function be(E) {
      n.enableZoom && Fe(E), n.enablePan && ue(E);
    }
    function xe(E) {
      n.enableZoom && Fe(E), n.enableRotate && _e(E);
    }
    function Ke(E) {
      n.enabled !== !1 && (T.length === 0 && (n.domElement.setPointerCapture(E.pointerId), n.domElement.addEventListener("pointermove", qe), n.domElement.addEventListener("pointerup", Xe)), K(E), E.pointerType === "touch" ? w(E) : Ge(E));
    }
    function qe(E) {
      n.enabled !== !1 && (E.pointerType === "touch" ? v(E) : Oe(E));
    }
    function Xe(E) {
      ne(E), T.length === 0 && (n.domElement.releasePointerCapture(E.pointerId), n.domElement.removeEventListener("pointermove", qe), n.domElement.removeEventListener("pointerup", Xe)), n.dispatchEvent(Oa), s = i.NONE;
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
        case Tn.DOLLY:
          if (n.enableZoom === !1)
            return;
          Q(E), s = i.DOLLY;
          break;
        case Tn.ROTATE:
          if (E.ctrlKey || E.metaKey || E.shiftKey) {
            if (n.enablePan === !1)
              return;
            X(E), s = i.PAN;
          } else {
            if (n.enableRotate === !1)
              return;
            Z(E), s = i.ROTATE;
          }
          break;
        case Tn.PAN:
          if (E.ctrlKey || E.metaKey || E.shiftKey) {
            if (n.enableRotate === !1)
              return;
            Z(E), s = i.ROTATE;
          } else {
            if (n.enablePan === !1)
              return;
            X(E), s = i.PAN;
          }
          break;
        default:
          s = i.NONE;
      }
      s !== i.NONE && n.dispatchEvent(Hs);
    }
    function Oe(E) {
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
    function yt(E) {
      n.enabled === !1 || n.enableZoom === !1 || s !== i.NONE || (E.preventDefault(), n.dispatchEvent(Hs), z(E), n.dispatchEvent(Oa));
    }
    function ht(E) {
      n.enabled === !1 || n.enablePan === !1 || se(E);
    }
    function w(E) {
      switch (ae(E), T.length) {
        case 1:
          switch (n.touches.ONE) {
            case En.ROTATE:
              if (n.enableRotate === !1)
                return;
              te(), s = i.TOUCH_ROTATE;
              break;
            case En.PAN:
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
            case En.DOLLY_PAN:
              if (n.enableZoom === !1 && n.enablePan === !1)
                return;
              Ae(), s = i.TOUCH_DOLLY_PAN;
              break;
            case En.DOLLY_ROTATE:
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
      s !== i.NONE && n.dispatchEvent(Hs);
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
      T.push(E);
    }
    function ne(E) {
      delete C[E.pointerId];
      for (let P = 0; P < T.length; P++)
        if (T[P].pointerId == E.pointerId) {
          T.splice(P, 1);
          return;
        }
    }
    function ae(E) {
      let P = C[E.pointerId];
      P === void 0 && (P = new ye(), C[E.pointerId] = P), P.set(E.pageX, E.pageY);
    }
    function ve(E) {
      const P = E.pointerId === T[0].pointerId ? T[1] : T[0];
      return C[P.pointerId];
    }
    n.domElement.addEventListener("contextmenu", B), n.domElement.addEventListener("pointerdown", Ke), n.domElement.addEventListener("pointercancel", rt), n.domElement.addEventListener("wheel", yt, { passive: !1 }), this.update();
  }
}
class Vf extends wi {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const s = this, o = this.path === "" ? Uf.extractUrlBase(e) : this.path, a = new xo(this.manager);
    a.setPath(this.path), a.setRequestHeader(this.requestHeader), a.setWithCredentials(this.withCredentials), a.load(e, function(c) {
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
      let f = h >= 0 ? l.substring(h + 1) : "";
      if (f = f.trim(), u === "newmtl")
        i = { name: f }, o[f] = i;
      else if (u === "ka" || u === "kd" || u === "ks" || u === "ke") {
        const m = f.split(s, 3);
        i[u] = [parseFloat(m[0]), parseFloat(m[1]), parseFloat(m[2])];
      } else
        i[u] = f;
    }
    const a = new Hf(this.resourcePath || t, this.materialOptions);
    return a.setCrossOrigin(this.crossOrigin), a.setManager(this.manager), a.setMaterials(o), a;
  }
}
class Hf {
  constructor(e = "", t = {}) {
    this.baseUrl = e, this.options = t, this.materialsInfo = {}, this.materials = {}, this.materialsArray = [], this.nameLookup = {}, this.crossOrigin = "anonymous", this.side = this.options.side !== void 0 ? this.options.side : nn, this.wrap = this.options.wrap !== void 0 ? this.options.wrap : Ki;
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
        let a = !0, c = i[o];
        const l = o.toLowerCase();
        switch (l) {
          case "kd":
          case "ka":
          case "ks":
            this.options && this.options.normalizeRGB && (c = [c[0] / 255, c[1] / 255, c[2] / 255]), this.options && this.options.ignoreZeroRGBs && c[0] === 0 && c[1] === 0 && c[2] === 0 && (a = !1);
            break;
        }
        a && (s[l] = c);
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
    function s(a, c) {
      return typeof c != "string" || c === "" ? "" : /^https?:\/\//i.test(c) ? c : a + c;
    }
    function o(a, c) {
      if (i[a])
        return;
      const l = t.getTextureParams(c, i), h = t.loadTexture(s(t.baseUrl, l.url));
      h.repeat.copy(l.scale), h.offset.copy(l.offset), h.wrapS = t.wrap, h.wrapT = t.wrap, (a === "map" || a === "emissiveMap") && (h.encoding = ze), i[a] = h;
    }
    for (const a in n) {
      const c = n[a];
      let l;
      if (c !== "")
        switch (a.toLowerCase()) {
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
    return this.materials[e] = new go(i), this.materials[e];
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
    const o = this.manager !== void 0 ? this.manager : _o;
    let a = o.getHandler(e);
    a === null && (a = new Rf(o)), a.setCrossOrigin && a.setCrossOrigin(this.crossOrigin);
    const c = a.load(e, n, i, s);
    return t !== void 0 && (c.mapping = t), c;
  }
}
const Wf = /^[og]\s*(.+)?/, qf = /^mtllib /, Xf = /^usemtl /, jf = /^usemap /, Ua = /\s+/, za = new D(), Ws = new D(), Ba = new D(), ka = new D(), wt = new D(), Yi = new Ee();
function Yf() {
  const r = {
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
          const a = {
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
          return this.materials.push(a), a;
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
      za.fromArray(i, e), Ws.fromArray(i, t), Ba.fromArray(i, n), wt.subVectors(Ba, Ws), ka.subVectors(za, Ws), wt.cross(ka), wt.normalize(), s.push(wt.x, wt.y, wt.z), s.push(wt.x, wt.y, wt.z), s.push(wt.x, wt.y, wt.z);
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
    addFace: function(e, t, n, i, s, o, a, c, l) {
      const h = this.vertices.length;
      let u = this.parseVertexIndex(e, h), f = this.parseVertexIndex(t, h), m = this.parseVertexIndex(n, h);
      if (this.addVertex(u, f, m), this.addColor(u, f, m), a !== void 0 && a !== "") {
        const g = this.normals.length;
        u = this.parseNormalIndex(a, g), f = this.parseNormalIndex(c, g), m = this.parseNormalIndex(l, g), this.addNormal(u, f, m);
      } else
        this.addFaceNormal(u, f, m);
      if (i !== void 0 && i !== "") {
        const g = this.uvs.length;
        u = this.parseUVIndex(i, g), f = this.parseUVIndex(s, g), m = this.parseUVIndex(o, g), this.addUV(u, f, m), this.object.geometry.hasUVIndices = !0;
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
  return r.startObject("", !1), r;
}
class Zf extends wi {
  constructor(e) {
    super(e), this.materials = null;
  }
  load(e, t, n, i) {
    const s = this, o = new xo(this.manager);
    o.setPath(this.path), o.setRequestHeader(this.requestHeader), o.setWithCredentials(this.withCredentials), o.load(e, function(a) {
      try {
        t(s.parse(a));
      } catch (c) {
        i ? i(c) : console.error(c), s.manager.itemError(e);
      }
    }, n, i);
  }
  setMaterials(e) {
    return this.materials = e, this;
  }
  parse(e) {
    const t = new Yf();
    e.indexOf(`\r
`) !== -1 && (e = e.replace(/\r\n/g, `
`)), e.indexOf(`\\
`) !== -1 && (e = e.replace(/\\\n/g, ""));
    const n = e.split(`
`);
    let i = [];
    for (let a = 0, c = n.length; a < c; a++) {
      const l = n[a].trimStart();
      if (l.length === 0)
        continue;
      const h = l.charAt(0);
      if (h !== "#")
        if (h === "v") {
          const u = l.split(Ua);
          switch (u[0]) {
            case "v":
              t.vertices.push(
                parseFloat(u[1]),
                parseFloat(u[2]),
                parseFloat(u[3])
              ), u.length >= 7 ? (Yi.setRGB(
                parseFloat(u[4]),
                parseFloat(u[5]),
                parseFloat(u[6])
              ).convertSRGBToLinear(), t.colors.push(Yi.r, Yi.g, Yi.b)) : t.colors.push(void 0, void 0, void 0);
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
          const f = l.slice(1).trim().split(Ua), m = [];
          for (let p = 0, d = f.length; p < d; p++) {
            const _ = f[p];
            if (_.length > 0) {
              const S = _.split("/");
              m.push(S);
            }
          }
          const g = m[0];
          for (let p = 1, d = m.length - 1; p < d; p++) {
            const _ = m[p], S = m[p + 1];
            t.addFace(
              g[0],
              _[0],
              S[0],
              g[1],
              _[1],
              S[1],
              g[2],
              _[2],
              S[2]
            );
          }
        } else if (h === "l") {
          const u = l.substring(1).trim().split(" ");
          let f = [];
          const m = [];
          if (l.indexOf("/") === -1)
            f = u;
          else
            for (let g = 0, p = u.length; g < p; g++) {
              const d = u[g].split("/");
              d[0] !== "" && f.push(d[0]), d[1] !== "" && m.push(d[1]);
            }
          t.addLineGeometry(f, m);
        } else if (h === "p") {
          const f = l.slice(1).trim().split(" ");
          t.addPointGeometry(f);
        } else if ((i = Wf.exec(l)) !== null) {
          const u = (" " + i[0].slice(1).trim()).slice(1);
          t.startObject(u);
        } else if (Xf.test(l))
          t.object.startMaterial(l.substring(7).trim(), t.materialLibraries);
        else if (qf.test(l))
          t.materialLibraries.push(l.substring(7).trim());
        else if (jf.test(l))
          console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');
        else if (h === "s") {
          if (i = l.split(" "), i.length > 1) {
            const f = i[1].trim().toLowerCase();
            t.object.smooth = f !== "0" && f !== "off";
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
    const s = new ci();
    if (s.materialLibraries = [].concat(t.materialLibraries), !(t.objects.length === 1 && t.objects[0].geometry.vertices.length === 0) === !0)
      for (let a = 0, c = t.objects.length; a < c; a++) {
        const l = t.objects[a], h = l.geometry, u = l.materials, f = h.type === "Line", m = h.type === "Points";
        let g = !1;
        if (h.vertices.length === 0)
          continue;
        const p = new Dt();
        p.setAttribute("position", new nt(h.vertices, 3)), h.normals.length > 0 && p.setAttribute("normal", new nt(h.normals, 3)), h.colors.length > 0 && (g = !0, p.setAttribute("color", new nt(h.colors, 3))), h.hasUVIndices === !0 && p.setAttribute("uv", new nt(h.uvs, 2));
        const d = [];
        for (let S = 0, y = u.length; S < y; S++) {
          const b = u[S], T = b.name + "_" + b.smooth + "_" + g;
          let C = t.materials[T];
          if (this.materials !== null) {
            if (C = this.materials.create(b.name), f && C && !(C instanceof di)) {
              const I = new di();
              kt.prototype.copy.call(I, C), I.color.copy(C.color), C = I;
            } else if (m && C && !(C instanceof hi)) {
              const I = new hi({ size: 10, sizeAttenuation: !1 });
              kt.prototype.copy.call(I, C), I.color.copy(C.color), I.map = C.map, C = I;
            }
          }
          C === void 0 && (f ? C = new di() : m ? C = new hi({ size: 1, sizeAttenuation: !1 }) : C = new go(), C.name = b.name, C.flatShading = !b.smooth, C.vertexColors = g, t.materials[T] = C), d.push(C);
        }
        let _;
        if (d.length > 1) {
          for (let S = 0, y = u.length; S < y; S++) {
            const b = u[S];
            p.addGroup(b.groupStart, b.groupCount, S);
          }
          f ? _ = new Js(p, d) : m ? _ = new Gs(p, d) : _ = new Mt(p, d);
        } else
          f ? _ = new Js(p, d[0]) : m ? _ = new Gs(p, d[0]) : _ = new Mt(p, d[0]);
        _.name = l.name, s.add(_);
      }
    else if (t.vertices.length > 0) {
      const a = new hi({ size: 1, sizeAttenuation: !1 }), c = new Dt();
      c.setAttribute("position", new nt(t.vertices, 3)), t.colors.length > 0 && t.colors[0] !== void 0 && (c.setAttribute("color", new nt(t.colors, 3)), a.vertexColors = !0);
      const l = new Gs(c, a);
      s.add(l);
    }
    return s;
  }
}
const $f = Math.PI / 180;
function Mo(r) {
  return r * $f;
}
class Kf extends Ye {
  constructor(e = document.createElement("div")) {
    super(), this.isCSS2DObject = !0, this.element = e, this.element.style.position = "absolute", this.element.style.userSelect = "none", this.element.setAttribute("draggable", !1), this.addEventListener("removed", function() {
      this.traverse(function(t) {
        t.element instanceof Element && t.element.parentNode !== null && t.element.parentNode.removeChild(t.element);
      });
    });
  }
  copy(e, t) {
    return super.copy(e, t), this.element = e.element.cloneNode(!0), this;
  }
}
const Gn = new D(), Ga = new ke(), Va = new ke(), Ha = new D(), Wa = new D();
class Jf {
  constructor(e = {}) {
    const t = this;
    let n, i, s, o;
    const a = {
      objects: /* @__PURE__ */ new WeakMap()
    }, c = e.element !== void 0 ? e.element : document.createElement("div");
    c.style.overflow = "hidden", this.domElement = c, this.getSize = function() {
      return {
        width: n,
        height: i
      };
    }, this.render = function(m, g) {
      m.matrixWorldAutoUpdate === !0 && m.updateMatrixWorld(), g.parent === null && g.matrixWorldAutoUpdate === !0 && g.updateMatrixWorld(), Ga.copy(g.matrixWorldInverse), Va.multiplyMatrices(g.projectionMatrix, Ga), l(m, m, g), f(m);
    }, this.setSize = function(m, g) {
      n = m, i = g, s = n / 2, o = i / 2, c.style.width = m + "px", c.style.height = g + "px";
    };
    function l(m, g, p) {
      if (m.isCSS2DObject) {
        Gn.setFromMatrixPosition(m.matrixWorld), Gn.applyMatrix4(Va);
        const d = m.visible === !0 && Gn.z >= -1 && Gn.z <= 1 && m.layers.test(p.layers) === !0;
        if (m.element.style.display = d === !0 ? "" : "none", d === !0) {
          m.onBeforeRender(t, g, p);
          const S = m.element;
          S.style.transform = "translate(-50%,-50%) translate(" + (Gn.x * s + s) + "px," + (-Gn.y * o + o) + "px)", S.parentNode !== c && c.appendChild(S), m.onAfterRender(t, g, p);
        }
        const _ = {
          distanceToCameraSquared: h(p, m)
        };
        a.objects.set(m, _);
      }
      for (let d = 0, _ = m.children.length; d < _; d++)
        l(m.children[d], g, p);
    }
    function h(m, g) {
      return Ha.setFromMatrixPosition(m.matrixWorld), Wa.setFromMatrixPosition(g.matrixWorld), Ha.distanceToSquared(Wa);
    }
    function u(m) {
      const g = [];
      return m.traverse(function(p) {
        p.isCSS2DObject && g.push(p);
      }), g;
    }
    function f(m) {
      const g = u(m).sort(function(d, _) {
        if (d.renderOrder !== _.renderOrder)
          return _.renderOrder - d.renderOrder;
        const S = a.objects.get(d).distanceToCameraSquared, y = a.objects.get(_).distanceToCameraSquared;
        return S - y;
      }), p = g.length;
      for (let d = 0, _ = g.length; d < _; d++)
        g[d].element.style.zIndex = p - d;
    }
  }
}
var zt = !1, yo = "sih3d-container", tr = "./assets/", Tt, Et = {
  hallLength: 5,
  hallWidth: 5,
  walls: [
    [0, 2.5, 2.5, 2.5],
    [-0.5, 2.5, -2.5, 2.5],
    [2.5, 2.5, 2.5, -2.5],
    [2.5, -2.5, -2.5, -2.5],
    [-2.5, -2.5, -2.5, 2.5]
  ],
  entrances: [[-0.5, 2.5, 0, 2.5]],
  stalls: [
    { x: 0, y: 0, rot: -60, id: "A1", availability: "available" },
    { x: 2, y: 2, rot: 180, id: "A2", availability: "available" },
    { x: 2, y: 1, rot: 180, id: "A3", availability: "pending" },
    { x: 2, y: 0, rot: 180, id: "A4", availability: "available" },
    {
      x: 2,
      y: -1,
      rot: 180,
      id: "A5",
      availability: "allocated",
      allocatedTo: "Some Guy Who is Too Damn Rich"
    }
  ]
};
const Qf = (r) => {
  zt = r;
};
var hr = (r) => {
  zt && console.log(`SiH3D: Clicked on stall id: ${r}`);
};
const ep = (r) => {
  yo = r, zt && console.log(`SiH3D: Container ID updated: ${stallID}`);
}, tp = (r) => {
  tr = r, zt && console.log(`SiH3D: Asset path updated: ${stallID}`);
}, np = (r) => {
  hr = r, zt && console.log(`SiH3D: OnStallClick updated: ${stallID}`);
};
var ut, Hn, ui, Qi, nr, jn = [], bo = [], So = [], wo = [], pi = "";
const ip = (r = 0, e = 0, t = 0, n) => {
  let i;
  n.availability == "available" ? i = 65280 : n.availability == "pending" ? i = 16776960 : i = 16711680;
  const s = new wn(1, 0.65, 1), o = new cr({
    color: i,
    side: vi,
    opacity: 0.25,
    transparent: !0
  }), a = new Mt(s, o);
  a.position.x = r, a.position.y = 0.325, a.position.z = e, a.rotateY(Mo(t)), a.userData.stallID = n.id, a.userData.availability = n.availability, qa(n.id, a);
  let c;
  n.availability == "allocated" ? c = `Occupied: ${n.allocatedTo}` : n.availability == "pending" ? c = "Booked" : c = "Available", ap(qa(c, a, -0.2), a), ut.add(a), jn.push(a);
}, sp = (r = 0, e = 0, t = 0) => {
  var n = new Vf(), i = new Zf();
  n.setPath(tr), i.setPath(tr), n.load("stall.mtl", (s) => {
    s.preload(), i.setMaterials(s), i.load("stall.obj", (o) => {
      o.position.x = r, o.position.z = e, o.rotateY(Mo(t)), ut.add(o), bo.push(o);
    });
  });
}, To = (r = 0, e = 0, t = 2, n = 0, i = 0, s = 0.85, o = 0.05) => {
  const a = new D(r, 0, e), c = new D(t, 0, n), l = a.distanceTo(c), h = c.clone().sub(a).normalize(), u = a.clone().add(h.multiplyScalar(l / 2)), f = new wn(o, s, l), m = new cr({ color: 16777215 }), g = new Mt(f, m);
  g.position.copy(u), g.lookAt(c), g.position.y = i || s / 2, ut.add(g), So.push(g);
}, rp = (r = 0, e = 0, t = 2, n = 0) => {
  To(r, e, t, n, 0.7, 0.3);
}, qa = (r = "Label", e, t = 0.2) => {
  const n = document.createElement("div");
  n.innerText = r, n.style = "color: #fff; padding: 2px; background: rgba(0, 0, 0, 0.6); margin-top: -1em;";
  const i = new Kf(n);
  return i.position.set(0, t, 0), e.add(i), wo.push(n), i;
}, ap = (r, e) => {
  e.userData.labelOccupied = r, r.visible = !1;
}, op = () => {
  for (let r of Et.walls)
    To(...r);
  for (let r of Et.entrances)
    rp(...r);
  for (let r of Et.stalls)
    sp(r.x, r.y, r.rot), ip(r.x, r.y, r.rot, r);
}, lp = (r) => {
  var e = ui.domElement.getBoundingClientRect();
  Qi.x = (r.clientX - e.left) / (e.right - e.left) * 2 - 1, Qi.y = -((r.clientY - e.top) / (e.bottom - e.top)) * 2 + 1;
}, cp = () => {
  pi != "" && hr(pi);
}, hp = () => {
  nr.setFromCamera(Qi, Hn);
  var r = [];
  if (nr.intersectObjects(jn, !0, r).length) {
    for (let t of jn)
      t.material.opacity = 0.25, t.userData.labelOccupied.visible = !1;
    r[0].object.material.opacity = 0.5, r[0].object.userData.availability == "available" ? pi = r[0].object.userData.stallID : pi = "", r[0].object.userData.labelOccupied.visible = !0;
  } else {
    pi = "";
    for (let t of jn)
      t.material.opacity = 0.25;
  }
}, up = (r = Et) => {
  zt && console.log("SiH3D: Initiating..."), Et = r, Tt = document.getElementById(yo);
  const e = new kf();
  e.domElement.style.position = "relative", zt && Tt.appendChild(e.domElement), ui = new mo({
    antialias: !0
  }), ui.setSize(Tt.offsetWidth, Tt.offsetHeight), Tt.appendChild(ui.domElement);
  const t = new Jf();
  t.setSize(Tt.offsetWidth, Tt.offsetHeight), t.domElement.style.position = "absolute", t.domElement.style.top = "0px", Tt.appendChild(t.domElement), ut = new Af(), ut.background = new Ee(13421772);
  const n = new Bf(5);
  zt && ut.add(n), Hn = new Ct(
    75,
    Tt.offsetWidth / Tt.offsetHeight,
    0.1,
    1e3
  ), Hn.position.z = 5;
  const i = new Of(4210752);
  ut.add(i);
  const s = new Nf(16777215);
  s.position.set(2, 3, 4), ut.add(s);
  const o = new ns(
    Et.hallWidth,
    Et.hallLength
  ), a = new cr({
    color: 13421772,
    side: vi
  }), c = new Mt(o, a);
  c.rotateX(Math.PI / 2), c.receiveShadow = !0, ut.add(c), Eo(Et);
  const l = () => {
    requestAnimationFrame(l), h.update(), hp(), zt && e.update(), ui.render(ut, Hn), t.render(ut, Hn);
  }, h = new Gf(Hn, t.domElement);
  h.enableDamping = !0, h.dampingFactor = 0.05, h.minDistance = 2, h.maxDistance = Math.max(Et.hallLength, Et.hallWidth), h.enablePan = !1, h.maxPolarAngle = Math.PI / 2.1, nr = new zf(), Qi = new ye(), Tt.addEventListener("mousemove", lp, !1), Tt.addEventListener("mousedown", cp), l();
}, Eo = (r = Et) => {
  zt && console.log("SiH3D: Updating..."), Et = r;
  let e = jn;
  jn = [];
  for (let t of e)
    ut.remove(t);
  for (let t of bo)
    ut.remove(t);
  for (let t of So)
    ut.remove(t);
  for (let t of wo)
    t.remove();
  op();
}, dp = {
  debugMode: Qf,
  updateContainerID: ep,
  updateAssetPath: tp,
  updateOnStallClick: np,
  init: up,
  update: Eo,
  onStallClick: hr
};
export {
  dp as default
};
