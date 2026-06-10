import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Html5QrcodeScanner, Html5QrcodeSupportedFormats } from 'html5-qrcode';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class App implements OnInit {
  ngOnInit(): void {
    const scanner = new Html5QrcodeScanner(
      'reader',
      {
        fps: 10,
        qrbox: { width: 520, height: 520 },
        formatsToSupport: [
          Html5QrcodeSupportedFormats.QR_CODE,
          Html5QrcodeSupportedFormats.EAN_13,
          Html5QrcodeSupportedFormats.CODE_128,
        ],
      },
      false,
    );
    scanner.render(
      (result) => {
        console.log('Scanned result:', result);
        scanner.clear();
      },
      (error) => {
        // console.error('Error scanning:', error);
      },
    );
  }
}
