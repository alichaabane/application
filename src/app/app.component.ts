import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';

  constructor() {
    this.loadScripts();
    this.loadCss();
  }


  loadScripts() {

    // This array contains all the files/CDNs
    const dynamicScripts = [
      './assets/js/theme.js',
      './assets/js/plugins.js'
      //Load all your script files here'
    ];
    for (let i = 0; i < dynamicScripts.length; i++) {
      const node = document.createElement('script');
      node.src = dynamicScripts[i];
      node.type = 'text/javascript';
      node.async = false;
      document.getElementsByTagName('head')[0].appendChild(node);
    }
    console.log("wapana");
  }

  loadCss() {

    // This array contains all the files/CDNs
    const dynamicCssClasses = [
      './assets/css/plugins.css',
      './assets/css/style.css',
      './assets/css/colors/purple.css'
      //Load all your script files here'
    ];
    for (let i = 0; i < dynamicCssClasses.length; i++) {
      const node = document.createElement('link');
      node.rel = 'stylesheet';
      node.type = 'text/css';
      document.getElementsByTagName('head')[0].appendChild(node);
    }
    console.log("wapana 222");
  }
}
