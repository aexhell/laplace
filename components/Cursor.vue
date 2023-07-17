<template>
   <div id="__LAPLACE-CURSOR" class="top-0 left-0 pointer-events-none md:block hidden select-none absolute">
      <img class="w-8" src="/mouse.svg">
   </div>
</template>

<script>
export default {
   mounted () {
      const cursor = document.querySelector('#__LAPLACE-CURSOR');
      const cursorCircle = cursor.querySelector('#__LAPLACE-CURSOR img');

      const mouse = { x: -100, y: -100 }; // mouse pointer's coordinates
      const pos = { x: 0, y: 0 }; // cursor's coordinates
      const speed = 0.25; // between 0 and 1

      const updateCoordinates = e => {
         mouse.x = e.clientX;
         mouse.y = e.clientY;
      }

      window.addEventListener('mousemove', updateCoordinates);

      function getAngle(diffX, diffY) {
      return Math.atan2(diffY, diffX) * 180 / Math.PI;
      }

      function getSqueeze(diffX, diffY) {
      const distance = Math.sqrt(
         Math.pow(diffX, 2) + Math.pow(diffY, 2)
      );
      const maxSqueeze = 0.15;
      const accelerator = 1500;
      return Math.min(distance / accelerator, maxSqueeze);
      }


      const updateCursor = () => {
      const diffX = Math.round(mouse.x - pos.x);
      const diffY = Math.round(mouse.y - pos.y);
      
      pos.x += diffX * speed;
      pos.y += diffY * speed;
      
      const angle = getAngle(diffX, diffY);
      const squeeze = getSqueeze(diffX, diffY);
      
      const scale = 'scale(' + (1 + squeeze) + ', ' + (1 - squeeze) +')';
      const translate = 'translate(' + pos.x + 'px ,' + pos.y + 'px)';

      cursor.style.transform = translate;
      cursorCircle.style.transform = scale;
      };

      function loop() {
         updateCursor();
         requestAnimationFrame(loop);
      }

      requestAnimationFrame(loop);

      const cursorModifiers = document.querySelectorAll('[cursor-class]');

      cursorModifiers.forEach(curosrModifier => {
      curosrModifier.addEventListener('mouseenter', function() {
         const className = this.getAttribute('cursor-class');
         cursor.classList.add(className);
      });
      
      curosrModifier.addEventListener('mouseleave', function() {
         const className = this.getAttribute('cursor-class');
         cursor.classList.remove(className);
      });
      });
   }
}
</script>