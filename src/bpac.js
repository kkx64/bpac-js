var n = n || {}
n.appendMessage = (n) => {
  const t = new CustomEvent('bpac_send', { detail: n })
  document.dispatchEvent(t)
}
const t = "Can't connect to b-PAC"
export class IObject {
  constructor(n) {
    this.p_ = n
  }

  GetAttribute(i) {
    const r = 'IObject::GetAttribute'
    const u = { method: r, p: this.p_, kind: i }
    const f = new Promise((n, i) => {
      const u = (f) => {
        document.removeEventListener(r, u),
          f.detail.connect == !1
            ? i(t)
            : f.detail.ret == !1
            ? n()
            : n(f.detail.attribute)
      }
      document.addEventListener(r, u)
    })
    return n.appendMessage(u), f
  }

  GetData(i) {
    const r = 'IObject::GetData'
    const u = { method: r, p: this.p_, kind: i }
    const f = new Promise((n, i) => {
      const u = (f) => {
        document.removeEventListener(r, u),
          f.detail.connect == !1
            ? i(t)
            : f.detail.ret == !1
            ? n()
            : n(f.detail.data)
      }
      document.addEventListener(r, u)
    })
    return n.appendMessage(u), f
  }

  GetFontBold() {
    const i = 'IObject::GetFontBold'
    const r = { method: i, p: this.p_ }
    const u = new Promise((n, r) => {
      const u = (f) => {
        document.removeEventListener(i, u),
          f.detail.connect == !1 ? r(t) : n(f.detail.ret)
      }
      document.addEventListener(i, u)
    })
    return n.appendMessage(r), u
  }

  GetFontEffect() {
    const i = 'IObject::GetFontEffect'
    const r = { method: i, p: this.p_ }
    const u = new Promise((n, r) => {
      const u = (f) => {
        document.removeEventListener(i, u),
          f.detail.ret == !1 || f.detail.connect == !1
            ? r(t)
            : n(f.detail.effect)
      }
      document.addEventListener(i, u)
    })
    return n.appendMessage(r), u
  }

  GetFontItalics() {
    const i = 'IObject::GetFontItalics'
    const r = { method: i, p: this.p_ }
    const u = new Promise((n, r) => {
      const u = (f) => {
        document.removeEventListener(i, u),
          f.detail.connect == !1 ? r(t) : n(f.detail.ret)
      }
      document.addEventListener(i, u)
    })
    return n.appendMessage(r), u
  }

  GetFontMaxPoint() {
    const i = 'IObject::GetFontMaxPoint'
    const r = { method: i, p: this.p_ }
    const u = new Promise((n, r) => {
      const u = (f) => {
        document.removeEventListener(i, u),
          f.detail.ret == !1 || f.detail.connect == !1
            ? r(t)
            : n(f.detail.point)
      }
      document.addEventListener(i, u)
    })
    return n.appendMessage(r), u
  }

  GetFontName() {
    const i = 'IObject::GetFontName'
    const r = { method: i, p: this.p_ }
    const u = new Promise((n, r) => {
      const u = (f) => {
        document.removeEventListener(i, u),
          f.detail.ret == !1 || f.detail.connect == !1 ? r(t) : n(f.detail.name)
      }
      document.addEventListener(i, u)
    })
    return n.appendMessage(r), u
  }

  GetFontStrikeout() {
    const i = 'IObject::GetFontStrikeout'
    const r = { method: i, p: this.p_ }
    const u = new Promise((n, r) => {
      const u = (f) => {
        document.removeEventListener(i, u),
          f.detail.connect == !1 ? r(t) : n(f.detail.ret)
      }
      document.addEventListener(i, u)
    })
    return n.appendMessage(r), u
  }

  GetFontUnderline() {
    const i = 'IObject::GetFontUnderline'
    const r = { method: i, p: this.p_ }
    const u = new Promise((n, r) => {
      const u = (f) => {
        document.removeEventListener(i, u),
          f.detail.connect == !1 ? r(t) : n(f.detail.ret)
      }
      document.addEventListener(i, u)
    })
    return n.appendMessage(r), u
  }

  SetAlign(i, r) {
    const u = 'IObject::SetAlign'
    const f = { method: u, p: this.p_, horizontal: i, vertical: r }
    const e = new Promise((n, i) => {
      const r = (f) => {
        document.removeEventListener(u, r),
          f.detail.connect == !1 ? i(t) : n(f.detail.ret)
      }
      document.addEventListener(u, r)
    })
    return n.appendMessage(f), e
  }

  SetAttribute(i, r) {
    const u = 'IObject::SetAttribute'
    const f = { method: u, p: this.p_, kind: i, attribute: r }
    const e = new Promise((n, i) => {
      const r = (f) => {
        document.removeEventListener(u, r),
          f.detail.connect == !1 ? i(t) : n(f.detail.ret)
      }
      document.addEventListener(u, r)
    })
    return n.appendMessage(f), e
  }

  SetData(i, r, u) {
    let e
    const o = Object.prototype.toString.call(r).slice(8, -1)
    e = o === 'Date' ? r.getTime() / 1e3 : r
    const f = 'IObject::SetData'
    const s = { method: f, p: this.p_, kind: i, data: e, param: u }
    const h = new Promise((n, i) => {
      const r = (u) => {
        document.removeEventListener(f, r),
          u.detail.connect == !1 ? i(t) : n(u.detail.ret)
      }
      document.addEventListener(f, r)
    })
    return n.appendMessage(s), h
  }

  SetFontBold(i) {
    const r = 'IObject::SetFontBold'
    const u = { method: r, p: this.p_, bold: i }
    const f = new Promise((n, i) => {
      const u = (f) => {
        document.removeEventListener(r, u),
          f.detail.connect == !1 ? i(t) : n(f.detail.ret)
      }
      document.addEventListener(r, u)
    })
    return n.appendMessage(u), f
  }

