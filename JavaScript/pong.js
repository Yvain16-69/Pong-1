
class Balle
{
    constructor($element){
        this.$element=$element;
        this.gauche=parseInt($("#balle").css("left"));
        this.haut=parseInt($("#balle").css("top"));
        this.vitesseX=5;//Attribue une vitesse en X
        this.vitesseY=3;//Attribue une vitesse en Y
    }
    majHTML(){
        this.$element.css("left",balle.gauche);
        this.$element.css("top",balle.haut);
    }
}
let balle = new Balle($("#balle"));
console.log(balle);


class Terrain
{
    constructor($element){
        this.$element=$element;
        this.largeur=$("#terrain").width();//Récupère la largeur du terrain dans le CSS
        this.hauteur=$("#terrain").height();//Récupère la hauteur du terrain dans le CSS
    }
}
let terrain = new Terrain($("#terrain"));
console.log(terrain);

setInterval(function(){
    balle.gauche = balle.gauche+balle.vitesseX; //Donne un mouvement à la balle vers la droite en fonction de la vitesse
    balle.haut = balle.haut+balle.vitesseY; //Donne un mouvement à la balle vers le bas en fonction de la vitesse
    if(balle.gauche>terrain.largeur){ //Si la balle en X sort du rectangle, celle-ci rebondis
        balle.gauche = terrain.largeur;
        balle.vitesseX=balle.vitesseX*-1;
    }
    if(balle.gauche<0){
        balle.gauche = 0;
        balle.vitesseX=balle.vitesseX*-1;
    }
    if(balle.haut<0){//Si la balle en Y sort du rectangle, celle-ci rebondis
        balle.haut = 0;
        balle.vitesseY=balle.vitesseY*-1;
    }
    if(balle.haut>terrain.hauteur){
        balle.haut = terrain.hauteur;
        balle.vitesseY=balle.vitesseY*-1;
    }

    balle.majHTML();//Fait appel à la fonction "majHTML" dans la classe "balle"
}, 10);