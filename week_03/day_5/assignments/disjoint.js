arr1 = ['2', '5', '8', '6', '10']
 arr2 = ['1', '3', '4', '7', '9']
function disjoint ( disjoint) {
for (i=0; i<arr1.length; i++)  
   { 
    for ( j = 0; j < arr2.length; j++) { 
     
    if (arr1[i] == arr2[j]) 
            return true; 
            } 
    } 
        
        return false; 
}
