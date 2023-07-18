<template>
  <div id="about-container">
    <div class="about">
      <p class="text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero quidem hic
        recusandae nulla soluta optio doloribus ratione aliquid. Explicabo odio, a eveniet
        corrupti dicta repudiandae laudantium sed mollitia saepe? Sequi! - Lorem ipsum
        dolor sit, amet consectetur adipisicing elit. Molestiae fuga maiores alias sunt
        perspiciatis, aperiam iure, tenetur quibusdam, doloremque modi nemo eum amet minus
        porro! Aut commodi temporibus officia facilis? Veritatis, autem esse. Natus rerum
        neque totam unde a. In reiciendis provident aspernatur quasi. Quis vel voluptate
        est facilis deleniti quasi mollitia perspiciatis similique molestiae itaque?
        Sapiente praesentium quam tenetur ipsum necessitatibus. Accusamus explicabo
        consequuntur veritatis provident rem aspernatur, cumque quisquam optio voluptatum
        iste non molestiae, dolor ex numquam deleniti, illum corrupti sapiente? Nulla
        autem corporis rem, dolorem, qui quis aliquam cupiditate nemo deleniti delectus,
        fugiat inventore fuga aliquid perferendis consequatur possimus itaque facilis ut
        dolores unde recusandae? Nobis, fuga itaque dolorem nulla tenetur ipsam aspernatur
        deserunt modi quisquam veritatis voluptates cum ullam quo exercitationem
        consequuntur, tempora magnam! Unde incidunt ut quisquam autem dolores ipsa
        aspernatur. Quam, harum tempora! Blanditiis, ratione voluptates rem tempore a
        officia aperiam dolores quis nesciunt! Nam recusandae voluptatum quo itaque culpa
        eaque repudiandae nihil, ea provident, dignissimos quasi quis rerum autem quam
        eveniet aperiam quod iure eos voluptatem reprehenderit sunt iusto aliquid cumque
        corporis! Dignissimos quia maxime itaque eligendi cupiditate iusto quis rem,
        eaque, sint magni exercitationem, possimus ea vitae consectetur! Maiores sapiente
        dicta saepe.
      </p>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  setup() {

  },
};
</script>

<style scoped lang="scss">
#about-container {
  display: flex;
  z-index: 5;
justify-self: center;
align-self: center;
  justify-content: center;
  align-items: center;
}

.about {
  color: black;
  border: dashed silver 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  overflow: scroll;
  height: 50vmax;
  width: 75vw;
  // flex-direction: column;
  font-size: 1rem;
  color: aquamarine;

  .text {
    margin: 24px;
    text-align: justify;
  }
}
</style>
