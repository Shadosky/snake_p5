/**
 * Created by kevingiroux on 08/12/2016.
 */
function Food()
{
    this.x = 0;
    this.y = 0;

    this.show = function ()
    {
        fill(255, 250,20);
        rect(this.x, this.y, scl, scl);
    }

    this.getPosOnGrid = function ()
    {
        this.x = constrain(floor(random(rows))*scl, 0, width);
        this.y = constrain(floor(random(cols))*scl, 0, height);
    }

    this.eat = function ()
    {
        var v1 = createVector(this.x, this.y, 0);
        var v2 = createVector(snake.x, snake.y, 0);
        var distance = v1.dist(v2);

        if (distance == 0)
        {
            score ++;
            this.getPosOnGrid();
        }
    }
}