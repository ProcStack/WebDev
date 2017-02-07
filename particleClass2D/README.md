**Particle system class; example of Canvas, JavaScript, JQuerry, and HTML5**
----------------------

To see this page in action, check out-

http://neurous.net/

----------------------

*Comments to come, I appologize*

This was just a test to mess around with making a JavaScript class to create particles with a given velocity, trail length, adaptive trail attributes, and to create a pulling force to the cursor.

*This page is using a JavaScript path to Google hosted JQuerry 1.10.0; I don't know what differences there will be stepping up the version, so I left it for now.*

--------------------

If you left click, it will generate 2 particles from the cursor location.

If you hold down left click, particles within a set fall off range will swirl in toward the cursor.

If you right click and hold, it will pull all particles to the cursor location.

Mobile touch support isn't working great just yet.  When holding down a finger, it will active as though right clicking, but just tapping and moving your finger around wont act as left click.

If you hit the spacebar, it will pause the system;  hit spacebar again to start the system up again.

-------------------------

From this, I'm learning WebGl code to generate this page out in a full 3d context.

Updates code to come within a particleClass3D folder in the WebDev repository.