  SetFontEffect(i) {
    const r = 'IObject::SetFontEffect'
    const u = { method: r, p: this.p_, effect: i }
    const f = new Promise((n, i) => {
      const u = (f) => {
        document.removeEventListener(r, u),
          f.detail.connect == !1 ? i(t) : n(f.detail.ret)
      }
      document.addEventListener(r, u)
    })
    return n.appendMessage(u), f
  }

  SetFontItalics(i) {
    const r = 'IObject::SetFontItalics'
    const u = { method: r, p: this.p_, italics: i }
    const f = new Promise((n, i) => {
      const u = (f) => {
        document.removeEventListener(r, u),
          f.detail.connect == !1 ? i(t) : n(f.detail.ret)
      }
      document.addEventListener(r, u)
    })
    return n.appendMessage(u), f
  }

  SetFontMaxPoint(i) {
    const r = 'IObject::SetFontMaxPoint'
    const u = { method: r, p: this.p_, point: i }
    const f = new Promise((n, i) => {
      const u = (f) => {
        document.removeEventListener(r, u),
          f.detail.connect == !1 ? i(t) : n(f.detail.ret)
      }
      document.addEventListener(r, u)
    })
    return n.appendMessage(u), f
  }

  SetFontName(i) {
    const r = 'IObject::SetFontName'
    const u = { method: r, p: this.p_, name: i }
    const f = new Promise((n, i) => {
      const u = (f) => {
        document.removeEventListener(r, u),
          f.detail.connect == !1 ? i(t) : n(f.detail.ret)
      }
      document.addEventListener(r, u)
    })
    return n.appendMessage(u), f
  }

  SetFontStrikeout(i) {
    const r = 'IObject::SetFontStrikeout'
    const u = { method: r, p: this.p_, strikeout: i }
    const f = new Promise((n, i) => {
      const u = (f) => {
        document.removeEventListener(r, u),
          f.detail.connect == !1 ? i(t) : n(f.detail.ret)
      }
      document.addEventListener(r, u)
    })
    return n.appendMessage(u), f
  }

  SetFontUnderline(i) {
    const r = 'IObject::SetFontUnderline'
    const u = { method: r, p: this.p_, underline: i }
    const f = new Promise((n, i) => {
      const u = (f) => {
        document.removeEventListener(r, u),
          f.detail.connect == !1 ? i(t) : n(f.detail.ret)
      }
      document.addEventListener(r, u)
    })
    return n.appendMessage(u), f
  }

  SetPosition(i, r, u, f) {
    const e = 'IObject::SetPosition'
    const o = { method: e, p: this.p_, x: i, y: r, width: u, height: f }
    const s = new Promise((n, i) => {
      const r = (u) => {
        document.removeEventListener(e, r),
          u.detail.connect == !1 ? i(t) : n(u.detail.ret)
      }
      document.addEventListener(e, r)
    })
    return n.appendMessage(o), s
  }

  SetSelection(i, r) {
    const u = 'IObject::SetPosition'
    const f = { method: u, p: this.p_, start: i, end: r }
    const e = new Promise((n, i) => {
      const r = (f) => {
        document.removeEventListener(u, r),
          f.detail.connect == !1 ? i(t) : n(f.detail.ret)
      }
      document.addEventListener(u, r)
    })
    return n.appendMessage(f), e
  }

  get Height() {
    const i = 'IObject::GetHeight'
    const r = { method: i, p: this.p_ }
    const u = new Promise((n, r) => {
      const u = (f) => {
        document.removeEventListener(i, u),
          f.detail.ret == !1 || f.detail.connect == !1
            ? r(t)
            : n(f.detail.height)
      }
      document.addEventListener(i, u)
    })
    return n.appendMessage(r), u
  }

  set Height(t) {
    const i = { method: 'IObject::SetHeight', p: this.p_, height: t }
    n.appendMessage(i)
  }

  get HorizontalAlign() {
    const i = 'IObject::GetHorizontalAlign'
    const r = { method: i, p: this.p_ }
    const u = new Promise((n, r) => {
      const u = (f) => {
        document.removeEventListener(i, u),
          f.detail.ret == !1 || f.detail.connect == !1
            ? r(t)
            : n(f.detail.align)
      }
      document.addEventListener(i, u)
    })
    return n.appendMessage(r), u
  }

  set HorizontalAlign(t) {
    const i = { method: 'IObject::SetHorizontalAlign', p: this.p_, align: t }
    n.appendMessage(i)
  }

  get Name() {
    const i = 'IObject::GetName'
    const r = { method: i, p: this.p_ }
    const u = new Promise((n, r) => {
      const u = (f) => {
        document.removeEventListener(i, u),
          f.detail.ret == !1 || f.detail.connect == !1 ? r(t) : n(f.detail.name)
      }
      document.addEventListener(i, u)
    })
    return n.appendMessage(r), u
  }

  set Name(t) {
    const i = { method: 'IObject::SetName', p: this.p_, name: t }
    n.appendMessage(i)
  }

  get Orientation() {
    const i = 'IObject::GetOrientation'
    const r = { method: i, p: this.p_ }
    const u = new Promise((n, r) => {
      const u = (f) => {
        document.removeEventListener(i, u),
          f.detail.ret == !1 || f.detail.connect == !1
            ? r(t)
            : n(f.detail.orientation)
      }
      document.addEventListener(i, u)
    })
    return n.appendMessage(r), u
  }

  set Orientation(t) {
    const i = { method: 'IObject::SetOrientation', p: this.p_, orientation: t }
    n.appendMessage(i)
  }

