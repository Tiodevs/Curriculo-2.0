function generateQR(){
    document.querySelector("#qr-image").style.display="block";
    let QRtext = document.querySelector("#text").value;
    if(QRtext.trim().length=0){
        document.querySelector("#qr-image .error").innerHTML="Please enter text";
        document.querySelector("#img").style.display="none";
        document.querySelector("#img").style.display="block";
    }else{
        document.querySelector("#qr-image .error").innerHTML="";
        document.querySelector("#img").src="https://chart.googleapis.com/chart?chs=500x500&cht=qr&chl="+ QRtext;
    }
}       

function scrollToTop() {
    window.scrollTo(0,0);
}


function abrirAlerta(){
    swal({
        title: "Você tem certeza?",
        text: "Você tem certeza que deseja excluir?",
        dangerMode: true,
      })
      .then(willDelete => {
        if (willDelete) {
          swal("Deletado!", "O seu arquivo foi deletado da conta!");
        }
      });
}

function abrirAlerta2(){
    swal("Escreva algo:", {
        content: "input",
      })
      .then((value) => {
        swal(`Você escreveu: ${value}`);
      });

}

