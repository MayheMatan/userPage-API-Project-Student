class Renderer {
    renderUser(user) {
        $(".user-container").empty()

        const source = $("#user-template").html()
        const template = Handlebars.compile(source)
        const newHTML = template(user)

        $(".user-container").append(newHTML)
    }

    renderFriends(friends) {
        $(".friends-container").empty()

        const source = $("#user-friends-template").html()
        const template = Handlebars.compile(source)
        const newHTML = template({ friends })

        $(".friends-container").append(newHTML)
    }

    renderQuote(quote) {
        $(".quote-container").empty()

        const source = $("#quote-template").html()
        const template = Handlebars.compile(source)
        const newHTML = template(quote)

        $(".quote-container").append(newHTML)
    }

    renderPokemon(pokemon) {
        $(".pokemon-container").empty()

        const source = $("#pokemon-template").html()
        const template = Handlebars.compile(source)
        const newHTML = template(pokemon)

        $(".pokemon-container").append(newHTML)
    }

    renderMeat(bacon) {
        $(".meat-container").empty()

        const source = $("#bacon-template").html()
        const template = Handlebars.compile(source)
        const newHTML = template(bacon)

        $(".meat-container").append(newHTML)

    }

    renderDropdown(userObj) {
        $("#dropdown").empty()
        const users = Object.keys(userObj)


        const source = $("#dropdown-template").html()
        const template = Handlebars.compile(source)
        const newHTML = template({ users })

        $("#dropdown").append(newHTML)

    }


    renderData(data) {
        if (localStorage.length) {
            this.renderDropdown(JSON.parse(localStorage.users));
        }
        this.renderUser(data.user)
        this.renderFriends(data.friends)
        this.renderQuote(data.quote)
        this.renderMeat(data.bacon)
        this.renderPokemon(data.pokemon)
    }
}