//This is the class that will manage all your APIs

class APIManager {
    constructor() {
        this.data = {}
    }

    fetchData() {
        $.ajax({
            url: 'https://randomuser.me/api/?results=7',
            dataType: 'json',
            success: response => {
                const user = response.results.pop();
                this.data.user =  {name: user.name, location: user.location, picture: user.picture};
                this.data.friends = response.results.map(friend => ({name: friend.name}));
            }
        });
        $.ajax({
            url: 'https://api.kanye.rest',
            dataType: 'json',
            success: response => {
                this.data.quote = response.quote;
            }
        });
        $.ajax({
            url: `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 800) + 1}/`,
            dataType: 'json',
            success: response => {
                this.data.pokemon = { name: response.name, picture: response.sprites.front_default };
            }
        });
        $.ajax({
            url: "https://baconipsum.com/api/?type=meat-and-filler",
            dataType: 'json',
            success: response => {
                this.data.bacon = response[0];
            }
        });
    }

    saveUser() {
        if (localStorage.users) {
            const userName = `${this.data.user.name.first} - ${this.data.user.name.last}`;
            const storage = JSON.parse(localStorage.users);
            storage[userName] = this.data;
            const userData = JSON.stringify(storage);
            localStorage.users = userData;
        } else {
            const userName = `${this.data.user.name.first} - ${this.data.user.name.last}`;
            const newUser = {};
            newUser[userName] = this.data;
            const userData = JSON.stringify(newUser);
            localStorage.users = userData;
        }
    }
}