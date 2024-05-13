<template>
    <div class="accordion" id="accordionExample">
        <div class="accordion-item">
            <h2 class="accordion-header bg-primaryGray">
                <button class="accordion-button" style="background-color: rgb(235, 235, 235);" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                    aria-expanded="true" aria-controls="collapseOne">
                    General Terms and Conditions
                </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show after:hidden" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <ol>
                        <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti vitae molestias beatae
                            consequuntur mollitia doloribus possimus iusto similique voluptates, officiis ut nihil
                            delectus temporibus sunt asperiores quibusdam, accusamus dolorum assumenda!</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. In ab laboriosam consectetur
                            distinctio esse magnam veritatis dolorum magni vitae facere autem tempore quos officiis, at
                            sapiente odio, repellat aspernatur ratione!</li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.collapse {
  visibility: visible;
}
</style>