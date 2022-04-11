function cityTaxes(name, population, treasury){
    const city = {
        name,
        population,
        treasury,
        collectTaxes: function(){
            this.treasury += this.population * this.taxRate;
        },
        applyGrowth: function(percentage){
            let increaseAmount = Math.floor(this.population * (percentage / 100));
            this.population += increaseAmount;
        },
        applyRecession: function(percentage){
            let decreaseAmount = Math.floor(this.treasury * (percentage / 100));
            this.treasury -= decreaseAmount;
        }
    };
    city['taxRate'] = 10;

    return city;
}