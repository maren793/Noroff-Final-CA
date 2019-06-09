<template>
           
    <div class="[ container ]">
      <div class="[ dropdown ]">
        <div class="[ dropdown__header ]" @click="toggleDropdown($event)">
            <h3>{{title}} <i class="[ fa fa-chevron-down ]" aria-hidden="true"></i></h3>
        </div>

            <div class="[ dropdown__content ]">   
                <ul>
                    <li>
                        Each player starts the game with 20 life. Knock your opponent down to 0 life, and you win. 
                        The most common way to do this is to summon creatures and attack with them.
                    </li>
                        <br />   
                    <li>
                        Creature cards are the most important part of many Magic decks. They’re really easy to spot—just look at the lower right of a card. 
                        If you see a pair of numbers separated by a slash, you’ve got a creature card. Once it’s on the battlefield, 
                        a creature continues to attack and defend for you until your opponent can find a way to take it out.
                    </li>
                        <br />
                    <li>
                        Most games become a race to see who can deal the most damage first. Summoning the best creatures will help you win that race every time. 
                        Check out the section on casting creature spells.
                    </li>
                    <br />
                </ul>
            </div>
        </div>
    </div>
   
</template>

<script>
export default {
  name: "AboutComponent",
  props: {
    title: String
  },
  methods: {
    toggleDropdown (event) {
      event.currentTarget.classList.toggle('is-active')
    }
  }
}
</script>

<style lang="scss">

.container {
        margin: 30px;
}

li {
list-style: none;
}

.dropdown {
    &__header {
        cursor: pointer;
        line-height: 50px;
        padding-left: 10px;
        padding-right: 50px;
        text-overflow: ellipsis;
            i.fa {
                float: right;
                transform: translateY(-50%);
                transition: opacity .3s;
                &.fa-chevron-down {
                    opacity: 1;
                }
            }
            &.is-active {
                i.fa {
                    &.fa-angle-up {
                        opacity: 1;
                    }
                }
                + .dropdown__content {
                    height: auto;
                    opacity: 1;
                    visibility: visible;
                }
            }
        }
        &__content {
            height: 0;
            opacity: 0;
            overflow: hidden;
            padding: 15px 10px;
            transition: opacity .4s;
            visibility: hidden;
        }
    }
</style>
