<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3';
import noodlesIcon from '~/img/icons/noodles.svg';

defineProps<{
    canLogin?: boolean;
    canRegister?: boolean;
    laravelVersion: string;
}>();

</script>

<template>
    <Head title="Home" />
    <div class="bg-beige-100">
        <div
            class="relative flex min-h-screen flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white"
        >
            <div class="relative w-full px-6">
                <header
                    class="grid grid-cols-2 items-center gap-2 py-10 lg:grid-cols-3 space-between max-w-2xl lg:max-w-7xl"
                >
                    <div class="flex lg:col-start-2 lg:justify-center">
                        <img class="h-12 w-auto lg:h-16" :src="noodlesIcon"/>
                    </div>
                    <div class="flex items-center justify-end gap-8">
                        <nav>

                        </nav>
                        <nav v-if="canLogin" class="-mx-3 flex flex-1 justify-end">
                            <Link
                                v-if="$page.props.auth.user"
                                :href="route('dashboard')"
                                class="rounded-md px-3 py-2 ring-2 ring-transparent transition hover:text-coral focus:outline-none focus-visible:ring-green"
                            >
                                Dashboard
                            </Link>

                            <template v-else>
                                <Link
                                    :href="route('login')"
                                    class="rounded-md px-3 py-2 ring-2 ring-transparent transition hover:text-coral focus:outline-none focus-visible:ring-green"
                                >
                                    Log in
                                </Link>

                                <Link
                                    v-if="canRegister"
                                    :href="route('register')"
                                    class="rounded-md px-3 py-2 ring-2 ring-transparent transition hover:text-coral focus:outline-none focus-visible:ring-coral"
                                >
                                    Register
                                </Link>
                            </template>
                        </nav>
                    </div>
                </header>

                <main class="mt-6">
                    <div class="flex justify-between gap-6 items-center">
                        <div class="pl-10">
                            <h1 class="mb-8">いらっしゃいませ!</h1>
                            <p>Welcome to our humble restaurant! We're a small Japanese themed restaurant that serves delicious noodles and other traditional Japanese dishes. Whether you're a local stopping by or a tourist with a planned vacation in town, we're here to make your dining experience a memorable one.</p>
                            <p>From freshly cooked noodles, to savory dishes like tempura and sushi, we've got something for everyone. Our menu is constantly evolving to keep up with the latest trends and flavors in Japanese cuisine.</p>
                            <p>We pride ourselves on using only the freshest ingredients, and we're committed to providing a dining experience that's not only delicious but also healthy and sustainable. We believe that good food should be enjoyed, not just consumed.</p>
                            <p>Feel free to browse our menu and check out our various meat and vegan dishes.</p>
                        </div>
                        <img src="/img/noodles-1.jpg" class="w-1/2 min-h-[900px] -mr-6 object-cover" alt="a bowl of noodles"/>
                    </div>
                </main>

                <footer
                    class="py-16 text-center text-sm text-black"
                >
                    <div></div>
                    <div class="flex justify-between">
                        <p>© 2025 <b>Colin Kallemein</b></p>
                        <p>Made using <b>Laravel v{{ laravelVersion }}</b></p>
                    </div>
                </footer>
            </div>
        </div>
    </div>
</template>