  get SelectionEnd() {
    const i = 'IObject::GetSelectionEnd'
    const r = { method: i, p: this.p_ }
    const u = new Promise((n, r) => {
      const u = (f) => {
        document.removeEventListener(i, u),
          f.detail.ret == !1 || f.detail.connect == !1
            ? r(t)
            : n(f.detail.selection)
      }
      document.addEventListener(i, u)
    })
    return n.appendMessage(r), u
  }

  set SelectionEnd(t) {
    const i = { method: 'IObject::SetSelectionEnd', p: this.p_, selection: t }
    n.appendMessage(i)
  }

  get SelectionStart() {
    const i = 'IObject::GetSelectionStart'
    const r = { method: i, p: this.p_ }
    const u = new Promise((n, r) => {
      const u = (f) => {
        document.removeEventListener(i, u),
          f.detail.ret == !1 || f.detail.connect == !1
            ? r(t)
            : n(f.detail.selection)
      }
      document.addEventListener(i, u)
    })
    return n.appendMessage(r), u
  }

  set SelectionStart(t) {
    const i = {
      method: 'IObject::SetSelectionStart',
      p: this.p_,
      selection: t,
    }
    n.appendMessage(i)
  }

  get Text() {
    const i = 'IObject::GetText'
    const r = { method: i, p: this.p_ }
    const u = new Promise((n, r) => {
      const u = (f) => {
        document.removeEventListener(i, u),
          f.detail.ret == !1 || f.detail.connect == !1 ? r(t) : n(f.detail.text)
      }
      document.addEventListener(i, u)
    })
    return n.appendMessage(r), u
  }

  set Text(t) {
    const i = { method: 'IObject::SetText', p: this.p_, text: t }
    n.appendMessage(i)
  }

  get Type() {
    const i = 'IObject::GetType'
    const r = { method: i, p: this.p_ }
    const u = new Promise((n, r) => {
      const u = (f) => {
        document.removeEventListener(i, u),
          f.detail.ret == !1 || f.detail.connect == !1 ? r(t) : n(f.detail.type)
      }
      document.addEventListener(i, u)
    })
    return n.appendMessage(r), u
  }

  get VerticalAlign() {
    const i = 'IObject::GetVerticalAlign'
    const r = { method: i, p: this.p_ }
    const u = new Promise((n, r) => {
      const u = (f) => {
        document.removeEventListener(i, u),
          f.detail.ret == !1 || f.detail.connect == !1
            ? r(t)
            : n(f.detail.align)
      }
      document.addEventListener(i, u)
    })
    return n.appendMessage(r), u
  }

  set VerticalAlign(t) {
    const i = { method: 'IObject::SetVerticalAlign', p: this.p_, align: t }
    n.appendMessage(i)
  }

  get Width() {
    const i = 'IObject::GetWidth'
    const r = { method: i, p: this.p_ }
    const u = new Promise((n, r) => {
      const u = (f) => {
        document.removeEventListener(i, u),
          f.detail.ret == !1 || f.detail.connect == !1
            ? r(t)
            : n(f.detail.width)
      }
      document.addEventListener(i, u)
    })
    return n.appendMessage(r), u
  }

  set Width(t) {
    const i = { method: 'IObject::SetWidth', p: this.p_, width: t }
    n.appendMessage(i)
  }

  get X() {
    const i = 'IObject::GetX'
    const r = { method: i, p: this.p_ }
    const u = new Promise((n, r) => {
      const u = (f) => {
        document.removeEventListener(i, u),
          f.detail.ret == !1 || f.detail.connect == !1 ? r(t) : n(f.detail.X)
      }
      document.addEventListener(i, u)
    })
    return n.appendMessage(r), u
  }

  set X(t) {
    const i = { method: 'IObject::SetX', p: this.p_, X: t }
    n.appendMessage(i)
  }

  get Y() {
    const i = 'IObject::GetY'
    const r = { method: i, p: this.p_ }
    const u = new Promise((n, r) => {
      const u = (f) => {
        document.removeEventListener(i, u),
          f.detail.ret == !1 || f.detail.connect == !1 ? r(t) : n(f.detail.Y)
      }
      document.addEventListener(i, u)
    })
    return n.appendMessage(r), u
  }

  set Y(t) {
    const i = { method: 'IObject::SetY', p: this.p_, Y: t }
    n.appendMessage(i)
  }
}
export class IObjects {
  constructor(n) {
    this.p_ = n
  }

  GetItem(i) {
    const r = 'IObjects::GetItem'
    const u = { method: r, p: this.p_, index: i }
    const f = new Promise((n, i) => {
      const u = (f) => {
        if ((document.removeEventListener(r, u), f.detail.connect == !1)) i(t)
        else if (f.detail.ret == !1) n()
        else if (f.detail.p >= 0) {
          const t = new IObject(f.detail.p)
          n(t)
        } else i()
      }
      document.addEventListener(r, u)
    })
    return n.appendMessage(u), f
  }

  GetCount() {
    const i = 'IObjects::GetCount'
    const r = { method: i, p: this.p_ }
    const u = new Promise((n, r) => {
      const u = (f) => {
        document.removeEventListener(i, u),
          f.detail.ret == !1 || f.detail.connect == !1
            ? r(t)
            : n(f.detail.count)
      }
      document.addEventListener(i, u)
    })
    return n.appendMessage(r), u
  }

  GetIndex(i) {
    const r = 'IObjects::GetIndex'
    const u = { method: r, p: this.p_, obj: i.p_ }
    const f = new Promise((n, i) => {
      const u = (f) => {
        document.removeEventListener(r, u),
          f.detail.connect == !1
            ? i(t)
            : f.detail.ret == !1
            ? n()
            : n(f.detail.index)
      }
      document.addEventListener(r, u)
    })
    return n.appendMessage(u), f
  }

