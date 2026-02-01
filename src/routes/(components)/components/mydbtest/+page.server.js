import supabase from '$lib/supabaseClient';

export async function load() {
    const { data, error } = await supabase
        .from('dbtest')
        .select('*')
        .order('username', { ascending: true });

    if (error) {
        console.log(console.error('Fucker', error));
        return {
            dbtest: [],
        };
    }

    return {
        dbtest: data ?? [],
    };
}
