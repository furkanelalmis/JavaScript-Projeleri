// Vue JS 1.Proje

new Vue({
    el: "#items",
    data: {
        player_heal: 100,
        monster_heal: 100,
        logs: [],
        game_is_on: false,
        attack_multiple: 10,
        special_attack_multiple: 25,
        heal_up_multiple: 20,
        monster_attack_multiple: 15,
        log_text: {
            attack: "Oyuncu Atağı :",
            special_attack: "Oyuncu Özel Atağı",
            heal_up: "İlk Yardım : ",
            give_up: "Oyuncu Pes Etti : ",
            monster_attack: "Canavarın Atağı : ",
        }

    },

    methods: {
        start_game: function() {
            this.game_is_on = true;
        },
        attack: function() {
            var point = Math.ceil(Math.random() * this.attack_multiple);
            // this.monster_heal = this.monster_heal - ponit; bu şekildede tanımlanabilir
            this.monster_heal -= point;
            this.add_to_log({ turn: "p", text: this.log_text.attack + point });
            // burayı anlamadım log mantığı ?
            this.monster_attack();

        },
        special_attack: function() {
            var point = Math.ceil(Math.random() * this.special_attack_multiple);
            // this.monster_heal = this.monster_heal - ponit; bu şekildede tanımlanabilir
            this.monster_heal -= point;
            this.add_to_log({ turn: "p", text: this.log_text.special_attack + point });
            this.monster_attack();
        },
        heal_up: function() {
            var point = Math.ceil(Math.random() * this.heal_up_multiple);
            // this.monster_heal = this.monster_heal - ponit; bu şekildede tanımlanabilir
            this.monster_heal -= point;
            this.add_to_log({ turn: "p", text: this.log_text.heal_up + point });

            this.monster_attack();
        },
        give_up: function() {
            this.player_heal = 0;
            this.add_to_log({ turn: "p", text: this.log_text.give_up });
        },
        monster_attack: function() {
            var point = Math.ceil(Math.random() * this.monster_attack_multiple);
            // this.monster_heal = this.monster_heal - ponit; bu şekildede tanımlanabilir
            this.player_heal -= point;
            this.add_to_log({ turn: "m", text: this.log_text.monster_attack + point });
        },
        add_to_log: function(log) {
            this.logs.push(log);
        }
    },

    watch: {
        player_heal: function(value) {
            if (value <= 0) {
                this.player_heal = 0;
                if (confirm("Oyunu Kaybettin. Tekrar denemek istermisin ?")) {
                    this.player_heal = 100;
                    this.monster_heal = 100;
                    this.logs = [];
                }
            } else if (value >= 100) {
                this.player_heal = 100
            }


        },
        monster_heal: function(value) {
            if (value <= 0) {
                this.player_heal = 0;
                if (confirm("Oyunu Kazandınız. Tekrar denemek istermisin ?")) {
                    this.player_heal = 100;
                    this.monster_heal = 100;
                    this.logs = [];
                    // confirm ile bir mesaj, bir Tamam düğmesi ve bir İptal düğmesi içeren bir iletişim kutusu görüntüler.
                    // Kullanıcı "Tamam"ı tıkladığında confirm()yöntem geri döner , aksi takdirde .truefalse döner
                    // watch kullanımı bir veri bir başka veriye bağlı ise ve bağlı olduğu veride değişiklik söz konusu olmuşsa watch

                }
            }
        }
    },
    computed: {
        player_progress: function() {
            return {
                width: this.player_heal + "%"
            }
        },
        monster_progress: function() {
            return {
                width: this.monster_heal + "%"
            }
        }
    }
})