  GetIndexByName(i, r) {
    const u = 'IObjects::GetIndexByName'
    const f = { method: u, p: this.p_, name: i, indexBgn: r }
    const e = new Promise((n, i) => {
      const r = (f) => {
        document.removeEventListener(u, r),
          f.detail.connect == !1
            ? i(t)
            : f.detail.ret == !1
            ? n()
            : n(f.detail.index)
      }
      document.addEventListener(u, r)
    })
    return n.appendMessage(f), e
  }

  Insert(i, r, u, f, e, o, s) {
    const h = 'IObjects::Insert'
    const c = {
      method: h,
      p: this.p_,
      index: i,
      type: r,
      X: u,
      Y: f,
      width: e,
      height: o,
      option: s,
    }
    const l = new Promise((n, i) => {
      const r = (u) => {
        if ((document.removeEventListener(h, r), u.detail.connect == !1)) i(t)
        else if (u.detail.ret == !1) n()
        else if (u.detail.p >= 0) {
          const t = new IObject(u.detail.p)
          n(t)
        } else i()
      }
      document.addEventListener(h, r)
    })
    return n.appendMessage(c), l
  }

  Remove(i) {
    const r = 'IObjects::Remove'
    const u = { method: r, p: this.p_, index: i }
    const f = new Promise((n, i) => {
      const u = (f) => {
        document.removeEventListener(r, u),
          f.detail.connect == !1 ? i(t) : n(f.detail.ret)
      }
      document.addEventListener(r, u)
    })
    return n.appendMessage(u), f
  }

  get Count() {
    return this.GetCount()
  }
}
export class IPrinter {
  constructor(n) {
    this.p_ = n
  }

  GetInstalledPrinters() {
    const i = 'IPrinter::GetInstalledPrinters'
    const r = { method: i, p: this.p_ }
    const u = new Promise((n, r) => {
      const u = (f) => {
        document.removeEventListener(i, u),
          f.detail.ret == !1 || f.detail.connect == !1
            ? r(t)
            : n(f.detail.printers)
      }
      document.addEventListener(i, u)
    })
    return n.appendMessage(r), u
  }

  GetMediaId() {
    const i = 'IPrinter::GetMediaId'
    const r = { method: i, p: this.p_ }
    const u = new Promise((n, r) => {
      const u = (f) => {
        document.removeEventListener(i, u),
          f.detail.ret == !1 || f.detail.connect == !1 ? r(t) : n(f.detail.id)
      }
      document.addEventListener(i, u)
    })
    return n.appendMessage(r), u
  }

  GetMediaName() {
    const i = 'IPrinter::GetMediaName'
    const r = { method: i, p: this.p_ }
    const u = new Promise((n, r) => {
      const u = (f) => {
        document.removeEventListener(i, u),
          f.detail.ret == !1 || f.detail.connect == !1 ? r(t) : n(f.detail.name)
      }
      document.addEventListener(i, u)
    })
    return n.appendMessage(r), u
  }

  GetPrintedTapeLength() {
    const i = 'IPrinter::GetPrintedTapeLength'
    const r = { method: i, p: this.p_ }
    const u = new Promise((n, r) => {
      const u = (f) => {
        document.removeEventListener(i, u),
          f.detail.ret == !1 || f.detail.connect == !1
            ? r(t)
            : n(f.detail.length)
      }
      document.addEventListener(i, u)
    })
    return n.appendMessage(r), u
  }

  GetSupportedMediaIds() {
    const i = 'IPrinter::GetSupportedMediaIds'
    const r = { method: i, p: this.p_ }
    const u = new Promise((n, r) => {
      const u = (f) => {
        document.removeEventListener(i, u),
          f.detail.ret == !1 || f.detail.connect == !1
            ? r(t)
            : n(f.detail.mediaIds)
      }
      document.addEventListener(i, u)
    })
    return n.appendMessage(r), u
  }

  GetSupportedMediaNames() {
    const i = 'IPrinter::GetSupportedMediaNames'
    const r = { method: i, p: this.p_ }
    const u = new Promise((n, r) => {
      const u = (f) => {
        document.removeEventListener(i, u),
          f.detail.ret == !1 || f.detail.connect == !1
            ? r(t)
            : n(f.detail.mediaNames)
      }
      document.addEventListener(i, u)
    })
    return n.appendMessage(r), u
  }

  IsMediaIdSupported(i) {
    const r = 'IPrinter::IsMediaIdSupported'
    const u = { method: r, p: this.p_, id: i }
    const f = new Promise((n, i) => {
      const u = (f) => {
        document.removeEventListener(r, u),
          f.detail.connect == !1 ? i(t) : n(f.detail.ret)
      }
      document.addEventListener(r, u)
    })
    return n.appendMessage(u), f
  }

  IsMediaNameSupported(i) {
    const r = 'IPrinter::IsMediaNameSupported'
    const u = { method: r, p: this.p_, name: i }
    const f = new Promise((n, i) => {
      const u = (f) => {
        document.removeEventListener(r, u),
          f.detail.connect == !1 ? i(t) : n(f.detail.ret)
      }
      document.addEventListener(r, u)
    })
    return n.appendMessage(u), f
  }

  IsPrinterOnline(i) {
    const r = 'IPrinter::IsPrinterOnline'
    const u = { method: r, p: this.p_, name: i }
    const f = new Promise((n, i) => {
      const u = (f) => {
        document.removeEventListener(r, u),
          f.detail.connect == !1 ? i(t) : n(f.detail.ret)
      }
      document.addEventListener(r, u)
    })
    return n.appendMessage(u), f
  }

