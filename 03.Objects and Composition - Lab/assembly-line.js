function createAssemblyLine(){

    const library = {
        hasClima: function(obj){
            obj.temp = 21;
            obj.tempSettings = 21;
            obj.adjustTemp = () => {
                if(obj.temp < obj.tempSettings){
                    obj.temp += 1;
                } else if(obj.temp > obj.tempSettings){
                    obj.temp -= 1;
                }
            }
        },
        hasAudio: function(obj){
            obj.currentTrack = null;
            obj.nowPlaying = () => {
                if(this.currentTrack !== null){
                    console.log(`Now playing ${this.currentTrack.name} by ${this.currentTrack.artist}`);
                }
            }
        },
        hasParktronic: function(obj){
            obj.checkDistance = (distance) => {
                if(distance < 0.1){
                    console.log('Beep! Beep! Beep!');
                } else if(distance < 0.25){
                    console.log('Beep! Beep!');
                } else if(distance < 0.5){
                    console.log('Beep!');
                } else{
                    console.log('');
                }
            }
        }
    }

    return library;
}