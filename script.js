//your code here
let user=['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal']; // [Madurai Temple ,a pink city, the tajmahal]

//first i remove the article

     function withOutArtcile(input){
       let words= input.split(" ");  

     let valueWithoutArtcile = words.filter((word)=>{
        let lowerCaseVar=word.toLowerCase();
        if( lowerCaseVar==='an'||lowerCaseVar==='a'||lowerCaseVar==='the'){
            return false
        }
        return true;
       })

      return  valueWithoutArtcile.join(" "); // 'tajmahal Madurai Temple Pink City'
      
     }

     let hashmap={};  //adi: 'sharma',

     let arr1=[];

     for(let i=0;i<user.length;i++){
        let WithoutArticlesValue=  withOutArtcile(user[i]);
    /*without articles*/  hashmap[WithoutArticlesValue]=user[i]; //with article //hashmap= { tajmahal :  'the tajmahal', Madurai Temple:'Madurai Temple
    
    
       arr1.push(WithoutArticlesValue);
       
     }

     arr1.sort();
     // console.log(arr1); // ['Madurai Temple', 'Pink City', 'tajmahal']

     let outputList=[];

     arr1.forEach( (newString)=>{
      outputList.push(hashmap[newString]);
     })
     console.log(outputList);
  