  IsPrinterSupported(i) {
    const r = 'IPrinter::IsPrinterSupported'
    const u = { method: r, p: this.p_, name: i }
    const f = new Promise((n, i) => {
      const u = (f) => {
        document.removeEventListener(r, u),
          f.detail.connect == !1 ? i(t) : n(f.detail.ret)
      }
      document.addEventListener(r, u)
    })
    return n.appendMessage(u), f
  }

  get ErrorCode() {
    const i = 'IPrinter::GetErrorCode'
    const r = { method: i, p: this.p_ }
    const u = new Promise((n, r) => {
      const u = (f) => {
        document.removeEventListener(i, u),
          f.detail.ret == !1 || f.detail.connect == !1
            ? r(t)
            : n(f.detail.errorCode)
      }
      document.addEventListener(i, u)
    })
    return n.appendMessage(r), u
  }

  get ErrorString() {
    const i = 'IPrinter::GetErrorString'
    const r = { method: i, p: this.p_ }
    const u = new Promise((n, r) => {
      const u = (f) => {
        document.removeEventListener(i, u),
          f.detail.ret == !1 || f.detail.connect == !1
            ? r(t)
            : n(f.detail.errorString)
      }
      document.addEventListener(i, u)
    })
    return n.appendMessage(r), u
  }

  get Name() {
    const i = 'IPrinter::GetName'
    const r = { method: i, p: this.p_ }
    const u = new Promise((n, r) => {
      const u = (f) => {
        document.removeEventListener(i, u),
          f.detail.ret == !1 || f.detail.connect == !1 ? r(t) : n(f.detail.name)
      }
      document.addEventListener(i, u)
    })
    return n.appendMessage(r), u
  }

  get PortName() {
    const i = 'IPrinter::GetPortName'
    const r = { method: i, p: this.p_ }
    const u = new Promise((n, r) => {
      const u = (f) => {
        document.removeEventListener(i, u),
          f.detail.ret == !1 || f.detail.connect == !1 ? r(t) : n(f.detail.port)
      }
      document.addEventListener(i, u)
    })
    return n.appendMessage(r), u
  }
}
export class IDocument {
  static get Width() {
    return IDocument.GetWidth()
  }

  static get Length() {
    return IDocument.GetLength()
  }

  static set Length(n) {
    IDocument.SetLength(n)
  }

  static get CurrentSheet() {
    return IDocument.GetCurrentSheet()
  }

  static set CurrentSheet(n) {
    IDocument.SetCurrentSheet(n)
  }

  static get CutLineCount() {
    return IDocument.GetCutLineCount()
  }

  static get CutLines() {
    return IDocument.GetCutLines()
  }

  static get ErrorCode() {
    return IDocument.GetErrorCode()
  }

  static get MarginBottom() {
    return IDocument.GetMarginBottom()
  }

  static set MarginBottom(n) {
    return IDocument.SetMarginBottom(n)
  }

  static get MarginLeft() {
    return IDocument.GetMarginLeft()
  }

  static set MarginLeft(n) {
    return IDocument.SetMarginLeft(n)
  }

  static get MarginRight() {
    return IDocument.GetMarginRight()
  }

  static set MarginRight(n) {
    return IDocument.SetMarginRight(n)
  }

  static get MarginTop() {
    return IDocument.GetMarginTop()
  }

  static set MarginTop(n) {
    return IDocument.SetMarginTop(n)
  }

  static get Objects() {
    return IDocument.GetObjects()
  }

  static get Orientation() {
    return IDocument.GetOrientation()
  }

  static get Printer() {
    return IDocument.GetPrinter()
  }

  static get SheetNames() {
    return IDocument.GetSheetNames()
  }

  static Open(i) {
    const r = 'IDocument::Open'
    const u = { method: r, filePath: i }
    const f = new Promise((n, i) => {
      const u = (f) => {
        document.removeEventListener(r, u),
          f.detail.connect == !1 ? i(t) : n(f.detail.ret)
      }
      document.addEventListener(r, u)
    })
    return n.appendMessage(u), f
  }

  static DoPrint(i, r) {
    const u = 'IDocument::DoPrint'
    const f = { method: u, dwOption: i, szOption: r }
    const e = new Promise((n, i) => {
      const r = (f) => {
        document.removeEventListener(u, r),
          f.detail.connect == !1 ? i(t) : n(f.detail.ret)
      }
      document.addEventListener(u, r)
    })
    return n.appendMessage(f), e
  }

  static StartPrint(i, r) {
    const u = 'IDocument::StartPrint'
    const f = { method: u, docName: i, option: r }
    const e = new Promise((n, i) => {
      const r = (f) => {
        document.removeEventListener(u, r),
          f.detail.connect == !1 ? i(t) : n(f.detail.ret)
      }
      document.addEventListener(u, r)
    })
    return n.appendMessage(f), e
  }

  static PrintOut(i, r) {
    const u = 'IDocument::PrintOut'
    const f = { method: u, copyCount: i, option: r }
    const e = new Promise((n, i) => {
      const r = (f) => {
        document.removeEventListener(u, r),
          f.detail.connect == !1 ? i(t) : n(f.detail.ret)
      }
      document.addEventListener(u, r)
    })
    return n.appendMessage(f), e
  }

  static EndPrint() {
    const i = 'IDocument::EndPrint'
    const r = { method: i }
    const u = new Promise((n, r) => {
      const u = (f) => {
        document.removeEventListener(i, u),
          f.detail.connect == !1 ? r(t) : n(f.detail.ret)
      }
      document.addEventListener(i, u)
    })
    return n.appendMessage(r), u
  }

