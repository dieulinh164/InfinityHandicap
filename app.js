(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// //import classes & services/utils.
// import DataHandler from "./services/dataHandler";
// import CUSTOM_EVENTS from './services/events';
// import Theme from './classes/theme';
// import Screen from './classes/screen';
// import Game from "./classes/game";
// import QuizUI from "./classes/ui-quiz";
// import GlobalDataUI from "./classes/ui-globalData";
// import UserDataUI from "./classes/ui-userData";
// import LoginUI from "./classes/ui-login";
// import UserStatsUI from "./classes/ui-userStats";
// import { shadeBlend } from "./services/helpers";

// const theme = new Theme();

// //Once document is ready, init the app (the book).
// window.onload = () => {
//     const _ = build();
// };

// function build() {
// //_app's core
// class App {
//     constructor(el) {
//         this.app = el;
//         this.app.game = new Game(this.app);
//         this.init();
//     }

//     init() {
//         this.buildScreens();
//         this.buildUIs();
//     }

//     buildScreens() {
//         const screens = Array.from(this.app.querySelectorAll('.app__screen'));
//         this.app.screens = screens.map(s => new Screen(s));
//         this.app.activeScreen = screens.findIndex(s => s.classList.contains('active'));
//     }

//     buildUIs() {
//         this.app.ui = {};

//         this.app.ui.logIn = {};
//         this.app.ui.quiz = {};
//         this.app.ui.userStats = {};
//         this.app.ui.globalData = {};
//         this.app.ui.userData = {};

//         this.changeScreen(0);
//     }

//     attachEvents(sIndex) {
//         const onLogin = (e) => {
//             this.app.game.username = this.app.ui.logIn.username;
//             this.changeScreen();
//         };

//         const onSubmitQuiz = (e) => {
//             this.app.game.over(this.app);
//             this.changeScreen();
//         };

//         const onGlobalDataUpdated = (e) => {

//         }

//         const onGameInitFinished = (e) => {
//             console.log('ok ok');
//             if (this.app.ui.userStats.updateTHREEChart) this.app.ui.userStats.updateTHREEChart();
//         }

//         this.app.addEventListener('onGameInitFinished', onGameInitFinished, false);
//         this.app.addEventListener('onGlobalDataUpdated', onGlobalDataUpdated, false);
//         sIndex === 0 && this.app.ui.logIn.ui.addEventListener('onLogin', onLogin, false);
//         sIndex === 1 && this.app.ui.quiz.ui.addEventListener('onSubmitQuiz', onSubmitQuiz, false);
//     }

//     changeScreen(sIndex = 1) {
//         this.app.style.backgroundColor = shadeBlend(-0.5, theme.randomColor());

//         if (sIndex !== 0) {
//             this.app.screens[this.app.activeScreen].leave();
//             this.app.activeScreen++;
//             this.app.screens[this.app.activeScreen].enter();
//         }

//         switch (this.app.activeScreen) {
//             case 0:
//                 this.app.ui.logIn = new LoginUI(this.app.querySelector('.screen--home'), this.app.game);
//                 break;
//             case 1:
//                 this.app.ui.userStat = new UserStatsUI(this.app.querySelector('.screen--stats'), this.app.game);
//                 this.app.ui.quiz = new QuizUI(this.app.querySelector('.screen--quiz'), this.app.game);
//                 break;
//             case 2:
//                 this.app.ui.globalData = new GlobalDataUI(this.app.querySelector('.screen--global-data'), this.app.game);
//                 this.app.ui.userData = new UserDataUI(this.app.querySelector('.screen--user-data'), this.app.game);
//                 break;
//             default:
//                 break;
//         }

//         this.attachEvents(sIndex);
//     };

// }

//     const _app = new App(document.querySelector('.app'));
//     return _app;
// };
"use strict";

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLy8gLy9pbXBvcnQgY2xhc3NlcyAmIHNlcnZpY2VzL3V0aWxzLlxuLy8gaW1wb3J0IERhdGFIYW5kbGVyIGZyb20gXCIuL3NlcnZpY2VzL2RhdGFIYW5kbGVyXCI7XG4vLyBpbXBvcnQgQ1VTVE9NX0VWRU5UUyBmcm9tICcuL3NlcnZpY2VzL2V2ZW50cyc7XG4vLyBpbXBvcnQgVGhlbWUgZnJvbSAnLi9jbGFzc2VzL3RoZW1lJztcbi8vIGltcG9ydCBTY3JlZW4gZnJvbSAnLi9jbGFzc2VzL3NjcmVlbic7XG4vLyBpbXBvcnQgR2FtZSBmcm9tIFwiLi9jbGFzc2VzL2dhbWVcIjtcbi8vIGltcG9ydCBRdWl6VUkgZnJvbSBcIi4vY2xhc3Nlcy91aS1xdWl6XCI7XG4vLyBpbXBvcnQgR2xvYmFsRGF0YVVJIGZyb20gXCIuL2NsYXNzZXMvdWktZ2xvYmFsRGF0YVwiO1xuLy8gaW1wb3J0IFVzZXJEYXRhVUkgZnJvbSBcIi4vY2xhc3Nlcy91aS11c2VyRGF0YVwiO1xuLy8gaW1wb3J0IExvZ2luVUkgZnJvbSBcIi4vY2xhc3Nlcy91aS1sb2dpblwiO1xuLy8gaW1wb3J0IFVzZXJTdGF0c1VJIGZyb20gXCIuL2NsYXNzZXMvdWktdXNlclN0YXRzXCI7XG4vLyBpbXBvcnQgeyBzaGFkZUJsZW5kIH0gZnJvbSBcIi4vc2VydmljZXMvaGVscGVyc1wiO1xuXG4vLyBjb25zdCB0aGVtZSA9IG5ldyBUaGVtZSgpO1xuXG4vLyAvL09uY2UgZG9jdW1lbnQgaXMgcmVhZHksIGluaXQgdGhlIGFwcCAodGhlIGJvb2spLlxuLy8gd2luZG93Lm9ubG9hZCA9ICgpID0+IHtcbi8vICAgICBjb25zdCBfID0gYnVpbGQoKTtcbi8vIH07XG5cbi8vIGZ1bmN0aW9uIGJ1aWxkKCkge1xuLy8gLy9fYXBwJ3MgY29yZVxuLy8gY2xhc3MgQXBwIHtcbi8vICAgICBjb25zdHJ1Y3RvcihlbCkge1xuLy8gICAgICAgICB0aGlzLmFwcCA9IGVsO1xuLy8gICAgICAgICB0aGlzLmFwcC5nYW1lID0gbmV3IEdhbWUodGhpcy5hcHApO1xuLy8gICAgICAgICB0aGlzLmluaXQoKTtcbi8vICAgICB9XG5cbi8vICAgICBpbml0KCkge1xuLy8gICAgICAgICB0aGlzLmJ1aWxkU2NyZWVucygpO1xuLy8gICAgICAgICB0aGlzLmJ1aWxkVUlzKCk7XG4vLyAgICAgfVxuXG4vLyAgICAgYnVpbGRTY3JlZW5zKCkge1xuLy8gICAgICAgICBjb25zdCBzY3JlZW5zID0gQXJyYXkuZnJvbSh0aGlzLmFwcC5xdWVyeVNlbGVjdG9yQWxsKCcuYXBwX19zY3JlZW4nKSk7XG4vLyAgICAgICAgIHRoaXMuYXBwLnNjcmVlbnMgPSBzY3JlZW5zLm1hcChzID0+IG5ldyBTY3JlZW4ocykpO1xuLy8gICAgICAgICB0aGlzLmFwcC5hY3RpdmVTY3JlZW4gPSBzY3JlZW5zLmZpbmRJbmRleChzID0+IHMuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSk7XG4vLyAgICAgfVxuXG4vLyAgICAgYnVpbGRVSXMoKSB7XG4vLyAgICAgICAgIHRoaXMuYXBwLnVpID0ge307XG5cbi8vICAgICAgICAgdGhpcy5hcHAudWkubG9nSW4gPSB7fTtcbi8vICAgICAgICAgdGhpcy5hcHAudWkucXVpeiA9IHt9O1xuLy8gICAgICAgICB0aGlzLmFwcC51aS51c2VyU3RhdHMgPSB7fTtcbi8vICAgICAgICAgdGhpcy5hcHAudWkuZ2xvYmFsRGF0YSA9IHt9O1xuLy8gICAgICAgICB0aGlzLmFwcC51aS51c2VyRGF0YSA9IHt9O1xuXG4vLyAgICAgICAgIHRoaXMuY2hhbmdlU2NyZWVuKDApO1xuLy8gICAgIH1cblxuLy8gICAgIGF0dGFjaEV2ZW50cyhzSW5kZXgpIHtcbi8vICAgICAgICAgY29uc3Qgb25Mb2dpbiA9IChlKSA9PiB7XG4vLyAgICAgICAgICAgICB0aGlzLmFwcC5nYW1lLnVzZXJuYW1lID0gdGhpcy5hcHAudWkubG9nSW4udXNlcm5hbWU7XG4vLyAgICAgICAgICAgICB0aGlzLmNoYW5nZVNjcmVlbigpO1xuLy8gICAgICAgICB9O1xuXG4vLyAgICAgICAgIGNvbnN0IG9uU3VibWl0UXVpeiA9IChlKSA9PiB7XG4vLyAgICAgICAgICAgICB0aGlzLmFwcC5nYW1lLm92ZXIodGhpcy5hcHApO1xuLy8gICAgICAgICAgICAgdGhpcy5jaGFuZ2VTY3JlZW4oKTtcbi8vICAgICAgICAgfTtcblxuLy8gICAgICAgICBjb25zdCBvbkdsb2JhbERhdGFVcGRhdGVkID0gKGUpID0+IHtcblxuLy8gICAgICAgICB9XG5cbi8vICAgICAgICAgY29uc3Qgb25HYW1lSW5pdEZpbmlzaGVkID0gKGUpID0+IHtcbi8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdvayBvaycpO1xuLy8gICAgICAgICAgICAgaWYgKHRoaXMuYXBwLnVpLnVzZXJTdGF0cy51cGRhdGVUSFJFRUNoYXJ0KSB0aGlzLmFwcC51aS51c2VyU3RhdHMudXBkYXRlVEhSRUVDaGFydCgpO1xuLy8gICAgICAgICB9XG5cbi8vICAgICAgICAgdGhpcy5hcHAuYWRkRXZlbnRMaXN0ZW5lcignb25HYW1lSW5pdEZpbmlzaGVkJywgb25HYW1lSW5pdEZpbmlzaGVkLCBmYWxzZSk7XG4vLyAgICAgICAgIHRoaXMuYXBwLmFkZEV2ZW50TGlzdGVuZXIoJ29uR2xvYmFsRGF0YVVwZGF0ZWQnLCBvbkdsb2JhbERhdGFVcGRhdGVkLCBmYWxzZSk7XG4vLyAgICAgICAgIHNJbmRleCA9PT0gMCAmJiB0aGlzLmFwcC51aS5sb2dJbi51aS5hZGRFdmVudExpc3RlbmVyKCdvbkxvZ2luJywgb25Mb2dpbiwgZmFsc2UpO1xuLy8gICAgICAgICBzSW5kZXggPT09IDEgJiYgdGhpcy5hcHAudWkucXVpei51aS5hZGRFdmVudExpc3RlbmVyKCdvblN1Ym1pdFF1aXonLCBvblN1Ym1pdFF1aXosIGZhbHNlKTtcbi8vICAgICB9XG5cbi8vICAgICBjaGFuZ2VTY3JlZW4oc0luZGV4ID0gMSkge1xuLy8gICAgICAgICB0aGlzLmFwcC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBzaGFkZUJsZW5kKC0wLjUsIHRoZW1lLnJhbmRvbUNvbG9yKCkpO1xuXG4vLyAgICAgICAgIGlmIChzSW5kZXggIT09IDApIHtcbi8vICAgICAgICAgICAgIHRoaXMuYXBwLnNjcmVlbnNbdGhpcy5hcHAuYWN0aXZlU2NyZWVuXS5sZWF2ZSgpO1xuLy8gICAgICAgICAgICAgdGhpcy5hcHAuYWN0aXZlU2NyZWVuKys7XG4vLyAgICAgICAgICAgICB0aGlzLmFwcC5zY3JlZW5zW3RoaXMuYXBwLmFjdGl2ZVNjcmVlbl0uZW50ZXIoKTtcbi8vICAgICAgICAgfVxuXG4vLyAgICAgICAgIHN3aXRjaCAodGhpcy5hcHAuYWN0aXZlU2NyZWVuKSB7XG4vLyAgICAgICAgICAgICBjYXNlIDA6XG4vLyAgICAgICAgICAgICAgICAgdGhpcy5hcHAudWkubG9nSW4gPSBuZXcgTG9naW5VSSh0aGlzLmFwcC5xdWVyeVNlbGVjdG9yKCcuc2NyZWVuLS1ob21lJyksIHRoaXMuYXBwLmdhbWUpO1xuLy8gICAgICAgICAgICAgICAgIGJyZWFrO1xuLy8gICAgICAgICAgICAgY2FzZSAxOlxuLy8gICAgICAgICAgICAgICAgIHRoaXMuYXBwLnVpLnVzZXJTdGF0ID0gbmV3IFVzZXJTdGF0c1VJKHRoaXMuYXBwLnF1ZXJ5U2VsZWN0b3IoJy5zY3JlZW4tLXN0YXRzJyksIHRoaXMuYXBwLmdhbWUpO1xuLy8gICAgICAgICAgICAgICAgIHRoaXMuYXBwLnVpLnF1aXogPSBuZXcgUXVpelVJKHRoaXMuYXBwLnF1ZXJ5U2VsZWN0b3IoJy5zY3JlZW4tLXF1aXonKSwgdGhpcy5hcHAuZ2FtZSk7XG4vLyAgICAgICAgICAgICAgICAgYnJlYWs7XG4vLyAgICAgICAgICAgICBjYXNlIDI6XG4vLyAgICAgICAgICAgICAgICAgdGhpcy5hcHAudWkuZ2xvYmFsRGF0YSA9IG5ldyBHbG9iYWxEYXRhVUkodGhpcy5hcHAucXVlcnlTZWxlY3RvcignLnNjcmVlbi0tZ2xvYmFsLWRhdGEnKSwgdGhpcy5hcHAuZ2FtZSk7XG4vLyAgICAgICAgICAgICAgICAgdGhpcy5hcHAudWkudXNlckRhdGEgPSBuZXcgVXNlckRhdGFVSSh0aGlzLmFwcC5xdWVyeVNlbGVjdG9yKCcuc2NyZWVuLS11c2VyLWRhdGEnKSwgdGhpcy5hcHAuZ2FtZSk7XG4vLyAgICAgICAgICAgICAgICAgYnJlYWs7XG4vLyAgICAgICAgICAgICBkZWZhdWx0OlxuLy8gICAgICAgICAgICAgICAgIGJyZWFrO1xuLy8gICAgICAgICB9XG5cbi8vICAgICAgICAgdGhpcy5hdHRhY2hFdmVudHMoc0luZGV4KTtcbi8vICAgICB9O1xuXG4vLyB9XG5cbi8vICAgICBjb25zdCBfYXBwID0gbmV3IEFwcChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXBwJykpO1xuLy8gICAgIHJldHVybiBfYXBwO1xuLy8gfTtcbiJdfQ==
