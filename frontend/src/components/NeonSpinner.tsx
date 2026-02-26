export default function NeonSpinner({ color = 'blue' }: { color?: 'blue' | 'pink' | 'purple' | 'green' }) {
    const colorMap = {
        blue: '#00f2ff',
        pink: '#ff00c8',
        purple: '#8a2be2',
        green: '#39ff14',
    };
    const c = colorMap[color];

    return (
        <div className="flex items-center justify-center">
            <div
                className="neon-spinner"
                style={{
                    borderTopColor: c,
                    boxShadow: `0 0 15px ${c}80`,
                }}
            />
        </div>
    );
}