  static GetImageData(i, r, u) {
    const f = 'IDocument::GetImageData'
    const e = { method: f, type: i, width: r, height: u }
    const o = new Promise((n, i) => {
      const r = (u) => {
        document.removeEventListener(f, r),
          u.detail.ret == !0 && u.detail.connect == !0
            ? n(u.detail.image)
            : i(t)
      }
      document.addEventListener(f, r)
    })
    return n.appendMessage(e), o
  }

  static GetObjectsCount() {
    const i = 'IDocument::GetObjectsCount'
    const r = { method: i }
    const u = new Promise((n, r) => {
      const u = (f) => {
        document.removeEventListener(i, u),
          f.detail.ret == !0 && f.detail.connect == !0
            ? n(f.detail.count)
            : r(t)
      }
      document.addEventListener(i, u)
    })
    return n.appendMessage(r), u
  }

  static GetIndexByName(i, r) {
    const u = 'IDocument::GetIndexByName'
    const f = { method: u, name: i, indexBgn: r }
    const e = new Promise((n, i) => {
      const r = (f) => {
        document.removeEventListener(u, r),
          f.detail.connect == !1
            ? i(t)
            : f.detail.ret == !0
            ? n(f.detail.index)
            : n()
      }
      document.addEventListener(u, r)
    })
    return n.appendMessage(f), e
  }

  static GetObject(i) {
    const r = 'IDocument::GetObject'
    const u = { method: r, name: i }
    const f = new Promise((n, i) => {
      const u = (f) => {
        if ((document.removeEventListener(r, u), f.detail.connect == !1)) i(t)
        else if (f.detail.ret == !1) n()
        else if (f.detail.p >= 0) {
          const t = new IObject(f.detail.p)
          n(t)
        } else i()
      }
      document.addEventListener(r, u)
    })
    return n.appendMessage(u), f
  }

  static GetObjects(i) {
    const r = 'IDocument::GetObjects'
    const u = { method: r, name: i }
    const f = new Promise((n, i) => {
      const u = (f) => {
        if (
          (document.removeEventListener(r, u),
          f.detail.ret == !1 || f.detail.connect == !1)
        )
          i(t)
        else if (f.detail.p >= 0) {
          const t = new IObjects(f.detail.p)
          n(t)
        } else i()
      }
      document.addEventListener(r, u)
    })
    return n.appendMessage(u), f
  }

  static GetBarcodeIndex(i) {
    const r = 'IDocument::GetBarcodeIndex'
    const u = { method: r, name: i }
    const f = new Promise((n, i) => {
      const u = (f) => {
        document.removeEventListener(r, u),
          f.detail.connect == !1
            ? i(t)
            : f.detail.ret == !1
            ? n()
            : n(f.detail.index)
      }
      document.addEventListener(r, u)
    })
    return n.appendMessage(u), f
  }

  static GetMediaId() {
    const i = 'IDocument::GetMediaId'
    const r = { method: i }
    const u = new Promise((n, r) => {
      const u = (f) => {
        document.removeEventListener(i, u),
          f.detail.ret == !1 || f.detail.connect == !1 ? r(t) : n(f.detail.id)
      }
      document.addEventListener(i, u)
    })
    return n.appendMessage(r), u
  }

  static GetMediaName() {
    const i = 'IDocument::GetMediaName'
    const r = { method: i }
    const u = new Promise((n, r) => {
      const u = (f) => {
        document.removeEventListener(i, u),
          f.detail.ret == !1 || f.detail.connect == !1 ? r(t) : n(f.detail.name)
      }
      document.addEventListener(i, u)
    })
    return n.appendMessage(r), u
  }

  static GetPrinterName() {
    const i = 'IDocument::GetPrinterName'
    const r = { method: i }
    const u = new Promise((n, r) => {
      const u = (f) => {
        document.removeEventListener(i, u),
          f.detail.ret == !1 || f.detail.connect == !1 ? r(t) : n(f.detail.name)
      }
      document.addEventListener(i, u)
    })
    return n.appendMessage(r), u
  }

  static GetText(i) {
    const r = 'IDocument::GetText'
    const u = { method: r, index: i }
    const f = new Promise((n, i) => {
      const u = (f) => {
        document.removeEventListener(r, u),
          f.detail.ret == !1 || f.detail.connect == !1 ? i(t) : n(f.detail.text)
      }
      document.addEventListener(r, u)
    })
    return n.appendMessage(u), f
  }

  static GetTextCount() {
    const i = 'IDocument::GetTextCount'
    const r = { method: i }
    const u = new Promise((n, r) => {
      const u = (f) => {
        document.removeEventListener(i, u),
          f.detail.ret == !1 || f.detail.connect == !1
            ? r(t)
            : n(f.detail.count)
      }
      document.addEventListener(i, u)
    })
    return n.appendMessage(r), u
  }

  static GetTextIndex(i) {
    const r = 'IDocument::GetTextIndex'
    const u = { method: r, name: i }
    const f = new Promise((n, i) => {
      const u = (f) => {
        document.removeEventListener(r, u),
          f.detail.connect == !1
            ? i(t)
            : f.detail.ret == !1
            ? n()
            : n(f.detail.index)
      }
      document.addEventListener(r, u)
    })
    return n.appendMessage(u), f
  }

  static GetPrinter() {
    const i = 'IDocument::GetPrinter'
    const r = { method: i }
    const u = new Promise((n, r) => {
      const u = (f) => {
        if (
          (document.removeEventListener(i, u),
          f.detail.ret == !1 || f.detail.connect == !1)
        )
          r(t)
        else if (f.detail.p >= 0) {
          const t = new IPrinter(f.detail.p)
          n(t)
        } else r()
      }
      document.addEventListener(i, u)
    })
    return n.appendMessage(r), u
  }

