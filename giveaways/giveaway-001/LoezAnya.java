

class Solution {
    public static int sumList(int[] l) {
        //l=new int[l.length];
        int sum=0;
        for(int i=0;i<l.length;i++){
            sum=sum+l[i];
        }
        

        return sum;
    }

    public static void main(String[] args) {
        int[] lista1={5,42,12,59};
        int[] lista2={86,43,23,54,21,65};

        int res1=sumList(lista1);
        System.out.println(res1);
        int res2=sumList(lista2);
        System.out.println(res2);


        
   
    }
}