**Particle system class; example of Canvas, JavaScript, JQuerry, and HTML5**
----------------------

*Comments to come, I apologize*

This was just a test to mess around with making a JavaScript class to create particles with a given velocity, trail length, adaptive trail attributes, and to create a pulling force to the cursor.

*This page is using a JavaScript path to Google hosted JQuerry 1.10.0; I don't know what differences there will be stepping up the version, so I left it for now.*

--------------------

If you left click, it will generate 2 particles from the cursor location.

If you hold down left click, particles within a set fall off range will swirl in toward the cursor.

If you right click and hold, it will pull all particles to the cursor location.

Mobile touch support isn't working great just yet.  When holding down a finger, it will active as though right clicking, but just tapping and moving your finger around wont act as left click.

If you hit the spacebar, it will pause the system;  hit spacebar again to start the system up again.

-------------------------

To see this page in action, check out-

http://neurous.net/

----------------------

Just a heads up, my math for finding a location for the particles to pull to is a little off.  In that it seems to favor the relative origin axes of the cursor position.

If you hold right click, you'll see the points swarm to the cursor, hold it for 5 seconds or so, when you release, you'll see a cross float off from the location.

Easy to fix on my part, I haven't had the time to make the changes though.

----------------------


From this, I'm learning WebGl code to generate this page out in a full 3d context.

Updated code to come within a particleClass3D folder in the WebDev repository.
