function drawTriangle(triangleSize) {
   for(i = 0; i < triangleSize; i++) {
      let line = "";
      for (j = 0; j <= i; j++) {
         line += "*";
      }
      console.log(line);
   }
}
drawTriangle(4);