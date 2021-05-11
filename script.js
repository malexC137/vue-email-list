new Vue({
    el: "#app",
    data: {
        emailsList: []
    },
    mounted() {
        const emailsNumber = 10;
        const newEmailsList = [];
        for (let i = 0; i < 10; i++) {
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((resp) => {
                newEmailsList.push(resp.data.response);

                if(newEmailsList.length === emailsNumber) {
                    this.emailsList = newEmailsList
                }
            })
        }
    }
})