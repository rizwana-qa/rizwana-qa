//Encapsulation Example
import { test } from '@playwright/test';
class Transcript

{
    private marks: number=87;
    showmarks()
    {
        console.log(this.marks, ' % marks I have achived. ')
    }
}
test('Total Marks', async () => {

const result=new Transcript();
result.showmarks();
});
