<a
    href="*"
    target="_blank"
    rel="noopener"
    class="block aspect-square rounded-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02] group bg-white shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)] border border-gray-100"
    onclick={(e) => e.preventDefault()}
>
    <div class="h-full w-full flex flex-col bg-white">
        <!-- Header -->
        <div
            class="flex items-center gap-2 px-6 py-4 border-b border-[#e5e5e5] shrink-0"
        >
            <div class="flex items-center justify-center shrink-0">
                <i class="ph-fill ph-arrow-circle-left text-[40px] text-[#0f172a]"></i>
            </div>
            <h2 class="text-[14px] font-medium text-[#0f172a] tracking-[0.07px]">
                Clear Selection
            </h2>
        </div>

        <!-- Body -->
        <div
            class="flex-1 flex flex-col items-center justify-center px-[64px] py-[24px] gap-[24px] text-center isolate"
        >
            <div class="flex items-center justify-center shrink-0">
                <i class="ph-fill ph-warning-circle text-[44px] text-[#ef4444]"></i>
            </div>

            <div class="flex flex-col gap-1 items-center max-w-[356px]">
                <h3
                    class="text-[16px] font-semibold text-[#0a0a0a] tracking-[0.32px] leading-[24px]"
                >
                    Remove all selected funds and start over?
                </h3>
                <p class="text-[14px] font-normal text-[#475569] leading-[20px]">
                    Please click OK to remove all selected funds and initiate
                    the process from the beginning. Note that this action cannot
                    be reversed!
                </p>
            </div>
        </div>

        <!-- Footer -->
        <div
            class="flex items-center justify-between px-6 py-4 border-t border-[#e2e8f0] shrink-0"
        >
            <button
                class="text-[14px] font-normal text-[#475569] hover:text-slate-900 transition-colors"
            >
                Back
            </button>
            <button
                class="flex items-center justify-center px-6 py-3 bg-[#ef4444] hover:bg-red-600 transition-colors rounded-[4px] text-[14px] text-[#fef2f2] font-normal"
            >
                Remove
            </button>
        </div>
    </div>
</a>
