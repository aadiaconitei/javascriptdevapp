var vm = new Vue({
    el: '#databinding',
    data: {
        num1: 340,
        num2: 230,
        total: '',
        styleobj: {
            width: "100px",
            height: "100px",
            backgroundColor: "red"
        },
        hreflink:"https://www.google.com"
    },
    methods: {
        afiseazaTotal: function (event) {
            console.log(event);
            return this.total = this.num1 + this.num2;
        },
        changebgcolor: function() {
            this.styleobj.backgroundColor = "green";
         },
         originalcolor: function() {
            this.styleobj.backgroundColor = "red";
         }
    },
});