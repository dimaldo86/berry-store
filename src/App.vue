<template>
	<Vcontainer>
		<template v-slot:header>
			<TheHeader></TheHeader>
		</template>
		<main>
			<router-view />
		</main>
		<!-- <template v-slot:footer>
			<Footer />
		</template> -->
	</Vcontainer>
</template>

<script>
import TheHeader from '@/components/Header/TheHeader'
import Vcontainer from '@/components/UI/Vcontainer'

export default {
    components:{
        TheHeader,
        Vcontainer,
    }

}
</script>
<style lang="scss">


</style>