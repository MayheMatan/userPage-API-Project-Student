const apiManager = new APIManager();
const renderer = new Renderer();

console.log(JSON.parse(localStorage.users));

$("#fetch-data").on("click", () => {
    apiManager.fetchData();
});

$("#render").on("click", () => {
    renderer.renderData(apiManager.data);
});

$("#save-user").on("click", () => {
    apiManager.saveUser();
});

$("#load-user").on("click", () => {
    let userName = $("select").val()
    let usersObj = JSON.parse(localStorage.users)
    let user = usersObj[userName]
    renderer.renderData(user)
})