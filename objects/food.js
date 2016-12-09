/**
 * Created by kevingiroux on 08/12/2016.
 */
function Food()
{
    this.x = random(width);
    this.y = random(height);

    this.show = function ()
    {
        fill(255, 250,20);
        rect(this.x, this.y, scl, scl);
    }

    this.update = function ()
    {

    }
}