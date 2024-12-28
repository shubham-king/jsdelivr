
<main>
<h2> Custom Fonts</h2>
<ul>
  <li>*PUBG SANS: <code>https://cdn.jsdelivr.net/gh/shubham-king/jsdelivr@main/fonts/PUBG%20SANS.ttf</code></li>
  <li>*JUVANZE : <code>https://cdn.jsdelivr.net/gh/shubham-king/jsdelivr@main/fonts/Juvanze-ovw9A.otf</code></li>
  <li>*EQUALI : <code>https://cdn.jsdelivr.net/gh/shubham-king/jsdelivr@main/fonts/EQUALI.ttf</code></li>
  <li>*BORELA : <code>https://cdn.jsdelivr.net/gh/shubham-king/jsdelivr@main/fonts/BORELA.ttf</code></li>
</ul>

<h2>Custom Js</h2>
<ul>
  <li>
<div>
  <h4>Block/Disable Hot Keys on Website [like f12 , ctrl+p , ctrl+U , ctrl+shift+I , ctrl+shift+C</h4>
  <strong>JS</strong> : <code>https://cdn.jsdelivr.net/gh/shubham-king/jsdelivr@main/js/block.js</code> <br>
  <strong>Usage</strong> :<pre> <code>&lt;div id="custom-notification" style="display:none; position:fixed; top:20px; right:20px; background-color:#f44336; color:white; padding:15px; border-radius:5px; z-index:1000; box-shadow: 0 4px 6px rgba(0,0,0,0.1);"&gt;
  Hotkey disabled.
&lt;/div&gt;</code></pre> <br>
  <strong>CSS</strong>: <pre><code>&lt;style&gt; #custom-notification {
      display: none;
      position: fixed;
      top: 20px;
      right: 20px;
      background-color: #f44336;
      color: white;
      padding: 15px;
      border-radius: 5px;
      z-index: 1000;
      font-family: Arial, sans-serif;
      font-size: 14px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      animation: slide-in 0.3s ease, slide-out 0.3s ease 2.7s forwards;
  }

  @keyframes slide-in {
      from {
          opacity: 0;
          transform: translateX(100%);
      }
      to {
          opacity: 1;
          transform: translateX(0);
      }
  }

  @keyframes slide-out {
      from {
          opacity: 1;
          transform: translateX(0);
      }
      to {
          opacity: 0;
          transform: translateX(100%);
      }
  }&lt;/style &gt;
  </code></pre>
  </div>
  </li>
</ul>




</main>
