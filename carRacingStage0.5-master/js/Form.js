class Form {
  contructor() {
      this.input = createInput("Name");
      this.button = createButton('Play');
      this.greeting = createElement('h2');
  }

  hide() {
      this.input.hide();
      this.button.hide();
      this.greeting.hide();
  }

  display() {
      var title = createElement('h2');
      title.position(120,0);

      this.input.position(130,160);
      this.button.position(250,200);

      this.button.mousePressed(()=>{
          this.input.hide();
          this.button.hide();
          player.name = this.input.value();
          playerCount++;
          player.index = playerCount;
          player.update();
          this.greeting.html("Hello " + player.name);
          this.greeting.position(130, 100);
      });
  }
} 



// IntelliSense