  static SetText(i, r) {
    const u = 'IDocument::SetText'
    const f = { method: u, index: i, text: r }
    const e = new Promise((n, i) => {
      const r = (f) => {
        document.removeEventListener(u, r),
          f.detail.connect == !1 ? i(t) : n(f.detail.ret)
      }
      document.addEventListener(u, r)
    })
    return n.appendMessage(f), e
  }

  static SetBarcodeData(i, r) {
    const u = 'IDocument::SetBarcodeData'
    const f = { method: u, index: i, text: r }
    const e = new Promise((n, i) => {
      const r = (f) => {
        document.removeEventListener(u, r),
          f.detail.connect == !1 ? i(t) : n(f.detail.ret)
      }
      document.addEventListener(u, r)
    })
    return n.appendMessage(f), e
  }

  static SetMarginLeftRight(i, r) {
    const u = 'IDocument::SetMarginLeftRight'
    const f = { method: u, left: i, right: r }
    const e = new Promise((n, i) => {
      const r = (f) => {
        document.removeEventListener(u, r),
          f.detail.connect == !1 ? i(t) : n(f.detail.ret)
      }
      document.addEventListener(u, r)
    })
    return n.appendMessage(f), e
  }

  static SetMediaById(i, r) {
    const u = 'IDocument::SetMediaById'
    const f = { method: u, id: i, fit: r }
    const e = new Promise((n, i) => {
      const r = (f) => {
        document.removeEventListener(u, r),
          f.detail.connect == !1 ? i(t) : n(f.detail.ret)
      }
      document.addEventListener(u, r)
    })
    return n.appendMessage(f), e
  }

  static SetMediaByName(i, r) {
    const u = 'IDocument::SetMediaByName'
    const f = { method: u, name: i, fit: r }
    const e = new Promise((n, i) => {
      const r = (f) => {
        document.removeEventListener(u, r),
          f.detail.connect == !1 ? i(t) : n(f.detail.ret)
      }
      document.addEventListener(u, r)
    })
    return n.appendMessage(f), e
  }

  static SetPrinter(i, r) {
    const u = 'IDocument::SetPrinter'
    const f = { method: u, name: i, fit: r }
    const e = new Promise((n, i) => {
      const r = (f) => {
        document.removeEventListener(u, r),
          f.detail.connect == !1 ? i(t) : n(f.detail.ret)
      }
      document.addEventListener(u, r)
    })
    return n.appendMessage(f), e
  }

  static GetCurrentSheet() {
    const i = 'IDocument::GetCurrentSheet'
    const r = { method: i }
    const u = new Promise((n, r) => {
      const u = (f) => {
        document.removeEventListener(i, u),
          f.detail.ret == !1 || f.detail.connect == !1 ? r(t) : n(f.detail.name)
      }
      document.addEventListener(i, u)
    })
    return n.appendMessage(r), u
  }

  static SetCurrentSheet(i) {
    const r = 'IDocument::SetCurrentSheet'
    const u = { method: r, name: i }
    const f = new Promise((n, i) => {
      const u = (f) => {
        document.removeEventListener(r, u),
          f.detail.connect == !1 ? i(t) : n(f.detail.ret)
      }
      document.addEventListener(r, u)
    })
    return n.appendMessage(u), f
  }

  static GetCutLineCount() {
    const i = 'IDocument::GetCutLineCount'
    const r = { method: i }
    const u = new Promise((n, r) => {
      const u = (f) => {
        document.removeEventListener(i, u),
          f.detail.ret == !1 || f.detail.connect == !1
            ? r(t)
            : n(f.detail.count)
      }
      document.addEventListener(i, u)
    })
    return n.appendMessage(r), u
  }

  static GetCutLines() {
    const i = 'IDocument::GetCutLines'
    const r = { method: i }
    const u = new Promise((n, r) => {
      const u = (f) => {
        document.removeEventListener(i, u),
          f.detail.connect == !1
            ? r(t)
            : f.detail.ret == !1
            ? n()
            : n(f.detail.cutlines)
      }
      document.addEventListener(i, u)
    })
    return n.appendMessage(r), u
  }

  static GetErrorCode() {
    const i = 'IDocument::GetErrorCode'
    const r = { method: i }
    const u = new Promise((n, r) => {
      const u = (f) => {
        document.removeEventListener(i, u),
          f.detail.ret == !1 || f.detail.connect == !1
            ? r(t)
            : n(f.detail.errorCode)
      }
      document.addEventListener(i, u)
    })
    return n.appendMessage(r), u
  }

  static GetMarginBottom() {
    const i = 'IDocument::GetMarginBottom'
    const r = { method: i }
    const u = new Promise((n, r) => {
      const u = (f) => {
        document.removeEventListener(i, u),
          f.detail.ret == !1 || f.detail.connect == !1
            ? r(t)
            : n(f.detail.margin)
      }
      document.addEventListener(i, u)
    })
    return n.appendMessage(r), u
  }

  static SetMarginBottom(i) {
    const r = 'IDocument::SetMarginBottom'
    const u = { method: r, margin: i }
    const f = new Promise((n, i) => {
      const u = (f) => {
        document.removeEventListener(r, u),
          f.detail.connect == !1 ? i(t) : n(f.detail.ret)
      }
      document.addEventListener(r, u)
    })
    return n.appendMessage(u), f
  }

  static GetMarginLeft() {
    const i = 'IDocument::GetMarginLeft'
    const r = { method: i }
    const u = new Promise((n, r) => {
      const u = (f) => {
        document.removeEventListener(i, u),
          f.detail.ret == !1 || f.detail.connect == !1
            ? r(t)
            : n(f.detail.margin)
      }
      document.addEventListener(i, u)
    })
    return n.appendMessage(r), u
  }

