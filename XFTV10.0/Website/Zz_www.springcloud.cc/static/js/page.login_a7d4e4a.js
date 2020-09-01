define("oauth:widget/page.login/page.login.js",function(){window.loginSuccess=function(){var o=document.createElement("script");o.src="https://passport.baidu.com/v3/login/api/auth?tpl=dev&return_type=2&callback=logaback";var e=document.getElementsByTagName("script"),n=e[e.length-1];n.async=!1,n.parentNode.insertBefore(o,n)},window.bdstokenSuccess=function(o){"0"==o.error_code&&authorize(o)},window.authorize=function(o){var e=document.forms.scopes,n=e.elements;n.bdstoken.value=o.bdstoken,n.grant_permissions.value=getGrantPermissions(n.grant_permissions_arr,devo.granted_perms),e.action=urlMergeParams({confirm_login:null}),e.submit()},function(){var o,e="https://passport.baidu.com/v2/?reg&authsite=0&tpl=dev&",n={confirm_login:null,force_login:null},t=[];2==devo.confirm_login&&(n.confirm_login=1),o=encodeURIComponent(urlMergeParams(n)),t.push("u="+o),devo.quick_user?(t.push("regtype=2"),t.push("hideback=1"),t.push("loginu="+o)):t.push("adapter=smarttv"),baidu("#reg-link").attr("href",e+t.join("&"))}(),2==devo.confirm_login&&baidu("#change-acc").attr("href",urlMergeParams({confirm_login:1})),function(){var o=location.protocol+"//"+location.hostname+(location.port&&location.port.length?":"+location.port:"");baidu("#jumpurl").val(o+"/static/oauth/html/bdstoken_jump.html"),baidu(document).on("loginSuccess",loginSuccess),"weibo_page"!=devo.display&&"weibo_iframe"!=devo.display&&baidu(document).on("loginReady",function(){baidu(".pass-button-submit").val("登录并授权")}),baidu("#agreementLabel").on("click",function(){var o=baidu("#agreement").prop("checked");baidu(".pass-button-submit").prop("disabled",!o)[o?"removeClass":"addClass"]("btn-disabled")})}();var o=location.protocol+"//"+location.hostname+(location.port&&location.port.length?":"+location.port:""),e=!0;"1"==devo.nowebclient&&(e=!1);var n=-1,t=0;"1"==devo.qrcode&&(n=1,t=3);var i={product:"dev",loginType:1,defaultCss:!1,loginMerge:!0,hasRegUrl:!0,autosuggest:!0,hasPlaceholder:!0,authsiteCfgLogin:{act:"implicit",tpl:"oauth",display:"popup",u:urlMergeParams({force_login:null,confirm_login:null}),jumpUrl:o+"/static/oauth/html/phoenix_jump.html",onBindSuccess:function(){return baidu(document).trigger("loginSuccess"),!1}},sms:1,u:urlMergeParams({force_login:null,confirm_login:null}),isPhone:!1,safeFlag:0,setWebToClient:e,staticPage:o+"/static/oauth/html/v3Jump.html",qrcode:t,loginMergeQrcode:n};1&devo.quick_user&&(i.isQuickUser=devo.quick_user),i.registerLink="https://passport.baidu.com/v2/?reg&authsite=0&tpl=dev&u="+encodeURIComponent(urlMergeParams({force_login:null,confirm_login:null})),devo.disable_third_login&&(i.authsiteLogin=null,i.authsiteCfgLogin=null,i.sms=0),devo.login_type&&"sms"==devo.login_type&&(i.sms=2),("weibo_page"==devo.display||"weibo_iframe"==devo.display||"dialog"==devo.display)&&(i.authsiteLogin=null,i.sms=0,i.hasRegUrl=!1),"weibo_page"==devo.display&&(i.hasRegUrl=!0),window.passport.use("login",{tangram:!1},function(o){i.extrajson=window.extrajson||"";var e=new o.passport.login(i);e.on("loginSuccess",function(o){o.returnValue=!1,baidu(document).trigger("loginSuccess")}),e.on("render",function(){baidu(document).trigger("loginReady")}),e.on("loginError",function(o){var e='如果无法验证，请访问<a href="https://passport.baidu.com/v2/?ucenterfeedback#login_8">https://passport.baidu.com/v2/?ucenterfeedback#login_8</a>获取帮助',n={400031:"您的帐号已开启登录保护服务，登录前请先进行安全验证；"+e,5:"您所处的网络环境存在安全风险，为保证帐号安全，请先进行安全验证；"+e,120019:"您最近密码输入错误过于频繁，为保证帐号安全，请先进行安全验证；"+e,120021:"您的帐号存在安全风险，请先进行安全验证；"+e};o.rsp.errInfo.no in n&&setTimeout(function(){var e=baidu(".pass-forceverify-content .content-msgtext");e.length>0&&e.html(n[o.rsp.errInfo.no])},1e3)}),e.render("psLogin")})});