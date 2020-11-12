(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{127:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/files/assets-653f5eeb124faf919f77cce934a27f94.zip"},128:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/spritefactory-859a99488440adeb70b57c3f21b4c9ab.png"},129:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/copy-if-newer-2b09ee55cd90eb71d6b017a8ca15d663.png"},130:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/animation-c3c981e748567e40ab46071308256ff9.gif"},56:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(2),i=n(6),o=(n(0),n(89)),r={id:"animations",title:"Animations",sidebar_label:"Animations"},c={unversionedId:"features/animations/animations",id:"features/animations/animations",isDocsHomePage:!1,title:"Animations",description:"The MonoGame.Extended.Animations library contains classes useful for animating 2D sprite.",source:"@site/docs\\features\\animations\\animations.md",slug:"/features/animations/animations",permalink:"/docs/features/animations/animations",editUrl:"https://github.com/craftworkgames/craftworkgames.github.io/tree/develop/docs/features/animations/animations.md",version:"current",sidebar_label:"Animations",sidebar:"docs",previous:{title:"Cameras",permalink:"/docs/features/cameras/cameras"},next:{title:"Collision",permalink:"/docs/features/collision/collision"}},s=[{value:"Installation",id:"installation",children:[]},{value:"Setup SpriteFactory",id:"setup-spritefactory",children:[]},{value:"Usage",id:"usage",children:[{value:"Creating the Animation",id:"creating-the-animation",children:[]},{value:"ContentPipeline",id:"contentpipeline",children:[]},{value:"Loading the Animation",id:"loading-the-animation",children:[]},{value:"Updating the Animation",id:"updating-the-animation",children:[]},{value:"Drawing the final result",id:"drawing-the-final-result",children:[]}]},{value:"Result",id:"result",children:[]}],l={rightToc:s};function p(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The MonoGame.Extended.Animations library contains classes useful for animating 2D sprite."),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.nuget.org/packages/MonoGame.Extended.Animations"}),"MonoGame.Extended.Animations")," is distributed via a NuGet package. You can add the NuGet package to your C# project through your IDE of choice (Visual Studio, Xamarin Studio, Rider, etc) or through the Command Line Interface (CLI) using the dotnet command."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"dotnet add MonoGame.Extended.Animations\n")),Object(o.b)("h2",{id:"setup-spritefactory"},"Setup SpriteFactory"),Object(o.b)("p",null,"In this example we use SpriteFactory for animating Sprites.\nwe are going to build it ourselves from the source."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Step 1 clone the SpriteFactory repository")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"git clone https://github.com/craftworkgames/SpriteFactory.git")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Step 2 Build and run")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"cd SpriteFactory")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"dotnet run --project SpriteFactory")),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("h3",{id:"creating-the-animation"},"Creating the Animation"),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"The assets used in this example can be downloaded ",Object(o.b)("a",{target:"_blank",href:n(127).default},"here")))),Object(o.b)("p",null,"Before we can load an animation, we must first animate it in SpriteFactory.\nWe are using the ",Object(o.b)("inlineCode",{parentName:"p"},"mowt.png")," from the assets"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Step 1"),"\nCreate new project in ",Object(o.b)("inlineCode",{parentName:"p"},"File -> New")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Step 2"),"\nOpen mowt.png in ",Object(o.b)("inlineCode",{parentName:"p"},"Texture")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Step 3"),"\nSet Tile Size to 52 by 72 pixels"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Step 4"),"\nAdd your animations and configure your prefered Frame duration"),Object(o.b)("p",null,Object(o.b)("img",{alt:"Spritefactory",src:n(128).default})),Object(o.b)("p",null,"Next we save our animation as ",Object(o.b)("inlineCode",{parentName:"p"},"mowt.sf")),Object(o.b)("h3",{id:"contentpipeline"},"ContentPipeline"),Object(o.b)("p",null,"SpriteFactory animation does not have to be imported with the ContentPipeline\nBut we de need to tell the compiler to copy ",Object(o.b)("inlineCode",{parentName:"p"},"mowt.sf")," to the output folder.\nIn visual studio you can do that by clicking on ",Object(o.b)("inlineCode",{parentName:"p"},"mowt.sf")," in the Solution Explorer and setting  ",Object(o.b)("inlineCode",{parentName:"p"},"Copy to Output Directorty")," to ",Object(o.b)("inlineCode",{parentName:"p"},"Copy if newer"),"."),Object(o.b)("p",null,Object(o.b)("img",{alt:"VisualStudio",src:n(129).default})),Object(o.b)("p",null,"You can also set this in your ",Object(o.b)("inlineCode",{parentName:"p"},"project.csproj")," by adding the following"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),'<ItemGroup>\n    <None Update="Content\\motw.sf">\n      <CopyToOutputDirectory>PreserveNewest</CopyToOutputDirectory>\n    </None>\n</ItemGroup>\n')),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"motw.png")," can just be imported as Texture2D."),Object(o.b)("h3",{id:"loading-the-animation"},"Loading the Animation"),Object(o.b)("p",null,"We start by defining our fields"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-csharp"}),"private AnimatedSprite _motwSprite;\nprivate Vector2 _motwPosition;\n")),Object(o.b)("p",null,"Next we load the content"),Object(o.b)("p",null,"To use ",Object(o.b)("inlineCode",{parentName:"p"},"new JsonContentLoader()")," you need to use the ",Object(o.b)("inlineCode",{parentName:"p"},"Content.Load extension")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),"using MonoGame.Extended.Content;\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-csharp"}),'protected override void LoadContent()\n{\n    _spriteBatch = new SpriteBatch(GraphicsDevice);\n    var spriteSheet = Content.Load<SpriteSheet>("motw.sf", new JsonContentLoader());\n    var sprite = new AnimatedSprite(spriteSheet);\n    \n    sprite.Play("idle");\n    _motwPosition = new Vector2(100, 100);\n    _motwSprite = sprite;\n}\n')),Object(o.b)("h3",{id:"updating-the-animation"},"Updating the Animation"),Object(o.b)("p",null,"We use the following code to update the Position and Animation of the Player."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-csharp"}),'protected override void Update(GameTime gameTime)\n{\n    var deltaSeconds = (float)gameTime.ElapsedGameTime.TotalSeconds;\n    var walkSpeed = deltaSeconds * 128;\n    var keyboardState = Keyboard.GetState();\n    var animation = "idle";\n\n    if (keyboardState.IsKeyDown(Keys.W) || keyboardState.IsKeyDown(Keys.Up))\n    {\n        animation = "walkNorth";\n        _motwPosition.Y -= walkSpeed;\n    }\n\n    if (keyboardState.IsKeyDown(Keys.S) || keyboardState.IsKeyDown(Keys.Down))\n    {\n        animation = "walkSouth";\n        _motwPosition.Y += walkSpeed;\n    }\n\n    if (keyboardState.IsKeyDown(Keys.A) || keyboardState.IsKeyDown(Keys.Left))\n    {\n        animation = "walkWest";\n        _motwPosition.X -= walkSpeed;\n    }\n\n    if (keyboardState.IsKeyDown(Keys.D) || keyboardState.IsKeyDown(Keys.Right))\n    {\n        animation = "walkEast";\n        _motwPosition.X += walkSpeed;\n    }\n\n    _motwSprite.Play(animation);\n\n    if (keyboardState.IsKeyDown(Keys.R))\n        Camera.ZoomIn(deltaSeconds);\n\n    if (keyboardState.IsKeyDown(Keys.F))\n        Camera.ZoomOut(deltaSeconds);\n\n    _motwSprite.Update(deltaSeconds);\n\n\n    base.Update(gameTime);\n}\n')),Object(o.b)("h3",{id:"drawing-the-final-result"},"Drawing the final result"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-csharp"}),"protected override void Draw(GameTime gameTime)\n{\n    GraphicsDevice.Clear(Color.CornflowerBlue);\n\n    _spriteBatch.Begin(samplerState: SamplerState.PointClamp);\n    _spriteBatch.Draw(_motwSprite, _motwPosition);\n    _spriteBatch.End();\n\n    base.Draw(gameTime);\n}\n")),Object(o.b)("h2",{id:"result"},"Result"),Object(o.b)("p",null,Object(o.b)("img",{alt:"Animation",src:n(130).default})))}p.isMDXComponent=!0},89:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(n),m=a,u=b["".concat(r,".").concat(m)]||b[m]||d[m]||o;return n?i.a.createElement(u,c(c({ref:t},l),{},{components:n})):i.a.createElement(u,c({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var l=2;l<o;l++)r[l]=n[l];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);