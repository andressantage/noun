var a1=document.getElementById("a1");
a1.addEventListener("click", f1);
function f1(){
    var x="ˈkɪtʃɪn"
    if(a1.innerHTML==="_______"){
        a1.innerHTML=x;
    }
    else{
        a1.innerHTML="_______";}}

       var a2=document.getElementById("a2");a2.addEventListener("click", f2);function f2(){var x="stəʊv";if(a2.innerHTML==="_______"){a2.innerHTML=x;}else{a2.innerHTML="_______";}}
        var a3=document.getElementById("a3");a3.addEventListener("click", f3);function f3(){var x="rɪˈfrɪdʒəreɪtə(r)";if(a3.innerHTML==="_______"){a3.innerHTML=x;}else{a3.innerHTML="_______";}}
        var a4=document.getElementById("a4");a4.addEventListener("click", f4);function f4(){var x="ˈwɒʃɪŋ məˈʃin";if(a4.innerHTML==="_______"){a4.innerHTML=x;}else{a4.innerHTML="_______";}}
        var a5=document.getElementById("a5");a5.addEventListener("click", f5);function f5(){var x="ˈmaɪkrəʊweɪv";if(a5.innerHTML==="_______"){a5.innerHTML=x;}else{a5.innerHTML="_______";}}
        var a6=document.getElementById("a6");a6.addEventListener("click", f6);function f6(){var x="ˈdɪʃwɒʃə(r)";if(a6.innerHTML==="_______"){a6.innerHTML=x;}else{a6.innerHTML="_______";}}
        
const recordButton = document.getElementById('recordButton');
      const stopButton = document.getElementById('stopButton');
      const audio = document.getElementById('audio');

      let mediaRecorder;
      let chunks = [];

      recordButton.addEventListener('click', () => {
        navigator.mediaDevices.getUserMedia({ audio: true })
          .then(stream => {
            mediaRecorder = new MediaRecorder(stream);

            mediaRecorder.addEventListener('dataavailable', event => {
              chunks.push(event.data);
            });

            mediaRecorder.addEventListener('stop', () => {
              const audioBlob = new Blob(chunks);
              const audioUrl = URL.createObjectURL(audioBlob);

              audio.src = audioUrl;
            });

            mediaRecorder.start();

            recordButton.disabled = true;
            stopButton.disabled = false;
          })
      });

      stopButton.addEventListener('click', () => {
        mediaRecorder.stop();

        recordButton.disabled = false;
        stopButton.disabled = true;

        chunks = [];
      });
