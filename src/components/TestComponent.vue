<template>
    <div>
        <input class="checkboxTest" type="checkbox" v-model="cbVal">
        <input class="inputTest" type="text" v-model="textVal">
    </div>
</template>

<script>
    define([], function() {
        return {
            data: function() {
                return {
                    cbVal: false,
                    textVal: ""
                }
            }
        }
    })
</script>