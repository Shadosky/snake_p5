/**
 * Created by kevingiroux on 08/12/2016.
 */
function Snake()
{
    this.x = 0;
    this.y = 0;
    this.xspeed = 1;
    this.yspeed = 0;
    this.posHistory = [];

    this.show = function ()
    {
        fill(255);

        var len = this.posHistory.length;
        for (var i = 0; i < len; i++)
        {
            rect(this.posHistory[i].x, this.posHistory[i].y, scl, scl);
        }
    }

    this.update = function ()
    {
        if (score != 0) {
            for (var i = score; i > 0; i--)
            {
                this.posHistory[i] = this.posHistory[i-1];
            }
        }

        //use those to die when u touch a wall

        //this.x = constrain(this.x + (this.xspeed*scl), 0,width-scl);
        //this.y = constrain(this.y + (this.yspeed*scl), 0, height-scl);

        this.x = this.x + (this.xspeed*scl);
        this.y = this.y + (this.yspeed*scl);

        if (this.x > width-scl) {
            this.x = 0;
        } else if (this.x < 0) {
            this.x = width-scl;
        }

        if (this.y > height-scl) {
            this.y = 0;
        } else if (this.y < 0) {
            this.y = height-scl;
        }

        this.posHistory[0] = createVector(this.x, this.y);
    }

    this.dir = function (x, y)
    {
        if(this.xspeed == 0 || x == 0) {
            this.xspeed = x;
        }
        if(this.yspeed == 0 || y == 0) {
            this.yspeed = y;
        }
    }

    this.die = function ()
    {
        if (score != 0) {
            for (var i = score; i > 0; i--)
            {
                var v1 = createVector(this.x, this.y, 0);
                var v2 = createVector(this.posHistory[i].x, this.posHistory[i].y, 0);
                var distance = v1.dist(v2);
                if (distance == 0)
                {
                    score = 0;
                    this.posHistory = [];
                    break;
                }
            }
        }
    }
}