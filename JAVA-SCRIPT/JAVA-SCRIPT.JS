// JAVA-SCRIPT :

// UPDATE (DATE & TIME) : 
const date = document.getElementById("date");
const time = document.getElementById("time");

function update_time_and_date()
{
    // CURRENT (DATE & TIME) : 
    const date_and_time = new Date();

    // INSERT NEW (DATE & TIME) : 
    time.innerHTML = `${date_and_time.toLocaleTimeString()}`;
    date.innerHTML = `${date_and_time.getDate()}-${date_and_time.getMonth() + 1}-${date_and_time.getFullYear()}`;
}

// UPDATE (DATE & FUNCTION) WITHIN (1SEC) : 
setInterval(update_time_and_date, 1000);

// SOFTWARE-APPLICATON :
const application_list = document.getElementById("application-list");
const software_container = application_list.querySelectorAll(".software-container");

software_container.forEach((software_app) =>
{
    software_app.addEventListener("click", () =>
    {
        software_container.forEach((software => software.classList.remove("active-software")));
        software_app.classList.toggle("active-software");
    });
});

// PINNED-APPLICATION :
const pinned_app_list = document.getElementById("pinned-items-list");
const pinneda_app = pinned_app_list.querySelectorAll(".pinned-item-view");

pinneda_app.forEach((pinned_application) =>
{
    pinned_application.addEventListener("click", () =>
    {
        pinneda_app.forEach((pinned => pinned.classList.remove("active-pinned-app")));
        pinned_application.classList.toggle("active-pinned-app");
    });
});

// RECOMMENDED-APPLICATION :
const recommended_list = document.getElementById("recommended-list-container");
const recommended_view = recommended_list.querySelectorAll(".recommended-view");

recommended_view.forEach((recommended) =>
{
    recommended.addEventListener("click", () =>
    {
        recommended_view.forEach((recommended_app => recommended_app.classList.remove("active-recommended-view")));
        recommended.classList.toggle("active-recommended-view");
    });
});

// USER-CURRENT-LOCATION :
const weather_img = document.getElementById("weather-icon-img");
const temperature = document.getElementById("temperature");
const feel_like = document.getElementById("feels_like");

const user_location = document.getElementById("user-current-location");

// API-KEY (OPEN WEATHER)
let API_Key = "API-KEY";

function user_current_location()
{
    // 'BROWSER' SUPPORT GEO-LOCATION :
    if(navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition(success_function, error_function);
    }
    else
    {
        alert("No, Support API... !");
    }
}

// SUCCESS-FUNCTION :
function success_function(coordinates)
{
    // CO-ORDINATES (LATITUDE & LONGITUDE) :
    const {latitude, longitude} = coordinates.coords;
    let API = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_Key}`;

    fetch(API).then(Response => Response.json()).then(Result => weather_detail(Result));
}

// WEATHER-DETAIL'S :
function weather_detail(info)
{
    // INFORMATION, FROM USER-LOCATION :
    const city = info.name;
    const country = info.sys.country;
    const {description, id} = info.weather[0];
    const {feels_like, humidity, temp} = info.main;

    // WEATHER-IMAGE : 
    if(id === 800)
    {
        weather_img.src = "WINDOWS 11 (ICONS)/clear.png";
    }
    else if(id >= 200 && id <= 232)
    {
        weather_img.src = "WINDOWS 11 (ICONS)/storm.png"
    }
    else if(id >= 600 && id <= 622)
    {
        weather_img.src = "WINDOWS 11 (ICONS)/snow.png"
    }
    else if(id >= 701 && id <= 781)
    {
        weather_img.src = "WINDOWS 11 (ICONS)/haze.png";
    }
    else if(id >= 801 && id <= 804)
    {
        weather_img.src = "WINDOWS 11 (ICONS)/clouds.png";
    }
    else if((id >= 300 && id <= 321) || (id >= 500 && id <= 531))
    {
        weather_img.src = "WINDOWS 11 (ICONS)/rain.png";
    }

    // WEATHER-INFO :
    temperature.innerHTML = `${Math.floor(temp)}°C`;
    feel_like.innerHTML = description.charAt(0).toUpperCase() + description.slice(1);

    user_location.innerHTML = `${city}, ${country}`;

    // console.log(info);
}

// ERROR-FUNCTION :
function error_function()
{
    alert("Error... !");
}

// THEME :
const main_comtainer = document.getElementById("main-container");

const theme_icon = document.getElementById("theme-icon");
const theme_bg = document.getElementById("theme-bg");
const theme_controller = document.getElementById("theme-controller");

theme_bg.addEventListener("click", () =>
{
    if(main_comtainer.classList.contains("dark"))
    {
        theme_controller.style.left = "1.35rem";
        theme_icon.classList.add("light-theme");
        main_comtainer.classList.remove("dark");
        theme_icon.classList.remove("dark-theme");
        main_comtainer.classList.add("light");

        main_comtainer.style.backgroundImage = "url(windows-11-light.jpg)";
    }
    else if(main_comtainer.classList.contains("light"))
    {
        theme_controller.style.left = "0.27rem";
        theme_icon.classList.add("dark-theme");
        main_comtainer.classList.remove("light");
        theme_icon.classList.remove("light-theme");
        main_comtainer.classList.add("dark");

        main_comtainer.style.backgroundImage = "url(windows-11-dark.jpeg)";
    }
});

// START-MENU :
const windows_start_menu = document.getElementById("windows-start-menu");
const windows_start_button = document.getElementById("windows-start-button");

windows_start_button.addEventListener("click", () =>
{
    windows_start_menu.classList.toggle("active-start-menu");
});
