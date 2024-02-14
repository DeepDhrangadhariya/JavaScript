#include<stdio.h>
void main()
{
    long int a,x=0,nxt=1,sum=x+nxt,i;

    printf("Enter value :");
    scanf("%d",&a);

    for(i=1;i<=a;i++)
    {
        printf("%ld\n",x);

        x=nxt;
        nxt=sum;
        sum=x+nxt;
    }
    printf("\n");
}