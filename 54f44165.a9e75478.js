(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{144:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return r})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(2),i=n(9),o=(n(0),n(159)),c={id:"installation",title:"Installation",sidebar_label:"Installation"},r={id:"getting-started/installation",title:"Installation",description:"These are instructions on to get Extended installed and setup with MonoGame.",source:"@site/docs/getting-started/installation.md",permalink:"/docs/getting-started/installation",sidebar_label:"Installation",sidebar:"docs",previous:{title:"Platforms",permalink:"/docs/about/platforms"},next:{title:"Prototypes",permalink:"/docs/getting-started/prototypes"}},l=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"NuGet packages",id:"nuget-packages",children:[]},{value:"Referencing the Content Pipeline",id:"referencing-the-content-pipeline",children:[{value:"Using the MonoGame Pipeline GUI",id:"using-the-monogame-pipeline-gui",children:[]},{value:"Using a text editor",id:"using-a-text-editor",children:[]}]},{value:"Conclusion",id:"conclusion",children:[]}],d={rightToc:l};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"These are instructions on to get ",Object(o.b)("inlineCode",{parentName:"p"},"Extended")," installed and setup with ",Object(o.b)("inlineCode",{parentName:"p"},"MonoGame"),"."),Object(o.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://dotnet.microsoft.com/download/dotnet-core/3.1"}),".NET Core 3.1 SDK")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.microsoft.com/en-us/download/details.aspx?id=8109"}),"DirectX June 2010 runtime")," (Only if working with DirectX on Windows)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.monogame.net/articles/introduction/create_project.html"}),"A ",Object(o.b)("inlineCode",{parentName:"a"},"MonoGame")," project"))),Object(o.b)("h2",{id:"nuget-packages"},"NuGet packages"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Extended")," is distributed via NuGet packages. You can add the NuGet package to your C# project through your IDE of choice (Visual Studio, Xamarin Studio, Rider, etc) or through the Command Line Interface (CLI) using the ",Object(o.b)("inlineCode",{parentName:"p"},"dotnet")," command."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"dotnet add package MonoGame.Extended\n")),Object(o.b)("h2",{id:"referencing-the-content-pipeline"},"Referencing the Content Pipeline"),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"The ",Object(o.b)("inlineCode",{parentName:"p"},"MonoGame")," Content Pipeline is being phased out with ",Object(o.b)("inlineCode",{parentName:"p"},"Extended"),"; in the future, you won't need to deal with the Content Pipeline. For more information see ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/craftworkgames/MonoGame.Extended/issues/676"}),"this GitHub issue"),"."))),Object(o.b)("p",null,"To use some features of ",Object(o.b)("inlineCode",{parentName:"p"},"Extended"),"  you'll need to install the Content Pipeline Nuget package."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"dotnet add package MonoGame.Extended.Content.Pipeline\n")),Object(o.b)("p",null,"This package is not included as part of the base ",Object(o.b)("inlineCode",{parentName:"p"},"Extended")," package and must be installed separately. It won't add any build artifacts to your project; instead it will install the dependencies that are intended to be referenced from the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://www.monogame.net/documentation/?page=Pipeline"}),"MonoGame Content Pipeline tool"),"."),Object(o.b)("p",null,"You'll need to manually add the reference to your content file (usually ",Object(o.b)("inlineCode",{parentName:"p"},"Content.mgcb"),") using one of the following methods."),Object(o.b)("h3",{id:"using-the-monogame-pipeline-gui"},"Using the MonoGame Pipeline GUI"),Object(o.b)("p",null,"To add the reference using the Pipeline GUI tool follow these steps:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Click on the ",Object(o.b)("strong",{parentName:"li"},"Content")," node in the root of the tree."),Object(o.b)("li",{parentName:"ol"},"In the properties window, modify the ",Object(o.b)("strong",{parentName:"li"},"References")," property."),Object(o.b)("li",{parentName:"ol"},"Find and add the ",Object(o.b)("inlineCode",{parentName:"li"},"MonoGame.Extended.Content.Pipeline.dll"),". It's usually located in the ",Object(o.b)("strong",{parentName:"li"},"packages")," folder of your solution.  The default location of the ",Object(o.b)("strong",{parentName:"li"},"packages")," folder in .NET Core is  ",Object(o.b)("inlineCode",{parentName:"li"},"C:\\Users\\[User]\\.nuget\\packages"),".")),Object(o.b)("h3",{id:"using-a-text-editor"},"Using a text editor"),Object(o.b)("p",null,"An alternative way to add the reference is by manually editing the ",Object(o.b)("inlineCode",{parentName:"p"},"Content.mgcb")," file in a text editor or Visual Studio. Look for the references section and update it like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"#-------------------------------- References --------------------------------#\n\n/reference:..\\..\\packages\\MonoGame.Extended.Content.Pipeline.0.6.372\\tools\\MonoGame.Extended.Content.Pipeline.dll\n")),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Remember")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"The ",Object(o.b)("inlineCode",{parentName:"p"},"MonoGame.Extended.dll")," and the ",Object(o.b)("inlineCode",{parentName:"p"},"MonoGame.Extended.Content.Pipeline.dll")," come as a pair. Always make sure the version referenced by your game matches the version referenced by the Pipeline tool."))),Object(o.b)("h2",{id:"conclusion"},"Conclusion"),Object(o.b)("p",null,"That's it! Once you've setup ",Object(o.b)("inlineCode",{parentName:"p"},"Extended")," you can start using it to make your games even more awesome."))}s.isMDXComponent=!0}}]);