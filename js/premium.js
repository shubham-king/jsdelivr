// Define the CSS as a string
const cssString = `
.video-container{background-color:black;padding:20px;border-radius:2px;display:flex;flex-direction:column;align-items:center;max-width:720px;}
.action-buttons{display:flex;flex-wrap:wrap;gap:10px;margin-top:15px;}
.action-buttons button{padding:8px 12px;background-color:#27293d;color:#fff;border:none;border-radius:5px;font-size:14px;cursor:pointer;transition:background-color 0.3s ease;display:flex;align-items:center;gap:5px;}
.action-buttons button:hover{background-color:#444;}
.action-buttons svg{width:18px;height:18px;fill:#fff;}
.server-selector{padding:20px;border-radius:2px;background-color:#0d0d0d;margin-top:10px;}
.server-row{display:flex;align-items:center;margin-bottom:15px;border-bottom:1px dashed #ff6f61;padding-bottom:10px;}
.server-row:last-child{border-bottom:none;margin-bottom:0;padding-bottom:0;}
.server-icon{display:flex;align-items:center;color:#fff;font-size:14px;margin-right:15px;}
.server-icon svg{width:20px;height:20px;margin-right:8px;}
.server-buttons{display:flex;gap:10px;}
.server-buttons button{padding:8px;background-color:#27293d;color:#fff;border:none;border-radius:5px;font-size:14px;cursor:pointer;transition:background-color 0.3s;}
.server-buttons button.active,.server-buttons button:hover{background-color:#6a5acd;}
.server-buttons button.disabled{background-color:#555;color:#aaa;cursor:not-allowed;pointer-events:none;}
.note3{position:relative;padding:16px 20px 16px 50px;background:#1a2b44;color:#ffffff;border-radius:8px;overflow:hidden;font-family:Arial,sans-serif;box-shadow:0 4px 10px rgba(0,0,0,0.5);line-height:1.6;max-width:500px;margin:20px auto;font-size:14px;}
.note3 .note-icon{position:absolute;top:16px;left:15px;display:flex;align-items:center;justify-content:center;width:24px;height:24px;}
.anime-details{background-color:#141414;color:#ffffff;padding:20px;border-radius:2px;font-family:Arial,sans-serif;line-height:1.6;border:1px solid #333;}
.anime-title{font-size:20px;font-weight:bold;margin-bottom:10px;}
.sub-title{font-size:14px;color:#999999;margin-bottom:20px;}
.info{display:grid;grid-template-columns:repeat(2,1fr);gap:10px;font-size:14px;margin-bottom:20px;}
.info div{position:relative;padding-left:20px;}
.info div::before{content:'';position:absolute;left:0;top:50%;transform:translateY(-50%);width:10px;height:10px;background-color:#ffd700;border-radius:2px;}
.tags{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:20px;}
.tags span{background-color:transparent;border:1px solid #ffd700;color:#ffd700;border-radius:6px;padding:5px 10px;font-size:12px;}
.description{font-size:14px;color:#cccccc;}
.read-more{color:#ffd700;cursor:pointer;font-weight:bold;}
.notification-box{display:flex;align-items:center;justify-content:space-between;background-color:#1a2b44;color:#ffffff;font-size:14px;padding:10px 15px;border-radius:8px;box-shadow:0 4px 10px rgba(0,0,0,0.5);margin:20px auto;}
.notification-icon{margin-right:10px;display:flex;align-items:center;}
.notification-text{flex:1;line-height:1.5;}
.close-btn{background:none;border:none;color:#fff;font-size:16px;cursor:pointer;padding:0 5px;transition:color 0.3s ease;}
.close-btn:hover{color:#ff6b6b;}
.episode-list{font-family:'Inter',sans-serif;background-color:#0d0d0d;color:#fff;padding:20px;margin:0 auto;border-radius:2px;}
.episode-list .search-bar{display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;gap:10px;}
.episode-list .search-bar .dropdown{display:flex;align-items:center;gap:12px;}
.episode-list .search-bar select,.episode-list .search-bar input{background-color:#1a1a1a;color:#fff;border:1px solid #333;border-radius:5px;padding:5px;font-family:'Inter',sans-serif;}
.episode-list .search-bar select{width:120px;}
.episode-list .search-bar input{width:150px;}
.episode-list .search-bar input::placeholder{color:#777;}
.episode-list .episode-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:8px;}
.episode-list .episode-grid button{background-color:#1a1a1a;color:#fff;border:none;border-radius:5px;font-family:'Inter',sans-serif;text-align:center;padding:10px;cursor:pointer;transition:background-color 0.3s ease,color 0.3s ease;}
.episode-list .episode-grid button:hover{background-color:#333;}
.episode-list .episode-grid button.active{background-color:#4d4d4d;color:#fff;}
.episode-list .episode-grid button:focus{outline:none;}`;

// Create a <style> element and append it to <head>
function injectCSS(css) {
    const style = document.createElement("style");
    style.textContent = css;
    document.head.appendChild(style);
}

// Inject the CSS
injectCSS(cssString);
