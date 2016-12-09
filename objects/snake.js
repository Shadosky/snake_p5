/**
 * Created by kevingiroux on 08/12/2016.
 */
function Snake()
{
    this.x = 0;
    this.y = 0;
    this.xspeed = 1;
    this.yspeed = 0;

    this.show = function ()
    {
        fill(255);
        rect(this.x, this.y, scl, scl);
    }

    this.update = function ()
    {
        this.x += this.xspeed*scl;
        this.y += this.yspeed*scl;
    }
}