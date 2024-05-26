# bpac-js

JavaScript module for communicating with the Brother QL-series label printers.  
Currently the module has no typings whatsoever, as the internal code is dug up from old Brother instructions (from when JScript was a thing!). Anyone brave enough to figure out all the one-letter variables inside is more than welcome to contribute.  

Until then, just follow the steps below to print your labels.

## Installation

Use npm to install the package.

```bash
npm install bpac-react
```
Your client computer will also need the [b-PAC SDK](https://support.brother.com/g/s/es/dev/en/bpac/download/index.html?c=eu_ot&lang=en&navi=offall&comple=on&redirect=on).  
**IMPORTANT NOTE: Only the 32-bit versions of the b-PAC SDK work. Don't bother installing the 64-bit versions.**

You can create templates for your labels with the [P-Touch Editor](https://support.brother.ca/app/answers/detail/a_id/133156/~/download-and-install-the-p-touch-editor-software) (the editor is device-specific).

## Usage

```typescript
import { IDocument } from "bpac-react";

const printAFile = async ()
=> {
  const objDoc = bpac.IDocument;
  const ret = await objDoc.Open("C:\absolute\path\to\file\template.lbx");
  // most of the functions from the SDK return true/false for success
  if(ret === true){ 

     // Set the data in a barcode/QR code inside your template file
     await objDoc.SetBarcodeData(
            await objDoc.GetBarcodeIndex("some-barcode"),
            "The text to be inside the barcode"
          );
     
     // Set the text in a Text object inside your template file
     (await objDoc.GetObject("some-text")).Text = "Your Text";

     // Start the print
     await objDoc.StartPrint('', 0);
     await objDoc.PrintOut(1, 0);
     await objDoc.EndPrint();
     await objDoc.Close();
  }
}

```

## Contributing

Any contribution is absolutely welcome. Create a pull request and I'll merge it ASAP.

## License

[MIT](https://choosealicense.com/licenses/mit/)