  static SetMarginLeft(i) {
    const r = 'IDocument::SetMarginLeft'
    const u = { method: r, margin: i }
    const f = new Promise((n, i) => {
      const u = (f) => {
        document.removeEventListener(r, u),
          f.detail.connect == !1 ? i(t) : n(f.detail.ret)
      }
      document.addEventListener(r, u)
    })
    return n.appendMessage(u), f
  }

  static GetMarginRight() {
    const i = 'IDocument::GetMarginRight'
    const r = { method: i }
    const u = new Promise((n, r) => {
      const u = (f) => {
        document.removeEventListener(i, u),
          f.detail.ret == !1 || f.detail.connect == !1
            ? r(t)
            : n(f.detail.margin)
      }
      document.addEventListener(i, u)
    })
    return n.appendMessage(r), u
  }

  static SetMarginRight(i) {
    const r = 'IDocument::SetMarginRight'
    const u = { method: r, margin: i }
    const f = new Promise((n, i) => {
      const u = (f) => {
        document.removeEventListener(r, u),
          f.detail.connect == !1 ? i(t) : n(f.detail.ret)
      }
      document.addEventListener(r, u)
    })
    return n.appendMessage(u), f
  }

  static GetMarginTop() {
    const i = 'IDocument::GetMarginTop'
    const r = { method: i }
    const u = new Promise((n, r) => {
      const u = (f) => {
        document.removeEventListener(i, u),
          f.detail.ret == !1 || f.detail.connect == !1
            ? r(t)
            : n(f.detail.margin)
      }
      document.addEventListener(i, u)
    })
    return n.appendMessage(r), u
  }

  static SetMarginTop(i) {
    const r = 'IDocument::SetMarginTop'
    const u = { method: r, margin: i }
    const f = new Promise((n, i) => {
      const u = (f) => {
        document.removeEventListener(r, u),
          f.detail.connect == !1 || f.detail.connect == !1
            ? i(t)
            : n(f.detail.ret)
      }
      document.addEventListener(r, u)
    })
    return n.appendMessage(u), f
  }

  static GetOrientation() {
    const i = 'IDocument::GetOrientation'
    const r = { method: i }
    const u = new Promise((n, r) => {
      const u = (f) => {
        document.removeEventListener(i, u),
          f.detail.ret == !1 || f.detail.connect == !1
            ? r(t)
            : n(f.detail.orientation)
      }
      document.addEventListener(i, u)
    })
    return n.appendMessage(r), u
  }

  static GetSheetNames() {
    const i = 'IDocument::GetSheetNames'
    const r = { method: i }
    const u = new Promise((n, r) => {
      const u = (f) => {
        document.removeEventListener(i, u),
          f.detail.ret == !1 || f.detail.connect == !1
            ? r(t)
            : n(f.detail.names)
      }
      document.addEventListener(i, u)
    })
    return n.appendMessage(r), u
  }

  static GetWidth() {
    const i = 'IDocument::GetWidth'
    const r = { method: i }
    const u = new Promise((n, r) => {
      const u = (f) => {
        document.removeEventListener(i, u),
          f.detail.ret == !1 || f.detail.connect == !1
            ? r(t)
            : n(f.detail.width)
      }
      document.addEventListener(i, u)
    })
    return n.appendMessage(r), u
  }

  static GetLength() {
    const i = 'IDocument::GetLength'
    const r = { method: i }
    const u = new Promise((n, r) => {
      const u = (f) => {
        document.removeEventListener(i, u),
          f.detail.ret == !1 || f.detail.connect == !1
            ? r(t)
            : n(f.detail.length)
      }
      document.addEventListener(i, u)
    })
    return n.appendMessage(r), u
  }

  static SetLength(i) {
    const r = 'IDocument::SetLength'
    const u = { method: r, length: i }
    const f = new Promise((n, i) => {
      const u = (f) => {
        document.removeEventListener(r, u),
          f.detail.connect == !1 ? i(t) : n(f.detail.ret)
      }
      document.addEventListener(r, u)
    })
    return n.appendMessage(u), f
  }

  static Save() {
    const i = 'IDocument::Save'
    const r = { method: i }
    const u = new Promise((n, r) => {
      const u = (f) => {
        document.removeEventListener(i, u),
          f.detail.connect == !1 ? r(t) : n(f.detail.ret)
      }
      document.addEventListener(i, u)
    })
    return n.appendMessage(r), u
  }

  static SaveAs(i, r) {
    const u = 'IDocument::SaveAs'
    const f = { method: u, type: i, filePath: r }
    const e = new Promise((n, i) => {
      const r = (f) => {
        document.removeEventListener(u, r),
          f.detail.connect == !1 ? i(t) : n(f.detail.ret)
      }
      document.addEventListener(u, r)
    })
    return n.appendMessage(f), e
  }

  static Export(i, r, u) {
    const f = 'IDocument::Export'
    const e = { method: f, type: i, filePath: r, dpi: u }
    const o = new Promise((n, i) => {
      const r = (u) => {
        document.removeEventListener(f, r),
          u.detail.connect == !1 ? i(t) : n(u.detail.ret)
      }
      document.addEventListener(f, r)
    })
    return n.appendMessage(e), o
  }

  static Close() {
    const i = 'IDocument::Close'
    const r = { method: i }
    const u = new Promise((n, r) => {
      const u = (f) => {
        document.removeEventListener(i, u),
          f.detail.connect == !1 ? r(t) : n(f.detail.ret)
      }
      document.addEventListener(i, u)
    })
    return n.appendMessage(r), u
  }
}
export const IsExtensionInstalled = () =>
  document.body.classList.contains('bpac-extension-installed') ? !0 : !1
