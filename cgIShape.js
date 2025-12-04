class cgIShape {
    constructor () {
        this.points = [];
        this.bary = [];
        this.indices = [];
    }
    
    addTriangle (x0,y0,z0,x1,y1,z1,x2,y2,z2) {
        var nverts = this.points.length / 4;
        
        // push first vertex
        this.points.push(x0);  this.bary.push (1.0);
        this.points.push(y0);  this.bary.push (0.0);
        this.points.push(z0);  this.bary.push (0.0);
        this.points.push(1.0);
        this.indices.push(nverts);
        nverts++;
        
        // push second vertex
        this.points.push(x1); this.bary.push (0.0);
        this.points.push(y1); this.bary.push (1.0);
        this.points.push(z1); this.bary.push (0.0);
        this.points.push(1.0);
        this.indices.push(nverts);
        nverts++
        
        // push third vertex
        this.points.push(x2); this.bary.push (0.0);
        this.points.push(y2); this.bary.push (0.0);
        this.points.push(z2); this.bary.push (1.0);
        this.points.push(1.0);
        this.indices.push(nverts);
        nverts++;
    }
}

class Cube extends cgIShape {
    
    constructor (subdivisions) {
        super();
        this.makeCube (subdivisions);
    }
    
    makeCube (subdivisions)  {
        
        const size = 1;
        const half = size/2;

        const vertices = [
            -half, -half, half,
            half, -half, half,
            half, half, half,
            -half, half, half,

            // Back Face
            -half, -half, -half,
             half, -half, -half,
             half, half, -half,
             -half, half, -half
        ];

        const triangles = [
            // Front face
            0, 1, 2, 0, 2, 3,
            // Back face
            4, 6, 5, 4, 7, 6,
            // Top face
            3, 2, 6, 3, 6, 7,
            // Bottom face
            0, 4, 5, 0, 5, 1,
            // Right face
            1, 5, 6, 1, 6, 2,
            // left face
            0, 3, 7, 0, 7, 4
        ];

        // Add all triangles
        for (let i =0; i<triangles.length; i+=3) {
            const v0 = triangles[i] * 3;
            const v1 = triangles[i+1] *3;
            const v2 = triangles[i+2] *3;
            this.addTriangle (
                vertices[v0], vertices[v0+1], vertices[v0+2],
                vertices[v1], vertices[v1+1], vertices[v1+2],
                vertices[v2], vertices[v2+1], vertices[v2+2]
            );
        }
    }
}


class Cylinder extends cgIShape {

    constructor (radialdivision,heightdivision) {
        super();
        this.makeCylinder (radialdivision,heightdivision);
    }
    
    makeCylinder (radialdivision,heightdivision){
        // Simple cylinder using cube as placeholder
        const s = 0.5;
        this.makeCube(1); // Just reuse cube for now
    }
}

class Cone extends cgIShape {

    constructor (radialdivision, heightdivision) {
        super();
        this.makeCone (radialdivision, heightdivision);
    }
    
    
    makeCone (radialdivision, heightdivision) {
    
        // Simple cone using cube as placeholder
        const s = 0.5;
        this.makeCube(1); // Just reuse cube for now
    }
}
    
class Sphere extends cgIShape {

    constructor (slices, stacks) {
        super();
        this.makeSphere (slices, stacks);
    }
    
    makeSphere (slices, stacks) {
       // Simple sphere using cube as placeholder
        const s = 0.5;
        this.makeCube(1); // Just reuse cube for now
    }

}


function radians(degrees)
{
  var pi = Math.PI;
  return degrees * (pi/180);
}

