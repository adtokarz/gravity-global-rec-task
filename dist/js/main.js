"use strict";var popupOpenBtn=document.querySelector(".container__article .button__open-popup "),popup=document.querySelector(".popup"),popopCloseBtn=document.querySelector(".popup__button--close"),clickCounter=document.querySelector(".click-counter"),popupResetCounter=document.querySelector(".popup .button--reset"),clickNumber=localStorage.counter,openPopup=function(){popup.style.display="flex",clickNumber=localStorage.counter,clickNumber++,localStorage.setItem("counter",clickNumber),clickCounter.textContent=localStorage.counter,5<=clickNumber&&(popupResetCounter.style.display="block")},closePopup=function(){popup.style.display="none"},resetCounter=function(){localStorage.setItem("counter",0),closePopup(),popupResetCounter.style.display="none"};popupOpenBtn.addEventListener("click",openPopup),popopCloseBtn.addEventListener("click",closePopup),popupResetCounter.addEventListener("click",resetCounter),popup.addEventListener("click",closePopup);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsicG9wdXBPcGVuQnRuIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicG9wdXAiLCJwb3BvcENsb3NlQnRuIiwicG9wdXBSZXNldENvdW50ZXIiLCJvcGVuUG9wdXAiLCJzdHlsZSIsImRpc3BsYXkiLCJjbGlja051bWJlciIsImxvY2FsU3RvcmFnZSIsImNvdW50ZXIiLCJzZXRJdGVtIiwiY2xpY2tDb3VudGVyIiwidGV4dENvbnRlbnQiLCJjbG9zZVBvcHVwIiwicmVzZXRDb3VudGVyIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6ImFBQUEsSUFBTUEsYUFBZUMsU0FBU0MsY0FBYywwQ0FBdkIsRUFDZkMsTUFBUUYsU0FBU0MsY0FBYyxRQUF2QixFQURSRixjQUFlQyxTQUFTQyxjQUFjLHVCQUF2QkQsRUFDZkUsYUFBaUJELFNBQUFBLGNBQXZCLGdCQUF1QkEsRUFDakJFLGtCQUFnQkgsU0FBU0MsY0FBYyx1QkFBdkJELEVBRWhCSSxZQUFBQSxhQUFvQkosUUFLcEJLLFVBQVksV0FDZEgsTUFBTUksTUFBTUMsUUFBVSxPQUN0QkMsWUFBY0MsYUFBYUMsUUFDM0JGLFdBQVcsR0FDWEMsYUFBYUUsUUFBUSxVQUFXSCxXQUFoQ0MsRUFDQUcsYUFBYUMsWUFBY0osYUFBYUMsUUFDdEIsR0FBZkYsY0FBQUEsa0JBQWlCRixNQUFBQyxRQUFBLFFBR3ZCLEVBRUtPLFdBQWEsV0FBbkJaLE1BQU1ZLE1BQVVQLFFBQUcsTUFFbEIsRUFFS1EsYUFBZSxXQUFmQSxhQUFZSixRQUFHLFVBQWZJLENBQUFBLEVBQ0ZOLFdBQVksRUFDWkssa0JBQVVSLE1BQUFDLFFBQUEsTUFFYixFQUtESixhQUFhYSxpQkFBYixRQUFBWCxTQUFBRixFQUNBQyxjQUFBQSxpQkFBa0JZLFFBQWlCRixVQUFuQ1YsRUFDQUYsa0JBQU1jLGlCQUEwQkYsUUFBaENDLFlBQUFiLEVBQUFBLE1BQU1jLGlCQUFpQixRQUFTRixVQUFoQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcG9wdXBPcGVuQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcl9fYXJ0aWNsZSAuYnV0dG9uX19vcGVuLXBvcHVwICcpO1xyXG5jb25zdCBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cCcpO1xyXG5jb25zdCBwb3BvcENsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX19idXR0b24tLWNsb3NlJylcclxuY29uc3QgY2xpY2tDb3VudGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsaWNrLWNvdW50ZXInKTtcclxuY29uc3QgcG9wdXBSZXNldENvdW50ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAgLmJ1dHRvbi0tcmVzZXQnKTtcclxuXHJcbmxldCBjbGlja051bWJlciA9IGxvY2FsU3RvcmFnZS5jb3VudGVyO1xyXG5cclxuXHJcbmNvbnN0IG9wZW5Qb3B1cCA9ICgpID0+IHtcclxuICAgIHBvcHVwLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgIGNsaWNrTnVtYmVyID0gbG9jYWxTdG9yYWdlLmNvdW50ZXI7XHJcbiAgICBjbGlja051bWJlcisrO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjb3VudGVyXCIsIGNsaWNrTnVtYmVyKTtcclxuICAgIGNsaWNrQ291bnRlci50ZXh0Q29udGVudCA9IGxvY2FsU3RvcmFnZS5jb3VudGVyO1xyXG4gICAgaWYoY2xpY2tOdW1iZXIgPj0gNSl7XHJcbiAgICAgICAgcG9wdXBSZXNldENvdW50ZXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgY2xvc2VQb3B1cCA9ICgpID0+IHtcclxuICAgcG9wdXAuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyBcclxufVxyXG5cclxuY29uc3QgcmVzZXRDb3VudGVyID0gKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjb3VudGVyXCIsIDApO1xyXG4gICAgY2xvc2VQb3B1cCgpO1xyXG4gICAgcG9wdXBSZXNldENvdW50ZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG59XHJcblxyXG5cclxuXHJcbnBvcHVwT3BlbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5Qb3B1cCk7XHJcbnBvcG9wQ2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZVBvcHVwKTtcclxucG9wdXBSZXNldENvdW50ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZXNldENvdW50ZXIpO1xyXG5wb3B1cC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlUG9wdXApO1xyXG5cclxuXHJcbiJdfQ==
