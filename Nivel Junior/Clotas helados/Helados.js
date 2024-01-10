dineroCofla=prompt("cuanto dinero tienes cofla ?")
dineroRoberto=prompt("cuanto dinero tienes robert ?")
dineroPedro=prompt("cuanto dinero tienes pedro ?")

dineroCofla=parseInt(dineroCofla)
dineroRoberto=parseInt(dineroRoberto)
dineroPedro=parseInt(dineroPedro)


if (dineroCofla>=0.6 && dineroCofla<1) {
    
    alert("Cofla, comprate el helado de agua y te sobra  "+ Math.round((dineroCofla-0.6)));
    
}
else if(dineroCofla>=1 && dineroCofla<1.6){
    alert("cofla,comprate el helado de crema y te sobra  "+ Math.round((dineroCofla-1.5)))

}else if (dineroCofla>=1.6 &&dineroCofla<1.7) {
    alert("cofla,comprate el helado de heladix y te sobra "+ Math.round((dineroCofla-1.6)))
}else if(dineroCofla>=1.7 && dineroCofla<1.8){

    alert("cofla, comprate un heladovich y te sobra "+ Math.round((dineroCofla-1.7)))
}else if (dineroCofla>=1.8 && dineroCofla<2.9) {
    alert("cofla,comprate el helado de helardo y te sobra "+ Math.round((dineroCofla-2.5)))
}else if (dineroCofla>=2.9){
    alert("cofla,comprate el helado de confites o el pote 1/4 kg y te sobra "+ Math.round((dineroCofla-2.5)))
}else{
    alert("lo siento cofla, pobre de mierda, no te alcanza para ningun helado y te sobra ");
}


//__________________________________________________________


if (dineroRoberto>=0.6 && dineroRoberto<1){
    alert("roberto, comprate el helado de agua")
}
else if(dineroRoberto>=1 && dineroRoberto<1.6){
    alert("roberto,comprate el helado de crema")

}else if (dineroRoberto>=1.6 &&dineroRoberto<1.7) {
    alert("roberto,comprate el helado de heladix")
}else if(dineroRoberto>=1.7 && dineroRoberto<1.8){

    alert("roberto, comprate un heladovich")
}else if (dineroRoberto>=1.8 && dineroRoberto<2.9) {
    alert("roberto,comprate el helado de helardo")
}else if (dineroRoberto>=2.9){
    alert("roberto,comprate el helado de confites o el pote 1/4 kg")
}else{
    alert("lo siento roberto, pobre de mierda, no te alcanza para ningun helado")
}

//_____________________________________________________

if (dineroPedro>=0.6 && dineroPedro<1) {
    
    alert("pedro, comprate el helado de agua")
}
else if(dineroPedro>=1 && dineroPedro<1.6){
    alert("pedro,comprate el helado de crema")

}else if (dineroPedro>=1.6 &&dineroPedro<1.7) {
    alert("pedro,comprate el helado de heladix")
}else if(dineroPedro>=1.7 && dineroPedro<1.8){

    alert("pedro, comprate un heladovich")
}else if (dineroPedro>=1.8 && dineroPedro<2.9) {
    alert("pedro,comprate el helado de helardo")
}else if (dineroPedro>=2.9){
    alert("pedro,comprate el helado de confites o el pote 1/4 kg")
}else{
    alert("lo siento pedro, pobre de mierda, no te alcanza para ningun helado")
}
