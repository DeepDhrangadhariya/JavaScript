#include<stdio.h>
void main()
{
    int n,fact=1;

    printf("\n\tEnter no. :");
    scanf("%d",&n);

    for(int i=1;i<=n;i++)
    {
        fact = fact*i;
    }
    printf("\n\tfactorial is :%d",fact);
}