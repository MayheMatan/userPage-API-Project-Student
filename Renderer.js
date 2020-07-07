class Renderer {
    render(data, containerId, templateId) {
        $(containerId).empty()
        const source = $(templateId).html()
        const template = Handlebars.compile(source)
        let newHTML;
        if(data instanceof Array) {
            newHTML = template({data})
        } else {
            newHTML = template(data)
        }
        $(containerId).append(newHTML)
    }

    renderFriends(friends) {
        $(".friends-container").empty()
        const source = $("#user-friends-template").html()
        const template = Handlebars.compile(source)
        const newHTML = template({ friends })
        $(".friends-container").append(newHTML)
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
        this.render(data.user, ".user-container", "#user-template")
        this.render(data.friends, ".friends-container", "#user-friends-template");
        this.render(data.quote, ".quote-container", "#quote-template")
        this.render(data.bacon, ".meat-container", "#bacon-template")
        this.render(data.pokemon, ".pokemon-container", "#pokemon-template")
    }
}