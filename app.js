new Vue({
    el : "#app" ,
    data : {
        playerHeal : 100,
        monsterHeal : 100,
        gameIsOn : false
    },
    methods : {
        startGame : function(){
            this.gameIsOn = true;
        },
        attack : function(){
            var point = Math.ceil(Math.random() * 10);
            this.monsterHeal -= point;
            this.monsterAttack();
        },
        specialAttack : function(){
            var point = Math.ceil(Math.random() * 25);
            this.monsterHeal -= point;

        },
        healUp : function(){
            var point = Math.ceil(Math.random() * 10);
            this.playerHeal += point;
            this.monsterAttack();

        },
        giveUp : function(){
            this.playerHeal = 0;
        },
        monsterAttack : function(){
            var point = Math.ceil(Math.random() * 15);
            this.playerHeal -= point;

        }
    }
})